function Personagens() {
    return(
        <div className="main-section">
            <h1 id="h1-personagens">Personagens</h1>
            <form id="form-pesquisa">
                <label htmlFor="exampleDataList" className="form-label mb-3">Procure pelo seu personagem favorito aqui:</label>
                <div className="submit d-flex flex-row flex-nowrap align-items-start justify-content-center">
                    <div id="pesquisa">
                        <input className="form-control" name="exampleDataList" list="datalistOptions" id="exampleDataList" placeholder="Pesquise um personagem"  onblur="validar(this)"/>
                            <div className="mt-2" id="msg-erro" style="color:red;"></div>
                        <datalist id="datalistOptions">
                            <option value="Eleven / Onze"/>
                            <option value="Mike"/>
                            <option value="Will"/>
                            <option value="Dustin"/>
                            <option value="Lucas"/>
                            <option value="Max"/>
                        </datalist>
                    </div>
                    <button type="button top-0" name="exampleDataList" id="btn-secondary" className="btn btn-danger border-0" onclick="Revert()">Reverter</button>
                </div>
                <section id="cards" className="main-sections d-flex text-center flex-row flex-wrap justify-content-around align-content-around pb-0">
                </section>
            </form>
        </div>
    )
}

export default Personagens
