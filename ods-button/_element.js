import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `ods-button`
 * Orion Design System Button element
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class OdsButton extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'ods-button',
      },
    };
  }
}

window.customElements.define('ods-button', OdsButton);
