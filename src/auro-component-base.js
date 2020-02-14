// Copyright (c) Alaska Air. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { LitElement, html } from "lit-element";
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { classMap } from 'lit-html/directives/class-map';
import 'focus-visible/dist/focus-visible.min.js';

export default class AuroComponentBase extends LitElement {

  static get properties() {
    return {
      autofocus:        { type: Boolean },
      formnovalidate:   { type: Boolean },
      ondark:           { type: Boolean },
      secondary:        { type: Boolean },
      tertiary:         { type: Boolean },
      arialabel:        { type: String },
      arialabelledby:   { type: String },
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
    };
  }


  getIcon(svgIcon) {
    this.dom = new DOMParser().parseFromString(svgIcon, 'text/html');
    this.svg = this.dom.body.firstChild;

    return this.svg;
  }

  getButtonContent() {
    return html`<slot></slot>`;
  }

  render() {

    const classes = {
      'util_insetLg--squish': true,
      'auro-button': true,
      'auro-buttonOndark': this.ondark,
      'auro-button--secondary': this.secondary,
      'auro-buttonOndark--secondary': this.secondary && this.ondark,
      'auro-button--tertiary': this.tertiary,
      'auro-buttonOndark--tertiary': this.tertiary && this.ondark,
    };

    return html`
      ${this.getButtonStyles()}

      <button
        aria-label="${ifDefined(this.arialabel ? this.arialabel : undefined)}"
        aria-labelledby="${ifDefined(this.arialabelledby ? this.arialabelledby : undefined)}"
        ?autofocus="${this.autofocus}"
        class="${classMap(classes)}"
        form="${ifDefined(this.form ? this.form : undefined)}"
        formaction="${ifDefined(this.formaction ? this.formaction : undefined)}"
        formenctype="${ifDefined(this.formenctype ? this.formenctype : undefined)}"
        formmethod="${ifDefined(this.formmethod ? this.formmethod : undefined)}"
        ?formnovalidate="${this.formnovalidate}"
        formtarget="${ifDefined(this.formtarget ? this.formtarget : undefined)}"
        id="${ifDefined(this.id ? this.id : undefined)}"
        title="${ifDefined(this.title ? this.title : undefined)}"
        name="${ifDefined(this.name ? this.name : undefined)}"
        type="${ifDefined(this.type ? this.type : undefined)}"
        .value="${ifDefined(this.value ? this.value : undefined)}"

        @click="${() => {}}"
      >
        ${this.getButtonContent()}
      </button>
    `;
  }
}
