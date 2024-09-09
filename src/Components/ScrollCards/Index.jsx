import React, { useState, useCallback } from "react";
import "./scroll.css";
import images from "../../imagenesMenu";
import { useNavigate } from "react-router-dom";
import _ from "lodash"; // Asegúrate de tener lodash instalado

const sections = [
  {
    id: 1,
    title: "TRADICIO<br />NALES",
    imageUrl: images.tradicionalAds,
    className: "with-break",
    path: "/proyectorDigital/ver-formatos/tradicionales",
    subMenu: [
      "Banner Display",
      "DCO",
      "Native",
      "Video Programático",
      "Tik Tok",
      "Youtube Video",
    ],
  },
  {
    id: 2,
    title: "RICH<br />MEDIA",
    imageUrl: images.richMedia,
    className: "with-break",
    path: "/proyectorDigital/ver-formatos/rich-media",
  },
  {
    id: 3,
    title: "SOCIAL+",
    imageUrl: images.socialAds,
    className: "without-break",
    path: "/proyectorDigital/ver-formatos/social",
  },
  {
    id: 4,
    title: "GAMING",
    imageUrl: images.gamingAds,
    className: "without-break",
    path: "/proyectorDigital/ver-formatos/gaming",
    subMenu: [
      "Display Gaming",
      "Display InGame",
      "Audio InGame",
      "Gaming Ad",
      "Video Rewarded",
    ],
  },
  {
    id: 5,
    title: "VIDEO+",
    imageUrl: images.videoAds,
    className: "without-break",
    path: "/proyectorDigital/ver-formatos/video",
    subMenu: ["4k Streaming", "Interactive", "Inframe"],
  },
  {
    id: 6,
    title: "AUDIO<br />ADS",
    imageUrl: images.audioAds,
    className: "with-break",
    path: "/proyectorDigital/ver-formatos/audio",
  },
  {
    id: 7,
    title: "NOTIFICATION<br />PUSH",
    imageUrl: images.notificationPush,
    className: "with-break",
    path: "/proyectorDigital/ver-formatos/notification-push",
  },
  {
    id: 8,
    title: "CTV",
    imageUrl: images.ctvAds,
    className: "without-break",
    path: "/proyectorDigital/ver-formatos/ctv",
  },
];

function SeccionFormatos() {
  const [currentSection, setCurrentSection] = useState(0);
  const [hoveredSection, setHoveredSection] = useState(null);
  const navigate = useNavigate();

  const throttledScroll = useCallback(
    _.throttle((deltaY) => {
      setCurrentSection((prevSection) => {
        if (deltaY > 0) {
          return (prevSection + 1) % sections.length;
        } else if (deltaY < 0) {
          return (prevSection - 1 + sections.length) % sections.length;
        }
        return prevSection;
      });
    }, 300), // Reducir el tiempo de throttle puede mejorar la respuesta
    []
  );

  const handleScroll = (event) => {
    throttledScroll(event.deltaY);
  };

  const handleClick = (path) => {
    navigate(path);
  };

  const goToNextSection = () => {
    throttledScroll(1);
  };

  const goToPreviousSection = () => {
    throttledScroll(-1);
  };

  return (
    <div className="App" onWheel={handleScroll}>
      <div className="arrow up" onClick={goToPreviousSection}>
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
      </div>

      <div className="section-container">
        {sections.map((section, index) => (
          <div
            key={section.id}
            className={`section ${section.className} ${
              index === currentSection
                ? "visible"
                : index === (currentSection + 1) % sections.length
                ? "next"
                : index ===
                  (currentSection - 1 + sections.length) % sections.length
                ? "previous"
                : ""
            } ${section.subMenu ? "has-submenu" : ""}`}
            onMouseEnter={() => section.subMenu && setHoveredSection(index)}
            onMouseLeave={() => setHoveredSection(null)}
            onClick={() => handleClick(section.path)}
          >
            <h1>
              {section.title.includes("<br />")
                ? section.title.split("<br />").map((part, i) => (
                    <React.Fragment key={i}>
                      {part}
                      {i < section.title.split("<br />").length - 1 && <br />}
                    </React.Fragment>
                  ))
                : section.title}
            </h1>
            <div className="neon-card">
              <img
                src={section.imageUrl}
                alt={section.title}
                className="section-image"
              />
              <p>
                0{index + 1}
                <span className="small-text">/0{sections.length}</span>
              </p>
            </div>
            {section.subMenu && hoveredSection === index && (
              <ul className="sub-menu">
                {section.subMenu.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
      <div className="arrow down" onClick={goToNextSection}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50px"
          height="50px"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M7.825 11H19q.425 0 .713.288T20 12t-.288.713T19 13H7.825l4.9 4.9q.3.3.3.7t-.3.7q-.3.275-.7.288t-.7-.288l-6.6-6.6q-.15-.15-.213-.325T4.975 12t.063-.375t.212-.325l6.6-6.6q.275-.275.687-.275T12.7 4.7q.3.3.3.713t-.3.712l-4.9 4.875Z"
          />
        </svg>
      </div>
    </div>
  );
}

export default SeccionFormatos;
