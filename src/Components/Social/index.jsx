import React, { useState } from "react";
import "../Tradicionales/tradicionales.css";
import "../Social/social.css"
import Aurora from "../Aurora/Index.jsx";
import Header from "../Header/Index.jsx";

import desktopSOAlimentos from "../../media/formatos/3-SOCIAL PLUS/DESKTOP/desktopSOAlimentos.png"
import desktopSOEducacion from "../../media/formatos/3-SOCIAL PLUS/DESKTOP/desktopSOEducacion.png"
import desktopSOEntretenimiento from "../../media/formatos/3-SOCIAL PLUS/DESKTOP/desktopSOEntretenimiento.png"
import desktopSOFinanzas from "../../media/formatos/3-SOCIAL PLUS/DESKTOP/desktopSOFinanzas.png"
import desktopSOEcommerce from "../../media/formatos/3-SOCIAL PLUS/DESKTOP/desktopSOEcommerce.png"
import desktopSOBelleza from "../../media/formatos/3-SOCIAL PLUS/DESKTOP/desktopSOBelleza.png"
import desktopSOTech from "../../media/formatos/3-SOCIAL PLUS/DESKTOP/desktopSOTech.png"
import mobileSOAlimentos from "../../media/formatos/3-SOCIAL PLUS/MOBILE/mobileSOAlimentos.png"
import mobileSOEducacion from "../../media/formatos/3-SOCIAL PLUS/MOBILE/mobileSOEducacion.png"
import mobileSOEntretenimiento from "../../media/formatos/3-SOCIAL PLUS/MOBILE/mobileSOEntretenimiento.png"
import mobileSOFinanzas from "../../media/formatos/3-SOCIAL PLUS/MOBILE/mobileSOFinanzas.png"
import mobileSOEcommerce from "../../media/formatos/3-SOCIAL PLUS/MOBILE/mobileSOEcommerce.png"
import mobileSOBelleza from "../../media/formatos/3-SOCIAL PLUS/MOBILE/mobileSOBelleza.png"
import mobileSOTech from "../../media/formatos/3-SOCIAL PLUS/MOBILE/mobileSOTech.png"


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
            <h3>SOCIAL</h3>
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
              </div>
            ))}
          </div>
  
          <div className={`mockup-container ${selectedDevice}`}>
            <div className={`mockup-content ${selectedDevice}`}>
              <img
                src={
                  deviceData[selectedDevice][selectedCategory]
                }
                alt={`${selectedDevice} ${selectedCategory}`}
              />
            </div>
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