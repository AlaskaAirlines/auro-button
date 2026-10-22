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

// Elements that count as an icon. A slotted child holds an icon when it matches one of these
// or wraps one, such as a <span> around an svg.
const ICON_SELECTOR = "auro-icon, [auro-icon], svg, img";

/**
 * An accessible button that lets people take an action, such as submitting a form,
 * starting a task, or moving to the next step in a flow. It's the standard button for
 * Auro interfaces.
 *
 * **Key capabilities**
 * - **Variants**: `variant` sets five levels of visual emphasis, from `primary` (the main
 *   action on the page) through `secondary`, `tertiary`, and `ghost`, down to `flat` (text only).
 * - **Shapes and sizes**: `shape` sets `rounded` or `pill` for text buttons, and `circle` or
 *   `square` for an icon or short text, such as a count; `size` sets five sizes (`xs`–`xl`).
 * - **Light and dark backgrounds**: `appearance="inverse"` switches to colors designed for
 *   dark backgrounds.
 * - **Loading state**: `loading` swaps the label for a loading indicator and blocks clicks
 *   while work is in progress, without changing the button's width.
 * - **Forms**: `type="submit"` submits the form the button is placed in, and `type="reset"`
 *   resets an `<auro-form>`.
 *
 * **Example**
 * ```html
 * <auro-button variant="primary">Submit</auro-button>
 * ```
 *
 * @summary An accessible button for taking an action, with variants, sizes, a loading state, and form support.
 * @customElement auro-button
 * @forcePrivate {'layout'}
 * @slot - The button's visible label: text, an icon (an `<auro-icon>`, an `<svg>`, or an `<img>`), or both. Set `aria-hidden="true"` on a slotted `<svg>`, and `alt=""` on a slotted `<img>`, so screen readers skip it and read only the button's name. In `circle` and `square` buttons, an icon wrapped in another element still counts as the icon, but only an icon slotted directly is sized to the icon size. {@requiredWhen always} {@category ui}
 * @slot ariaLabel - Text read by screen readers in place of the visible label, for example "Save to favorites". Needed when a `circle` or `square` button shows only an icon or a count, unless the host has an `aria-label` or text visually hidden beside the icon already says what the button does. Without it, screen readers read the host's `aria-label`, or the visible label if there's none. {@relevantWhen !loading} {@category a11y}
 * @slot ariaLabel.loading - Text read by screen readers in place of the visible label while the button is loading, for example "Saving your changes". Defaults to "Loading...". {@relevantWhen loading} {@category a11y}
 * @csspart button - The inner `<button>` element (a `<span>` when `static` is set).
 * @csspart loader - The loading indicator shown while `loading` is set.
 * @csspart text - The element wrapping the button's label.
 * @csspart contentWrapper - The element wrapping all of the button's content. It's hidden, but still takes up space, while the button is loading.
 * @cssprop {Color} --ds-auro-button-border-color - Border color of a `secondary` button, and of the thin outer edge of the focus ring on a `primary` button. Other variants don't show a border.
 * @cssprop {Color} --ds-auro-button-border-inset-color - Color of the inner ring shown when the button has focus.
 * @cssprop {Color} --ds-auro-button-container-color - Background color of the button. The `flat` variant doesn't use it.
 * @cssprop {Color} --ds-auro-button-container-image - Color of a layer painted over the background color, which hides it. When you change `--ds-auro-button-container-color`, set this to the same value. The `flat` and `tertiary` variants don't use it.
 * @cssprop {Color} --ds-auro-button-loader-color - Color of the loading indicator.
 * @cssprop {Color} --ds-auro-button-text-color - Color of the button's label text. The `flat` variant doesn't use it.
 */
