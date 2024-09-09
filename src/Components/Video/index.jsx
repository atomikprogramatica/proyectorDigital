import  { useState } from "react";
import "../Tradicionales/tradicionales.css";
import Aurora from "../Aurora/Index.jsx";
import Header from "../Header/Index.jsx";
import "../Video/video.css";
import { NavLink } from "react-router-dom";

// 4K STREAMING

import desktopVidAlimentos from "../../media/formatos/5-VIDEO PLUS/1-VideoPlus-4kStreaming/DESKTOP/desktopVidAlimentos.gif"
import desktopVidEcommerce from "../../media/formatos/5-VIDEO PLUS/1-VideoPlus-4kStreaming/DESKTOP/desktopVidEcommerce.gif"
import desktopVidEducacion from "../../media/formatos/5-VIDEO PLUS/1-VideoPlus-4kStreaming/DESKTOP/desktopVidEducacion.gif"
import desktopVidFinanzas from "../../media/formatos/5-VIDEO PLUS/1-VideoPlus-4kStreaming/DESKTOP/desktopVidFinanzas.gif"
import desktopVidBelleza from "../../media/formatos/5-VIDEO PLUS/1-VideoPlus-4kStreaming/DESKTOP/desktopVidBelleza.gif"
import desktopVidEntretenimiento from "../../media/formatos/5-VIDEO PLUS/1-VideoPlus-4kStreaming/DESKTOP/desktopVidEntretenimiento.gif"
import desktopVidTech from "../../media/formatos/5-VIDEO PLUS/1-VideoPlus-4kStreaming/DESKTOP/desktopVidTech.gif"
import mobileVidAlimentos from "../../media/formatos/5-VIDEO PLUS/1-VideoPlus-4kStreaming/MOBILE/mobileVidAlimentos.gif"
import mobileVidEcommerce from "../../media/formatos/5-VIDEO PLUS/1-VideoPlus-4kStreaming/MOBILE/mobileVidEcommerce.gif"
import mobileVidEducacion from "../../media/formatos/5-VIDEO PLUS/1-VideoPlus-4kStreaming/MOBILE/mobileVidEducacion.gif"
import mobileVidFinanzas from "../../media/formatos/5-VIDEO PLUS/1-VideoPlus-4kStreaming/MOBILE/mobileVidFinanzas.gif"
import mobileVidBelleza from "../../media/formatos/5-VIDEO PLUS/1-VideoPlus-4kStreaming/MOBILE/mobileVidBelleza.gif"
import mobileVidEntretenimiento from "../../media/formatos/5-VIDEO PLUS/1-VideoPlus-4kStreaming/MOBILE/mobileVidEntretenimiento.gif"
import mobileVidTech from "../../media/formatos/5-VIDEO PLUS/1-VideoPlus-4kStreaming/MOBILE/mobileVidTech.gif"

// INTERACTIVE

import desktopINTAlimentos from "../../media/formatos/5-VIDEO PLUS/2-VideoPlus-Interactive/DESKTOP/desktopINTAlimentos.gif"
import desktopINTEcommerce from "../../media/formatos/5-VIDEO PLUS/2-VideoPlus-Interactive/DESKTOP/desktopINTEcommerce.gif"
import desktopINTEducacion from "../../media/formatos/5-VIDEO PLUS/2-VideoPlus-Interactive/DESKTOP/desktopINTEducacion.gif"
import desktopINTFinanzas from "../../media/formatos/5-VIDEO PLUS/2-VideoPlus-Interactive/DESKTOP/desktopINTFinanzas.gif"
import desktopINTBelleza from "../../media/formatos/5-VIDEO PLUS/2-VideoPlus-Interactive/DESKTOP/desktopINTBelleza.gif"
import desktopINTEntretenimiento from "../../media/formatos/5-VIDEO PLUS/2-VideoPlus-Interactive/DESKTOP/desktopINTEntretenimiento.gif"
import desktopINTTech from "../../media/formatos/5-VIDEO PLUS/2-VideoPlus-Interactive/DESKTOP/desktopINTTech.gif"
import mobileINTAlimentos from "../../media/formatos/5-VIDEO PLUS/2-VideoPlus-Interactive/MOBILE/mobileINTAlimentos.gif"
import mobileINTEcommerce from "../../media/formatos/5-VIDEO PLUS/2-VideoPlus-Interactive/MOBILE/mobileINTEcommerce.gif"
import mobileINTEducacion from "../../media/formatos/5-VIDEO PLUS/2-VideoPlus-Interactive/MOBILE/mobileINTEducacion.gif"
import mobileINTFinanzas from "../../media/formatos/5-VIDEO PLUS/2-VideoPlus-Interactive/MOBILE/mobileINTFinanzas.gif"
import mobileINTBelleza from "../../media/formatos/5-VIDEO PLUS/2-VideoPlus-Interactive/MOBILE/mobileINTBelleza.gif"
import mobileINTEntretenimiento from "../../media/formatos/5-VIDEO PLUS/2-VideoPlus-Interactive/MOBILE/mobileINTEntretenimiento.gif"
import mobileINTTech from "../../media/formatos/5-VIDEO PLUS/2-VideoPlus-Interactive/MOBILE/mobileINTTech.gif"

