import { LitElement, html, css } from "lit";
import { abrigos, camisetas, pantalones } from "./consultas.js";

export class myAbrigos extends LitElement {
    static properties = {
        products: { type: Array }
    };

    static styles = css`
    .contenedor{
        background: none;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
    
    .container{
        /*background: darkblue;*/
        width: 30vh;
        height: 45vh;
        margin: 10px;
        border-top-left-radius: 3rem;
        border-top-right-radius: 3rem;
    }
    
    .prueba{
        /*background: lightsalmon;*/
        width: 100%;
        height: 100%;
    }
    
    .contenedor_img{
        background: white;
        width: 100%;
        height: 60%;
        border-top-left-radius: 3rem;
        border-top-right-radius: 3rem;
        border-bottom-left-radius: 0.5rem;
        border-bottom-right-radius: 0.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .img1{
        width: 100%;
        height: 100%;
        border-top-left-radius: 3rem;
        border-top-right-radius: 3rem;
        border-bottom-right-radius: 3rem;
        border-bottom-left-radius: 3rem;
        object-fit: contain;
    }
    
    .contenedor_border{
        background: var(--clr-main);
        border: 2px solid black;
        width: 99%;
        height: 29%;
        border-radius: 1vh;
        display: flex;
        flex-direction: row;
    }
    
    .texto{
        background: none;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        text-align: center;
    }
    
    .p1{
        /*background: black;*/
        width: 100%;
        height: 50%;
        display: flex;
        align-items: center;
        word-spacing: 0.1rem;
        text-transform: capitalize;
        font-size: 0.9rem;
    }
    
    .p1, .p2{
        color: white;
    }
    
    .contenedor_boton{
        width: 30%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .boton{
        background: var(--clr-white);
        color: var(--clr-main);
        border: 1px solid var(--clr-main);
        border-radius: .7vh;
        width: 100%;
        height: 20%;
        text-transform: capitalize;
    }
    `;

    constructor() {
        super();
        this.products = [];
    }

    async connectedCallback() {
        super.connectedCallback();
        this.products = await abrigos();
    }

    render() {
        return html`
        <section class="contenedor">
            ${this.products.map(product => html`
                <section class="container">
                    <article class="prueba">
                        <article class="contenedor_img">
                        <img src="${product.image}" class="img1">
                        </article>
                        <article class="contenedor_border">
                            <article class="texto">
                                <p class="p1">${product.name}</p>
                                <p class="p2">$${product.price}</p>
                            </article>
                            <article class="contenedor_boton">
                                <button class="boton">agregar</button>
                            </article>
                        </article>
                    </article>
                </section>
                </section>
            `)}
        `;
    }
}

customElements.define("my-abrigos", myAbrigos);

export class myCamisetas extends LitElement {
    static properties = {
        products: { type: Array }
    };

    static styles = css`
    .contenedor{
        background: none;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
    
    .container{
        /*background: darkblue;*/
        width: 30vh;
        height: 45vh;
        margin: 10px;
        border-top-left-radius: 3rem;
        border-top-right-radius: 3rem;
    }
    
    .prueba{
        /*background: lightsalmon;*/
        width: 100%;
        height: 100%;
    }
    
    .contenedor_img{
        background: white;
        width: 100%;
        height: 60%;
        border-top-left-radius: 3rem;
        border-top-right-radius: 3rem;
        border-bottom-left-radius: 0.5rem;
        border-bottom-right-radius: 0.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .img1{
        width: 100%;
        height: 100%;
        border-top-left-radius: 3rem;
        border-top-right-radius: 3rem;
        border-bottom-right-radius: 3rem;
        border-bottom-left-radius: 3rem;
        object-fit: contain;
    }
    
    .contenedor_border{
        background: var(--clr-main);
        border: 2px solid black;
        width: 99%;
        height: 29%;
        border-radius: 1vh;
        display: flex;
        flex-direction: row;
    }
    
    .texto{
        background: none;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        text-align: center;
    }
    
    .p1{
        /*background: black;*/
        width: 100%;
        height: 50%;
        display: flex;
        align-items: center;
        word-spacing: 0.1rem;
        text-transform: capitalize;
        font-size: 0.9rem;
    }
    
    .p1, .p2{
        color: white;
    }
    
    .contenedor_boton{
        width: 30%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .boton{
        background: var(--clr-white);
        color: var(--clr-main);
        border: 1px solid var(--clr-main);
        border-radius: .7vh;
        width: 100%;
        height: 20%;
        text-transform: capitalize;
    }
    `;

