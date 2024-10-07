import { useState } from "react";
import "../Gaming/gaming.css";
import Aurora from "../Aurora/Index.jsx";
import Header from "../Header/Index.jsx";
import { NavLink } from "react-router-dom";
import displayGaming from "../../media/formatos/4-GAMING/DisplayGaming.jpg";
import displayInGame from "../../media/formatos/4-GAMING/DisplayInGaming.png";
import audioInGame from "../../media/formatos/4-GAMING/AudioINGame.png";
import gamingAd from "../../media/formatos/4-GAMING/GamingAd.gif";
import videoRewarded from "../../media/formatos/4-GAMING/videoRewarded.gif";

const formatsData = {
  format1: {
    title: "Display Gaming",
    description:
      "El formato más tradicional y conocido, segmentado para correr en los juegos más atractivos del mercado.",
    filters: {
      mobile: {
        image: displayGaming,
      },
    },
  },
  format2: {
    title: "Display InGame",
    description:
      "El gaming es un sector en auge, disfrutado por hombres, mujeres, niños, adultos, ancianos ricos y pobres, tu usuario va a estar aquí.",
    filters: {
      mobile: {
        image: displayInGame,
      },
    },
  },
  format3: {
    title: "Audio InGame",
    description:
      "Es un formato de audio inmerso en una app de juegos. Se puede mostrar el logo de la marca, con la opción de click, y el audio se escuchará mientras el usuario continúa jugando. Es más aceptado aún que el rewarded, porque el juego no se ve detenido por el anuncio.",
    filters: {
      mobile: {
        image: audioInGame,
      },
    },
  },
  format4: {
    title: "Gaming Ad",
    description:
      "Es un juego sencillo programado por nuestro equipo de Diseño, en base a materiales provistos por el cliente. La idea del mini game es generar una interacción con el usuario, ofreciendo cupones de descuento, ofertas especiales o similar.",
    filters: {
      mobile: {
        image: gamingAd,
      },
    },
  },
  format5: {
    title: "Video Rewarded",
    description:
      "Brindan una oportunidad a los usuarios de mirar un video e interactuar con un anuncio reproducible a cambio de una recompensa dentro de una aplicación (una nueva vida, pasar de nivel).",
    filters: {
      mobile: {
        image: videoRewarded,
      },
    },
  },
};

const Gaming = () => {
  const [selectedFormat, setSelectedFormat] = useState("format1"); // Selección por defecto
  const [selectedDevice, setSelectedDevice] = useState("mobile"); // Dispositivo por defecto

  const handleFormatClick = (format) => {
    setSelectedFormat(format);
  };

  return (
    <div className="tradicionales-container-gaming">
      <div className="header-tradicional-container-gaming">
        <div
          className={`tradicional-header-gaming ${selectedDevice} ${selectedFormat}`}
        >
          <h2>GAMING</h2>
          <h3>{formatsData[selectedFormat].title}</h3>
          <p>{formatsData[selectedFormat].description}</p>
        </div>
      </div>

      <Header />
      <Aurora />

      <div className="grid-content">
        <div className="return-div">
          <span></span>
          <NavLink to="/proyectorDigital/ver-formatos" className="return-box">
            {" "}
            {/* Falta la redirección */}
            <a>VER FORMATOS</a>
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
        <div className="device-options">
          <div
            className={`device-option ${
              selectedDevice === "mobile" ? "active" : ""
            }`}
          >
            Mobile
            <span className="circulo"></span>
          </div>

          <div
            className={`device-option ${
              selectedDevice === "desktop" ? "active" : ""
            }`}
          >
          </div>
        </div>

        <div
          className={`mockup-container-gaming ${selectedDevice} ${selectedFormat}`}
        >
          <div
            className={`mockup-content-gaming ${selectedDevice} ${selectedFormat}`}
          >
            <img
              src={formatsData[selectedFormat].filters.mobile.image}
              alt={`mobile ${selectedFormat}`}
            />
          </div>
        </div>

        <div className="scroll-indicator">
        <svg xmlns="http://www.w3.org/2000/svg" width="12vh" height="12vh" viewBox="0 0 72 72" id="emoji">
  <g id="color">
    <path fill="#D0CFCE"  d="M37.2971,16.7728h-2.472c-5.8763,0-10.6842,4.8079-10.6842,10.6842v16.9332 c0,5.8763,4.8079,10.6842,10.6842,10.6842h2.472c5.8763,0,10.6842-4.8079,10.6842-10.6842V27.457 C47.9813,21.5807,43.1734,16.7728,37.2971,16.7728z"/>
    <path fill="#3F3F3F"  d="M36.0611,22.1118L36.0611,22.1118c-1.1405,0-2.0737,0.9332-2.0737,2.0737v5.8343 c0,1.1405,0.9332,2.0737,2.0737,2.0737h0c1.1405,0,2.0737-0.9332,2.0737-2.0737v-5.8343 C38.1348,23.045,37.2016,22.1118,36.0611,22.1118z"/>
    <path fill="#9B9B9A"  d="M35.1358,18.1769c3.0267,1.2986,5.904,3.1629,6.2392,7.8732c0.3881,5.455-1.6305,15.6686-2.2795,20.8566 c-0.4538,3.6277-2.248,5.3071-4.6299,7.2111c-1.2013,0.9603,5.2663,0.8427,7.9297-0.7139 c2.2852-1.3355,4.4994-3.6288,4.5264-2.9039l0.3229-25.8045c0,0-0.9367-6.9377-8.5654-6.9401 C38.6792,17.7555,31.0272,17.3615,35.1358,18.1769z"/>
  </g>
  <g id="line">
    <line x1="41.3312" x2="36.1155" y1="60.0161" y2="65.2318" stroke="#FFFFFF" stroke-linejoin="round"/>
    <line x1="30.8574" x2="36.073" y1="60.0161" y2="65.2318" stroke="#FFFFFF" stroke-linejoin="round"/>
    <line x1="30.8574" x2="36.073" y1="11.892" y2="6.6763" stroke="#FFFFFF" stroke-linejoin="round"/>
    <line x1="41.3312" x2="36.1155" y1="11.892" y2="6.6763" stroke="#FFFFFF" stroke-linejoin="round"/>
  </g>
        </svg>
        </div>

        <div className="format-options-gaming">
          {Object.keys(formatsData).map((format) => (
            <div
              key={format}
              onClick={() => handleFormatClick(format)}
              className={`format-option ${
                selectedFormat === format ? "active" : ""
              }`}
            >
              <span className="circle"></span> {formatsData[format].title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gaming;
