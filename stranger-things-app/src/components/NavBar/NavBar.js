function NavBar() {
    return (
        <div className ="navbar">
            <nav>
                <a href="#">
                    <img src="./imagens/stranger_things.png" alt="Logo de Stranger Things"></img>
                </a>
                <div class="mobile-menu">
                    <div class="line1"></div>
                    <div class="line2"></div>
                    <div class="line3"></div>
                </div>
                <ul class="nav-list">
                    <li>
                        <a href="#sobre">Sobre</a>
                    </li>
                    <li id="li-noticias">
                        <a href="#h1-noticias">Notícias</a>
                    </li>
                    <li>
                        <a href="#personagens">Personagens</a>
                    </li>
                    <li>
                        <a id="temporadas-nav" href="#temporadas">Temporadas</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar