// Copyright (c) Alaska Air. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { html } from "lit-element";
import ComponentBase from './component-base';
import buttonProperties from './tokens/componentProperties-ld-css.js';
import dotsProperties from './tokens/dotsProperties-ld-css.js';
import styleCss from "./style-ld-css.js";

class OdsButtonLight extends ComponentBase {
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
