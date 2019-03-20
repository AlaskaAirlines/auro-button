import { LitElement, html } from "lit-element";

// impot the processed CSS file into the scope of the component 
import ods[name]Css from "./ods-[name]-css.js";

// build the component class
class Ods[name] extends LitElement {
  constructor() {
    super();
    this.string = "";
    
    /* 
      If the component requires a touch detection, 
      please use this function to determine if a user is 
      activelly touching a device, versus detecting if
      the device is touych enables or a handheld device. 
    */
    // this.addEventListener('touchstart', function() {
    //   this.classList.add('is-touching');
    // });
  }

  // function to define props used within the scope of thie component 
  static get properties() {
    return {
      string: {
        type: String
      }
    };
  }

  // function that renders the HTML and CSS into  the scope of the component 
  render() {
    return html`
      /* reference to inported process CSS module */
      ${ods[name]Css}

      <div>
        ${this.string}
      </div>
    `;
  }
}

// define the name of the custom component 
customElements.define("ods-[name]", Ods[name]);
