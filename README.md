# LandingPage - Aplicativo Web 'E-commerce |-CampusShop-|

En esta documentacion se abarcan los siguientes contenidos:


`Introduccion`

`Evidencias funcionalidad`

`Codigo HTML y CSS principal`

`Autor`

# Introduccion:

!Importante¡
------------------------------------------------------------------------------------------
- Este repositorio forma parte de un proyexto 'academico', por ende. Se informa el no interpretar la pagina como un sitio web de verdad.
------------------------------------------------------------------------------------------
-Pagina web enfocada en un aplicativo web de gestion sobre la compra y venta de distintas prendas de vestir, presentando distintos apartados para una mayor facilidad de manejo y compresion.

-Es importante saber que este proyecto toma en cuenta las indicaciones presentadas por el trainer a cargo de la actividad.


## 🔗 Link
[![page_2](https://img.shields.io/badge/page_2-yellow?style=for-the-badge&logo=ko-fi&logoColor=white)](https://youtu.be/OmTdJZDBNa8)




# 👩‍💻 Codigos:

## HTML:

```bash
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="/css/style.css">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
</head>
<body>
    <div class="grid">
        <div class="container_header">
            <header>
                <section class="header_box">
                    <article class="header_title">
                        <h1 class="title__header">CampusShop</h1>
                    </article>
                    <article class="header_list">
                        <nav id="header">
                            <ul class="ul_list">
                                <a href="/index.html" class="a">
                                    <li class="list_objects__p">
                                        <article class="object__selected">
                                            <i class='bx bx-shopping-bag' ></i>
                                            Todos los productos
                                        </article>
                                    </li>
                                </a>
                                <a href="/views/abrigos.html" class="a">
                                    <li class="list_objects">
                                        <i class='bx bx-cloud-snow'></i>
                                        Abrigos
                                    </li>
                                </a>
                                <a href="/views/camisetas.html" class="a">
                                    <li class="list_objects">
                                        <i class='bx bxs-t-shirt'></i>
                                        Camisetas
                                    </li>
                                </a>
                                <a href="/views/pantalones.html" class="a">
                                    <li class="list_objects">
                                        <i class='bx bxs-arch'></i>
                                        Pantalones
                                    </li>
                                </a>
                            </ul>
                        </nav>
                    </article>
                </section>
            </header>
        </div>
        <div class="container_main">
            <main class="main">
                <section class="main_box">
                    <section class="main__header">
                        <article class="main__title">
                            <h1>Todos los productos</h1>
                        </article>
                    </section>
                    <section class="contenedor">
                        <section class="container">
                            <article class="prueba">
                                <article class="contenedor_img">
                                    <img src="/storage/img/abrigo01.png" class="img1">
                                </article>
                                <article class="contenedor_border">
                                    <article class="texto">
                                        <p class="p1">abrigo 01</p>
                                        <p class="p2">$93900</p>
                                    </article>
                                    <article class="contenedor_boton">
                                        <button class="boton">agregar</button>
                                    </article>
                                </article>
                            </article>
                        </section>
                        <section class="container">
                            <article class="prueba">
                                <article class="contenedor_img">
                                    <img src="/storage/img/camiseta01.png" class="img1">
                                </article>
                                <article class="contenedor_border">
                                    <article class="texto">
                                        <p class="p1">camiseta 01</p>
                                        <p class="p2">$38000</p>
                                    </article>
                                    <article class="contenedor_boton">
                                        <button class="boton">agregar</button>
                                    </article>
                                </article>
                            </article>
                        </section>
                        <section class="container">
                            <article class="prueba">
                                <article class="contenedor_img">
                                    <img src="/storage/img/pantalon01.png" class="img1">
                                </article>
                                <article class="contenedor_border">
                                    <article class="texto">
                                        <p class="p1">pantalon 01</p>
                                        <p class="p2">$58900</p>
                                    </article>
                                    <article class="contenedor_boton">
                                        <button class="boton">agregar</button>
                                    </article>
                                </article>
                            </article>
                        </section>
                        <section class="container">
                            <article class="prueba">
                                <article class="contenedor_img">
                                    <img src="/storage/img/abrigo03.png" class="img1">
                                </article>
                                <article class="contenedor_border">
                                    <article class="texto">
                                        <p class="p1">abrigo 03</p>
                                        <p class="p2">$93900</p>
                                    </article>
                                    <article class="contenedor_boton">
                                        <button class="boton">agregar</button>
                                    </article>
                                </article>
                            </article>
                        </section>
                    </section>
                    <br>
                    <section class="contenedor">
                        <section class="container">
                            <article class="prueba">
                                <article class="contenedor_img">
                                    <img src="/storage/img/camiseta03.png" class="img1">
                                </article>
                                <article class="contenedor_border">
                                    <article class="texto">
                                        <p class="p1">camiseta 03</p>
                                        <p class="p2">$29900</p>
                                    </article>
                                    <article class="contenedor_boton">
                                        <button class="boton">agregar</button>
                                    </article>
                                </article>
                            </article>
                        </section>
                        <section class="container">
                            <article class="prueba">
                                <article class="contenedor_img">
                                    <img src="/storage/img/pantalon03.png" class="img1">
                                </article>
                                <article class="contenedor_border">
                                    <article class="texto">
                                        <p class="p1">pantalon 03</p>
                                        <p class="p2">$104500</p>
                                    </article>
                                    <article class="contenedor_boton">
                                        <button class="boton">agregar</button>
                                    </article>
                                </article>
                            </article>
                        </section>
                        <section class="container">
                            <article class="prueba">
                                <article class="contenedor_img">
                                    <img src="/storage/img/abrigo02.png" class="img1">
                                </article>
                                <article class="contenedor_border">
                                    <article class="texto">
                                        <p class="p1">abrigo 02</p>
                                        <p class="p2">$93900</p>
                                    </article>
                                    <article class="contenedor_boton">
                                        <button class="boton">agregar</button>
                                    </article>
                                </article>
                            </article>
                        </section>
                        <section class="container">
                            <article class="prueba">
                                <article class="contenedor_img">
                                    <img src="/storage/img/camiseta02.png" class="img1">
                                </article>
                                <article class="contenedor_border">
                                    <article class="texto">
                                        <p class="p1">camiseta 02</p>
                                        <p class="p2">$26255</p>
                                    </article>
                                    <article class="contenedor_boton">
                                        <button class="boton">agregar</button>
                                    </article>
                                </article>
                            </article>
                        </section>
                    </section>
                    <br>
                    <section class="contenedor">
                        <section class="container">
                            <article class="prueba">
                                <article class="contenedor_img">
                                    <img src="/storage/img/pantalon02.png" class="img1">
                                </article>
                                <article class="contenedor_border">
                                    <article class="texto">
                                        <p class="p1">pantalon 02</p>
                                        <p class="p2">$104405</p>
                                    </article>
                                    <article class="contenedor_boton">
                                        <button class="boton">agregar</button>
                                    </article>
                                </article>
                            </article>
                        </section>
                        <section class="container">
                            <article class="prueba">
                                <article class="contenedor_img">
                                    <img src="/storage/img/abrigo05.png" class="img1">
                                </article>
                                <article class="contenedor_border">
                                    <article class="texto">
                                        <p class="p1">abrigo 05</p>
                                        <p class="p2">$77900</p>
                                    </article>
                                    <article class="contenedor_boton">
                                        <button class="boton">agregar</button>
                                    </article>
                                </article>
                            </article>
                        </section>
                        <section class="container">
                            <article class="prueba">
                                <article class="contenedor_img">
                                    <img src="/storage/img/camiseta05.png" class="img1">
                                </article>
                                <article class="contenedor_border">
                                    <article class="texto">
                                        <p class="p1">camiseta 05</p>
                                        <p class="p2">$29900</p>
                                    </article>
                                    <article class="contenedor_boton">
                                        <button class="boton">agregar</button>
                                    </article>
                                </article>
                            </article>
                        </section>
                        <section class="container">
                            <article class="prueba">
                                <article class="contenedor_img">
                                    <img src="/storage/img/pantalon05.png" class="img1">
                                </article>
                                <article class="contenedor_border">
                                    <article class="texto">
                                        <p class="p1">pantalon 05</p>
                                        <p class="p2">$89990</p>
                                    </article>
                                    <article class="contenedor_boton">
                                        <button class="boton">agregar</button>
                                    </article>
                                </article>
                            </article>
                        </section>
                    </section>
                    <br>
                    <section class="contenedor">
                        <section class="container">
                            <article class="prueba">
                                <article class="contenedor_img">
                                    <img src="/storage/img/abrigo04.png" class="img1">
                                </article>
                                <article class="contenedor_border">
                                    <article class="texto">
                                        <p class="p1">abrigo 04</p>
                                        <p class="p2">$102000</p>
                                    </article>
                                    <article class="contenedor_boton">
                                        <button class="boton">agregar</button>
                                    </article>
                                </article>
                            </article>
                        </section>
                        <section class="container">
                            <article class="prueba">
                                <article class="contenedor_img">
                                    <img src="/storage/img/camiseta04.png" class="img1">
                                </article>
                                <article class="contenedor_border">
                                    <article class="texto">
                                        <p class="p1">camiseta 04</p>
                                        <p class="p2">$32850</p>
                                    </article>
                                    <article class="contenedor_boton">
                                        <button class="boton">agregar</button>
                                    </article>
                                </article>
                            </article>
                        </section>
                        <section class="container">
                            <article class="prueba">
                                <article class="contenedor_img">
                                    <img src="/storage/img/pantalon04.png" class="img1">
                                </article>
                                <article class="contenedor_border">
                                    <article class="texto">
                                        <p class="p1">pantalon 04</p>
                                        <p class="p2">$61750</p>
                                    </article>
                                    <article class="contenedor_boton">
                                        <button class="boton">agregar</button>
                                    </article>
                                </article>
                            </article>
                        </section>
                    </section>
                </section>
            </main>
        </div>
        <div class="container_footer">
            <footer>
                <section class="footer box">
                    <article class="footer_list">
                        <ul class="footer__ul_list">
                            <a href="/views/carrito.html" class="a">
                                <li class="list__footer_objects">
                                    <i class='bx bxs-cart'></i>
                                    carrito
                                    <p class="footer__list_p">3</p>
                                </li>
                            </a>
                        </ul>
                    </article>
                    <article class="footer_text">
                        <p class="footer_p">© 2023 camper</p>
                    </article>
                </section>
            </footer>
        </div>
    </div>
</body>
</html>
```

## CSS:

CSS de la pagina pricipal del aplicativo. 

'style.css'

```bash
@import url(variables.css);

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Georgia, 'Times New Roman', Times, serif;
}

body{
    background-color: var(--color-background);
    width: 100%;
    height: 100vh;
}

.grid{
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-template-areas:
    "header main main main" 
    "footer main main main"
    ;
}

.container_header{
    /*background: yellow;*/
    grid-area: header;
}

.header_box{
    /*background: red;*/
    width: 100%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.header_title{
    /*background: violet;*/
    color: var(--color-letras_productos);
    width: 100%;
    height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3.5vh;
}

.header_list{
    /*background: tan;*/
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
}

.ul_list{
    list-style: none;
    line-height: 7vh;
    font-size: 3vh;
}

.a{
    color: var(--color-letras);
    text-decoration: none;
}

.list_objects, .list_objects__p{
    word-spacing: .5vh;
    font-size: 3.2vh;
}

.list_objects__p{
    /*background: red;*/
    width: 40vh;
    height: 8vh;
}

.object__selected{
    background: var(--color-back_descripcion); 
    width: 100%;
    height: 80%;
    border: .5vh solid var(--color-letras);
    display: flex;
    flex-direction: row;
    justify-items: center;
    align-items: center;
    gap: 1vh;
}

.container_main{
    /*background: lightblue;*/
    grid-area: main;
}

.main{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

.main_box{
    background: var(--color-back_productos);
    border-radius: 4vh;
    width: 95%;
    height: 90%;
    overflow: auto;
}

.main__header{
    background: var(--color-back_productos);
    width: 100%;
    height: 10vh;
    display: flex;
    align-items: center;
    padding: 0vh 5vh;
}

.main__title{
    color: var(--color-letras_productos);
    font-size: 3vh;
}

.contenedor{
    background: var(--color-back_productos);
    width: 100%;
    height: 40%;
    padding: 0vh 2.5vh;
    display: flex;
    flex-direction: row;
    justify-content: stretch;
    gap: 5vh;
}

.container{
    /*background: darkblue;*/
    width: 22%;
}

.prueba{
    /*background: lightsalmon;*/
    width: 100%;
    height: 100%;
}

.contenedor_img{
    background: white;
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
    width: 110%;
    height: 100%;
    object-fit: contain;
}

.contenedor_border{
    background: var(--color-back_descripcion);
    border: .5vh solid var(--color-texto);
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

.boton{
    background: var(--color-boton);
    color: var(--color-blanco);
    border: 1px solid var(--color-boton);
    border-radius: .7vh;
    width: 60%;
    height: 50%;
    text-transform: capitalize;
}

.container_footer{
    /*background: pink;*/
    grid-area: footer;
}

.footer_list{
    /*background: yellow;*/
    width: 100%;
    height: 25vh;
    display: flex;
    flex-direction: row;
    justify-content: stretch;
    align-items: center;
}

.footer__ul_list{
    /*background: darkcyan;*/
    list-style: none;
    text-transform: capitalize;
    padding: 0vh 9.5vh;
}

.list__footer_objects{
    display: flex;
    flex-direction: row;
    gap: 1vh;
    font-size: 3.2vh;
}

.footer__list_p{
    background: var(--color-back_descripcion);
    border: 1px solid var(--color-letras);
    width: 3vh;
    height: 4vh;
    text-align: center;
    font-size: 2.8vh;
}

.footer_text{
    /*background: lightgreen;*/
    color: var(--color-letras);
    width: 100%;
    height: 25vh;
    display: flex;
    justify-content: stretch;
    align-items: center;
    padding: 0vh 10vh;
}

.footer_p{
    font-size: 2.5vh;
    text-transform: capitalize;
}
```





## Authors

- [@KevinGalvisSA -> Kevin Santiago Galvis Arias](https://github.com/KevinGalvisSA/proyectoWeb)