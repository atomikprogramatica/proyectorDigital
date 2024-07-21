import React, { useState } from "react";
import "../Audio/audio.css";
import Aurora from "../Aurora/Index.jsx";
import Header from "../Header/Index.jsx";
import desktopAudioAds from "../../media/formatos/6- AUDIO ADS/desktop/desktopAudioAds.gif"; 
import mobileAudioAds from "../../media/formatos/6- AUDIO ADS/mobile/mobileAudioAds.gif";

const richMediaImages = {
  desktop: desktopAudioAds,
  mobile: mobileAudioAds,
};

const Audio = () => {
  const [selectedDevice, setSelectedDevice] = useState("desktop"); // Dispositivo por defecto

  const handleDeviceClick = (device) => {
    setSelectedDevice(device);
  };

  return (
    <div className="tradicionales-container-aud">
      <div className="header-tradicional-container-aud">
        <div className="tradicional-header-aud">
          <h2>AUDIO ADS</h2>
          <p>Son videos que corren en espacios display. Gracias a la tecnología Adaptive Streaming que posee, la carga es más rápida que en un video tradicional, y la calidad es superior.</p>
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

        <div className={`mockup-container-audio ${selectedDevice}`}>
          <div className={`mockup-content-audio ${selectedDevice}`}>
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

export default Audio;
