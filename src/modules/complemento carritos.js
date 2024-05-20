import { LitElement, html, css } from "lit";

class ToggleMenu extends LitElement {
  static styles = css`
    .button {
        --width: 100px;
        --height: 35px;
        margin: 2em 1em 1em 2em;
        --tooltip-height: 35px;
        --tooltip-width: 100px;
        --gap-between-tooltip-to-button: 18px;
        --button-color: #222;
        --tooltip-color: #fff;
        width: var(--width);
        height: var(--height);
        background: #60EFB8;
        position: relative;
        text-align: center;
        border-radius: 0.5em;
        font-family: "Arial";
        transition: background 0.7s;
    }
    .text {
      display: flex;
      align-items: center;
      justify-content: center;
      background: #60EFB8
    }

    .button-wrapper,
    .text,
    .icon {
      overflow: hidden;
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      color: #fff;
    }

  
    .text:hover {
      cursor: pointer;
      background: var(--color-septimo);
    }

    .menu {
      display: none;
    }

    .menu[open] {
      display: block;
    }
  `;

  static properties = {
    open: { type: Boolean },
  };

  constructor() {
    super();
    this.open = false;
  }

  toggleMenu() {
    this.open = !this.open;
  }

  render() {
    return html`
      <div class="button" @click=${this.toggleMenu}>
        <div class="button-wrapper">
          <button class="text">Agregar</button>
        </div>
      </div>
    `;
  }
}

customElements.define("toggle-menu", ToggleMenu);

/*
  Idea para adicion de productos:
  - añadir un boton con un id igual al del producto
  - filtrar el json para generar una funcion que revise el id del boton y compare con cada producto
  - en caso de que se encuentre un id igual. al hacer click en el boton, añadir el producto al carrito haciendo push en el json.
  - en caso de que no se encuentre un id igual. al hacer click en el boton, mostrar un alerta que diga que no se encuentra el producto.
  - por ultimo revisar que se mantenga la reactividad en cada elemento
*/
