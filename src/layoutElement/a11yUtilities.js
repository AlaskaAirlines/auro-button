import { transportAttributes } from "./transportAttributes.js";

/**
 * Private module-level map of the functions that pick out accessibility attributes, keyed by the attribute prefix or name they match.
 * Each function takes an attribute name and returns a truthy value if that attribute should be moved.
 */
const _matchers = {
  "aria-": (attr) => attr.startsWith("aria-"),
  role: (attr) => attr.match(/^role$/),
};

/**
 * Moves every `aria-*` attribute from a host element to a target element, and keeps moving any that are added or changed later.
 * When an element in the host's shadow DOM, such as an inner `<button>`, needs the ARIA attributes set on the host, call this function.
 *
 * @param {Object} params - The parameters for the function.
 * @param {HTMLElement} params.host - The element to move attributes from.
 * @param {HTMLElement} params.target - The element to move attributes to.
 * @param {boolean} [params.removeOriginal=true] - If true, removes the attributes from the host after moving them. If false, leaves them on the host as well.
 * @returns {{ cleanup: Function, getObservedAttributes: Function, getObservedAttribute: Function }} The functions that stop moving attributes and read the attributes that have been moved.
 * @throws {TypeError} If `host` or `target` isn't an `HTMLElement`, or `removeOriginal` isn't a boolean.
 */
export const transportAriaAttributes = ({
  host,
  target,
  removeOriginal = true,
}) => {
  return transportAttributes({
    host,
    target,
    match: _matchers["aria-"],
    removeOriginal,
  });
};

/**
 * Moves the `role` attribute from a host element to a target element, and keeps moving it when it's added or changed later.
 * When an element in the host's shadow DOM, such as an inner `<button>`, needs the `role` set on the host, call this function.
 *
 * @param {Object} params - The parameters for the function.
 * @param {HTMLElement} params.host - The element to move attributes from.
 * @param {HTMLElement} params.target - The element to move attributes to.
 * @param {boolean} [params.removeOriginal=true] - If true, removes the attributes from the host after moving them. If false, leaves them on the host as well.
 * @returns {{ cleanup: Function, getObservedAttributes: Function, getObservedAttribute: Function }} The functions that stop moving attributes and read the attributes that have been moved.
 * @throws {TypeError} If `host` or `target` isn't an `HTMLElement`, or `removeOriginal` isn't a boolean.
 */
export const transportRoleAttributes = ({
  host,
  target,
  removeOriginal = true,
}) => {
  return transportAttributes({
    host,
    target,
    match: _matchers.role,
    removeOriginal,
  });
};

/**
 * Moves the `role` attribute and every `aria-*` attribute from a host element to a target element, and keeps moving any that are added or changed later.
 * When you need both, call this function instead of `transportAriaAttributes` and `transportRoleAttributes`, so one `cleanup` call stops moving all of them.
 *
 * @param {Object} params - The parameters for the function.
 * @param {HTMLElement} params.host - The element to move attributes from.
 * @param {HTMLElement} params.target - The element to move attributes to.
 * @param {boolean} [params.removeOriginal=true] - If true, removes the attributes from the host after moving them. If false, leaves them on the host as well.
 * @returns {{ cleanup: Function, getObservedAttributes: Function, getObservedAttribute: Function }} The functions that stop moving attributes and read the attributes that have been moved.
 * @throws {TypeError} If `host` or `target` isn't an `HTMLElement`, or `removeOriginal` isn't a boolean.
 */
export const transportAllA11yAttributes = ({
  host,
  target,
  removeOriginal = true,
}) => {
  return transportAttributes({
    host,
    target,
    match: (attr) => {
      for (const key in _matchers) {
        if (_matchers[key](attr)) return true;
      }
      return false;
    },
    removeOriginal,
  });
};
