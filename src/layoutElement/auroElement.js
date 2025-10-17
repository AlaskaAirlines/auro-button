import { LitElement } from "lit";
import { transportAllA11yAttributes } from "./a11yUtilities.js";

export class AuroElement extends LitElement {
  /**
   * @type {Object} return object from transportAttributes via a11yUtilities
   * @property {Function} cleanup - Function to clean up the attribute watcher.
   * @property {Function} getCurrentAttributes - Function to get the current attributes being watched and their values.
   * @property {Function} getObservedAttribute - Function to get the value of a specific observed attribute by name.
   * @private
   */
  attributeWatcher;

  static get properties() {
    return {
      /**
       * Defines the layout of an element.
       * @default {'default'}
       */
      layout: {
        type: String,
        attribute: "layout",
        reflect: true,
      },

      /**
       * Defines the shape of an element.
       * @property {'default', 'rounded', 'pill', 'circle'}
       * @default {'default'}
       */
      shape: {
        type: String,
        attribute: "shape",
        reflect: true,
      },

      /**
       * Defines the size of an element.
       * @property {'xs', 'sm', 'md', 'lg', 'xl'}
       * @default {'md'}
       */
      size: {
        type: String,
        attribute: "size",
        reflect: true,
      },

      /**
       * Defines whether the button will be on lighter or darker backgrounds.
       * @property {'default', 'inverse'}
       * @default 'default'
       */
      appearance: {
        type: String,
        reflect: true
      },

      /**
       * DEPRECATED - use `appearance` attribute.
       * @default {false}
       */
      onDark: {
        type: Boolean,
        attribute: "ondark",
        reflect: true,
      },

      /**
       * A reference to the wrapper element in the shadow DOM.
       * This is used to apply layout and shape classes dynamically.
       * @type {HTMLElement|null}
       * @default {null}
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
    this.appearance = 'default';
  }

  /**
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
   * @private
   */
  updateComponentArchitecture() {
    this.resetLayoutClasses();
    this.resetShapeClasses();
  }

  updated(changedProperties) {
    if (
      changedProperties.has("layout") ||
      changedProperties.has("shape") ||
      changedProperties.has("size")
    ) {
      this.updateComponentArchitecture();
    }
  }

  firstUpdated() {
    super.firstUpdated();

    // Set a reference to the wrapper element in the shadow DOM
    this.wrapper = this.shadowRoot.querySelector(".wrapper");

    // Initialize the transportation of ARIA attributes to the target element and get the disconnect function for cleanup
    this.attributeWatcher = transportAllA11yAttributes({
      host: this,
      target: this.shadowRoot.querySelector(".wrapper"),
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    // Cleanup the ARIA observer if it exists
    if (this.attributeWatcher) {
      this.attributeWatcher.cleanup();
      this.attributeWatcher = null;
    }
  }

  // Try to render the defined `this.layout` layout. If that fails, fall back to the default layout.
  // This will catch if an invalid layout value is passed in and render the default layout if so.
  render() {
    try {
      return this.renderLayout();
    } catch (error) {
      // failed to get the defined layout
      console.error(
        "Failed to get the defined layout - using the default layout",
        error,
      ); // eslint-disable-line no-console

      // fallback to the default layout
      return this.getLayout("default");
    }
  }
}
