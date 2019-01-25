import { LitElement, html } from "lit-element";
import css from "./ods-button-css.js";

class OdsButton extends LitElement {
  constructor() {
    super();
    this.string = "";
    this.type = "primary";
    this.disabled = false;
    this.active = false;
    this.onclick = "";
    this.getButtonStyle = this.getButtonStyle.bind(this);
  }

  static get properties() {
    return {
      string: {
        type: String
      },
      type: {
        type: String
      },
      disabled: {
        type: Boolean
      },
      active: {
        type: Boolean
      },
      onclick: {
        type: String
      }
    };
  }

  getButtonStyle(active, type) {
    if (type === "secondary") return "button--secondary";
    return active ? "button--active" : "";
  }

  render() {
    return html`
      ${css}
      <button
        class="button ${this.getButtonStyle(this.active, this.type)}"
        ?disabled="${this.disabled || this.active}"
        @click="${this.onclick}"
      >
        ${this.string}
      </button>
    `;
  }
}

customElements.define("ods-button", OdsButton);
