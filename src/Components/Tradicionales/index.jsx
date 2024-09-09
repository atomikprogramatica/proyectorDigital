import { useState } from "react";
import "../Tradicionales/tradicionales.css";
import Aurora from "../Aurora/Index.jsx";
import Header from "../Header/Index.jsx";
import { NavLink } from "react-router-dom";

// BANNER DISPLAY
import desktopBannerAlimentos from "../../media/formatos/1-TRADICIONALES/1-BannersDisplay/DESKTOP/desktopBannerAlimentos.png";
import desktopBannerEcommerce from "../../media/formatos/1-TRADICIONALES/1-BannersDisplay/DESKTOP/desktopBannerEcommerce.png";
import desktopBannerEducacion from "../../media/formatos/1-TRADICIONALES/1-BannersDisplay/DESKTOP/desktopBannerEducacion.png";
import desktopBannerFinanzas from "../../media/formatos/1-TRADICIONALES/1-BannersDisplay/DESKTOP/desktopBannerFinanzas.png";
import desktopBannerBelleza from "../../media/formatos/1-TRADICIONALES/1-BannersDisplay/DESKTOP/desktopBannerBelleza.png";
import desktopBannerEntretenimiento from "../../media/formatos/1-TRADICIONALES/1-BannersDisplay/DESKTOP/desktopBannerEntretenimiento.png";
import desktopBannerTech from "../../media/formatos/1-TRADICIONALES/1-BannersDisplay/DESKTOP/desktopBannerTech.png";
import mobileBannerAlimentos from "../../media/formatos/1-TRADICIONALES/1-BannersDisplay/MOBILE/mobileBannerAlimentos.png";
import mobileBannerEcommerce from "../../media/formatos/1-TRADICIONALES/1-BannersDisplay/MOBILE/mobileBannerEcommerce.png";
import mobileBannerEducacion from "../../media/formatos/1-TRADICIONALES/1-BannersDisplay/MOBILE/mobileBannerEducacion.png";
import mobileBannerFinanzas from "../../media/formatos/1-TRADICIONALES/1-BannersDisplay/MOBILE/mobileBannerFinanzas.png";
import mobileBannerBelleza from "../../media/formatos/1-TRADICIONALES/1-BannersDisplay/MOBILE/mobileBannerBelleza.png";
import mobileBannerEntretenimiento from "../../media/formatos/1-TRADICIONALES/1-BannersDisplay/MOBILE/mobileBannerEntretenimiento.png";
import mobileBannerTech from "../../media/formatos/1-TRADICIONALES/1-BannersDisplay/MOBILE/mobileBannerTech.png";

// DCO
import desktopDCOAlimentos from "../../media/formatos/1-TRADICIONALES/2-DCO/DESKTOP/desktopDCOAlimentos.png";
import desktopDCOEducacion from "../../media/formatos/1-TRADICIONALES/2-DCO/DESKTOP/desktopDCOEducacion.png";
import desktopDCOEntretenimiento from "../../media/formatos/1-TRADICIONALES/2-DCO/DESKTOP/desktopDCOEntretenimiento.png";
import desktopDCOFinanzas from "../../media/formatos/1-TRADICIONALES/2-DCO/DESKTOP/desktopDCOFinanzas.png";
import desktopDCOEcommerce from "../../media/formatos/1-TRADICIONALES/2-DCO/DESKTOP/desktopDCOEcommerce.png";
import desktopDCOBelleza from "../../media/formatos/1-TRADICIONALES/2-DCO/DESKTOP/desktopDCOBelleza.png";
import desktopDCOTech from "../../media/formatos/1-TRADICIONALES/2-DCO/DESKTOP/desktopDCOTech.png";
import mobileDCOAlimentos from "../../media/formatos/1-TRADICIONALES/2-DCO/MOBILE/mobileDCOAlimentos.png";
import mobileDCOEducacion from "../../media/formatos/1-TRADICIONALES/2-DCO/MOBILE/mobileDCOEducacion.png";
import mobileDCOEntretenimiento from "../../media/formatos/1-TRADICIONALES/2-DCO/MOBILE/mobileDCOEntretenimiento.png";
import mobileDCOFinanzas from "../../media/formatos/1-TRADICIONALES/2-DCO/MOBILE/mobileDCOFinanzas.png";
import mobileDCOEcommerce from "../../media/formatos/1-TRADICIONALES/2-DCO/MOBILE/mobileDCOEcommerce.png";
import mobileDCOBelleza from "../../media/formatos/1-TRADICIONALES/2-DCO/MOBILE/mobileDCOBelleza.png";
import mobileDCOTech from "../../media/formatos/1-TRADICIONALES/2-DCO/MOBILE/mobileDCOTech.png";

