/**
 * Private module-level WeakMap to hold MutationObservers for each host element.
 */
const _observers = new WeakMap();

/**
 * Private module-level WeakMap to hold attribute matchers and targets for each host element.
 * Structure: {
 *   host: {
 *     matchers: Set<Function>,
 *     targets: Map<HTMLElement, Map<Function, {removeOriginal: boolean, currentAttributes: Map<string, string>}>>
 *   }
 * }
 */
const _transportConfig = new WeakMap();

/**
 * Transfers all matching attributes from a host element to a target element and observes for future changes.
 *
 * @param {Object} params - The parameters for the function.
 * @param {HTMLElement} params.host - The host element from which attributes will be transported.
 * @param {HTMLElement} params.target - The target element to which attributes will be transported.
 * @param {boolean} [params.removeOriginal=true] - Whether to remove the attributes from the host element.
 * @param {boolean} [params.observe=true] - Whether to attach a MutationObserver to the host element.
 * @returns {Function} A function to detach the observer when no longer needed.
 * @throws {TypeError} If the host or target parameters are not instances of HTMLElement.
 */
export const transportAttributes = ({
  host,
  target,
  match,
  removeOriginal = true,
}) => {
  // Guard Clause: Ensure host is valid HTMLElement instance
  if (typeof host !== "object" || !(host instanceof HTMLElement)) {
    throw new TypeError(
      'a11yUtilities.js | transportAttributes | The "host" parameter must be an instance of HTMLElement.',
    );
  }

  // Guard Clause: Ensure target is valid HTMLElement instance
  if (typeof target !== "object" || !(target instanceof HTMLElement)) {
    throw new TypeError(
      'a11yUtilities.js | transportAttributes | The "target" parameter must be an instance of HTMLElement.',
    );
  }

  // Guard Clause: Ensure match is a function
  if (typeof match !== "function") {
    throw new TypeError(
      'a11yUtilities.js | transportAttributes | The "match" parameter must be a function.',
    );
  }

  // Guard Clause: Ensure removeOriginal is a boolean
  if (typeof removeOriginal !== "boolean") {
    throw new TypeError(
      'a11yUtilities.js | transportAttributes | The "removeOriginal" parameter must be a boolean.',
    );
  }

  // Register this transport and get cleanup function
  return _registerTransport({
    host,
    target,
    matcher: match,
    removeOriginal,
  });
};

/**
 * Registers a matcher and target for a host element and attaches an observer if needed.
 *
 * @param {Object} params - The parameters object.
 * @param {HTMLElement} params.host - The host element to observe.
 * @param {HTMLElement} params.target - The target element to receive attributes.
 * @param {Function} params.matcher - Function that determines which attributes to transport.
 * @param {boolean} [params.removeOriginal=true] - Whether to remove original attributes.
 * @param {boolean} [params.observe=true] - Whether to observe for attribute changes.
 * @returns {Function} Function to detach the specific matcher and target pairing.
 * @private
 */
const _registerTransport = ({
  host,
  target,
  matcher,
  removeOriginal = true,
}) => {
  // Initialize config for this host if it doesn't exist
  if (!_transportConfig.has(host)) {
    _transportConfig.set(host, {
      matchers: new Set(),
      targets: new Map(),
    });
  }

  const config = _transportConfig.get(host);

  // Add the matcher to the set of matchers for this host
  config.matchers.add(matcher);

  // Initialize target entry if it doesn't exist
  if (!config.targets.has(target)) {
    config.targets.set(target, new Map());
  }

  // Store the matcher with its removeOriginal setting for this target
  config.targets.get(target).set(matcher, {
    removeOriginal,
    currentAttributes: new Map(),
  });

  // Perform initial attribute transport
  _transportAttributes({ host, target, matcher, removeOriginal });

  // Attach observer
  _attachObserver(host);

  // Return cleanup function and utility functions
  return {
    cleanup: () => _cleanupTransport(host, target, matcher),
    getObservedAttributes: () => _getObservedAttributes(host, target, matcher),
    getObservedAttribute: (attr) =>
      _getObservedAttribute(host, target, matcher, attr),
  };
};

/**
 * Cleans up resources associated with a specific matcher and target for a host element.
 *
 * @param {HTMLElement} host - The host element
 * @param {HTMLElement} target - The target element
 * @param {Function} matcher - The matcher function
 * @private
 */
const _cleanupTransport = (host, target, matcher) => {
  const config = _transportConfig.get(host);
  if (!config) return;

  // Remove this matcher from this target
  const targetMatchers = config.targets.get(target);
  if (targetMatchers) {
    targetMatchers.delete(matcher);

    // If this target has no more matchers, remove it
    if (targetMatchers.size === 0) {
      config.targets.delete(target);
    }
  }

  // Check if this matcher is still used by any target
  let matcherStillUsed = false;
  for (const matcherMap of config.targets.values()) {
    if (matcherMap.has(matcher)) {
      matcherStillUsed = true;
      break;
    }
  }

  // If not used anymore, remove from matchers set
  if (!matcherStillUsed) {
    config.matchers.delete(matcher);
  }

  // If no more targets or matchers, detach observer
  if (config.targets.size === 0 || config.matchers.size === 0) {
    _detachObserver(host);
  }
};

