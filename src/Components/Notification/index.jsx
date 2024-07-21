import React, { useState } from "react";
import Aurora from "../Aurora/Index.jsx";
import Header from "../Header/Index.jsx";
import mobileNotificationImage from "../../media/formatos/7- PUSH NOTIFICATION/mobileNotificationImage.gif";
import "../Notification/notification.css"

const Notification = () => {
  const [selectedDevice, setSelectedDevice] = useState("mobile"); // Dispositivo por defecto

  const handleDeviceClick = (device) => {
    setSelectedDevice(device);
  };

  return (
    <div className="tradicionales-container-aud">
      <div className="header-tradicional-container-aud">
        <div className="tradicional-header-aud">
          <h2>NOTIFICATION PUSH</h2>
          <p>Recibe el anuncio cuando está en un punto de interés, o también puede segmentarse por intereses.</p>
        </div>
      </div>

      <Header />
      <Aurora />

      <div className="grid-content-notification">
        <div className="device-options-notification">
          <div
            onClick={() => handleDeviceClick("mobile")}
            className={`device-option-rm ${selectedDevice === "mobile" ? "active" : ""}`}
          >
            Mobile
          </div>
        </div>

        <div className={`mockup-container-notification`}>
          <div className={`mockup-content-notification`}>
            <img
              src={mobileNotificationImage}
              alt="Mobile Notification Ads"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
