import React, { useState } from "react";
import "../Gaming/gaming.css"
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
        <div className={`tradicional-header-gaming ${selectedDevice} ${selectedFormat}`}>
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
            className={`device-option${
              selectedDevice === "mobile" ? "active" : ""
            }`}
          >
            Mobile
          </div>
        </div>

        <div className={`mockup-container-gaming ${selectedDevice} ${selectedFormat}`}>
          <div className={`mockup-content-gaming ${selectedDevice} ${selectedFormat}`}>
            <img
              src={formatsData[selectedFormat].filters.mobile.image}
              alt={`mobile ${selectedFormat}`}
            />
          </div>
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
              {formatsData[format].title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gaming;