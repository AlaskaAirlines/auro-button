import { LitElement, html } from 'lit-element';
import css from './ods-button-css.js';

class OdsButton extends LitElement {
  static get properties() {
    return {
      style: String,
    }
  }

  render() {
    return html`
      ${css}

      <button class='${this.style}'><slot></slot></button>
    `;
  }
}

customElements.define('ods-button', OdsButton);