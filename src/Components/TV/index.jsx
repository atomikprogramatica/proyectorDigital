import React, { useState } from "react";
import Aurora from "../Aurora/Index.jsx";
import Header from "../Header/Index.jsx";
import ctvImage from "../../media/formatos/8- CTV/ctvImage.gif";
import "../TV/tv.css"
import { NavLink } from "react-router-dom";

const TV = () => {
  const [selectedDevice, setSelectedDevice] = useState("mobile"); // Dispositivo por defecto

  const handleDeviceClick = (device) => {
    setSelectedDevice(device);
  };

  return (
    <div className="tradicionales-container-ctv">
      <div className="header-tradicional-container-ctv">
        <div className="tradicional-header-ctv">
          <h2>CTV</h2>
          <p>Es un dispositivo conectado a internet que un cliente utiliza para visionar el contenido de TV/video en línea. Puede ser desde un televisor inteligente, una videoconsola o cualquier otro tipo de dispositivo conectado a Internet. El dispositivo puede utilizarse para transmitir contenido OTT, pero los dos términos no son intercambiables.</p>
        </div>
      </div>

      <Header />
      <Aurora />

      <div className="ctv-grid-content">
      <div className="return-ctv">
          <span></span>
          <NavLink to="/proyectorDigital/ver-formatos" className="return-ctv-box">
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
        <div className={`mockup-container-ctv`}>
          <div className={`mockup-content-ctv`}>
            <img
              src={ctvImage}
              alt="Mobile Notification Ads"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TV;
