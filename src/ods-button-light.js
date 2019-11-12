import { html } from "lit-element";
import OdsButton from './ods-button';

class OdsButtonLight extends OdsButton {
    static get properties() {
        return {
            ...super.properties,
            content: { type: String },
        };
    }

    createRenderRoot() {
        return this;
    }

    getButtonContent() {
        return html`${this.content}`;
    }
}

customElements.define("ods-button-light", OdsButtonLight);
