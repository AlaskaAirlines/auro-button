// Copyright (c) Alaska Air. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

/* eslint-disable
  lit/no-invalid-html,
  lit/binding-positions,
  max-lines,
  curly,
  array-element-newline,
  no-magic-numbers,
  no-underscore-dangle
*/

import { AuroDependencyVersioning } from "@aurodesignsystem/auro-library/scripts/runtime/dependencyTagVersioning.mjs";
import AuroLibraryRuntimeUtils from "@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs";
import { AuroLoader } from "@aurodesignsystem/auro-loader/class";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { html, literal } from "lit/static-html.js";
import { AuroElement } from "./layoutElement/auroElement.js";
import loaderVersion from "./loaderVersion.js";
import colorCss from "./styles/color.scss";
import shapeSize from "./styles/shapeSize.scss";
import styleCss from "./styles/style.scss";
import tokensCss from "./styles/tokens.scss";

/**
 * @slot - Default slot for the text of the button.
 * @slot ariaLabel - Use this slot to pass an aria-label to the HTML5 button.
 * @slot ariaLabel.loading - Use this slot to pass an aria-label to the HTML5 button when in loading state.
 * @csspart button - Apply CSS to HTML5 button.
 * @csspart loader - Apply CSS to auro-loader.
 * @csspart text - Apply CSS to text slot.
 * @csspart icon - Apply CSS to icon slot.
 */

const ICON_ONLY_SHAPES = ["circle", "square"];

/**
 * AuroButton is a custom element that provides a styled, accessible button with support for various states and form association.
 * It is designed to be flexible, supporting loading states, icon slots, and integration with HTML5 forms.
 * @property {'default', 'rounded', 'pill', 'circle', 'square'} shape - Defines the shape of the button.
 * @property {'xs', 'sm', 'md', 'lg', 'xl'} size - Defines the size of the button.
 * @property {'primary', 'secondary', 'tertiary', 'ghost', 'flat'} variant - Sets the button variant.
 * @property {'submit', 'reset', 'button'} type - The type of button. Matches HTML5 Button Spec.
 * @property {boolean} onDark - DEPRECATED - use `appearance` property
 * @property {'default', 'inverse'} appearance - Defines whether the button will be on lighter or darker backgrounds.
 */
export class AuroButton extends AuroElement {
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
    this.loading = false;
    this.static = false;
    this.size = "md";
    this.shape = "rounded";
    this.fluid = false;
    this.loadingText = this.loadingText || "Loading...";
    this.variant = "primary";

    /**
     * @private
     */
    this.runtimeUtils = new AuroLibraryRuntimeUtils();

    // Support for HTML5 forms
    if (typeof this.attachInternals === "function") {
      this.internals = this.attachInternals();
    } else {
      this.internals = null;

      // eslint-disable-next-line no-console
      console.warn(
        "This browser does not support form association features. Some form-related functionality may not work as expected. Consider using a polyfill or handling click events manually.",
      );
    }

    /**
     * Generate unique names for dependency components.
     */
    const versioning = new AuroDependencyVersioning();

    /**
     * @private
     */
    this.loaderTag = versioning.generateTag(
      "auro-loader",
      loaderVersion,
      AuroLoader,
    );

    /**
     *  @private
     */
    this.buttonHref = undefined;

    /**
     *  @private
     */
    this.buttonTarget = undefined;

