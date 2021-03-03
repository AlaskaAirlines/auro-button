export function isFocusVisibleSupported() {
  try {
    document.querySelector(':focus-visible');
  } catch {
    return false;
  }
  return true;
}

// https://github.com/WICG/focus-visible#shadow-dom
export function isFocusVisiblePolyfillAvailable() {
  return window.applyFocusVisiblePolyfill != null;
}
