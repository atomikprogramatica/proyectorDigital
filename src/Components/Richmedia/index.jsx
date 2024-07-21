import React, { useState } from "react";
import "../Richmedia/richmedia.css";
import Aurora from "../Aurora/Index.jsx";
import Header from "../Header/Index.jsx";
import desktopRichMedia from "../../media/formatos/2-RICH MEDIA/DESKTOP/desktopRM.gif"; 
import mobileRichMedia from "../..//media/formatos/2-RICH MEDIA/MOBILE/mobileRM.gif"; 

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

      <div className="grid-content-rm">
        <div className="device-options-rm">
          {["desktop", "mobile"].map((device) => (
            <div
              key={device}
              onClick={() => handleDeviceClick(device)}
              className={`device-option-rm ${
                selectedDevice === device ? "active" : ""
              }`}
            >
              {device.charAt(0).toUpperCase() + device.slice(1)}
            </div>
          ))}
        </div>

        <div className={`mockup-container-rm ${selectedDevice}`}>
          <div className={`mockup-content-rm ${selectedDevice}`}>
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
