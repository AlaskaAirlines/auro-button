import { LitElement, html } from "lit-element";
import css from "./ods-button-css.js";

class OdsButton extends LitElement {
  constructor() {
    super();
    this.string = "";
    this.type = "primary";
    this.disabled = "false";
    this.active = "false";
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
        type: String
      },
      active: {
        type: String
      }
    };
  }

  getButtonStyle(active, type) {
    if (type === "secondary") return "button--secondary";
    return active === "true" ? "button--active" : "";
  }

  isDisabled(disabled, active) {
    console.log(disabled);
    return disabled === "true" || active === "true";
  }

  render() {
    return html`
      ${css}
      <button
        class="button ${this.getButtonStyle(this.active, this.type)}"
        ?disabled="${this.isDisabled(this.disabled, this.active)}"
      >
        ${this.string}
      </button>
    `;
  }
}

customElements.define("ods-button", OdsButton);
