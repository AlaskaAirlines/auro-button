/**
 * Private module-level singleton to hold MutationObservers for each host element for ARIA attribute transport.
 */
const _transportAriaAttsObservers = new WeakMap();

/**
 * Transfers all ARIA attributes from a host element to a target element and observes for future changes.
 * This removes the ARIA attributes from the host element and applies them to the target element.
 * 
 * @param {Object} params - The parameters for the function.
 * @param {HTMLElement} params.host - The host element from which ARIA attributes will be transported.
 * @param {HTMLElement} params.target - The target element to which ARIA attributes will be transported.
 * @param {boolean} [params.removeOriginal=true] - Whether to remove the ARIA attributes from the host element after transporting.
 * @param {boolean} [params.observe=true] - Whether to attach a MutationObserver to the host element.
 * @returns {Function} A function to detach the observer when no longer needed.
 * @throws {TypeError} If the host or target parameters are not instances of HTMLElement.
 */
export const transportAriaAttributes = ({host, target, removeOriginal = true, observe = true}) => {

  // Guard Clause: Ensure host is valid HTMLElement instance
  if (typeof host !== 'object' || !(host instanceof HTMLElement)) {
    throw new TypeError('a11yUtilities.js | transportAriaAttributes | The "host" parameter must be an instance of HTMLElement.');
  }

  // Guard Clause: Ensure target is valid HTMLElement instance
  if (typeof target !== 'object' || !(target instanceof HTMLElement)) {
    throw new TypeError('a11yUtilities.js | transportAriaAttributes | The "target" parameter must be an instance of HTMLElement.');
  }

  // Guard Clause: Ensure removeOriginal is a boolean
  if (typeof removeOriginal !== 'boolean') {
    throw new TypeError('a11yUtilities.js | transportAriaAttributes | The "removeOriginal" parameter must be a boolean.');
  }

  // Guard Clause: Ensure observe is a boolean
  if (typeof observe !== 'boolean') {
    throw new TypeError('a11yUtilities.js | transportAriaAttributes | The "observe" parameter must be a boolean.');
  }

  // Watch for changes to ARIA attributes on the host element if observe is true
  if (observe) _attachObserver(host, target);

  // Get a list of all ARIA attributes on the host element and their values
  const ariaAttributes = host.getAttributeNames()
    .filter(attr => attr.startsWith('aria-'))
    .reduce((acc, attr) => {
      acc[attr] = host.getAttribute(attr);
      return acc;
    }, {});

  // Move ARIA attributes to the target element, removing them from the host if removeOriginal is true
  Object.entries(ariaAttributes).forEach(([key, value]) => {
    target.setAttribute(key, value);
    if (removeOriginal) host.removeAttribute(key);
  });

  // Return a function to detach the observer when no longer needed
  return () => _detachObserver(host);
}

/**
 * Attaches a MutationObserver to the host element to monitor ARIA attribute changes.
 * Keeps the ARIA attributes on the target element updated in response to changes on the host.
 * 
 * @param {HTMLElement} host - The element to observe for ARIA attribute changes.
 * @param {HTMLElement} target - The element to which ARIA attributes will be transported.
 * @returns {MutationObserver} The observer instance monitoring the host element.
 */
const _attachObserver = (host, target) => {
  
  // If an observer for this host doesn't exist
  if (!_transportAriaAttsObservers.has(host)) {

    // Create a new MutationObserver that will transport ARIA attributes
    const observer = new MutationObserver(() => {
      transportAriaAttributes({ host, target, observe: false });
    });

    // Observe changes to attributes on the host element
    observer.observe(host, { attributes: true });

    // Store the observer in the WeakMap for this host
    _transportAriaAttsObservers.set(host, observer);
  }

  // Return the observer for potential future use
  return _transportAriaAttsObservers.get(host);
}

/**
 * Detaches and cleans up the MutationObserver for a given host element.
 * This function disconnects the observer and removes its reference from the internal WeakMap.
 * 
 * @param {HTMLElement} host - The element whose observer should be detached.
 */
const _detachObserver = (host) => {
  if (_transportAriaAttsObservers.has(host)) {
    const observer = _transportAriaAttsObservers.get(host);
    observer.disconnect();
    _transportAriaAttsObservers.delete(host);
  }
}