// INFRAME
import desktopINFAlimentos from "../../media/formatos/5-VIDEO PLUS/3-VideoPlus-Inframe/DESKTOP/desktopINFAlimentos.gif"
import desktopINFEcommerce from "../../media/formatos/5-VIDEO PLUS/3-VideoPlus-Inframe/DESKTOP/desktopINFEcommerce.gif"
import desktopINFEducacion from "../../media/formatos/5-VIDEO PLUS/3-VideoPlus-Inframe/DESKTOP/desktopINFEducacion.gif"
import desktopINFFinanzas from "../../media/formatos/5-VIDEO PLUS/3-VideoPlus-Inframe/DESKTOP/desktopINFFinanzas.gif"
import desktopINFBelleza from "../../media/formatos/5-VIDEO PLUS/3-VideoPlus-Inframe/DESKTOP/desktopINFBelleza.gif"
import desktopINFEntretenimiento from "../../media/formatos/5-VIDEO PLUS/3-VideoPlus-Inframe/DESKTOP/desktopINFEntretenimiento.gif"
import desktopINFTech from "../../media/formatos/5-VIDEO PLUS/3-VideoPlus-Inframe/DESKTOP/desktopINFTech.gif"
import mobileINFAlimentos from "../../media/formatos/5-VIDEO PLUS/3-VideoPlus-Inframe/MOBILE/mobileINFAlimentos.gif"
import mobileINFEcommerce from "../../media/formatos/5-VIDEO PLUS/3-VideoPlus-Inframe/MOBILE/mobileINFEcommerce.gif"
import mobileINFEducacion from "../../media/formatos/5-VIDEO PLUS/3-VideoPlus-Inframe/MOBILE/mobileINFEducacion.gif"
import mobileINFFinanzas from "../../media/formatos/5-VIDEO PLUS/3-VideoPlus-Inframe/MOBILE/mobileINFFinanzas.gif"
import mobileINFBelleza from "../../media/formatos/5-VIDEO PLUS/3-VideoPlus-Inframe/MOBILE/mobileINFBelleza.gif"
import mobileINFEntretenimiento from "../../media/formatos/5-VIDEO PLUS/3-VideoPlus-Inframe/MOBILE/mobileINFEntretenimiento.gif"
import mobileINFTech from "../../media/formatos/5-VIDEO PLUS/3-VideoPlus-Inframe/MOBILE/mobileINFTech.gif"

const categoryMapping = {
  alimentos_bebidas: "Alimentos & Bebidas",
  retail_ecommerce: "Retail & E-commerce",
  educacion: "Educación",
  finanzas: "Finanzas",
  salud_belleza: "Salud y Belleza",
  entretenimiento: "Entretenimiento",
  tech_telco: "Tech y Telco",
};

