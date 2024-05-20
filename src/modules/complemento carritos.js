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
      background: #60efb8;
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
      background: #60efb8;
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
    producto: { type: Object },
    products: { type: Array },
    nuevoProducto: { type: Object }
  };

  constructor() {
    super();
    this.open = false;
    this.producto = {};
    this.products = [];
  }

  toggleMenu() {
    this.open = !this.open;
  }

  async idNameAbrigos() {
    try {
      let res = await fetch("http://localhost:5501/abrigo");
      let data = await res.json();
      let idsProductos = data.map(producto => producto.id);
      return idsProductos;
    } catch (error) {
      console.error("Error al obtener los pedidos:", error);
      return [];
    }
  }

  async connectedCallback() {
    super.connectedCallback();
    const coats = await this.idNameAbrigos();
    this.products = coats;
  }

  async agregarAlCarrito() {
    try {
      // Obtener el carrito del endpoint correspondiente
      let res = await fetch("http://localhost:5501/carrito");
      let carrito = await res.json();

      // Verificar si el producto ya está en el carrito
      const productoEnCarrito = carrito.find(item => item[`${this.producto.categoria}id`] === this.producto.id);

      // Si el producto está en el carrito, aumentar la cantidad
      if (productoEnCarrito) {
        productoEnCarrito.cantidad += 1;
      } else {
        // Si el producto no está en el carrito, agregarlo al carrito con cantidad 1
        const nuevoProducto = {
          [`${this.producto.categoria}id`]: this.producto.id,
          cantidad: 1,
          id: carrito.length + 1
        };
        carrito.push(nuevoProducto);
      }

      // Actualizar el carrito en el servidor
      await fetch("http://localhost:5501/carrito",{
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(carrito)
      });
    } catch (error) {
      console.error("Error al agregar el producto al carrito:", error);
    }
  }

  render() {
    return html`
      <div class="button" @click=${this.toggleMenu}>
        <div class="button-wrapper">
          <button class="text" @click=${this.agregarAlCarrito}>
            Agregar
          </button>
        </div>
      </div>
    `;
  }
}

customElements.define("toggle-menu", ToggleMenu);
