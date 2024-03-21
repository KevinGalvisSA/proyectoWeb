# LandingPage - Pagina Web |-Hamburgesas-|

En esta documentacion se abarcan los siguientes contenidos:


`Introduccion`

`Evidencias funcionalidad`

`Codigos HTML y CSS`

`Variables`

# Introduccion:

!Importante¡
------------------------------------------------------------------------------------------
- Este repositorio forma parte de un proyexto 'academico', por ende. Se informa el no interpretar la pagina como un sitio web de verdad.
------------------------------------------------------------------------------------------
-Pagina web enfocada en la venta de hamburguesas, presentando distintos apartados para una mayor facilidad de manejo y compresion.

-Es importante saber que este proyecto toma en cuenta las indicaciones presentadas por el trainer a cargo de la actividad.


## 🔗 Link
[![page_1](https://img.shields.io/badge/page_1-blue?style=for-the-badge&logo=ko-fi&logoColor=white)](https://youtu.be/wN5JUk00xm0)




# 👩‍💻 Codigos:

## HTML:

```bash
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://unpkg.com/boxicons@latest/css/boxicons.min.css">
</head>
<body>
    <header class="header">
        <div class="container_header">
            <section class="item_header__left">
                <article class="header_left">
                    <h4>foods</h4>
                </article>
            </section>
            <section class="item_header__right">
                <article class="header_right">
                    <ul class="header_list">
                        <a href="#home" class="header_a"><li class="header_li">home</li></a>
                        <a href="#about" class="header_a"><li class="header_li">about</li></a>
                        <a href="#menu" class="header_a"><li class="header_li">menu</li></a>
                        <a href="#services" class="header_a"><li class="header_li">service</li></a>
                        <a href="#bottom" class="header_a"><li class="header_li">contact</li></a>
                    </ul>
                </article>
            </section>
        </div>
    </header>
    <main class="main">
        <section class="container_main" id="home">
            <section class="item_main__title">
                <article class="main__title">
                    <h1 class="title_main">full website</h1>
                </article>
            </section>
            <section class="item_main__text">
                <article class="main__text">
                    <p class="text_main"><span class="text_bigger">foods</span> the <br> <span class="text_bigger">most</span> precious thing</p>
                </article>
            </section>
            <section class="item_main__button">
                <article class="main__button">
                    <button class="button_main">today's menu</button>
                </article>
            </section>
            <section class="item_main__image">
                <article class="main__image">
                    <img src="/storage/img/home.png" class="image_home">
                </article>
            </section>
        </section>
    </main>
    <section class="container_about" id="about">
        <section class="item_about__image">
            <article class="about__image">
                <img src="/storage/img/about.png" class="image_about">
            </article>
        </section>
        <section class="item_about__firstT">
            <article class="about_firstT">
                <h4 class="firstT__about">about us</h4>
            </article>
        </section>
        <section class="item_about__secondT">
            <article class="about_secondT">
                <h2 class="secondT__about"><span class="bigger_secondT">we</span> speak the good food language</h2>
            </article>
        </section>
        <section class="item_about__text">
            <article class="about_text">
                <p class="text__about">It is a long established fact that a be distracted by the readable content looking at its layout. The point of</p>
            </article>
        </section>
        <section class="item_about__button">
            <article class="about__button">
                <button class="button_about">learn more</button>
            </article>
        </section>
    </section>
    <section class="container_menu" id="menu">
        <section class="item_menu__firstT">
            <article class="menu_firstT">
                <h4 class="firstT__menu">food menu</h4>
            </article>
        </section>
        <section class="item_menu__secondT">
            <article class="menu_secondT">
                <h2 class="secondT__menu"><span class="bigger_menu__secondT">fresh</span> taste and great price</h2>
            </article>
        </section>
        <section class="item_menu__firstimg">
            <article class="menu_firstimg">
                <article class="firstimg_icon">
                    <i class='bx bx-loader'></i>
                </article>
                <article class="firstimg_img">
                    <img src="/storage/img/food1.png" class="menu_image1">
                </article>
                <article class="firstimg_namefood">
                    <h4>chicken burger</h4>
                </article>
                <article class="firstimg_description">
                    <p>tasty food</p>
                </article>
                <article class="firstimg_price">
                    <p>$11.00</p>
                </article>
            </article>
        </section>
        <section class="item_menu__secondimg">
            <article class="menu_secondimg">
                <article class="secondimg_icon">
                    <i class='bx bx-loader'></i>
                </article>
                <article class="secondimg_img">
                    <img src="/storage/img/food2.png" class="menu_image2">
                </article>
                <article class="secondimg_namefood">
                    <h4>special beef burger</h4>
                </article>
                <article class="secondimg_description">
                    <p>tasty food</p>
                </article>
                <article class="secondimg_price">
                    <p>$11.00</p>
                </article>
            </article>
        </section>
        <section class="item_menu__thirdimg">
            <article class="menu_thirdimg">
                <article class="thirdimg_icon">
                    <i class='bx bx-loader'></i>
                </article>
                <article class="thirdimg_img">
                    <img src="/storage/img/food3.png" class="menu_image3">
                </article>
                <article class="thirdimg_namefood">
                    <h4>chicken fry pack</h4>
                </article>
                <article class="thirdimg_description">
                    <p>tasty food</p>
                </article>
                <article class="thirdimg_price">
                    <p>$11.00</p>
                </article>
        </article>
        </section>
    </section>
    <section class="container_services" id="services">
        <section class="item_services__firstT">
            <article class="services_firstT">
                <h4 class="firstT__services">services</h4>
            </article>
        </section>
        <section class="item_services__secondT">
            <article class="services_secondT">
                <h2 class="secondT__services"><span class="bigger_services__secondT">we</span> provide best food services</h2>
            </article>
        </section>
        <section class="item_services__firstimg">
            <article class="services_firstimg">
                <article class="services__firstimg_img">
                    <img src="/storage/img/s1.png" class="services_image1">
                </article>
            </article>
        </section>
        <section class="item_services__secondimg">
            <article class="services_secondimg">
                <article class="services__secondimg_img">
                    <img src="/storage/img/s2.png" class="services_image2">
                </article>
            </article>
        </section>
        <section class="item_services__thirdimg">
            <article class="services_thirdimg">
                <article class="services__thirdimg_img">
                    <img src="/storage/img/s3.png" class="services_image3">
                </article>
            </article>
        </section>
        <section class="item_services__title1">
            <article class="services_title1">
                <h3 class="title1__services">order</h3>
            </article>
        </section>
        <section class="item_services__title2">
            <article class="services_title2">
                <h3 class="title3__services">shipping</h3>
            </article>
        </section>
        <section class="item_services__title3">
            <article class="services_title3">
                <h3 class="title3__services">dellvered</h3>
            </article>
        </section>
        <section class="item_services__parrafo1">
            <article class="services_parrafo1">
                <p class="parrafo1__services">It is a long established be distracted by the readable looking at its layout.</p>
            </article>
        </section>
        <section class="item_services__parrafo2">
            <article>
                <p class="parrafo2__services">It is a long established be distracted by the readable looking at its layout.</p>
            </article>
        </section>
        <section class="item_services__parrafo3">
            <article>
                <p class="parrafo3__services">It is a long established be distracted by the readable looking at its layout.</p>
            </article>
        </section>
    </section>
    <section class="container_bottom" id="bottom">
        <section class="item_bottom__caja">
            <article class="bottom__caja">
                <h1 class="bottom_text">we make quality food <br> everyday</h1>
            </article>
            <article class="bottom_button">
                <button class="button__bottom">learn more</button>
            </article>
        </section>
    </section>
    <footer id="footer">
        <div class="container_footer">
            <section>
                <article class="footer__links">
                    <h4 class="links_title">menu links</h4>
                    <p class="footer_line">━━━━━━━</p>
                    <ul class="links_list">
                        <li class="list_option">home</li>
                        <li class="list_option">about</li>
                        <li class="list_option">menu</li>
                        <li class="list_option">service</li>
                        <li class="list_option">contact</li>
                    </ul>
                </article>
            </section>
            <section>
                <article class="footer__Oservice">
                    <h4 class="ourservice_title">our service</h4>
                    <p class="footer_line">━━━━━━</p>
                    <ul class="links_list">
                        <li class="list_option">web design</li>
                        <li class="list_option">web development</li>
                        <li class="list_option">marketing</li>
                        <li class="list_option">product management</li>
                        <li class="list_option">graphic design</li>
                    </ul>
                </article>
            </section>
            <section>
                <article class="footer__information">
                    <h4 class="information_title">information</h4>
                    <p class="footer_line">━━━━━━</p>
                    <ul class="links_list">
                        <li class="list_option">about us</li>
                        <li class="list_option">delivery information</li>
                        <li class="list_option">privacy policy</li>
                        <li class="list_option">terms & conditions</li>
                    </ul>
                </article>
                </article>
            </section>
            <section>
                <article class="footer__contact">
                    <h4 class="contact_title">contact us</h4>
                    <p class="footer_line">━━━━━━</p>
                    <ul class="icons_list">
                        <li class="list_icons"><i class='bx bxl-facebook-circle'></i></li>
                        <li class="list_icons"><i class='bx bxl-instagram'></i></li>
                        <li class="list_icons"><i class='bx bxl-twitter' ></i></li>
                        <li class="list_icons"><i class='bx bxs-phone' ></i></li>
                    </ul>
                </article>
            </section>
        </div>
    </footer>
</body>
</html>
```

## CSS:

```bash
@import url(variables.css);
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Poppins';
}

body{
    background-color: var(--color-secundario);
}

.header{
    background: var(--color-secundario);
    position: sticky;
    top: 0;
}

.container_header{
    /*background: blueviolet;*/
    width: 100%;
    height: 13vh;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(1, 1fr);
    grid-template-areas: 
    "headerL headerL . . headerR headerR headerR headerR"
    ;
}

.item_header__left{
    /*background: violet;*/
    grid-area: headerL;
}

.header_left{
    /*background: red;*/
    color: var(--color-terciario);
    width: 100%;
    height: 100%;
    font-size: 5vh;
    text-transform: capitalize;
    display: flex;
    justify-content: center;
    align-items: center;
}

.item_header__right{
    /*background: blue;*/
    grid-area: headerR;
}

.header_right{
    /*background: yellow;*/
    width: 100%;
    height: 13vh;
}

.header_list{
    /*background: teal;*/
    width: 100%;
    height: 100%;
    padding: 0vh 3vh;
    list-style: none;
    gap: 3vh;
    display: flex;
    justify-content: end;
    align-items: center;
}

.header_a{
    background: var(--color-secundario);
    color: var(--color-primario);
    border: none;
    width: 15vh;
    height: 4vh;
    font-size: 2.3vh;
    text-decoration: none;
    text-transform: capitalize;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
}

.header_a:hover{
    border: 1px solid var(--color-quinto);
    color: var(--color-terciario);
}

.main{
    width: 100%;
    height: 100vh;
}

.container_main{
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(8, 1fr);
    grid-template-areas: 
    ". . . . . . ."
    ". . . . imagen imagen ."
    ". titulo titulo titulo imagen imagen ."
    ". texto texto . imagen imagen ."
    ". boton boton . imagen imagen ."
    ". . . . imagen imagen ."
    ". . . . . . ."
    ;
}

.item_main__title{
/*background: red;*/
grid-area: titulo;
}

.main__title{
    /*background: darkgray;*/
    width: 98%;
    height: 100%;
    padding: 0vh 7vh;
    display: flex;
    align-items: center;
}

.title_main{
    color: var(--color-terciario);
    font-size: 10vh;
    letter-spacing: .3vh;
    text-transform: capitalize;
}

.item_main__text{
    /*background: blanchedalmond;*/
    grid-area: texto;
}

.main__text{
    /*background: red;*/
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: stretch;
    align-items: center;
}

.text_main{
    /*background: red;*/
    color: var(--color-primario);
    padding: 0vh 7vh;
    font-size: 3.8vh;
    word-spacing: 7px;
}

.text_bigger{
    text-transform: capitalize;
}

.item_main__button{
    /*background: lightpink;*/
    grid-area: boton;
}

.main__button{
    /*background: lightseagreen;*/
    width: 100%;
    height: 100%;
    padding: 0px 7vh;
    display: flex;
    align-items: center;
}

.button_main{
    background: var(--color-terciario);
    color: var(--color-primario);
    border: 1px solid var(--color-terciario);
    width: 20vh;
    height: 6vh;
    font-size: 2.35vh;
    text-align: center;
    text-transform: capitalize;
    letter-spacing: .05em;
    cursor: pointer;
}

.item_main__image{
    /*background: darkgoldenrod;*/
    grid-area: imagen;
    display: flex;
    align-items: center;
}

.main__image{
    /*background: yellow;*/
    width: 100%;
    height: 100%;
}

.main__image .image_home{
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.container_about{
    background: var(--color-secundario);
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(8, 1fr);
    grid-template-areas: 
    ". . . . . . ."
    ". . . . . . ."
    ". img img primerT . . ."
    ". img img segundoT segundoT segundoT ."
    ". img img textab textab textab ."
    ". img img boton boton . ."
    ". . . . . . ."
    ". . . . . . ."
    ;
}

.item_about__image{
    /*background: red;*/
    grid-area: img;
}

.image_about{
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.item_about__firstT{
    /*background: yellow;*/
    grid-area: primerT;
    width: 31vh;
}

.about_firstT{
    /*background: red;*/
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: end;
    align-items: end;
}

.firstT__about{
    color: var(--color-terciario);
    font-size: 2.5vh;
    text-transform: capitalize;
}

.item_about__secondT{
    /*background: lightblue;*/
    grid-area: segundoT;
}

.about_secondT{
    /*background: red;*/
    width: 100vh;
    height: 100%;
    padding: 0vh 19.5vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.secondT__about{
    color: var(--color-primario);
    font-size: 6.1vh;
}

.bigger_secondT{
    text-transform: capitalize;
}

.item_about__text{
    /*background: lightgreen;*/
    grid-area: textab;
}

.about_text{
    /*background: red;*/
    width: 96vh;
    height: 100%;
    padding: 0vh 19.5vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.text__about{
    color: var(--color-primario);
    letter-spacing: .2vh;
    font-size: 2.7vh;
}

.item_about__button{
    /*background: lightpink;*/
    grid-area: boton;
}

.about__button{
    /*background: lightseagreen;*/
    width: 97%;
    height: 100%;
    display: flex;
    justify-content: stretch;
    padding: 2vh 19.5vh;
}

.button_about{
    background: var(--color-terciario);
    color: var(--color-primario);
    border: 1px solid var(--color-terciario);
    width: 20vh;
    height: 5vh;
    font-size: 2.3vh;
    text-transform: capitalize;
    letter-spacing: .1vh;
    cursor: pointer;
}

.container_menu{
    background: var(--color-secundario);
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(9, 1fr);
    grid-template-areas: 
    ". . . . . . . . . ."
    ". . . . primerT primerT . . . ."
    ". . segunT segunT segunT segunT segunT segunT . ."
    ". . . . . . . . . ."
    ". primeraimg primeraimg primeraimg segundaimg segundaimg terceraimg terceraimg terceraimg ."
    ". primeraimg primeraimg primeraimg segundaimg segundaimg terceraimg terceraimg terceraimg ."
    ". primeraimg primeraimg primeraimg segundaimg segundaimg terceraimg terceraimg terceraimg ."
    ". primeraimg primeraimg primeraimg segundaimg segundaimg terceraimg terceraimg terceraimg ."
    ". . . . . . . . . ."
    ;
}

.item_menu__firstT{
    /*background: red;*/
    grid-area: primerT;
}

.menu_firstT{
    color: var(--color-terciario);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: end;
}

.firstT__menu{
    font-size: 2.2vh;
    word-spacing: 1vh;
    text-transform: capitalize;
}

.item_menu__secondT{
    /*background: blue;*/
    grid-area: 3 / 3 / 4 / 9;
}

.menu_secondT{
    color: var(--color-primario);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.secondT__menu{
    word-spacing: 2vh;
    font-size: 5.7vh;
}

.bigger_menu__secondT{
    text-transform: capitalize;
}

.item_menu__firstimg{
    background: var(--color-secundario);
    grid-area: primeraimg;
    display: flex;
    justify-content: end;
    padding: 0vh 2vh;
}

.menu_firstimg{
    background: var(--color-cuarto);
    width: 75%;
    height: 100%;
}

.firstimg_icon{
    width: 100%;
    display: flex;
    justify-content: end;
    font-size: 3.7vh;
}

.bx.bx-loader{
    background: var(--color-terciario);
}

.firstimg_img{
    /*background: red;*/
    width: 100%;
    height: 60%;
}

.menu_image1{
    width: 100%;
    height: 90%;
    object-fit: contain;
}

.firstimg_namefood{
    /*background: lightgreen;*/
    height: 9%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3vh;
    text-transform: capitalize;
}

.firstimg_description{
    /*background: lightpink;*/
    height: 9%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2vh;
    letter-spacing: .2vh;
    text-transform: capitalize;
}

.firstimg_price{
    /*background: lightskyblue;*/
    color: var(--color-terciario);
    height: 7%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2vh;
    text-transform: capitalize;
}

.item_menu__secondimg{
    background: var(--color-cuarto);
    grid-area: segundaimg;
}

.menu_secondimg{
    width: 100%;
    height: 100%;
}

.secondimg_icon{
    display: flex;
    justify-content: end;
    font-size: 3.7vh;
}

.bx.bx-loader{
    background: var(--color-terciario);
}

.secondimg_img{
    /*background: red;*/
    width: 100%;
    height: 60%;
}

.menu_image2{
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.secondimg_namefood{
    /*background: lightgreen;*/
    height: 9%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3vh;
    text-transform: capitalize;
}

.secondimg_description{
    /*background: lightpink;*/
    height: 9%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2vh;
    letter-spacing: .2vh;
    text-transform: capitalize;
}

.secondimg_price{
    /*background: lightskyblue;*/
    color: var(--color-terciario);
    height: 7%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2vh;
    text-transform: capitalize;
}

.item_menu__thirdimg{
    background: var(--color-secundario);
    grid-area: terceraimg;
    display: flex;
    justify-content: stretch;
    padding: 0px 20px;
}

.menu_thirdimg{
    background: var(--color-cuarto);
    width: 75%;
    height: 100%;
}

.thirdimg_icon{
    width: 100%;
    display: flex;
    justify-content: end;
    font-size: 3.7vh;
}

.bx.bx-loader{
    background: var(--color-terciario);
}

.thirdimg_img{
    /*background: red;*/
    width: 100%;
    height: 55%;
}

.menu_image3{
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.thirdimg_namefood{
    /*background: lightgreen;*/
    height: 15%;
    display: flex;
    justify-content: center;
    align-items: end;
    font-size: 3vh;
    text-transform: capitalize;
}

.thirdimg_description{
    /*background: lightpink;*/
    height: 9%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2vh;
    letter-spacing: .2vh;
    text-transform: capitalize;
}

.thirdimg_price{
    /*background: lightskyblue;*/
    color: var(--color-terciario);
    height: 7%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2vh;
    text-transform: capitalize;
}

.container_services{
    background: var(--color-secundario);
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(11, 1fr);
    grid-template-areas: 
    ". . . . . . . . . . . ."
    ". . . . primerT primerT primerT primerT . . . ."
    ". . . segunT segunT segunT segunT segunT segunT . . ."
    ". . . . . . . . . . . ."
    ". . primeraimg primeraimg . segundaimg segundaimg . terceraimg terceraimg . ."
    ". . primeraimg primeraimg . segundaimg segundaimg . terceraimg terceraimg . ."
    ". . primeraimg primeraimg . segundaimg segundaimg . terceraimg terceraimg . ."
    ". . title1 title1 . title2 title2 . title3 title3 . ."
    ". . p1 p1 . p2 p2 . p3 p3 . ."
    ". . p1 p1 . p2 p2 . p3 p3 . ."
    ". . . . . . . . . . . ."
    ;
}

.item_services__firstT{
    /*background: red;*/
    grid-area: primerT;
}

.services_firstT{
    color: var(--color-terciario);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: end;
}

.firstT__services{
    font-size: 2.5vh;
    word-spacing: 1vh;
    text-transform: capitalize;
}

.item_services__secondT{
    /*background: lightblue;*/
    grid-area: segunT;
}

.services_secondT{
    color: var(--color-primario);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.secondT__services{
    word-spacing: 2vh;
    font-size: 5.7vh;
}

.bigger_services__secondT{
    text-transform: capitalize;
}

.item_services__firstimg{
    /*background: darkkhaki;*/
    grid-area: primeraimg;
}

.services__firstimg_img{
    display: flex;
    justify-content: center;
}

.services_image1{
    width: 85%;
    height: 100%;
    object-fit: contain;
}

.item_services__secondimg{
    /*background: lightslategray;*/
    grid-area: segundaimg;
}

.services__secondimg_img{
    display: flex;
    justify-content: center;
}

.services_image2{
    width: 85%;
    height: 100%;
    object-fit: contain;
}

.item_services__thirdimg{
    /*background: darkturquoise;*/
    grid-area: terceraimg;
}

.services__thirdimg_img{
    display: flex;
    justify-content: center;
}

.services_image3{
    width: 80%;
    height: 100%;
    object-fit: contain;
}

.item_services__title1{
    /*background: lightsalmon;*/
    grid-area: title1;
}

.services_title1{
    color: var(--color-terciario);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.title1__services{
    font-size: 3.3vh;
    text-transform: capitalize;
}

.item_services__title2{
    /*background: lightgreen;*/
    grid-area: title2;
}

.services_title2{
    color: var(--color-terciario);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.title2__services{
    font-size: 3.3vh;
    text-transform: capitalize;
}

.item_services__title3{
    /*background: lightpink;*/
    grid-area: title3;
}

.services_title3{
    color: var(--color-terciario);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.title3__services{
    font-size: 3.3vh;
    text-transform: capitalize;
}

.item_services__parrafo1{
    /*background: red;*/
    grid-area: p1;
    width: 37vh;
}

.services_parrafo1{
    display: flex;
    justify-content: center;
}

.parrafo1__services{
    color: var(--color-primario);
    font-size: 2.8vh;
    word-spacing: .7vh;
    text-align: center;
}

.item_services__parrafo2{
    /*background: darkolivegreen;*/
    grid-area: p2;
    width: 37vh;
}

.services_parrafo2{
    display: flex;
    justify-content: center;
}

.parrafo2__services{
    color: var(--color-primario);
    font-size: 2.8vh;
    word-spacing: .7vh;
    text-align: center;
}

.item_services__parrafo3{
    /*background: lawngreen;*/
    grid-area: p3;
    width: 37vh;
}

.parrafo3__services{
    color: var(--color-primario);
    font-size: 2.8vh;
    word-spacing: .7vh;
    text-align: center;
}

.services_parrafo3{
    display: flex;
    justify-content: center;
}

.container_bottom{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.item_bottom__caja{
    background: var(--color-cuarto);
    width: 90%;
    height: 70%;
}

.bottom__caja{
    /*background: red;*/
    width: 100%;
    height: 50vh;
    padding: 12vh 0vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.bottom_text{
    /*background: yellow;*/
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: end;
    font-size: 6vh;
    gap: 2.5vh;
    word-spacing: 1vh;
    text-align: center;
    text-transform: capitalize;
}

.bottom_button{
    display: flex;
    justify-content: center;
}

.button__bottom{
    background: var(--color-terciario);
    color: var(--color-primario);
    border: 1px solid var(--color-terciario);
    width: 20vh;
    height: 5vh;
    font-size: 2.3vh;
    text-transform: capitalize;
    letter-spacing: .2vh;
    cursor: pointer;
}

.container_footer{
    /*background: yellow;*/
    width: 100%;
    height: 40vh;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
}

.footer_line{
    color: var(--color-terciario);
}

.links_title, .footer_line{
    line-height: 2.2vh;
}

.list_option{
    color: var(--color-primario);
    list-style: none;
    font-size: 2.3vh;
    line-height: 3vh;
    text-transform: capitalize;
}

.links_title, .ourservice_title, .information_title, .contact_title{
    color: var(--color-primario);
    font-size: 2.7vh;
    text-transform: capitalize;
}

.footer_line{
    color: var(--color-terciario);
}

.links_title, .footer_line{
    line-height: 2.2vh;
}

.list_option{
    color: var(--color-primario);
    list-style: none;
    font-size: 2.3vh;
    line-height: 3vh;
    text-transform: capitalize;
}

.footer__information{
    /*background: red;*/
    width: 100%;
    height: 20vh;
}

.footer__contact{
    /*background: yellow;*/
    width: 100%;
    height: 20vh;
}

.icons_list{
    color: var(--color-terciario);
    list-style: none;
    font-size: 4vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1vh;
}
```





## Authors

- [@KevinGalvisSA -> Kevin Santiago Galvis Arias](https://github.com/KevinGalvisSA/proyectoWeb)