const formatsData = {
  format1: {
    title: "4k Streaming",
    description:
      "Son videos que corren en espacios display. Gracias a la tecnología Adaptive Streaming que posee, la carga es más rápida que en un video tradicional, y la calidad es superior.",
    filters: {
      desktop: {
        alimentos_bebidas: desktopVidAlimentos,
        retail_ecommerce: desktopVidEcommerce,
        educacion: desktopVidEducacion,
        finanzas: desktopVidFinanzas,
        salud_belleza: desktopVidBelleza,
        entretenimiento: desktopVidEntretenimiento,
        tech_telco: desktopVidTech,
      },
      mobile: {
        alimentos_bebidas: mobileVidAlimentos,
        retail_ecommerce: mobileVidEcommerce,
        educacion: mobileVidEducacion,
        finanzas: mobileVidFinanzas,
        salud_belleza: mobileVidBelleza,
        entretenimiento: mobileVidEntretenimiento,
        tech_telco: mobileVidTech,
      },
    },
  },
  format2: {
    title: "Interactive",
    description:
      "Este formato es clave para generar interacción y recordación de marca sobre los usuarios, buscando conectar con ellos a un nuevo nivel. La oferta de opciones con la que contamos es enorme, todo depende de los materiales con los que cuente el cliente.",
    filters: {
      desktop: {
        alimentos_bebidas:
          desktopINTAlimentos,
        retail_ecommerce:
          desktopINTEcommerce,
        educacion:
          desktopINTEducacion,
        finanzas:
          desktopINTFinanzas,
        salud_belleza:
          desktopINTBelleza,
        entretenimiento:
          desktopINTEntretenimiento,
        tech_telco:
          desktopINTTech,
      },
      mobile: {
        alimentos_bebidas:
          mobileINTAlimentos,
        retail_ecommerce:
          mobileINTEcommerce,
        educacion:
          mobileINTEducacion,
        finanzas:
          mobileINTFinanzas,
        salud_belleza:
          mobileINTBelleza,
        entretenimiento:
          mobileINTEntretenimiento,
        tech_telco:
        mobileINTTech,
      },
    },
  },
  format3: {
    title: "Inframe",
    description:
      "Son videos que corren en espacios display. Gracias a la tecnología Adaptive Streaming que posee, la carga es más rápida que en un video tradicional, y la calidad es superior.",
    filters: {
      desktop: {
        alimentos_bebidas:
          desktopINFAlimentos,
        retail_ecommerce:
          desktopINFEcommerce,
        educacion:
          desktopINFEducacion,
        finanzas:
          desktopINFFinanzas,
        salud_belleza:
          desktopINFBelleza,
        entretenimiento:
          desktopINFEntretenimiento,
        tech_telco:
          desktopINFTech,
      },
      mobile: {
        alimentos_bebidas:
          mobileINFAlimentos,
        retail_ecommerce:
          mobileINFEcommerce,
        educacion:
          mobileINFEducacion,
        finanzas:
          mobileINFFinanzas,
        salud_belleza:
          mobileINFBelleza,
        entretenimiento:
          mobileINFEntretenimiento,
        tech_telco:
        mobileINFTech,
      },
    },
  },
};

const Video = () => {
  const [selectedDevice, setSelectedDevice] = useState("desktop"); // Dispositivo por defecto
  const [selectedFormat, setSelectedFormat] = useState("format1"); // Selección por defecto
  const [selectedCategory, setSelectedCategory] = useState("alimentos_bebidas"); // Categoría por defecto

  const handleDeviceClick = (device) => {
    setSelectedDevice(device);
  };

  const handleFormatClick = (format) => {
    setSelectedFormat(format);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="tradicionales-container-vid">
      <div className="header-tradicional-container-vid">
        <div className="tradicional-header-vid">
            <h2>TRADICIONALES</h2>
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
              {}
            </div>
          ))}
        </div>

        <div className={`mockup-container ${selectedDevice}`}>
          <div className={`mockup-content ${selectedDevice}`}>
            <img
              src={
                formatsData[selectedFormat].filters[selectedDevice][
                  selectedCategory
                ]
              }
              alt={`${selectedDevice} ${selectedFormat} ${selectedCategory}`}
            />
          </div>
        </div>

        <div className="format-options">
          {Object.keys(formatsData).map((format) => (
            <div
              key={format}
              onClick={() => handleFormatClick(format)}
              className={`format-option ${
                selectedFormat === format ? "active" : ""
              }`}
            >
              <span className="circle"></span>{" "}
              {}
              {formatsData[format].title}
            </div>
          ))}
        </div>

        {selectedFormat !== "format5" && selectedFormat !== "format6" && ( 
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
        )}
      </div>
    </div>
  );
};

export default Video;
