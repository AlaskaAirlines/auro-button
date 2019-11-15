import { html } from "lit-element";
import OdsButton from './ods-button';
import buttonProperties from './tokens/componentProperties-ld-css.js';
import dotsProperties from './tokens/dotsProperties-ld-css.js';
import styleCss from "./style-ld-css.js";

class OdsButtonLight extends OdsButton {
  static get properties() {
    return {
      ...super.properties,
      content: { type: String },
    };
  }

  createRenderRoot() {
    return this;
  }

  getButtonContent() {
    return html`${this.content}`;
  }

  // override of base element function for importing light DOM specific styles
  getButtonStyles() {
    return html`
      ${buttonProperties}
      ${dotsProperties}
      ${styleCss}
    `
  }
}

customElements.define("ods-button-light", OdsButtonLight);