    /**
     *  @private
     */
    this.buttonRel = undefined;
  }

  static get styles() {
    return [tokensCss, styleCss, colorCss, shapeSize];
  }

  static get properties() {
    return {
      ...AuroElement.properties,

      /**
       * Override layout since it isn't used in this component.
       * @private
       */
      layout: {
        type: Boolean,
        attribute: false,
        reflect: false,
      },

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
       * Alters the shape of the button to be full width of its parent container.
       */
      fluid: {
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
       * DEPRECATED - Use `slot="ariaLabel.loading"` instead.
       */
      loadingText: {
        type: String,
      },

      /**
       * Populates `tabindex` to define the focusable sequence in keyboard navigation.
       */
      tIndex: {
        type: String,
        reflect: true,
      },

      /**
       * Populates `tabindex` to define the focusable sequence in keyboard navigation.
       * Must be used with "." to ensure the host element does not retain a reference to the `tabindex` attribute.
       * Example: `<auro-button .tabindex="${this.disabled ? '-1' : '0'}"></auro-button>`.
       */
      tabindex: {
        type: String,
        reflect: false,
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
       * Sets button variant option.
       * @default primary
       */
      variant: {
        type: String,
        reflect: true,
      },

      /**
       * @private
       */
      buttonHref: {
        type: String,
      },

      /**
       * @private
       */
      buttonTarget: {
        type: String,
      },

      /**
       * @private
       */
      buttonRel: {
        type: String,
      },

      /**
       * If true, the button will be static and not respond to user interactions.
       */
      static: {
        type: Boolean,
        reflect: true,
      },

      /**
       * @private
       */
      onHover: {
        attribute: "data-hover",
        type: Boolean,
        reflect: true,
      },

      /**
       * @private
       */
      onActive: {
        attribute: "data-active",
        type: Boolean,
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
    AuroLibraryRuntimeUtils.prototype.registerComponent(name, AuroButton);
  }

  /**
   * Internal method to apply focus to the HTML5 button.
   * @private
   * @returns {void}
   */
  focus() {
    this.renderRoot.querySelector("button").focus();
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
  get showText() {
    return !ICON_ONLY_SHAPES.includes(this.shape);
  }

  /**
   * Returns the current value of the projected `aria-label` attribute or undefined if not set. The `aria-label` attribute is for internal use only.
   * @returns {string | undefined}
   * @private
   */
  get currentAriaLabel() {
    if (!this.attributeWatcher) return undefined;

    const ariaLabel = this.attributeWatcher.getObservedAttribute("aria-label");
    return ariaLabel || undefined;
  }

  /**
   * Returns the current value of the projected `aria-labelledby` attribute or undefined if not set.
   * @returns {string | undefined}
   * @private
   */
  get currentAriaLabelledBy() {
    if (!this.attributeWatcher) return undefined;

    const ariaLabelledBy =
      this.attributeWatcher.getObservedAttribute("aria-labelledby");
    return ariaLabelledBy || undefined;
  }

  /**
   * Whether or not the button is set to an icon-only shape.
   * @returns {boolean} - True if the button is icon-only, false otherwise.
   * @private
   */
  get iconOnly() {
    return ICON_ONLY_SHAPES.includes(this.shape);
  }

  /**
   * Gets a class name for the font size based on the button's size and shape.
   * @returns {string} - The font size class name.
   * @private
   */
  getFontSize() {
    // Size map for standard buttons
    const standardButtonSizeMap = {
      xs: "body-xs",
      sm: "body-sm",
      md: "body-default",
      lg: "body-lg",
      xl: "body-lg",
    };

    // Size map for icon-only buttons
    const iconOnlyButtonSizeMap = {
      xs: "heading-xs",
      sm: "heading-sm",
      md: "heading-sm",
      lg: "heading-md",
      xl: "heading-lg",
    };

    // Determine which map to use based on the shape
    const sizeMap = this.iconOnly
      ? iconOnlyButtonSizeMap
      : standardButtonSizeMap;

    // Return the font size based on the button size and shape
    return sizeMap[this.size] || "body-default";
  }

  /**
   * Renders the tag for the component.
   * @returns {TemplateResult}
   * @private
   */
  get _renderTag() {
    if (this.static) return literal`span`;

    return this.buttonHref ? literal`a` : literal`button`;
  }

  firstUpdated() {
    super.firstUpdated();

    this.runtimeUtils.handleComponentTagRename(this, "auro-button");
  }

  /**
   * Returns the appropriate string to be used for the aria-label attribute.
   * @returns {String}
   * @private
   */
  generateAriaLabel() {
    return this.loading
      ? this.runtimeUtils.getSlotText(this, "ariaLabel.loading") ||
          this.loadingText
      : this.runtimeUtils.getSlotText(this, "ariaLabel") ||
          this.currentAriaLabel;
  }

  /**
   * This is to detect pointer events for hover and active states for styling purposes.
   * :host with :has selector dont work together in Safari and Firefox
   * @param {PointerEvent} event - The pointer event.
   * @private
   */
  onPointerEvent(event) {
    switch (event.type) {
      case "pointerenter":
        this.onHover = true;
        break;
      case "pointerleave":
        this.onHover = false;
        break;
      case "pointerdown":
        this.onActive = true;
        break;
      case "pointerup":
      case "blur":
        this.onActive = false;
        break;
      default:
        break;
    }
  }

  /**
   * Renders the default layout for the button.
   * @returns {TemplateResult}
   * @private
   */
  renderLayoutDefault() {
    const fontSize = this.getFontSize();
    const part = this.buttonHref ? "link" : "button";

    const classes = {
      "auro-button": true,
      inset: this.showText,
      wrapper: true,
      loading: this.loading,

      // These remove the default borders so we can handle focus borders ourselves
      simple: !["secondary"].includes(this.variant),
      thin: ["secondary"].includes(this.variant),
    };

    const contentClasses = {
      contentWrapper: true,
      loading: this.loading,
    };

    // Type classes should not be applied to the wrapper to avoid affecting icons
    const textSlotClasses = {
      textSlot: true,
      [fontSize]: this.showText,
    };

    const tabindex = this.tIndex || this.tabindex;

    return html`
      <!-- Hidden slots for aria labels -->
      <slot name="ariaLabel" hidden @slotchange="${this.requestUpdate}"></slot>
      <slot name="ariaLabel.loading" hidden @slotchange="${this.requestUpdate}"></slot>

      <${this._renderTag}
        part="${part}"
        aria-label="${ifDefined(this.generateAriaLabel())}"
        aria-labelledby="${ifDefined(this.loading ? undefined : this.currentAriaLabelledBy || undefined)}"
        tabindex="${ifDefined(this.static ? -1 : tabindex)}"
        ?autofocus="${this.autofocus}"
        class=${classMap(classes)}
        ?disabled="${this.disabled || this.loading}"
        ?onDark="${this.onDark}"
        title="${ifDefined(this.title ? this.title : undefined)}"
        name="${ifDefined(this.name ? this.name : undefined)}"
        type="${ifDefined(this.type ? this.type : undefined)}"
        variant="${ifDefined(this.variant ? this.variant : undefined)}"
        .value="${ifDefined(this.value ? this.value : undefined)}"
        @click="${!this.static && this.type === "submit" ? this.surfaceSubmitEvent : undefined}"
        @pointerenter="${this.onPointerEvent}"
        @pointerleave="${this.onPointerEvent}"
        @pointerdown="${this.onPointerEvent}"
        @pointerup="${this.onPointerEvent}"
        @blur="${this.onPointerEvent}"
        href="${ifDefined(this.buttonHref || undefined)}"
        target="${ifDefined(this.buttonTarget || undefined)}"
        rel="${ifDefined(this.buttonRel || undefined)}"
      >
        ${ifDefined(this.loading ? html`<${this.loaderTag} pulse part="loader"></${this.loaderTag}>` : undefined)}

        <span class="${classMap(contentClasses)}" part="contentWrapper">
          <span class="${classMap(textSlotClasses)}" part="text">
            <slot></slot>
          </span>
        </span>
      </${this._renderTag}>
    `;
  }

  /**
   * Renders the layout of the button.
   * @returns {TemplateResult}
   * @private
   */
  renderLayout() {
    return this.renderLayoutDefault();
  }
}
