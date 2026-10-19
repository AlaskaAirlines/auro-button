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

const ICON_ONLY_SHAPES = ["circle", "square"];

/**
 * An accessible button that lets people take an action, such as submitting a form,
 * starting a task, or moving to the next step in a flow. It's the standard button for
 * Auro interfaces.
 *
 * **Key capabilities**
 * - **Variants**: five levels of visual emphasis, from `primary` (the main action on the
 *   page) through `secondary`, `tertiary`, and `ghost`, down to `flat` (text only).
 * - **Shapes & sizes**: `rounded` or `pill` for text buttons, and `circle` or `square` for
 *   icon-only buttons, each in five sizes (`xs`–`xl`).
 * - **Light & dark backgrounds**: `appearance="inverse"` switches to colors designed for
 *   dark backgrounds.
 * - **Loading state**: swaps the label for a loading indicator and blocks clicks while
 *   work is in progress, without changing the button's width.
 * - **Forms**: `type="submit"` submits the form the button is placed in, and `type="reset"`
 *   resets an `<auro-form>`.
 *
 * **Example**
 * ```html
 * <auro-button variant="primary">Submit</auro-button>
 * ```
 *
 * @summary Accessible button for taking an action, with variants, sizes, a loading state, and form support.
 * @customElement auro-button
 * @forcePrivate {'layout'}
 * @slot - The button's visible label: text, an icon, or both. {@requiredWhen always} {@category ui}
 * @slot ariaLabel - Text read by screen readers in place of the visible label. Needed for icon-only buttons (`circle` or `square` shape), which have no visible text. {@relevantWhen !loading} {@category a11y}
 * @slot ariaLabel.loading - Text read by screen readers while the button is loading, for example "Saving your changes". Defaults to "Loading...". {@relevantWhen loading} {@category a11y}
 * @csspart button - The inner `<button>` element (a `<span>` when `static` is set).
 * @csspart loader - The loading indicator shown while `loading` is set.
 * @csspart text - The element wrapping the button's label.
 * @csspart contentWrapper - The element wrapping all of the button's content. It is hidden, but still takes up space, while loading.
 * @cssprop {Color} --ds-auro-button-border-color - Border color of the button.
 * @cssprop {Color} --ds-auro-button-border-inset-color - Color of the inner ring shown when the button has keyboard focus.
 * @cssprop {Color} --ds-auro-button-container-color - Background color of the button.
 * @cssprop {Image} --ds-auro-button-container-image - Background image layered over the background color, used for gradient fills.
 * @cssprop {Color} --ds-auro-button-loader-color - Color of the loading indicator.
 * @cssprop {Color} --ds-auro-button-tap-color - Highlight color shown briefly when the button is tapped on a touch screen.
 * @cssprop {Color} --ds-auro-button-text-color - Color of the button's label text.
 */
export class AuroButton extends AuroElement {
  /**
   * Enables form association, so the button can take part in the form it's placed in.
   * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/attachInternals
   * @returns {boolean} - Always true.
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
    this.loadingText = "Loading...";

    /** @type {"primary" | "secondary" | "tertiary" | "ghost" | "flat"} */
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
     * Creates a versioned tag name for `auro-loader`, so it can't clash with other versions of the loader on the page.
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

    this.buttonHref = undefined;
    this.buttonTarget = undefined;
    this.buttonRel = undefined;

    /**
     * Re-renders when the text inside a slotted accessible-name element changes, which `slotchange` doesn't report.
     * @private
     */
    this.ariaLabelObserver = new MutationObserver((mutations) => {
      if (
        mutations.some((mutation) => this.isInAriaLabelSlot(mutation.target))
      ) {
        this.requestUpdate();
      }
    });
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
       * Sets the button's shape. Use `rounded` (the default) or `pill` for buttons with a text label, and `circle` or `square` for icon-only buttons. Icon-only buttons need a text alternative in the `ariaLabel` slot.
       * @type {"rounded" | "pill" | "circle" | "square"}
       * @default "rounded"
       * @category ui
       */
      shape: {
        type: String,
        attribute: "shape",
        reflect: true,
      },

      /**
       * Sets the button's size, from `xs` (smallest) to `xl` (largest). Size controls the button's height, padding, and label text size.
       * @type {"xs" | "sm" | "md" | "lg" | "xl"}
       * @default "md"
       * @category ui
       */
      size: {
        type: String,
        attribute: "size",
        reflect: true,
      },

      /**
       * Moves keyboard focus to the button when the page loads. Use sparingly: moving focus without warning can disorient keyboard and screen reader users.
       * @category behavior
       */
      autofocus: {
        type: Boolean,
        reflect: true,
      },

      /**
       * Turns the button off. A disabled button is shown in a muted style and can't be clicked or reached with the keyboard.
       * @category ui
       */
      disabled: {
        type: Boolean,
        reflect: true,
      },

      /**
       * Stretches the button to fill the full width of its container.
       * @category ui
       */
      fluid: {
        type: Boolean,
        reflect: true,
      },

