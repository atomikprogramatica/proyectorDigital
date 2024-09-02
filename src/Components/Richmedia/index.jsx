import React, { useState } from "react";
import "../Richmedia/richmedia.css";
import Aurora from "../Aurora/Index.jsx";
import Header from "../Header/Index.jsx";
import desktopRichMedia from "../../media/formatos/2-RICH MEDIA/DESKTOP/desktopRM.gif"; 
import mobileRichMedia from "../..//media/formatos/2-RICH MEDIA/MOBILE/mobileRM.gif"; 
import { NavLink } from "react-router-dom";

const richMediaImages = {
  desktop: desktopRichMedia,
  mobile: mobileRichMedia,
};

const RichMedia = () => {
  const [selectedDevice, setSelectedDevice] = useState("desktop"); // Dispositivo por defecto

  const handleDeviceClick = (device) => {
    setSelectedDevice(device);
  };

  return (
    <div className="tradicionales-container-rm">
      <div className="header-tradicional-container-rm">
        <div className="tradicional-header-rm">
          <h2>RICH MEDIA</h2>
          <p>Este formato es clave para generar interacción y recordación de marca sobre los usuarios, buscando conectar con ellos a un nuevo nivel. La oferta de opciones con la que contamos es enorme, todo depende de los materiales con los que cuente el cliente.</p>
        </div>
      </div>

      <Header />
      <Aurora />

      <div className="grid-content">
      <div className="return-div">

        <span></span>
            <NavLink
              to="/proyectorDigital/ver-formatos"
              className="return-box"
            >
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
            </div>
          ))}
        </div>

        <div className={`mockup-container ${selectedDevice}`}>
          <div className={`mockup-content ${selectedDevice}`}>
            <img
              src={richMediaImages[selectedDevice]}
              alt={`${selectedDevice} Rich Media`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RichMedia;
