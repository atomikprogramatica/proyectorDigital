import React, { useState } from "react";
import "../Tradicionales/tradicionales.css";
import "../Social/social.css";
import Aurora from "../Aurora/Index.jsx";
import Header from "../Header/Index.jsx";
import { NavLink } from "react-router-dom";

import desktopSOAlimentos from "../../media/formatos/3-SOCIAL PLUS/DESKTOP/desktopSOAlimentos.png";
import desktopSOEducacion from "../../media/formatos/3-SOCIAL PLUS/DESKTOP/desktopSOEducacion.png";
import desktopSOEntretenimiento from "../../media/formatos/3-SOCIAL PLUS/DESKTOP/desktopSOEntretenimiento.png";
import desktopSOFinanzas from "../../media/formatos/3-SOCIAL PLUS/DESKTOP/desktopSOFinanzas.png";
import desktopSOEcommerce from "../../media/formatos/3-SOCIAL PLUS/DESKTOP/desktopSOEcommerce.png";
import desktopSOBelleza from "../../media/formatos/3-SOCIAL PLUS/DESKTOP/desktopSOBelleza.png";
import desktopSOTech from "../../media/formatos/3-SOCIAL PLUS/DESKTOP/desktopSOTech.png";
import mobileSOAlimentos from "../../media/formatos/3-SOCIAL PLUS/MOBILE/mobileSOAlimentos.png";
import mobileSOEducacion from "../../media/formatos/3-SOCIAL PLUS/MOBILE/mobileSOEducacion.png";
import mobileSOEntretenimiento from "../../media/formatos/3-SOCIAL PLUS/MOBILE/mobileSOEntretenimiento.png";
import mobileSOFinanzas from "../../media/formatos/3-SOCIAL PLUS/MOBILE/mobileSOFinanzas.png";
import mobileSOEcommerce from "../../media/formatos/3-SOCIAL PLUS/MOBILE/mobileSOEcommerce.png";
import mobileSOBelleza from "../../media/formatos/3-SOCIAL PLUS/MOBILE/mobileSOBelleza.png";
import mobileSOTech from "../../media/formatos/3-SOCIAL PLUS/MOBILE/mobileSOTech.png";

const categoryMapping = {
  alimentos_bebidas: "Alimentos & Bebidas",
  retail_ecommerce: "Retail & E-commerce",
  educacion: "Educación",
  finanzas: "Finanzas",
  salud_belleza: "Salud y Belleza",
  entretenimiento: "Entretenimiento",
  tech_telco: "Tech y Telco",
};

const deviceData = {
  desktop: {
    alimentos_bebidas: desktopSOAlimentos,
    retail_ecommerce: desktopSOEcommerce,
    educacion: desktopSOEducacion,
    finanzas: desktopSOFinanzas,
    salud_belleza: desktopSOBelleza,
    entretenimiento: desktopSOEntretenimiento,
    tech_telco: desktopSOTech,
  },
  mobile: {
    alimentos_bebidas: mobileSOAlimentos,
    retail_ecommerce: mobileSOEcommerce,
    educacion: mobileSOEducacion,
    finanzas: mobileSOFinanzas,
    salud_belleza: mobileSOBelleza,
    entretenimiento: mobileSOEntretenimiento,
    tech_telco: mobileSOTech,
  },
};

const Social = () => {
  const [selectedDevice, setSelectedDevice] = useState("desktop"); // Dispositivo por defecto
  const [selectedCategory, setSelectedCategory] = useState("alimentos_bebidas"); // Categoría por defecto

  const handleDeviceClick = (device) => {
    setSelectedDevice(device);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="tradicionales-container-social">
      <div className="header-tradicional-container-social">
        <div className="tradicional-header-social">
          <h3>SOCIAL+</h3>
          <p>
            Anuncios publicitarios que replican la apariencia de las
            publicaciones de redes sociales. Permiten una rápida implementación,
            sin necesidad de generar nuevos materiales ni adaptaciones.
          </p>
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
          {["desktop", "mobile"].map((device) => (
            <div
              key={device}
              onClick={() => handleDeviceClick(device)}
              className={`device-option ${
                selectedDevice === device ? "active" : ""
              }`}
            >
              {device.charAt(0).toUpperCase() + device.slice(1)}
              <span className="circle"></span>{" "}
            </div>
          ))}
        </div>

        <div className={`mockup-container ${selectedDevice}`}>
          <div className={`mockup-content ${selectedDevice}`}>
            <img
              src={deviceData[selectedDevice][selectedCategory]}
              alt={`${selectedDevice} ${selectedCategory}`}
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

        <div className="category-options">
          {Object.keys(categoryMapping).map((category) => (
            <div
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`category-option ${
                selectedCategory === category ? "active" : ""
              }`}
            >
              {categoryMapping[category]}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Social;