// NATIVE
import desktopNATAlimentos from "../../media/formatos/1-TRADICIONALES/3-NATIVE/desktop/desktopNATAlimentos.png";
import desktopNATEducacion from "../../media/formatos/1-TRADICIONALES/3-NATIVE/desktop/desktopNATEducacion.png";
import desktopNATEntretenimiento from "../../media/formatos/1-TRADICIONALES/3-NATIVE/desktop/desktopNATEntretenimiento.png";
import desktopNATFinanzas from "../../media/formatos/1-TRADICIONALES/3-NATIVE/desktop/desktopNATFinanzas.png";
import desktopNATEcommerce from "../../media/formatos/1-TRADICIONALES/3-NATIVE/desktop/desktopNATEcommerce.png";
import desktopNATBelleza from "../../media/formatos/1-TRADICIONALES/3-NATIVE/desktop/desktopNATBelleza.png";
import desktopNATTech from "../../media/formatos/1-TRADICIONALES/3-NATIVE/desktop/desktopNATTech.png";
import mobileNATAlimentos from "../../media/formatos/1-TRADICIONALES/3-NATIVE/mobile/mobileNATAlimentos.png";
import mobileNATEducacion from "../../media/formatos/1-TRADICIONALES/3-NATIVE/mobile/mobileNATEducacion.png";
import mobileNATEntretenimiento from "../../media/formatos/1-TRADICIONALES/3-NATIVE/mobile/mobileNATEntretenimiento.png";
import mobileNATFinanzas from "../../media/formatos/1-TRADICIONALES/3-NATIVE/mobile/mobileNATFinanzas.png";
import mobileNATEcommerce from "../../media/formatos/1-TRADICIONALES/3-NATIVE/mobile/mobileNATEcommerce.png";
import mobileNATBelleza from "../../media/formatos/1-TRADICIONALES/3-NATIVE/mobile/mobileNATBelleza.png";
import mobileNATTech from "../../media/formatos/1-TRADICIONALES/3-NATIVE/mobile/mobileNATTech.png";

// VIDEO PROGRAMÁTICO
import desktopVidAlimentos from "../../media/formatos/1-TRADICIONALES/4-VideoPro/DESKTOP/desktopVidAlimentos.gif";
import desktopVidEducacion from "../../media/formatos/1-TRADICIONALES/4-VideoPro/DESKTOP/desktopVidEducacion.gif";
import desktopVidEntretenimiento from "../../media/formatos/1-TRADICIONALES/4-VideoPro/DESKTOP/desktopVidEntretenimiento.gif";
import desktopVidFinanzas from "../../media/formatos/1-TRADICIONALES/4-VideoPro/DESKTOP/desktopVidFinanzas.gif";
import desktopVidEcommerce from "../../media/formatos/1-TRADICIONALES/4-VideoPro/DESKTOP/desktopVidEcommerce.gif";
import desktopVidBelleza from "../../media/formatos/1-TRADICIONALES/4-VideoPro/DESKTOP/desktopVidBelleza.gif";
import desktopVidTech from "../../media/formatos/1-TRADICIONALES/4-VideoPro/DESKTOP/desktopVidTech.gif";

import mobileVidAlimentos from "../../media/formatos/1-TRADICIONALES/4-VideoPro/MOBILE/mobileVidAlimentos.gif";
import mobileVidEducacion from "../../media/formatos/1-TRADICIONALES/4-VideoPro/MOBILE/mobileVidEducacion.gif";
import mobileVidEntretenimiento from "../../media/formatos/1-TRADICIONALES/4-VideoPro/MOBILE/mobileVidEntretenimiento.gif";
import mobileVidFinanzas from "../../media/formatos/1-TRADICIONALES/4-VideoPro/MOBILE/mobileVidFinanzas.gif";
import mobileVidEcommerce from "../../media/formatos/1-TRADICIONALES/4-VideoPro/MOBILE/mobileVidEcommerce.gif";
import mobileVidBelleza from "../../media/formatos/1-TRADICIONALES/4-VideoPro/MOBILE/mobileVidBelleza.gif";
import mobileVidTech from "../../media/formatos/1-TRADICIONALES/4-VideoPro/MOBILE/mobileVidTech.gif";

// TIK TOK

import desktopTiktok from "../../media/formatos/1-TRADICIONALES/5-TikTok/DESKTOP/desktopTiktok.gif";
import mobileTiktok from "../../media/formatos/1-TRADICIONALES/5-TikTok/MOBILE/mobileTiktok.gif";

// YOUTUBE

