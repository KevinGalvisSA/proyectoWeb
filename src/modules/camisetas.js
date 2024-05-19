import { LitElement, html, css } from 'lit';
import {
    dataCamisetas
} from "./consultas.js";
import "./productos.js";


class MyElement extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    .product-list {
      width: 95%;
      height: 95%;
      padding: 0 0 0 1.5em;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 1.8em;
      max-height: 80vh;
      overflow-y: scroll;
    }
    .product-list::-webkit-scrollbar{
      display: none;
    }
  `;

  static properties = {
    products: { type: Array }
  };

  constructor() {
    super();
    this.products = [];
  }

  async connectedCallback() {
    super.connectedCallback();
    const shirts = await dataCamisetas();
    this.products = [...shirts];
  }

  render() {
    return html`
      <div class="product-list">
        ${this.products.map(
          product => html`
            <my-producto
              imgSrc="${product.imagen}"
              productName="${product.name}"
              price="$ ${product.precio}"
            ></my-producto>
          `
        )}
      </div>
    `;
  }
}

customElements.define('my-shirts', MyElement);