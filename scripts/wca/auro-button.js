
import { AuroButton } from '../../src/auro-button.js';

/** */
class AuroButtonWCA extends AuroButton {}

if (!customElements.get("auro-button")) {
  customElements.define("auro-button", AuroButtonWCA);
}