      /**
       * Shows a loading indicator in place of the label and blocks clicks until it is turned off. The button keeps its width, so the layout doesn't shift. Use the `ariaLabel.loading` slot to tell screen reader users what is happening.
       * @category ui
       */
      loading: {
        type: Boolean,
        reflect: true,
      },

      /**
       * Deprecated: Use `slot="ariaLabel.loading"` instead.
       * @deprecated Use `slot="ariaLabel.loading"` instead.
       * @relevantWhen loading
       * @category a11y
       * @default "Loading..."
       */
      loadingText: {
        type: String,
        attribute: "loadingtext",
      },

      /**
       * Sets the button's position in the keyboard tab order (the inner element's `tabindex`). Use `-1` to remove the button from the tab order. Most buttons don't need this. Ignored when `static` is set.
       * @relevantWhen !static
       * @minimum -1
       * @maximum 2147483647
       * @category a11y
       */
      tIndex: {
        type: Number,
        attribute: "tindex",
        reflect: true,
      },

      /**
       * Deprecated: Use `tIndex` instead.
       * Sets the button's position in the keyboard tab order. Must be set as a property (with a leading `.` in Lit templates) so the `tabindex` attribute isn't left on the host element.
       * Example: `<auro-button .tabindex="${this.disabled ? '-1' : '0'}"></auro-button>`.
       * @deprecated Use `tIndex` instead.
       * @relevantWhen !static
       * @category a11y
       */
      tabindex: {
        type: String,
        reflect: false,
      },

      /**
       * Text shown as a browser tooltip when a mouse pointer rests on the button. Keyboard and touch users never see it, so don't use it for essential information.
       * @category ui
       */
      title: {
        type: String,
        reflect: true,
      },

      /**
       * Sets what the button does in a form. `submit` submits the form the button is placed in, whether it's a native `<form>` or an `<auro-form>`. `reset` resets the fields of an `<auro-form>`, but has no effect in a native `<form>`. Leave it unset, or use `button`, when the button runs its own action.
       * @type {"submit" | "reset" | "button"}
       * @category behavior
       */
      type: {
        type: String,
        reflect: true,
      },

      /**
       * Sets the button's visual emphasis. Use `primary` for the single most important action in a view, `secondary` for supporting actions, and `tertiary`, `ghost`, or `flat` for progressively quieter actions. `flat` shows only the label, with no background or border.
       * @type {"primary" | "secondary" | "tertiary" | "ghost" | "flat"}
       * @default "primary"
       * @category ui
       */
      variant: {
        type: String,
        reflect: true,
      },

      /**
       * Internal: set only by `auro-hyperlink` for its CTA links; not for direct use. Renders an `<a>` to this URL (with the `link` CSS part in place of `button`). The URL is used as-is, without sanitization.
       * @type {string}
       * @internal
       */
      buttonHref: {
        type: String,
        attribute: "buttonhref",
      },

      /**
       * Internal: set only by `auro-hyperlink` for its CTA links; not for direct use. The link's `target` when `buttonHref` is set.
       * @type {string}
       * @internal
       */
      buttonTarget: {
        type: String,
        attribute: "buttontarget",
      },

      /**
       * Internal: set only by `auro-hyperlink` for its CTA links; not for direct use. The link's `rel` when `buttonHref` is set.
       * @type {string}
       * @internal
       */
      buttonRel: {
        type: String,
        attribute: "buttonrel",
      },