import desktopYoutube from "../../media/formatos/1-TRADICIONALES/6-YT/desktop/desktopYoutube.gif";
import mobileYoutube from "../../media/formatos/1-TRADICIONALES/6-YT/mobile/mobileYoutube.gif";

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
    title: "Banner Display",
    description:
      "Se le conoce generalmente como banner, y son una combinación de imágenes y texto. Puede contener una pequeña animación (gif).",
    filters: {
      desktop: {
        alimentos_bebidas: desktopBannerAlimentos,
        retail_ecommerce: desktopBannerEcommerce,
        educacion: desktopBannerEducacion,
        finanzas: desktopBannerFinanzas,
        salud_belleza: desktopBannerBelleza,
        entretenimiento: desktopBannerEntretenimiento,
        tech_telco: desktopBannerTech,
      },
      mobile: {
        alimentos_bebidas: mobileBannerAlimentos,
        retail_ecommerce: mobileBannerEcommerce,
        educacion: mobileBannerEducacion,
        finanzas: mobileBannerFinanzas,
        salud_belleza: mobileBannerBelleza,
        entretenimiento: mobileBannerEntretenimiento,
        tech_telco: mobileBannerTech,
      },
    },
  },
  format2: {
    title: "DCO",
    description:
      "Personaliza tu mensaje de acuerdo a variables determinadas (características del usuario, clima, momento del día, etapa del funnel que atraviesa el usuario) para comunicarte mejor con el usuario.",
    filters: {
      desktop: {
        alimentos_bebidas: desktopDCOAlimentos,
        retail_ecommerce: desktopDCOEcommerce,
        educacion: desktopDCOEducacion,
        finanzas: desktopDCOFinanzas,
        salud_belleza: desktopDCOBelleza,
        entretenimiento: desktopDCOEntretenimiento,
        tech_telco: desktopDCOTech,
      },
      mobile: {
        alimentos_bebidas: mobileDCOAlimentos,
        retail_ecommerce: mobileDCOEcommerce,
        educacion: mobileDCOEducacion,
        finanzas: mobileDCOFinanzas,
        salud_belleza: mobileDCOBelleza,
        entretenimiento: mobileDCOEntretenimiento,
        tech_telco: mobileDCOTech,
      },
    },
  },
  format3: {
    title: "Native",
    description:
      "Se adapta al entorno de la web donde impacta como si fuera parte del contenido editorial, permitiéndole a los anunciantes alcanzar a los usuarios sin ser intrusivos.",
    filters: {
      desktop: {
        alimentos_bebidas: desktopNATAlimentos,
        retail_ecommerce: desktopNATEcommerce,
        educacion: desktopNATEducacion,
        finanzas: desktopNATFinanzas,
        salud_belleza: desktopNATBelleza,
        entretenimiento: desktopNATEntretenimiento,
        tech_telco: desktopNATTech,
      },
      mobile: {
        alimentos_bebidas: mobileNATAlimentos,
        retail_ecommerce: mobileNATEcommerce,
        educacion: mobileNATEducacion,
        finanzas: mobileNATFinanzas,
        salud_belleza: mobileNATBelleza,
        entretenimiento: mobileNATEntretenimiento,
        tech_telco: mobileNATTech,
      },
    },
  },
  format4: {
    title: "Video Programático",
    description:
      "Anuncio de video que corre antes, durante o después de stremear (reproducir) el contenido que el usuario solicitó. Corre en un reproductor o player de video. Por default todos comienzan con el sonido activado.",
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
  format5: {
    title: "Tik Tok",
    description:
      "El anuncio es un video in feed, y funciona como cualquier publicación (posibilidad de like, comentario, difusión).",
    filters: {
      desktop: {
        alimentos_bebidas: desktopTiktok,
        retail_ecommerce: desktopTiktok,
        educacion: desktopTiktok,
        finanzas: desktopTiktok,
        salud_belleza: desktopTiktok,
        entretenimiento: desktopTiktok,
        tech_telco: desktopTiktok,
      },
      mobile: {
        alimentos_bebidas: mobileTiktok,
        retail_ecommerce: mobileTiktok,
        educacion: mobileTiktok,
        finanzas: mobileTiktok,
        salud_belleza: mobileTiktok,
        entretenimiento: mobileTiktok,
        tech_telco: mobileTiktok,
      },
    },
  },
  format6: {
    title: "Video Youtube",
    description:
      "Brindan una oportunidad a los usuarios de mirar un video o interactuar con un anuncio reproducible a cambio de una recompensa dentro de una aplicación (una nueva vida, pasar de nivel).",
    filters: {
      desktop: {
        alimentos_bebidas: desktopYoutube,
        retail_ecommerce: desktopYoutube,
        educacion: desktopYoutube,
        finanzas: desktopYoutube,
        salud_belleza: desktopYoutube,
        entretenimiento: desktopYoutube,
        tech_telco: desktopYoutube,
      },
      mobile: {
        alimentos_bebidas: mobileYoutube,
        retail_ecommerce: mobileYoutube,
        educacion: mobileYoutube,
        finanzas: mobileYoutube,
        salud_belleza: mobileYoutube,
        entretenimiento: mobileYoutube,
        tech_telco: mobileYoutube,
      },
    },
  },
};

const Tradicionales = () => {
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
    <div className="tradicionales-container">
      <div className="header-tradicional-container">
        <div className="tradicional-header">
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

        <div className={`mockup-container ${selectedDevice} ${selectedFormat}`}>
          <div className={`mockup-content ${selectedDevice} ${selectedFormat}`}>
            <img
              className="active"
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

export default Tradicionales;
