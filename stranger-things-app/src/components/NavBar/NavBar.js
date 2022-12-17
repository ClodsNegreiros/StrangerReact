import stranger_things from '../../Assets/Principais/stranger_things.png'

import './NavBar.css'

function NavBar() {
    return (
        <div className ="navbar">
            <nav>
                <a href="#">
                    <img src={stranger_things} alt="Logo de Stranger Things"></img>
                </a>
                <div className="mobile-menu">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
                <ul className="nav-list">
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