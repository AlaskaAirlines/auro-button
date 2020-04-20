// Copyright (c) Alaska Air. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { css, html } from 'lit-element';
import 'focus-visible/dist/focus-visible.min.js';
import AuroComponentBase from './auro-component-base';
import styleAuroCss from "./style-auro_beta-css.js";

class AuroButton extends AuroComponentBase {

  static get styles() {
    return css`
      ${styleAuroCss}
    `;
  }

  // Adds styles for light DOM element; styles not defined in base class
  getButtonStyles() {
    return html``
  }
}

if (!customElements.get("auro-button-beta")) {
  customElements.define("auro-button-beta", AuroButton);
}
