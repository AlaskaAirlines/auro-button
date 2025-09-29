import { transportAttributes } from "./transportAttributes.js";

const _matchers = {
  "aria-": (attr) => attr.startsWith("aria-"),
  role: (attr) => attr.match(/^role$/),
};

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
