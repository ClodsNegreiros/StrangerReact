import "./Personagens.css";
import personagens from "../../Json/personagens";

import React, { useState } from "react";

function Personagens() {

  async function fetchStrange() {
    let url = "https://strangerthings-quotes.vercel.app/api/quotes/100";

    try {
      const response = await fetch(url);
      const transformJson = response.json();
      const result = await transformJson;

      for (let i = 1; i <= 40; i++) {
        if (i === 1 ) {
          alert(`Autora: ${result[i].author}\nFrase: ${result[i].quote}`)
          break
        }
      }
      
    } catch (error) {
      console.log(error.message);
    }

  }
  

  const [busca, setBusca] = useState("");
  const [buscaMsg, setBuscaMsg] = useState(false);

  const personagemValido = () => {
    const regEx = /^([a-zA-Z]+ )*[a-zA-Z]+$/gm;

    if (!regEx.test(busca) && busca === "") {
      setBuscaMsg(
        "Formato inválido! Tente usar somente letras sem caracteres especiais."
      );
    } else {
      setBuscaMsg("");
    }
  };

  const createPerson = ({ id, link, imagem, nome, ator }) => {
    return `
    <div id="div-personagens-${id}">
        <div class="div-personagens ${id}">
        <a href="${link}">
            <img class="img-personagens" src="${imagem}">
        </a>
            <button type='reset' class="lixeira" onclick = "del(${id})" >
                <i class="fa-sharp fa-solid fa-trash-can bg-transparent p-1 pb-2 ps-2"></i>
            </button>
            <h3 class="bg-red">${nome}</h3>
            <h4 class="bg-red">${ator}</h4>
        
        </div>
    </div>`;
  };

  const PersonContent = personagens
    .map((personagem) => createPerson(personagem))
    .filter((nome) => nome.toLowerCase().trim().includes(busca))
    .join("");

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
                onInput={personagemValido}
                values={busca}
                onChange={(ev) => setBusca(ev.target.value)}
              />
            </div>
            <button
              type="button top-0"
              name="exampleDataList"
              id="btn-secondary"
              className="btn btn-danger border-0"
            >
              Reverter
            </button>
          </div>

          <div className="mt-2" id="msg-erro">
            <h3>{buscaMsg}</h3>
          </div>
          <section
            id="cards"
            className="cards"
            dangerouslySetInnerHTML={{ __html: PersonContent }}
          ></section>
        </form>
        <div>
          <h3>Random Strange Quotes:</h3>
          <button className="btn strange-button" onClick={fetchStrange}>Receber frase</button>
        </div>
      </section>
    </div>
  );
}

export default Personagens;
