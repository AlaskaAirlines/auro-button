export class AuroElement extends LitElement {
    static get properties(): {
        /**
         * Defines the language of an element.
         * @default {'default'}
         */
        layout: {
            type: StringConstructor;
            attribute: string;
            reflect: boolean;
        };
    };
    layout: string;
    render(): any;
}
import { LitElement } from "lit";
