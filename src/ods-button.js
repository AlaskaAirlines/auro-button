// Copyright (c) Alaska Air. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { LitElement, html } from "lit-element";
import { ifDefined } from 'lit-html/directives/if-defined.js';
import buttonProperties from './tokens/componentProperties-css.js';
import dotsProperties from './tokens/dotsProperties-css.js';
import 'focus-visible/dist/focus-visible.min.js';
import styleCss from "./style-css.js";

class OdsButton extends LitElement {
  constructor() {
    super();
    this.buttontype = "primary";
    this.outercontext = false;
    this.disabled = false;
    this.isactive = false;
    this.getButtontype = this.getButtontype.bind(this);
    this.getButtonState = this.getButtonState.bind(this);
    this.getButtonContext = this.getButtonContext.bind(this);

    // adds event based on activelly being touched
    this.addEventListener('touchstart', function() {
      this.classList.add('is-touching');
    });
  }

  static get properties() {
    return {
      autofocus:        { type: Boolean },
      condensed:        { type: Boolean },
      disabled:         { type: Boolean },
      formnovalidate:   { type: Boolean },
      isactive:         { type: Boolean },
      outercontext:     { type: Boolean },
      arialabel:        { type: String },
      arialabelledby:   { type: String },
      buttontype:       { type: String },
      flowtype:         { type: String },
      form:             { type: String },
      formaction:       { type: String },
      formenctype:      { type: String },
      formmethod:       { type: String },
      formtarget:       { type: String },
      id:               { type: String },
      name:             { type: String },
      title:            { type: String },
      type:             { type: String },
      value:            { type: String },
      buttonCallback:   { type: Function }
    };
  }

  getButtontype(type) {
    return type === "secondary" ? "button--secondary" : ''
  }

  getButtonFlowtype(flowtype) {
    return flowtype === "complete" ? "button--complete" : ''
  }

  getButtonState(isactive) {
    return isactive ? "is-active" : ''
  }

  getButtonApperance(condensed) {
    return condensed ? "button--condensed" : ''
  }

  getButtonContext(outercontext) {
    return outercontext ? "button--enclosed" : ''
  }

  isDisabled(disabled, isactive) {
    return disabled || isactive;
  }

  buttonCallback() {
    console.log('Alert: Event not bound to button')
  }

  render() {
    return html`
      ${buttonProperties}
      ${dotsProperties}
      ${styleCss}

      <button
        aria-label="${ifDefined(this.arialabel ? this.arialabel : undefined)}"
        aria-labelledby="${ifDefined(this.arialabelledby ? this.arialabelledby : undefined)}"
        ?autofocus="${this.autofocus}"

        class="button
          ${this.getButtontype(this.buttontype)}
          ${this.getButtonFlowtype(this.flowtype)}
          ${this.getButtonState(this.isactive)}
          ${this.getButtonContext(this.outercontext)}
          ${this.getButtonApperance(this.condensed)}
          "

        ?disabled="${this.isDisabled(this.disabled, this.isactive)}"
        form="${ifDefined(this.form ? this.form : undefined)}"
        formaction="${ifDefined(this.formaction ? this.formaction : undefined)}"
        formenctype="${ifDefined(this.formenctype ? this.formenctype : undefined)}"
        formmethod="${ifDefined(this.formmethod ? this.formmethod : undefined)}"
        ?formnovalidate="${this.formnovalidate}"
        formtarget="${ifDefined(this.formtarget ? this.formtarget : undefined)}"
        id="${ifDefined(this.id ? this.id : undefined)}"
        title="${ifDefined(this.title ? this.title : undefined)}"
        name="${ifDefined(this.name ? this.name : undefined)}"
        part="button--modifier"
        @click=${this.buttonCallback}
        type="${ifDefined(this.type ? this.type : undefined)}"
        .value="${ifDefined(this.value ? this.value : undefined)}"
      >
        <slot></slot>

        <span class="dancingDots ${this.getButtonState(this.isactive)}">
          <div class="dots">
            <div class="block" part="dots--modifier">
              <div></div>
            </div>
            <div class="block" part="dots--modifier">
              <div></div>
              <div></div>
            </div>
            <div class="block" part="dots--modifier">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </span>
      </button>
    `;
  }
}

customElements.define("ods-button", OdsButton);
