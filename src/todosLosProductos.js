import { LitElement, html, css } from "lit";
import { abrigos, camisetas, pantalones } from "./consultas.js";

export class AllProducts extends LitElement {
    static properties = {
        products: { type: Array }
    };

    static styles = css`
        .flex_container {
            width: 100%;
            height: 120vh;
            display: flex;
            flex-direction: row;
        }
    `;

    constructor() {
        super();
        this.products = [];
    }

    render() {
        return html`
            <section class="flex_container">
                <my-abrigos></my-abrigos>
                <my-camisetas></my-camisetas>
                <my-pantalones></my-pantalones>
            </section>
        `
    }
}

customElements.define("all-products", AllProducts);