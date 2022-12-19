import "./Personagens.css";
import personagens from "../../Json/personagens";

function Personagens() {

  const createPerson = ({ id, link, imagem, nome, ator }) => {

    return `
    <div id="div-personagens-${id}">
        <div class="div-personagens ${id}">
        <a href="${link}">
            <img class="img-personagens" src="${imagem}">
        </a>
            <button type='reset' class="lixeira" onclick = "Delete(${id})" >
                <i class="fa-sharp fa-solid fa-trash-can bg-transparent p-1 pb-2 ps-2"></i>
            </button>
            <h3 class="bg-red">${nome}</h3>
            <h4 class="bg-red">${ator}</h4>
        
        </div>
    </div>`
  };

  const PersonContent = personagens
    .map((personagem) => createPerson(personagem))
    .join("");

  const validar = (event) => {
    return "oi";
  };

  const Revert = () => {
    PersonContent.dangerouslySetInnerHTML = PersonContent
  }

  return (
    <div id="h1" className="main-sections">
      <section className="main-sections">
        <h1 id="h1">Personagens</h1>
        <form id="form-pesquisa">
          <label htmlFor="exampleDataList" className="form-label mb-3">
            Procure pelo seu personagem favorito aqui:
          </label>
          <div className="central">
            <div id="pesquisa">
              <input
                className="form-control"
                name="exampleDataList"
                list="datalistOptions"
                id="exampleDataList"
                placeholder="Pesquise um personagem"
                onBlur={validar}
              />
              <div className="mt-2" id="msg-erro"></div>
              <datalist id="datalistOptions">
                <option value="Eleven / Onze" />
                <option value="Mike" />
                <option value="Will" />
                <option value="Dustin" />
                <option value="Lucas" />
                <option value="Max" />
              </datalist>
            </div>
            <button
              type="button top-0"
              name="exampleDataList"
              id="btn-secondary"
              className="btn btn-danger border-0"
              onClick={Revert}
            >
              Reverter
            </button>
          </div>
          <section id="cards" className="cards" dangerouslySetInnerHTML={{__html:PersonContent}}></section>
        </form>
      </section>
    </div>
  );
}

export default Personagens;
