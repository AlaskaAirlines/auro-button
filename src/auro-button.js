// Copyright (c) Alaska Air. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { html } from "lit-element";
import 'focus-visible/dist/focus-visible.min.js';
import AuroComponentBase from './auro-component-base';
import styleAuroCss from "./style-auro-css.js";

class AuroButton extends AuroComponentBase {

  // Adds styles for light DOM element; styles not defined in base class
  getButtonStyles() {
    return html`
      ${styleAuroCss}
    `
  }
}

customElements.define("auro-button", AuroButton);
