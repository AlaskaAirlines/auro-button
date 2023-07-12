// Copyright (c) Alaska Air. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { LitElement, html } from "lit";
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import styleCss from "./style-css.js";
import '@alaskaairux/auro-loader';

/**
 * @attr {Boolean} autofocus - This Boolean attribute lets you specify that the button should have input focus when the page loads, unless overridden by the user
 * @attr {Boolean} disabled - If set to true button will become disabled and not allow for interactions
 * @attr {Boolean} iconOnly - If set to true, the button will contain an icon with no additional content
 * @attr {Boolean} loading - If set to true button text will be replaced with `auro-loader` and become disabled
 * @attr {Boolean} ondark - Set value for on-dark version of auro-button
 * @attr {Boolean} secondary - DEPRECATED
 * @attr {Boolean} tertiary - DEPRECATED
 * @attr {Boolean} rounded - If set to true, the button will have a rounded shape
 * @attr {Boolean} slim - Set value for slim version of auro-button
 * @attr {Boolean} fluid - Alters the shape of the button to be full width of its parent container
 * @attr {String} arialabel - Populates the `aria-label` attribute that is used to define a string that labels the current element. Use it in cases where a text label is not visible on the screen. If there is visible text labeling the element, use `aria-labelledby` instead.
 * @attr {String} arialabelledby - Populates the `aria-labelledby` attribute that establishes relationships between objects and their label(s), and its value should be one or more element IDs, which refer to elements that have the text needed for labeling. List multiple element IDs in a space delimited fashion.
 * @attr {String} id - Set the unique ID of an element.
 * @attr {String} title - Sets title attribute. The information is most often shown as a tooltip text when the mouse moves over the element.
 * @attr {String} type - The type of the button. Possible values are: `submit`, `reset`, `button`
 * @attr {String} value - Defines the value associated with the button which is submitted with the form data.
 * @attr {String} variant - Sets button variant option. Possible values are: `secondary`, `tertiary`
 * @prop {Boolean} ready - When false the component API should not be called.
 * @fires auroButton-ready - Notifies that the component has finished initializing.
 *
 * @slot - Default slot for the text of the button.
 * @slot icon - Slot to provide auro-icon for the button.
 */

/* eslint-disable max-statements, one-var, no-magic-numbers */
export class AuroButton extends LitElement {

  constructor() {
    super();
    this.autofocus = false;
    this.disabled = false;
    this.iconOnly = false;
    this.loading = false;
    this.ondark = false;
    this.ready = false;
    this.secondary = false;
    this.tertiary = false;
    this.rounded = false;
    this.slim = false;
    this.fluid = false;
  }

  static get styles() {
    return [styleCss];
  }

  static get properties() {
    return {
      autofocus:        {
        type: Boolean,
        reflect: true
      },
      disabled:         {
        type: Boolean,
        reflect: true
      },
      secondary:         {
        type: Boolean,
        reflect: true
      },
      tertiary:         {
        type: Boolean,
        reflect: true
      },
      fluid:         {
        type: Boolean,
        reflect: true
      },
      iconOnly: {
        type: Boolean,
        reflect: true
      },
      loading:          {
        type: Boolean,
        reflect: true
      },
      ondark:           {
        type: Boolean,
        reflect: true
      },
      rounded: {
        type: Boolean,
        reflect: true
      },
      slim: {
        type: Boolean,
        reflect: true
      },
      arialabel:        {
        type: String,
        reflect: true
      },
      arialabelledby:   {
        type: String,
        reflect: true
      },
      title:            {
        type: String,
        reflect: true
      },
      type:             {
        type: String,
        reflect: true
      },
      value:            {
        type: String,
        reflect: true
      },
      variant:          {
        type: String,
        reflect: true
      },
      ready: { type: Boolean },
    };
  }

  /**
   * @private Internal method to apply focus
   * @returns {Array} - The DOM node for the button element
   */
  focus() {
    this.renderRoot.querySelector('button').focus();
  }

  /**
   * @private
   * @returns {void} Marks the component as ready and sends event.
   */
  notifyReady() {
    this.ready = true;

    this.dispatchEvent(new CustomEvent('auroButton-ready', {
      bubbles: true,
      cancelable: false,
      composed: true,
    }));
  }

  firstUpdated() {
    this.notifyReady();
  }

  render() {

    // deprecated options - maintaining for backwards compatibility
    // auro-button--secondary
    // auro-buttonOndark--secondary
    // auro-button--tertiary
    // auro-buttonOndark--tertiary
    const classes = {
      'util_insetLg--squish': true,
      'auro-button': true,
      'auro-buttonOndark': this.ondark,
      'auro-button--secondary': this.secondary,
      'auro-buttonOndark--secondary': this.secondary && this.ondark,
      'auro-button--tertiary': this.tertiary,
      'auro-buttonOndark--tertiary': this.tertiary && this.ondark,
      'auro-button--rounded': this.rounded,
      'auro-button--slim': this.slim,
      'auro-button--iconOnly': this.iconOnly,
      'auro-button--iconOnlySlim': this.iconOnly && this.slim,
      'loading': this.loading
    };

    return html`
      <button
        aria-label="${ifDefined(this.arialabel ? this.arialabel : undefined)}"
        aria-labelledby="${ifDefined(this.arialabelledby ? this.arialabelledby : undefined)}"
        ?autofocus="${this.autofocus}"
        class="${classMap(classes)}"
        ?disabled="${this.disabled || this.loading}"
        title="${ifDefined(this.title ? this.title : undefined)}"
        name="${ifDefined(this.name ? this.name : undefined)}"
        type="${ifDefined(this.type ? this.type : undefined)}"
        variant="${ifDefined(this.variant ? this.variant : undefined)}"
        .value="${ifDefined(this.value ? this.value : undefined)}"
        @click="${() => {}}"
      >
        ${ifDefined(this.loading ? html`<auro-loader pulse></auro-loader>` : undefined)}

        <span>
          <span class="textSlot">
            ${this.iconOnly ? undefined : html`<slot></slot>`}
          </span>
          <slot name="icon"></slot>
        </span>
      </button>
    `;
  }
}

// default internal definition
if (!customElements.get("auro-button")) {
  customElements.define("auro-button", AuroButton);
}
