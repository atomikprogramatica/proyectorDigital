import "./main.css";
import imagenCel from "../../assets/img-celu.png";
import { NavLink } from "react-router-dom";
const Main = () => {
  return (
    <div>
      <div className="main-box">
        <div className="box-content">
          <h1>PROYECTOR DIGITAL</h1>
          <h3>¡Mostrando nuestros formatos en acción!</h3>
          <div className="acces-box">
            <span></span>
            <NavLink
              to="/proyectorDigital/ver-formatos"
              className="redirect-box"
            >
              {" "}
              {/* Falta la redirección */}
              <p>VER FORMATOS</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50px"
                height="50px"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M16.175 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.175l-4.9-4.9q-.3-.3-.288-.7t.313-.7q.3-.275.7-.288t.7.288l6.6 6.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-6.6 6.6q-.275.275-.687.275T11.3 19.3q-.3-.3-.3-.712t.3-.713z"
                />
              </svg>
            </NavLink>
          </div>
        </div>
        
        <div className="img-box">
          <img src={imagenCel} alt="Imagen de celullar" />
        </div>
      </div>
    </div>
  );
};

export default Main;
