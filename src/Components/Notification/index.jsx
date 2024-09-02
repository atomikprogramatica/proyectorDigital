import React, { useState } from "react";
import Aurora from "../Aurora/Index.jsx";
import Header from "../Header/Index.jsx";
import mobileNotificationImage from "../../media/formatos/7- PUSH NOTIFICATION/mobileNotificationImage.gif";
import "../Notification/notification.css"
import { NavLink } from "react-router-dom";

const Notification = () => {
  const [selectedDevice, setSelectedDevice] = useState("mobile"); // Dispositivo por defecto

  const handleDeviceClick = (device) => {
    setSelectedDevice(device);
  };

  return (
    <div className="tradicionales-container-notification">
      <div className="header-tradicional-container-notification">
        <div className="tradicional-header-notification">
          <h2>NOTIFICATION PUSH</h2>
          <p>Recibe el anuncio cuando está en un punto de interés, o también puede segmentarse por intereses.</p>
        </div>
      </div>

      <Header />
      <Aurora />

      <div className="grid-content-notification">
      <div className="return-div-notification">
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
