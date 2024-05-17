import { LitElement, html, css } from "lit";
import { abrigos } from "./consultas.js";

export class allProducts extends LitElement {
    constructor(){
        super();
    }
    static properties = {
        nombreA: {typeof: String},
    }
    static styles = css`
    .container{
        background: darkblue;
        width: 25vh;
    }
    
    .contenedor_img{
        background: yellow;
        border-top-left-radius: 4.5vh;
        border-top-right-radius: 4.5vh;
        border-bottom-left-radius: 2vh;
        border-bottom-right-radius: 2vh;
        width: 100%;
        height: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .img1{
        /*background: yellow;*/
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    .contenedor_border{
        background: yellow;
        border: 1px solid black;
        width: 100%;
        height: 20%;
        border-radius: 2vh;
        display: flex;
        flex-direction: row;
    }
    
    .texto{
        /*background: darkcyan;*/
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    
    .p1{
        text-transform: capitalize;
    }
    
    .p1, .p2{
        color: var(--color-texto);
        line-height: 1vh;
        padding: 0vh 2.5vh;
    }
    
    .contenedor_boton{
        /*background: darkgrey;*/
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: end;
        padding: 1vh 0vh;
    }
    
    .myboton{
        background: var(--color-boton);
        color: var(--color-blanco);
        border: 1px solid var(--color-boton);
        border-radius: .7vh;
        width: 60%;
        height: 50%;
        text-transform: capitalize;
    }
    `

    render(){
        return html`
        <section class="container">
                <article class="contenedor_img">
                    <img src="./default.jpg" class="img1">
                </article>
                <article class="contenedor_border">
                    <article class="texto">
                        <p class="p1">abrigo 01</p>
                        <p class="p2">$93900</p>
                    </article>
                    <article class="contenedor_boton">
                        <button class="myboton">agregar</button>
                    </article>
                </article>
        </section>
        `
    }
}

customElements.define("my-products", allProducts)