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
    this.responsive = false;
    this.disabled = false;
    this.isactive = false;
    this.getButtontype = this.getButtontype.bind(this);
    this.getButtonState = this.getButtonState.bind(this);
    this.getButtonResponsive = this.getButtonResponsive.bind(this);

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
      responsive:       { type: Boolean },
      reverse:          { type: Boolean },
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
      svgIconLeft:      { type: String },
      svgIconRight:     { type: String },
      theme:            { type: String },
      title:            { type: String },
      type:             { type: String },
      value:            { type: String },
    };
  }

  getButtontype(type) {
    return type === "secondary" ? "button--secondary" : ""
  }

  getIcon(svgIcon) {
    this.dom = new DOMParser().parseFromString(svgIcon, 'text/html');
    this.svg = this.dom.body.firstChild;

    return this.svg;
  }

  getButtonFlowtype(flowtype) {
    return flowtype === "complete" ? "button--complete" : ""
  }

  getTheme(theme) {
    return theme === "classic" ? "button--classic" : "button--orion"
  }

  getButtonState(isactive) {
    return isactive ? "is-active" : ""
  }

  getButtonApperance(condensed) {
    return condensed ? "button--condensed" : ""
  }

  getButtonResponsive(responsive) {
    return responsive ? "button--responsive" : ""
  }

  isDisabled(disabled, isactive) {
    return disabled || isactive;
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
          ${this.getTheme(this.theme)}
          ${this.getButtontype(this.buttontype)}
          ${this.getButtonFlowtype(this.flowtype)}
          ${this.getButtonState(this.isactive)}
          ${this.getButtonResponsive(this.responsive)}
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
        type="${ifDefined(this.type ? this.type : undefined)}"
        .value="${ifDefined(this.value ? this.value : undefined)}"
      >

        ${ifDefined(this.svgIconLeft ? this.getIcon(this.svgIconLeft) : undefined)}
        <!--Slot still clickabled when button disabled for some reason-->
        <slot @click=${e => {if(this.disabled) e.stopPropagation()}}></slot>

        ${ifDefined(this.svgIconRight ? this.getIcon(this.svgIconRight) : undefined)}

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
