import './App.css';
import Footer from './components/Footer.js/Footer';
import NavBar from './components/NavBar/NavBar'
import Noticias from './components/Notícias/Noticias';
import Personagens from './components/Personagens/Personagens';
import Sobre from './components/Sobre/Sobre';
import Temporadas from './components/Temporadas/Temporadas';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Sobre />
      <Noticias />
      {/* <Personagens /> */}
      <Temporadas />
      <Footer />
    </div>
  );
}

export default App;
