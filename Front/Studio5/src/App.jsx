import Home from './components/Home/Home.jsx';
import Actividades from './components/Actividades/Actividades.jsx';
import Contacto from './components/Contacto/Contacto.jsx';
import Nosotros from './components/Nosotros/Nosotros.jsx';
import './App.css';
import Navegacion from './components/Navegacion/Navegacion.jsx';

function App() {
  
  return (
    <div className="App">
      <Navegacion />
      <div id="home" className="section">
        <Home />
      </div>
      <div id="actividades" className="section">
        <Actividades />
      </div>
      <div id="nosotros" className="section">
        <Nosotros />
      </div>
      <div id="contacto" className="section">
        <Contacto />
      </div>
    </div>
  );
  
}

export default App;
