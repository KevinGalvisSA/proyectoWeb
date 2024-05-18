import { LitElement, html, css } from 'lit';

export class myMenu extends LitElement {
  static styles = css`
    .menu {
      display: flex;
      flex-direction: column;
      gap: .5rem;
    }

    .boton-menu {
      background-color: transparent;
      border: 0;
      color: var(--clr-white);
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 1rem;
      font-weight: 600;
      padding: 1rem;
      font-size: .85rem;
      width: 100%;
    }

    .boton-menu.active {
      background-color: var(--clr-white);
      color: var(--clr-main);
      border-top-left-radius: 1rem;
      border-bottom-left-radius: 1rem;
      position: relative;
    }

    .boton-menu.active::before {
      content: '';
      position: absolute;
      width: 1rem;
      height: 2rem;
      bottom: 100%;
      right: 0;
      background-color: transparent;
      border-bottom-right-radius: .5rem;
      box-shadow: 0 1rem 0 var(--clr-white);
    }

    .boton-menu.active::after {
      content: '';
      position: absolute;
      width: 1rem;
      height: 2rem;
      top: 100%;
      right: 0;
      background-color: transparent;
      border-top-right-radius: .5rem;
      box-shadow: 0 -1rem 0 var(--clr-white);
    }

    .boton-menu > i.bi-hand-index-thumb-fill,
    .boton-menu > i.bi-hand-index-thumb {
      transform: rotateZ(90deg);
    }

    .boton-carrito {
      margin-top: 2rem;
    }

    .numerito {
      background-color: var(--clr-white);
      color: var(--clr-main);
      padding: .15rem .25rem;
      border-radius: .25rem;
    }

    .boton-carrito.active .numerito {
      background-color: var(--clr-main);
      color: var(--clr-white);
    }
  `;
    firstUpdated() {
        this.setupMenuNavigation();
    }

    setupMenuNavigation() {
        const buttons = this.shadowRoot.querySelectorAll('.boton-menu');
        buttons.forEach(button => {
            button.addEventListener('click', (event) => {
                const buttonName = event.target.innerText.trim();
                this.navigateToPage(buttonName);
            });
        });
    }

    navigateToPage(buttonName) {
        let page;
        switch (buttonName) {
            case 'Abrigos':
                page = 'my-page-abrigos';
                break;
            case 'Camisetas':
                page = 'my-page-camisetas';
                break;
            case 'Pantalones':
                page = 'my-page-pantalones';
                break;
            default:
                page = 'my-page-todos';
        }

        if (page) {
            this.dispatchEvent(new CustomEvent('navigate', {
                detail: { page }
            }));
        }
    }

    render() {
        return html`
            <ul class="menu">
                <li>
                    <button class="boton-menu boton-categoria active"><i class="bi bi-hand-index-thumb-fill"></i> Todos los productos</button>
                </li>
                <li>
                    <button class="boton-menu boton-categoria"><i class="bi bi-hand-index-thumb"></i> Abrigos</button>
                </li>
                <li>
                    <button class="boton-menu boton-categoria"><i class="bi bi-hand-index-thumb"></i> Camisetas</button>
                </li>
                <li>
                    <button class="boton-menu boton-categoria"><i class="bi bi-hand-index-thumb"></i> Pantalones</button>
                </li>
                <li>
                    <button class="boton-menu boton-carrito"><i class="bi bi-cart-fill"></i> Carrito <span id="numerito" class="numerito">0</span></button>
                </li>
            </ul>
        `;
    }
}

customElements.define('my-menu', myMenu);