/**
 * Generic function to transport attributes from a host element to a target element.
 *
 * @param {Object} params - The parameters object.
 * @param {HTMLElement} params.host - The host element from which to transport attributes.
 * @param {HTMLElement} params.target - The target element to which attributes will be transported.
 * @param {Function} params.matcher - Function that takes an attribute name and returns true if it should be transported.
 * @param {boolean} [params.removeOriginal=true] - Whether to remove original attributes from host.
 * @returns {void}
 * @private
 */
const _transportAttributes = ({
  host,
  target,
  matcher,
  removeOriginal = true,
}) => {
  // Get a list of all matching attributes on the host element and their values
  const matchingAttributes = host
    .getAttributeNames()
    .filter((attr) => matcher(attr))
    .reduce((acc, attr) => {
      acc[attr] = host.getAttribute(attr);
      return acc;
    }, {});

  // Move matching attributes to the target element, removing them from the host if removeOriginal is true
  Object.entries(matchingAttributes).forEach(([key, value]) => {
    _setObservedAttribute(host, target, matcher, key, value);
    target.setAttribute(key, value);
    if (removeOriginal) {
      host.removeAttribute(key);
    }
  });
};

/**
 * Attaches a MutationObserver to the host element to monitor attribute changes.
 *
 * @param {HTMLElement} host - The element to observe for attribute changes.
 * @returns {MutationObserver} The observer instance.
 * @private
 */
const _attachObserver = (host) => {
  // If an observer for this host already exists, return it
  if (_observers.has(host)) {
    return _observers.get(host);
  }

  // Create a new MutationObserver
  const observer = new MutationObserver((mutations) => {
    const config = _transportConfig.get(host);
    if (!config) return;

    // For each mutation affecting attributes
    mutations
      .filter((mutation) => mutation.type === "attributes")
      .forEach((mutation) => {
        const attributeName = mutation.attributeName;

        // Find matchers that care about this attribute
        for (const matcher of config.matchers) {
          if (matcher(attributeName)) {
            // For each target that uses this matcher
            for (const [target, matcherConfigs] of config.targets.entries()) {
              if (matcherConfigs.has(matcher)) {
                const { removeOriginal } = matcherConfigs.get(matcher);
                _transportAttributes({
                  host,
                  target,
                  matcher,
                  removeOriginal,
                });
              }
            }
          }
        }
      });
  });

  // Start observing attribute changes
  observer.observe(host, { attributes: true });

  // Store the observer
  _observers.set(host, observer);

  return observer;
};

/**
 * Detaches and cleans up the MutationObserver for a given host element.
 *
 * @param {HTMLElement} host - The element whose observer should be detached.
 * @private
 */
const _detachObserver = (host) => {
  if (_observers.has(host)) {
    const observer = _observers.get(host);
    observer.disconnect();
    _observers.delete(host);
  }

  // Clean up the transport config as well
  if (_transportConfig.has(host)) {
    _transportConfig.delete(host);
  }
};

/**
 * Gets the matcher configuration for a specific host, target, and matcher
 * @param {HTMLElement} host - The host element
 * @param {HTMLElement} target - The target element
 * @param {Function} matcher - The matcher function
 * @returns {Object|undefined} The matcher configuration if found
 * @private
 */
const _getMatcherConfig = (host, target, matcher) => {
  const config = _transportConfig.get(host);
  if (!config) return undefined;

  const targetMatchers = config.targets.get(target);
  if (!targetMatchers) return undefined;

  return targetMatchers.get(matcher);
};

/**
 * Sets an observed attribute value
 * @param {HTMLElement} host - The host element
 * @param {HTMLElement} target - The target element
 * @param {Function} matcher - The matcher function
 * @param {string} key - The attribute name
 * @param {string} value - The attribute value
 * @private
 */
const _setObservedAttribute = (host, target, matcher, key, value) => {
  const matcherConfig = _getMatcherConfig(host, target, matcher);
  if (matcherConfig) {
    matcherConfig.currentAttributes.set(key, value);
  }
};

const _getObservedAttribute = (host, target, matcher, attr) => {
  const matcherConfig = _getMatcherConfig(host, target, matcher);
  if (matcherConfig) return matcherConfig.currentAttributes.get(attr);
  return undefined;
};

const _getObservedAttributes = (host, target, matcher) => {
  const matcherConfig = _getMatcherConfig(host, target, matcher);
  if (matcherConfig)
    return Array.from(matcherConfig.currentAttributes.entries());
  return [];
};
