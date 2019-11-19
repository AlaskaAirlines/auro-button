// Copyright (c) Alaska Air. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { html } from "lit-element";
import 'focus-visible/dist/focus-visible.min.js';
import ComponentBase from './component-base';
import buttonProperties from './tokens/componentProperties-css.js';
import dotsProperties from './tokens/dotsProperties-css.js';
import styleCss from "./style-css.js";

class OdsButton extends ComponentBase {
  getButtonStyles() {
    return html`
      ${buttonProperties}
      ${dotsProperties}
      ${styleCss}
    `
  }
}

customElements.define("ods-button", OdsButton);