      /**
       * Displays the button's styling without any button behavior. A static button can't be clicked or focused, and screen readers don't announce it as a button. Use it when the button sits inside another clickable element, such as a linked card.
       * @category behavior
       */
      static: {
        type: Boolean,
        reflect: true,
      },
    };
  }

  /**
   * Registers the element with the browser under a tag name. Use a custom name to run this version alongside another version of `auro-button` on the same page.
   * @param {string} [name="auro-button"] - The tag name to register the element under.
   *
   * @example
   * AuroButton.register("custom-button") // makes the element available as <custom-button>
   *
   */
  static register(name = "auro-button") {
    AuroLibraryRuntimeUtils.prototype.registerComponent(name, AuroButton);
  }

  /**
   * Moves keyboard focus to the inner `<button>` element.
   * @private
   * @returns {void}
   */
  focus() {
    this.renderRoot.querySelector("button").focus();
  }

  /**
   * Submits the form the button is placed in, if there is one.
   * @private
   * @returns {void}
   */
  surfaceSubmitEvent() {
    if (this.form) {
      this.form.requestSubmit();
    }
  }

  /**
   * Gets the form the button is placed in.
   * @private
   * @returns {HTMLFormElement | null} - The form, or `null` if the button isn't in one.
   */
  get form() {
    return this.internals ? this.internals.form : null;
  }

  /**
   * Checks whether the button has a text-label shape (any shape other than `circle` or `square`).
   * @private
   * @returns {Boolean} - True if the button has a text-label shape; false otherwise.
   */
  get showText() {
    return !ICON_ONLY_SHAPES.includes(this.shape);
  }

  /**
   * Gets the `aria-label` set on the host and moved to the inner element.
   * @returns {string | undefined} - The label, or `undefined` if none is set.
   * @private
   */
  get currentAriaLabel() {
    if (!this.attributeWatcher) return undefined;

    const ariaLabel = this.attributeWatcher.getObservedAttribute("aria-label");
    return ariaLabel || undefined;
  }

  /**
   * Gets the `aria-labelledby` set on the host and moved to the inner element.
   * @returns {string | undefined} - The ID reference list, or `undefined` if none is set.
   * @private
   */
  get currentAriaLabelledBy() {
    if (!this.attributeWatcher) return undefined;

    const ariaLabelledBy =
      this.attributeWatcher.getObservedAttribute("aria-labelledby");
    return ariaLabelledBy || undefined;
  }

  /**
   * Checks whether the button has an icon-only shape (`circle` or `square`).
   * @returns {boolean} - True if the button is icon-only; false otherwise.
   * @private
   */
  get iconOnly() {
    return ICON_ONLY_SHAPES.includes(this.shape);
  }

  /**
   * Checks whether an icon is slotted into the default slot.
   * @returns {boolean} - True if an icon is slotted; false otherwise.
   * @private
   */
  get hasSlottedIcon() {
    return Boolean(
      this.querySelector(
        ":scope > auro-icon, :scope > [auro-icon], :scope > svg",
      ),
    );
  }

  /**
   * Gets the typography class for the label, based on the button's size and shape.
   * @returns {string} - The typography class name.
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
   * Gets the element tag to render.
   * @returns {TemplateResult} - `span` when `static` is set, `a` when `buttonHref` is set, and `button` otherwise.
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

  connectedCallback() {
    super.connectedCallback();

    this.ariaLabelObserver.observe(this, {
      characterData: true,
      childList: true,
      subtree: true,
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    this.ariaLabelObserver.disconnect();
  }

  /**
   * Checks whether a node is inside an element slotted into `ariaLabel` or `ariaLabel.loading`.
   * @param {Node} node - The node to check.
   * @returns {boolean} - True if the node is inside a slotted accessible-name element; false otherwise.
   * @private
   */
  isInAriaLabelSlot(node) {
    const element =
      node.nodeType === Node.ELEMENT_NODE ? node : node.parentElement;
    const slotted = element?.closest(
      '[slot="ariaLabel"], [slot="ariaLabel.loading"]',
    );

    return slotted?.parentElement === this;
  }

  /**
   * Called when the elements slotted into `ariaLabel` or `ariaLabel.loading` change. Re-renders so the inner element's `aria-label` matches the new text.
   * @private
   */
  onAriaLabelSlotChange() {
    this.requestUpdate();
  }

  /**
   * Called when the content slotted into the default slot changes. Re-renders so icon-only shapes show text (such as a count) only when no icon is slotted.
   * @private
   */
  onDefaultSlotChange() {
    this.requestUpdate();
  }

  /**
   * Gets the text screen readers announce for the button.
   * @returns {String} - While loading, the `ariaLabel.loading` slot text or `loadingText`. Otherwise, the `ariaLabel` slot text or the host's `aria-label`.
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
   * Called when a pointer enters, leaves, presses, or releases the button, or when the button
   * loses focus. Sets `data-hover` and `data-active` on the host so the styles can show hover
   * and active states. This is needed because `:host` combined with `:has()` doesn't work in Safari and Firefox.
   * The `data-hover` / `data-active` attributes are set directly on the host (rather than
   * via reactive properties) so they stay internal and don't appear as public, settable
   * attributes in the custom elements manifest.
   * @param {PointerEvent} event - The pointer event.
   * @private
   */
  onPointerEvent(event) {
    switch (event.type) {
      case "pointerenter":
        this.toggleAttribute("data-hover", true);
        break;
      case "pointerleave":
        this.toggleAttribute("data-hover", false);
        break;
      case "pointerdown":
        this.toggleAttribute("data-active", true);
        break;
      case "pointerup":
      case "blur":
        this.toggleAttribute("data-active", false);
        break;
      default:
        break;
    }
  }

  /**
   * Renders the button's default (and only) layout.
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

    // Type classes should not be applied to the wrapper to avoid affecting icons.
    // Icon-only shapes only get a type class when they hold text (e.g. a count) instead of an icon.
    const textSlotClasses = {
      textSlot: true,
      [fontSize]: this.showText || !this.hasSlottedIcon,
    };

    const tabindex = this.tIndex ?? this.tabindex;

    return html`
      <!-- Hidden slots for aria labels -->
      <slot name="ariaLabel" hidden @slotchange="${this.onAriaLabelSlotChange}"></slot>
      <slot name="ariaLabel.loading" hidden @slotchange="${this.onAriaLabelSlotChange}"></slot>

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
            <slot @slotchange="${this.onDefaultSlotChange}"></slot>
          </span>
        </span>
      </${this._renderTag}>
    `;
  }

  /**
   * Renders the button's current layout.
   * @returns {TemplateResult}
   * @private
   */
  renderLayout() {
    return this.renderLayoutDefault();
  }
}
