import { LitElement, html, css } from "lit";
import "./todosLosProductos.js";
//import "./abrigos.js";
//import "./camisetas.js";
//import "./pantalones.js";

export class redirections extends LitElement {
    constructor(){
        super();
        this.opcionSeleccionada = '';
    }

    static get properties() {
        return {
            opcionSeleccionada: { type: String }
        };
    }
    
    render() {
        return html`
        <div class="contenedor-productos">
            ${this.opcionSeleccionada === 'todos los productos'
            ? html`<all-products></all-products>`
            : ''}
        </div>
        `;
    }
}

customElements.define('my-views', redirections);

/*
            ${this.opcionSeleccionada === 'abrigos'
            ? html`<my-coats></my-coats>`
            : ''}
            ${this.opcionSeleccionada === 'camisetas'
            ? html`<my-shirts></my-shirts>`
            : ''}
            ${this.opcionSeleccionada === 'pantalones'
            ? html`<my-pants></my-pants>`
            : ''}
            ${this.opcionSeleccionada === 'carrito'
            ? html`<my-cart></my-cart>`
            : ''}
*/