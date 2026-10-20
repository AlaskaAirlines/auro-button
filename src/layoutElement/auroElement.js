import { LitElement } from "lit";
import { transportAllA11yAttributes } from "./a11yUtilities.js";

/**
 * Shared base class for Auro components. It provides the common `layout`, `shape`,
 * `size`, and `appearance` options, and moves ARIA attributes from the host element
 * to the inner element, so screen readers announce them on the element people interact with.
 */
export class AuroElement extends LitElement {
  /**
   * Tracks the ARIA attributes moved from the host to the inner element, and stops tracking them when the component is removed.
   * @type {{ cleanup: Function, getObservedAttributes: Function, getObservedAttribute: Function }}
   * @property {Function} cleanup - Function to clean up the attribute watcher.
   * @property {Function} getObservedAttributes - Function to get the current attributes being watched and their values.
   * @property {Function} getObservedAttribute - Function to get the value of a specific observed attribute by name.
   * @private
   */
  attributeWatcher;

  static get properties() {
    return {
      /**
       * Selects which internal layout the component renders. Components with only one layout ignore it.
       * @default "default"
       * @private
       */
      layout: {
        type: String,
        attribute: "layout",
        reflect: true,
      },

      /**
       * Sets the component's shape. Each component sets its own default; `auro-button` uses `rounded`.
       * @type {"rounded" | "pill" | "circle" | "square"}
       * @category ui
       */
      shape: {
        type: String,
        attribute: "shape",
        reflect: true,
      },

      /**
       * Sets the component's size, from `xs` (smallest) to `xl` (largest). Each component sets its own default; `auro-button` uses `md`.
       * @type {"xs" | "sm" | "md" | "lg" | "xl"}
       * @category ui
       */
      size: {
        type: String,
        attribute: "size",
        reflect: true,
      },

      /**
       * Matches the component's colors to the background it sits on. Use `inverse` on dark backgrounds and `default` on light ones.
       * @type {"default" | "inverse"}
       * @default "default"
       * @category ui
       */
      appearance: {
        type: String,
        reflect: true,
      },

      /**
       * Deprecated: Use `appearance="inverse"` instead.
       * Switches the component to colors designed for dark backgrounds.
       * @deprecated Use `appearance="inverse"` instead.
       * @default false
       * @category ui
       */
      onDark: {
        type: Boolean,
        attribute: "ondark",
        reflect: true,
      },

      /**
       * The component's inner wrapper element, which receives the layout and shape classes.
       * @type {HTMLElement|null}
       * @default null
       * @private
       */
      wrapper: {
        attribute: false,
        reflect: false,
      },
    };
  }

  constructor() {
    super();

    this.onDark = false;

    /** @type {"default" | "inverse"} */
    this.appearance = "default";
  }

  /**
   * Replaces the wrapper's `shape-*` class with one for the current `shape` and `size`.
   * @private
   */
  resetShapeClasses() {
    if (this.shape && this.size) {
      if (this.wrapper) {
        this.wrapper.classList.forEach((className) => {
          if (className.startsWith("shape-")) {
            this.wrapper.classList.remove(className);
          }
        });

        this.wrapper.classList.add(
          `shape-${this.shape.toLowerCase()}-${this.size.toLowerCase()}`,
        );
      }
    }
  }

  /**
   * Replaces the wrapper's `layout-*` class with one for the current `layout`.
   * @private
   */
  resetLayoutClasses() {
    if (this.layout) {
      if (this.wrapper) {
        this.wrapper.classList.forEach((className) => {
          if (className.startsWith("layout-")) {
            this.wrapper.classList.remove(className);
          }
        });

        this.wrapper.classList.add(`layout-${this.layout.toLowerCase()}`);
      }
    }
  }

  /**
   * Updates the wrapper's layout and shape classes to match the current properties.
   * @private
   */
  updateComponentArchitecture() {
    this.resetLayoutClasses();
    this.resetShapeClasses();
  }

  /**
   * Points `wrapper` and the ARIA attribute transport at the wrapper element currently in the shadow DOM.
   * Lit renders a new element when a template switches tags (for example, `auro-button` swapping `<button>` for `<a>` or `<span>`), so this runs after every update.
   * @returns {boolean} - True if the wrapper was (re)bound; false if it was already current.
   * @private
   */
  bindWrapper() {
    const wrapper = this.shadowRoot.querySelector(".wrapper");

    if (wrapper === this.wrapper && this.attributeWatcher) {
      return false;
    }

    this.releaseWrapper();
    this.wrapper = wrapper;

    this.attributeWatcher = wrapper
      ? transportAllA11yAttributes({ host: this, target: wrapper })
      : null;

    return true;
  }

  /**
   * Stops the ARIA attribute transport and puts the attributes it moved back on the host.
   * Transported attributes are removed from the host, so without this they would only exist on the old wrapper element, and the next `bindWrapper()` couldn't move them to the new one.
   * @private
   */
  releaseWrapper() {
    if (!this.attributeWatcher) {
      return;
    }

    const transported = this.attributeWatcher.getObservedAttributes();

    this.attributeWatcher.cleanup();
    this.attributeWatcher = null;

    for (const [name, value] of transported) {
      this.setAttribute(name, value);
    }
  }

  updated(changedProperties) {
    const wrapperBound = this.bindWrapper();

    if (
      wrapperBound ||
      changedProperties.has("layout") ||
      changedProperties.has("shape") ||
      changedProperties.has("size")
    ) {
      this.updateComponentArchitecture();
    }
  }

  firstUpdated() {
    super.firstUpdated();

    // Bind here as well as in updated(), so subclasses can use `wrapper` in their own firstUpdated()
    this.bindWrapper();
  }

  connectedCallback() {
    super.connectedCallback();

    // Re-bind when the element is moved or re-inserted, since disconnectedCallback() released the transport
    if (this.hasUpdated) {
      this.bindWrapper();
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    this.releaseWrapper();
  }

  // Render the defined layout. Log a failure, then rethrow so the update rejects instead of rendering empty.
  render() {
    try {
      return this.renderLayout();
    } catch (error) {
      // failed to get the defined layout
      console.error("Failed to get the defined layout", error); // eslint-disable-line no-console
      throw error;
    }
  }
}
