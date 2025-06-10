import { LitElement } from "lit";
import { transportAriaAttributes } from "../a11yUtilities";

export class AuroElement extends LitElement {
  static get properties() {
    return {

      /**
       * Defines the layout of an element.
       * @default {'default'}
       */
      layout: {
        type: String,
        attribute: "layout",
        reflect: true
      },
      
      /**
       * Defines the shape of an element.
       * @property {'default', 'rounded', 'pill', 'circle'}
       * @default {'default'}
       */
      shape: {
        type: String,
        attribute: "shape",
        reflect: true
      },

      /**
       * Defines the size of an element.
       * @property {'xs', 'sm', 'md', 'lg', 'xl'}
       * @default {'md'}
       */
      size: {
        type: String,
        attribute: "size",
        reflect: true
      },

      /** 
       * This Boolean attribute lets you specify that the element should be rendered in dark mode.
       * @default {false}
       */
      onDark: {
        type: Boolean,
        attribute: "ondark",
        reflect: true
      },

      /**
       * A reference to the wrapper element in the shadow DOM.
       * This is used to apply layout and shape classes dynamically.
       * @type {HTMLElement|null}
       * @default {null}
       * @private
       */
      wrapper: {
        type: HTMLElement,
        attribute: false,
        reflect: false
      }
    };
  }

  resetShapeClasses() {
    if (this.shape && this.size) {

      if (this.wrapper) {
        this.wrapper.classList.forEach((className) => {
          if (className.startsWith('shape-')) {
            this.wrapper.classList.remove(className);
          }
        });

        this.wrapper.classList.add(`shape-${this.shape.toLowerCase()}-${this.size.toLowerCase()}`);
      }
    }
  }

  resetLayoutClasses() {
    if (this.layout) {
      if (this.wrapper) {
        this.wrapper.classList.forEach((className) => {
          if (className.startsWith('layout-')) {
            this.wrapper.classList.remove(className);
          }
        });

        this.wrapper.classList.add(`layout-${this.layout.toLowerCase()}`);
      }
    }
  }

  updateComponentArchitecture() {
    this.resetLayoutClasses();
    this.resetShapeClasses();
  }

  updated(changedProperties) {
    if (changedProperties.has('layout') || changedProperties.has('shape') || changedProperties.has('size')) {
      this.updateComponentArchitecture();
    }
  }

  firstUpdated() {
    super.firstUpdated();

    // Set a reference to the wrapper element in the shadow DOM
    this.wrapper = this.shadowRoot.querySelector('.wrapper');

    // Initialize the transportation of ARIA attributes to the target element and get the disconnect function for cleanup
    this.ariaObserverDisconnect = transportAriaAttributes({ host: this, target: this.shadowRoot.querySelector('.wrapper') });
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    // Cleanup the ARIA observer if it exists
    if (this.ariaObserverDisconnect) {
      this.ariaObserverDisconnect();
      this.ariaObserverDisconnect = null;
    }
  }

  // Try to render the defined `this.layout` layout. If that fails, fall back to the default layout.
  // This will catch if an invalid layout value is passed in and render the default layout if so.
  render() {
    try {
      return this.renderLayout();
    } catch (error) {
      // failed to get the defined layout
      console.error('Failed to get the defined layout - using the default layout', error); // eslint-disable-line no-console

      // fallback to the default layout
      return this.getLayout('default');
    }
  }
}
