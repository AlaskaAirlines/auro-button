// Copyright (c) Alaska Air. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { LitElement } from "lit";
import { html } from 'lit/static-html.js';

import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { AuroDependencyVersioning } from '@aurodesignsystem/auro-library/scripts/runtime/dependencyTagVersioning.mjs';
import * as RuntimeUtils from '@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs';

import styleCss from "./style-css.js";
import colorCss from "./color-css.js";
import tokensCss from "./tokens-css.js";

import { AuroLoader } from '@aurodesignsystem/auro-loader/src/auro-loader.js';
import loaderVersion from './loaderVersion.js';

/**
 * @attr {Boolean} autofocus - This Boolean attribute lets you specify that the button should have input focus when the page loads, unless overridden by the user
 * @attr {Boolean} disabled - If set to true button will become disabled and not allow for interactions
 * @attr {Boolean} iconOnly - If set to true, the button will contain an icon with no additional content
 * @attr {Boolean} loading - If set to true button text will be replaced with `auro-loader` and become disabled
 * @attr {Boolean} onDark - Set value for on-dark version of auro-button
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
 * @attr {Boolean} secondary - DEPRECATED
 * @attr {Boolean} tertiary - DEPRECATED
 * @prop {Boolean} ready - When false the component API should not be called.
 * @event auroButton-ready - Notifies that the component has finished initializing.
 * @slot - Default slot for the text of the button.
 * @slot icon - Slot to provide auro-icon for the button.
 * @csspart button - Apply CSS to HTML5 button.
 * @csspart loader - Apply CSS to auro-loader.
 * @csspart text - Apply CSS to text slot.
 * @csspart icon - Apply CSS to icon slot.
 */

/* eslint-disable lit/no-invalid-html, lit/binding-positions */

export class AuroButton extends LitElement {

  /**
   * Enables form association for this element.
   * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/attachInternals
   * @returns {boolean} - Returns true to enable form association.
   */
  static get formAssociated() {
    return true;
  }

  constructor() {
    super();

    this.autofocus = false;
    this.disabled = false;
    this.iconOnly = false;
    this.loading = false;
    this.onDark = false;
    this.ready = false;
    this.secondary = false;
    this.tertiary = false;
    this.rounded = false;
    this.slim = false;
    this.fluid = false;

    // Support for HTML5 forms
    if (typeof this.attachInternals === 'function') {
      this.internals = this.attachInternals();
    } else {
      this.internals = null;

      // eslint-disable-next-line no-console
      console.warn('This browser does not support form association features. Some form-related functionality may not work as expected. Consider using a polyfill or handling click events manually.');
    }

    /**
     * Generate unique names for dependency components.
     */
    const versioning = new AuroDependencyVersioning();

    /**
     * @private
     */
    this.loaderTag = versioning.generateTag('auro-loader', loaderVersion, AuroLoader);
  }

  static get styles() {
    return [
      tokensCss,
      styleCss,
      colorCss
    ];
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
      onDark:           {
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
   * This will register this element with the browser.
   * @param {string} [name="auro-button"] - The name of element that you want to register to.
   *
   * @example
   * AuroButton.register("custom-button") // this will register this element to <custom-button/>
   *
   */
  static register(name = "auro-button") {
    RuntimeUtils.default.prototype.registerComponent(name, AuroButton);
  }

  /**
   * Internal method to apply focus to the HTML5 button.
   * @private
   * @returns {void}
   */
  focus() {
    this.renderRoot.querySelector('button').focus();
  }

  /**
   *  Marks the component as ready and sends event.
   * @private
   * @returns {void}
   */
  notifyReady() {
    this.ready = true;

    this.dispatchEvent(new CustomEvent('auroButton-ready', {
      bubbles: true,
      cancelable: false,
      composed: true,
    }));
  }

  updated() {
    // support the old `secondary` and `tertiary` attributes` that are deprecated
    if (this.secondary) {
      this.setAttribute('variant', 'secondary');
    }

    if (this.tertiary) {
      this.setAttribute('variant', 'tertiary');
    }
  }

  firstUpdated() {
    this.notifyReady();
  }

  surfaceSubmitEvent() {
    if (this.form) {
      this.form.checkValidity();
      this.form.requestSubmit();
    }
  }

  get form() {
    return this.internals ? this.internals.form : null;
  }

  render() {
    const classes = {
      'util_insetLg--squish': true,
      'auro-button': true,
      'auroButton': true,
      'auro-button--rounded': this.rounded,
      'auro-button--slim': this.slim,
      'auro-button--iconOnly': this.iconOnly,
      'auro-button--iconOnlySlim': this.iconOnly && this.slim,
      'loading': this.loading
    };

    return html`
      <button
        part="button"
        aria-label="${ifDefined(this.arialabel ? this.arialabel : undefined)}"
        aria-labelledby="${ifDefined(this.arialabelledby ? this.arialabelledby : undefined)}"
        ?autofocus="${this.autofocus}"
        class="${classMap(classes)}"
        ?disabled="${this.disabled || this.loading}"
        ?onDark="${this.onDark}"
        title="${ifDefined(this.title ? this.title : undefined)}"
        name="${ifDefined(this.name ? this.name : undefined)}"
        type="${ifDefined(this.type ? this.type : undefined)}"
        variant="${ifDefined(this.variant ? this.variant : undefined)}"
        .value="${ifDefined(this.value ? this.value : undefined)}"
        @click="${this.type === 'submit' ? this.surfaceSubmitEvent : undefined}"
      >
        ${ifDefined(this.loading ? html`<${this.loaderTag} pulse part="loader"></${this.loaderTag}>` : undefined)}

        <span class="contentWrapper">
          <span class="textSlot" part="text">
            ${this.iconOnly ? undefined : html`<slot></slot>`}
          </span>

          <span part="icon">
            <slot name="icon"></slot>
          </span>
        </span>
      </button>
    `;
  }
}
