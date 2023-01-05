import {AuroButton} from './auro-button.js';

if (!customElements.get("my-button")) {
  customElements.define("my-button", AuroButton);
}
