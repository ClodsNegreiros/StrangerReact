import "./Temporadas.css";
import temporadasSettings from "../../Json/model-temporadas";

import Resumo from "./Resumo";
import Temps from "./Temps";

function Temporadas() {

  const resumo = temporadasSettings.resumo1;
 

  return (
    <>
      <main className="main-temporadas d-flex flex-column justify-content-center text-center">
        <picture ></picture>
        <div className="res-temp">
          <h1 className="mb-5 text-center color-red">Resumo</h1>
          <div id="resumo">
            <Resumo resumo={resumo}/>
          </div>
        </div>
        <section className="section-temporadas">
          <Temps numero_capitulo={3} titulo_capitulo={3}/>
        </section>
      </main>
    </>
  );
}

export default Temporadas;