    constructor() {
        super();
        this.products = [];
    }

    async connectedCallback() {
        super.connectedCallback();
        this.products = await camisetas();
    }

    render() {
        return html`
        <section class="contenedor">
            ${this.products.map(product => html`
                <section class="container">
                    <article class="prueba">
                        <article class="contenedor_img">
                        <img src="${product.image}" class="img1">
                        </article>
                        <article class="contenedor_border">
                            <article class="texto">
                                <p class="p1">${product.name}</p>
                                <p class="p2">$${product.price}</p>
                            </article>
                            <article class="contenedor_boton">
                                <button class="boton">agregar</button>
                            </article>
                        </article>
                    </article>
                </section>
                </section>
            `)}
        `;
    }
}

customElements.define("my-camisetas", myCamisetas);

export class myPantalones extends LitElement {
    static properties = {
        products: { type: Array }
    };

    static styles = css`
    .contenedor{
        background: none;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
    
    .container{
        /*background: darkblue;*/
        width: 30vh;
        height: 45vh;
        margin: 10px;
        border-top-left-radius: 3rem;
        border-top-right-radius: 3rem;
    }
    
    .prueba{
        /*background: lightsalmon;*/
        width: 100%;
        height: 100%;
    }
    
    .contenedor_img{
        background: white;
        width: 100%;
        height: 60%;
        border-top-left-radius: 3rem;
        border-top-right-radius: 3rem;
        border-bottom-left-radius: 0.5rem;
        border-bottom-right-radius: 0.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .img1{
        width: 100%;
        height: 100%;
        border-top-left-radius: 3rem;
        border-top-right-radius: 3rem;
        border-bottom-right-radius: 3rem;
        border-bottom-left-radius: 3rem;
        object-fit: contain;
    }
    
    .contenedor_border{
        background: var(--clr-main);
        border: 2px solid black;
        width: 99%;
        height: 29%;
        border-radius: 1vh;
        display: flex;
        flex-direction: row;
    }
    
    .texto{
        background: none;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        text-align: center;
    }
    
    .p1{
        /*background: black;*/
        width: 100%;
        height: 70%;
        display: flex;
        align-items: center;
        word-spacing: 0.1rem;
        text-transform: capitalize;
        font-size: 0.9rem;
    }
    
    .p1, .p2{
        color: white;
    }
    
    .contenedor_boton{
        width: 30%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .boton{
        background: var(--clr-white);
        color: var(--clr-main);
        border: 1px solid var(--clr-main);
        border-radius: .7vh;
        width: 100%;
        height: 20%;
        text-transform: capitalize;
    }
    `;

    constructor() {
        super();
        this.products = [];
    }

    async connectedCallback() {
        super.connectedCallback();
        this.products = await pantalones();
    }

    render() {
        return html`
        <section class="contenedor">
            ${this.products.map(product => html`
                <section class="container">
                    <article class="prueba">
                        <article class="contenedor_img">
                        <img src="${product.image}" class="img1">
                        </article>
                        <article class="contenedor_border">
                            <article class="texto">
                                <p class="p1">${product.name}</p>
                                <p class="p2">$${product.price}</p>
                            </article>
                            <article class="contenedor_boton">
                                <button class="boton">agregar</button>
                            </article>
                        </article>
                    </article>
                </section>
                </section>
            `)}
        `;
    }
}

customElements.define("my-pantalones", myPantalones);

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

    async connectedCallback() {
        super.connectedCallback();
        this.products = await pantalones();
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