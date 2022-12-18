import './Temporadas.css';

function Temporadas() {

    const temporadas = [
        {
            temporada: '1'
        },
        {
            temporada: '2'
        },
        {
            temporada: '3'
        },
        {
            temporada: '4'
        }
    ]
    
    function createTemporadas({ temporada }) {
        return `<a class="text-decoration-none" href="html/temporadas.html?${temporada}">
            <div id="temporada${temporada}" class="div-temporadas d-flex flex-column justify-content-center align-items-center">
                <h1 class="h1-temporadas mb-0">${temporada}ª</h1>
                <h2 class="h2-temporadas mb-0">Temporada</h2>
            </div>
        </a>`
    }
    
    const temporadasContent = temporadas
        .map((temporadas) => createTemporadas(temporadas))
        .join('');
    
    
    return(
        <div className="main-sections temp">
            <h1 id="h1-temporadas" className="temporadas">Temporadas</h1>
            <section
            dangerouslySetInnerHTML={{__html:temporadasContent}}
            >
                
            </section>
        </div>
    )
}

export default Temporadas