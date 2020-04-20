// Copyright (c) Alaska Air. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { html, css } from "lit-element";
import AuroComponentBase from './auro-component-base';
import styleAuroCss from "./style-auro_beta-css.js";

class AuroButtonLightBeta extends AuroComponentBase {
  static get properties() {
    return {
      ...super.properties,
      content: { type: String },
    };
  }

  static get styles() {
    return css`
      ${styleAuroCss}
    `;
  }

  /*
   * Render template without shadow DOM. Note that shadow DOM features like
   * encapsulated CSS and slots are unavailable.
   */
  createRenderRoot() {
    return this;
  }

  // Returns string from content prop as slots are not supported
  getButtonContent() {
    return html`${this.content}`;
  }

  // Adds styles for light DOM element; styles not defined in base class
  getButtonStyles() {
    return html``
  }
}

customElements.define("auro-button-light-beta", AuroButtonLightBeta);
