import Header from '../Header/Index';
import ScrollCards from '../ScrollCards/Index';
import "./seccionFormatos.css";

const SeccionFormatos = () => {
  return (
    <div className="seccion-formatos">
      <div className="aurora-container"> {/* Fondo aurora */}
        <div className="aurora"></div>
      </div>
      <div className="content-container"> {/* Contenido */}
        <Header />
        <ScrollCards />
      </div>
    </div>
  );
}

export default SeccionFormatos;
