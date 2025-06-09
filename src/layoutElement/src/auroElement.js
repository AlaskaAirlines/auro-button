import { LitElement } from "lit";

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
      }
    };
  }

  resetShapeClasses() {
    if (this.shape && this.size) {
      const wrapper = this.shadowRoot.querySelector('.wrapper');

      if (wrapper) {
        wrapper.classList.forEach((className) => {
          if (className.startsWith('shape-')) {
            wrapper.classList.remove(className);
          }
        });

        wrapper.classList.add(`shape-${this.shape.toLowerCase()}-${this.size.toLowerCase()}`);
      }
    }
  }

  resetLayoutClasses() {
    if (this.layout) {
      const wrapper = this.shadowRoot.querySelector('.wrapper');

      if (wrapper) {
        wrapper.classList.forEach((className) => {
          if (className.startsWith('layout-')) {
            wrapper.classList.remove(className);
          }
        });

        wrapper.classList.add(`layout-${this.layout.toLowerCase()}`);
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
