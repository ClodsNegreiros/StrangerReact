function Noticias() {
    return (
        <div className="slider">
            <div className="slides">
                    <input type="radio" name="radio-btn" id="radio1"></input>
                    <input type="radio" name="radio-btn" id="radio2"></input>
                    <input type="radio" name="radio-btn" id="radio3"></input>
                    <input type="radio" name="radio-btn" id="radio4"></input>

                    <div className="slide first">
                        <img src="./imagens/noticias/entrevista.jpg" alt="imagem1" />
                    </div>
                    <div className="slide">
                        <img src="./imagens/noticias/onde-está.jpg" alt="imagem2" />
                    </div>
                    <div className="slide">
                        <img src="./imagens/noticias/tudo.jpg" alt="imagem3" />
                    </div>
                    <div className="slide">
                        <img src="./imagens/noticias/quem-vai.jpg" alt="imagem4" />
                    </div>

                    <div className="navigation-auto">
                        <div className="auto-btn1"></div>
                        <div className="auto-btn2"></div>
                        <div className="auto-btn3"></div>
                        <div className="auto-btn4"></div>
                    </div>
                </div>

                <div className="manual-navigation">
                    <label for="radio1" className="manual-btn"></label>
                    <label for="radio2" className="manual-btn"></label>
                    <label for="radio3" className="manual-btn"></label>
                    <label for="radio4" className="manual-btn"></label>
                </div>
        </div>
    )
}

export default Noticias
