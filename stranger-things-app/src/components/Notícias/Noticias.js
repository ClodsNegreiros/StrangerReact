import "./Noticias.css";
import entrevista from "../../Assets/noticias/entrevista.jpg";
import onde_está from "../../Assets/noticias/onde_está.jpg";
import quem_vai from "../../Assets/noticias/quem_vai.jpg";
import tudo from "../../Assets/noticias/tudo.jpg";

function Noticias() {
  let count = 1;
  // document.getElementById("radio1").checked = true;

  setInterval(function () {
    nextImage();
  }, 6000);

  function nextImage() {
    count++;
    if (count > 4) {
      count = 1;
    }
    document.getElementById("radio" + count).checked = true;
  }

  return (
    <>
      <h1 id="h1-noticias">Notícias</h1>
      <div className="slider">
        <section id="carrossel" className="main-sections">
          <div className="slides">
            <input type="radio" name="radio-btn" id="radio1"></input>
            <input type="radio" name="radio-btn" id="radio2"></input>
            <input type="radio" name="radio-btn" id="radio3"></input>
            <input type="radio" name="radio-btn" id="radio4"></input>
            <div className="slide first">
              <img src={entrevista} alt="imagem1" />
            </div>
            <div className="slide">
              <img src={onde_está} alt="imagem2" />
            </div>
            <div className="slide">
              <img src={tudo} alt="imagem3" />
            </div>
            <div className="slide">
              <img src={quem_vai} alt="imagem4" />
            </div>
            <div className="navigation-auto">
              <div className="auto-btn1"></div>
              <div className="auto-btn2"></div>
              <div className="auto-btn3"></div>
              <div className="auto-btn4"></div>
            </div>
          </div>
          <div className="manual-navigation">
            <label htmlFor="radio1" className="manual-btn"></label>
            <label htmlFor="radio2" className="manual-btn"></label>
            <label htmlFor="radio3" className="manual-btn"></label>
            <label htmlFor="radio4" className="manual-btn"></label>
          </div>
        </section>
      </div>
    </>
  );
}

export default Noticias;
