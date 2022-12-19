function Temps({ imagem, numero_capitulo, titulo_capitulo}) {
  return (
    <div>
      <img className="img-temp" src={imagem} />
      <div>
        <h1 className="capitulos1 mb-5">Capítulos</h1>
        <div className="cap-temp" id="cap-temp">
          <div className="">
            <h4>Capítulo {numero_capitulo}:</h4>
            <h4 className="ms-2 color-red">{titulo_capitulo}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Temps;
