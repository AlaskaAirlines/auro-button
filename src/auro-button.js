/* eslint-disable max-lines */
// Copyright (c) Alaska Air. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { LitElement } from "lit";
import { html } from "lit/static-html.js";

import { ifDefined } from "lit/directives/if-defined.js";

import { AuroDependencyVersioning } from "@aurodesignsystem/auro-library/scripts/runtime/dependencyTagVersioning.mjs";
import * as RuntimeUtils from "@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs";

import styleCss from "./style-css.js";
import colorCss from "./color-css.js";
import tokensCss from "./tokens-css.js";

import { AuroLoader } from "@aurodesignsystem/auro-loader/src/auro-loader.js";
import loaderVersion from "./loaderVersion.js";

const ICON_ONLY_SHAPE = [
  'circle',
  'window-pane',
];

/**
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
    this.secondary = false;
    this.tertiary = false;
    this.rounded = false;
    this.slim = false;
    this.fluid = false;
    this.loadingText = this.loadingText || "Loading...";
    this.shape = this.shape || 'rounded';
    this.size = 'md';

    // Support for HTML5 forms
    if (typeof this.attachInternals === "function") {
      this.internals = this.attachInternals();
    } else {
      this.internals = null;

      // eslint-disable-next-line no-console
      console.warn("This browser does not support form association features. Some form-related functionality may not work as expected. Consider using a polyfill or handling click events manually.");
    }

    RuntimeUtils.default.prototype.handleComponentTagRename(this, 'auro-button');

    /**
     * @private
     */
    this.loaderTag = AuroDependencyVersioning.prototype.generateTag("auro-loader", loaderVersion, AuroLoader);
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

      /**
       * This Boolean attribute lets you specify that the button should have input focus when the page loads, unless overridden by the user.
       */
      autofocus: {
        type: Boolean,
        reflect: true,
      },

      /**
       * If set to true, button will become disabled and not allow for interactions.
       */
      disabled: {
        type: Boolean,
        reflect: true,
      },

      /**
       * DEPRECATED @see variant.
       * @deprecated
       */
      secondary: {
        type: Boolean,
        reflect: true,
      },

      /**
       * DEPRECATED @see variant.
       * @deprecated
       */
      tertiary: {
        type: Boolean,
        reflect: true,
      },

      /**
       * Alters the shape of the button to be full width of its parent container.
       */
      fluid: {
        type: Boolean,
        reflect: true,
      },

      /**
       * DEPRECATED - use shape="window-shape".
       * @deprecated
       */
      iconOnly: {
        type: Boolean,
        reflect: true,
      },

      /**
       * If set to true button text will be replaced with `auro-loader` and become disabled.
       */
      loading: {
        type: Boolean,
        reflect: true,
      },

      /**
       * Sets custom loading text for the `aria-label` on a button in loading state. If not set, the default value of "Loading..." will be used.
       */
      loadingText: {
        type: String,
      },

      /**
       * Set value for on-dark version of auro-button.
       */
      onDark: {
        type: Boolean,
        reflect: true,
      },

      /**
       * DEPRECATED - use shape="circle".
       * @deprecated
       */
      rounded: {
        type: Boolean,
        reflect: true,
      },

      /**
       * DEPRECATED
       * @deprecated
       */
      slim: {
        type: Boolean,
        reflect: true,
      },

      /**
       * Populates `tabIndex` to define the focusable sequence in keyboard navigation.
       */
      tIndex: {
        type: String,
        reflect: true,
      },

      /**
       * Populates the `aria-hidden` attribute to hide the button from a11y API.
       */
      ariahidden: {
        type: String,
        reflect: true,
      },

      /**
       * Populates the `aria-label` attribute that is used to define a string that labels the current element.
       * Use it in cases where a text label is not visible on the screen.
       * If there is visible text labeling the element, use `aria-labelledby` instead.
       */
      arialabel: {
        type: String,
        reflect: true,
      },

      /**
       * Populates the `aria-labelledby` attribute that establishes relationships between objects and their label(s),
       * and its value should be one or more element IDs, which refer to elements that have the text needed for labeling.
       * List multiple element IDs in a space delimited fashion.
       */
      arialabelledby: {
        type: String,
        reflect: true,
      },

      /**
       * Populates the `aria-expanded` attribute that indicates whether the element,
       * or another grouping element it controls, is currently expanded or collapsed.
       * This is an optional attribute for buttons.
       */
      ariaexpanded: {
        type: Boolean,
        reflect: true,
      },

      /**
       * Sets title attribute. The information is most often shown as a tooltip text when the mouse moves over the element.
       */
      title: {
        type: String,
        reflect: true,
      },

      /**
       * The type of the button. Possible values are: `submit`, `reset`, `button`.
       */
      type: {
        type: String,
        reflect: true,
      },

      /**
       * Defines the value associated with the button which is submitted with the form data.
       */
      value: {
        type: String,
        reflect: true,
      },

      /**
       * Sets button variant option. Possible values are: `secondary`, `tertiary`, `flat`.
       */
      variant: {
        type: String,
        reflect: true,
      },

      /**
       * Sets the shape of the buttons. Possible values are: `rounded`, `circle`, `pill`, `window-pane`.
       * @default rounded
       */
      shape: {
        type: String,
        reflect: true,
      },

      size: {
        type: String,
        reflect: true,
      },
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
   * @ignore
   * @returns {void}
   */
  focus() {
    this.renderRoot.querySelector("button").focus();
  }

  updated(changedProperties) {
    // support the old `secondary` and `tertiary` attributes` that are deprecated
    if (changedProperties.has("secondary") || changedProperties.has("tertiary")) {
      if (this.secondary) {
        this.variant = "secondary";
      } else if (this.tertiary) {
        this.variant = "tertiary";
      }
    }

    // support old `rounded` and `iconOnly` attributes that are deprecated
    if (!changedProperties.has('shape')) {
      if (changedProperties.has("rounded") || changedProperties.has('iconOnly') || changedProperties.has('slim')) {
        if (this.rounded) {
          if (this.iconOnly) {
            this.shape = "circle";
          } else {
            this.shape = "pill";
          }
        } else if (this.iconOnly) {
          if (this.slim) {
            this.shape = "window-pane";
          } else {
            this.shape = "circle";
          }
        } else {
          this.shape = "rounded";
        }
      }
    }
  }

  /**
   * Submits the form that this button is associated with.
   * @private
   * @returns {void}
   */
  surfaceSubmitEvent() {
    if (this.form) {
      this.form.requestSubmit();
    }
  }

  /**
   * Returns the form element that this button is associated with.
   * @private
   * @returns {HTMLFormElement | null}
   */
  get form() {
    return this.internals ? this.internals.form : null;
  }

  /**
   * @private
   * @returns {Boolean}
   */
  get hideText() {
    return ICON_ONLY_SHAPE.includes(this.shape);
  }

  render() {
    return html`
      <button
        class="auro-button util_insetLg--squish"
        part="button"
        aria-hidden="${ifDefined(this.ariahidden || undefined)}"
        aria-label="${ifDefined(this.loading ? this.loadingText : this.arialabel || undefined)}"
        aria-labelledby="${ifDefined(this.arialabelledby ? this.arialabelledby : undefined)}"
        aria-expanded="${ifDefined(this.ariaexpanded)}"
        tabIndex="${ifDefined(this.tIndex)}"
        ?autofocus="${this.autofocus}"
        ?disabled="${this.disabled || this.loading}"
        title="${ifDefined(this.title ? this.title : undefined)}"
        name="${ifDefined(this.name ? this.name : undefined)}"
        type="${ifDefined(this.type ? this.type : undefined)}"
        .value="${ifDefined(this.value ? this.value : undefined)}"
        @click="${this.type === "submit" ? this.surfaceSubmitEvent : undefined}"
      >
        ${ifDefined(this.loading ? html`<${this.loaderTag} pulse part="loader"></${this.loaderTag}>` : undefined)}

        <span class="contentWrapper">
          <span class="textSlot" part="text">
            ${this.hideText ? undefined : html`<slot></slot>`}
          </span>

          <span part="icon">
            <slot name="icon"></slot>
          </span>
        </span>
      </button>
    `;
  }
}
