export * from './src/auro-button.js';

import { AuroButton } from './src/auro-button.js';

/**
 * Register Custom Element.
 * @param {Object} name - Name to use for custom element.
 * @returns {void}
 */
export function registerComponent(name = 'custom-badge') {
  // alias definition
  if (!customElements.get(name)) {
    customElements.define(name, class extends AuroButton {});
  }
}

registerComponent('auro-button');
