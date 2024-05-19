import { LitElement, html, css } from 'lit';
import "./complemento carritos.js"

class Productos extends LitElement {
  static styles = css`
    :host{
      width: 20vw;
      height: 37vh;
      background: var(--color-sexto);
      border-radius: 3em;
      
    }
    .div5_1 {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 20px;
      overflow: hidden;
    }

    .div5_1 img {
      width: 100%;
      height: 70%;
    }

    .div5_1_1 {
      width: 99%;
      height: 29%;
      background: var(--color-secundario);
      border-radius: 1.5em;
      border: 2px solid var(--color-primario);
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }

    .div5_1_1_p {
      width: 55%;
      height: 100%;
      display: flex;
      align-items: center;
      font-size: 0.67em;
      margin-left: 1em;
      line-height: 2em;
    }
  `;

  static properties = {
    imgSrc: { type: String },
    productName: { type: String },
    price: { type: String },
  };

  constructor() {
    super();
    this.imgSrc = '';
    this.productName = '';
    this.price = '';
  }

  render() {
    return html`
      <div class="div5_1">
        <img src=${this.imgSrc} alt="Product Image" />
        <div class="div5_1_1">
          <p class="div5_1_1_p">
            ${this.productName} <br />
            ${this.price}
          </p>
          <toggle-menu></toggle-menu>
        </div>
      </div>
    `;
  }
}
customElements.define('my-producto', Productos);