export class AuroButton extends AuroElement {
  /**
   * Checks whether the button can take part in a form. It always returns true, which turns on form association for `auro-button`.
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
     * Re-renders on light DOM changes that `slotchange` doesn't report: text changing inside a slotted
     * accessible-name element, an icon added to or removed from inside a slotted element, and an element
     * gaining or losing the `auro-icon` attribute, such as a renamed icon that upgrades after the button renders.
     * @private
     */
    this.lightDomObserver = new MutationObserver((mutations) => {
      if (
        mutations.some(
          (mutation) =>
            mutation.type !== "characterData" ||
            this.isInAriaLabelSlot(mutation.target),
        )
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
       * Removes the `layout` attribute inherited from `AuroElement`, because this component has only one layout.
       * @private
       */
      layout: {
        type: Boolean,
        attribute: false,
        reflect: false,
      },

      /**
       * Sets the button's shape. Use `rounded` (the default) or `pill` for buttons with a text label, and `circle` or `square` for an icon (an `<auro-icon>`, an `<svg>`, or an `<img>`) or short text, such as a count. When an icon is slotted, `circle` and `square` buttons show only the icon and visually hide any text beside it, so they need an accessible name from the `ariaLabel` slot or the `aria-label` attribute unless that hidden text says what the button does.
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
       * Shows a loading indicator in place of the label and blocks clicks until it's turned off. The button keeps its width, so the layout doesn't shift. Use the `ariaLabel.loading` slot to tell screen reader users what's happening.
       * @category ui
       */
      loading: {
        type: Boolean,
        reflect: true,
      },

      /**
       * Deprecated: Use `slot="ariaLabel.loading"` instead.
       * Sets the text screen readers announce while the button is loading.
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
       * Sets the button's position in the keyboard tab order (the inner element's `tabindex`). Use `-1` to remove the button from the tab order. Ignored when `static` is set.
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
       * Sets the button's position in the keyboard tab order. Set it as a property, with a leading `.` in Lit templates, because a `tabindex` attribute on the host element can add a second tab stop.
       * @deprecated Use `tIndex` instead.
       * @relevantWhen !static
       * @category a11y
       */
      tabindex: {
        type: String,
        reflect: false,
      },

      /**
       * Sets the tooltip text the browser shows when a mouse pointer rests on the button, such as more detail about what the button does (the `title` attribute). Keyboard and touch users never see it, so don't use it for essential information.
       * @category ui
       */
      title: {
        type: String,
        reflect: true,
      },

      /**
       * Sets what the button does in a form. `submit` submits the form the button is placed in, whether it's a native `<form>` or an `<auro-form>`, and `reset` resets the fields of an `<auro-form>` but has no effect in a native `<form>`. When the button runs its own action, leave it unset or use `button`.
       * @type {"submit" | "reset" | "button"}
       * @category behavior
       */
      type: {
        type: String,
        reflect: true,
      },

      /**
       * Sets the button's visual emphasis. Use `primary` for the single most important action in a view, `secondary` for supporting actions, and `tertiary`, `ghost`, or `flat` for progressively quieter actions. `flat` shows only the label, with no background or border. A flat button with a `rounded` or `pill` shape doesn't currently show a focus ring, so use `flat` only with `circle` or `square`.
       * @type {"primary" | "secondary" | "tertiary" | "ghost" | "flat"}
       * @default "primary"
       * @category ui
       */
      variant: {
        type: String,
        reflect: true,
      },

      /**
       * Internal: set only by `auro-hyperlink` for its CTA links; not for direct use. Renders an `<a>` to this URL (with the `link` CSS part in place of `button`). Security: the URL is used as-is, without sanitization, so don't pass untrusted input, because a `javascript:` URL runs when the link is activated.
       * @type {string}
       * @internal
       */
      buttonHref: {
        type: String,
        attribute: "buttonhref",
      },

      /**
       * Internal: set only by `auro-hyperlink` for its CTA links; not for direct use. Sets where the link opens when `buttonHref` is set, such as `_blank` for a new tab (the link's `target`).
       * @type {string}
       * @internal
       */
      buttonTarget: {
        type: String,
        attribute: "buttontarget",
      },

      /**
       * Internal: set only by `auro-hyperlink` for its CTA links; not for direct use. Sets the link's relationship to the page it opens when `buttonHref` is set, such as `noopener` (the link's `rel`).
       * @type {string}
       * @internal
       */
      buttonRel: {
        type: String,
        attribute: "buttonrel",
      },

      /**
       * Displays the button's styling without any button behavior. A static button can't be focused, doesn't submit a native `<form>`, and isn't announced as a button by screen readers. When the button sits inside another clickable element, such as a linked card, use a static button. Give that element an accessible name, because a name set on a static button isn't reliably read.
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
   * Moves keyboard focus to the inner `<button>` element, or to the inner `<a>` element when `auro-hyperlink` renders the button as a link. Does nothing before the button first renders, when `static` is set, or when `disabled` or `loading` turns off the inner `<button>`.
   * @param {FocusOptions} [options] - The options passed to the inner element's `focus()`.
   * @returns {void}
   */
  focus(options) {
    if (this.static) return;

    this.renderRoot?.querySelector("button, a")?.focus(options);
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
   * @returns {boolean} - True if the button has a text-label shape; false otherwise.
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
   * Checks whether the button has a `circle` or `square` shape, which holds an icon or short text instead of a label.
   * @returns {boolean} - True if the shape is `circle` or `square`; false otherwise.
   * @private
   */
  get iconOnly() {
    return ICON_ONLY_SHAPES.includes(this.shape);
  }

  /**
   * Gets the children slotted into the default slot that hold an icon, either as the child itself or wrapped inside it.
   * @returns {Element[]} - The children that hold an icon.
   * @private
   */
  get slottedIcons() {
    return [...this.children].filter(
      (child) =>
        !child.slot &&
        (child.matches(ICON_SELECTOR) || child.querySelector(ICON_SELECTOR)),
    );
  }

  /**
   * Renders the style that visually hides every slotted child except the ones holding an icon.
   * `::slotted()` can't match an element by what it contains, so each icon child is matched by its position.
   * @param {Element[]} slottedIcons - The children that hold an icon.
   * @returns {TemplateResult} - The style element.
   * @private
   */
  renderIconOnlyStyle(slottedIcons) {
    const children = [...this.children];
    const iconPositions = slottedIcons
      .map((icon) => `:not(:nth-child(${children.indexOf(icon) + 1}))`)
      .join("");

    return html`
      <style>
        .iconOnly ::slotted(${iconPositions}) {
          position: absolute;
          overflow: hidden;
          width: 1px;
          height: 1px;
          padding: 0;
          border: 0;
          clip: rect(1px, 1px, 1px, 1px);
        }
      </style>
    `;
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
   * @returns {StaticValue} - The tag: `span` when `static` is set, `a` when `buttonHref` is set, and `button` otherwise.
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

    this.lightDomObserver.observe(this, {
      attributeFilter: ["auro-icon"],
      characterData: true,
      childList: true,
      subtree: true,
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    this.lightDomObserver.disconnect();
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
   * @returns {string | undefined} - The `ariaLabel.loading` slot text or `loadingText` while loading; otherwise, the `ariaLabel` slot text, the host's `aria-label`, or `undefined` if neither is set.
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
   * and active states, because `:host` combined with `:has()` doesn't work in Safari and Firefox.
   * Sets them as plain attributes, not reactive properties, so they stay internal and don't
   * appear as public, settable attributes in the custom elements manifest.
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
   * @returns {TemplateResult} - The button's template.
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
    // Icon-only shapes only get a type class when they hold text (such as a count) instead of an icon.
    // `iconOnly` lets icon-only shapes hide everything except the icon.
    // Not written as the `iconOnly` shorthand: the CEM analyzer publishes a shorthand property as a module variable.
    const slottedIcons = this.slottedIcons;
    const showIconOnly = this.iconOnly && slottedIcons.length > 0;
    const textSlotClasses = {
      textSlot: true,
      iconOnly: showIconOnly,
      [fontSize]: this.showText || slottedIcons.length === 0,
    };

    const tabindex = this.tIndex ?? this.tabindex;

    return html`
      ${showIconOnly ? this.renderIconOnlyStyle(slottedIcons) : undefined}

      <!-- Hidden slots for aria labels -->
      <slot name="ariaLabel" hidden @slotchange="${this.onAriaLabelSlotChange}"></slot>
      <slot name="ariaLabel.loading" hidden @slotchange="${this.onAriaLabelSlotChange}"></slot>

      <${this._renderTag}
        part="${part}"
        aria-label="${ifDefined(this.generateAriaLabel())}"
        aria-labelledby="${ifDefined(this.loading ? undefined : this.currentAriaLabelledBy || undefined)}"
        tabindex="${ifDefined(this.static ? undefined : tabindex)}"
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
   * @returns {TemplateResult} - The button's template.
   * @private
   */
  renderLayout() {
    return this.renderLayoutDefault();
  }
}
