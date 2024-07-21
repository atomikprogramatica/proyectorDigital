import React, { useState } from "react";
import Aurora from "../Aurora/Index.jsx";
import Header from "../Header/Index.jsx";
import ctvImage from "../../media/formatos/8- CTV/ctvImage.gif";
import "../TV/tv.css"

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

      <div className="grid-content-ctv">
        <div className="device-options-ctv">
          <div
            onClick={() => handleDeviceClick("mobile")}
            className={`device-option-ctv ${selectedDevice === "mobile" ? "active" : ""}`}
          >
            CTV
          </div>
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
