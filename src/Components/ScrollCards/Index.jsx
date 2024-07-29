import React, { useState } from 'react';
import './scroll.css';
import images from '../../imagenesMenu';
import { useNavigate } from 'react-router-dom';

const sections = [
  { id: 1, title: 'TRADICIO<br />NALES', imageUrl: images.tradicionalAds, className: 'with-break', path: '/proyectorDigital/ver-formatos/tradicionales', subMenu: ['Banner Display', 'DCO', 'Native', 'Video Programático', 'Tik Tok', 'Youtube Video'] },
  { id: 2, title: 'RICH<br />MEDIA', imageUrl: images.richMedia, className: 'with-break', path: '/proyectorDigital/ver-formatos/rich-media' },
  { id: 3, title: 'SOCIAL+', imageUrl: images.socialAds, className: 'without-break', path: '/proyectorDigital/ver-formatos/social' },
  { id: 4, title: 'GAMING', imageUrl: images.gamingAds, className: 'without-break', path: '/proyectorDigital/ver-formatos/gaming', subMenu: ['Display Gaming', 'Display InGame', 'Audio InGame', 'Gaming Ad', 'Video Rewarded'] },
  { id: 5, title: 'VIDEO+', imageUrl: images.videoAds, className: 'without-break', path: '/proyectorDigital/ver-formatos/video', subMenu: ['4k Streaming', 'Interactive', 'Inframe'] },
  { id: 6, title: 'AUDIO<br />ADS', imageUrl: images.audioAds, className: 'with-break', path: '/proyectorDigital/ver-formatos/audio' },
  { id: 7, title: 'NOTIFICATION<br />PUSH', imageUrl: images.notificationPush, className: 'with-break', path: '/proyectorDigital/ver-formatos/notification-push' },
  { id: 8, title: 'CTV', imageUrl: images.ctvAds, className: 'without-break', path: '/proyectorDigital/ver-formatos/ctv' },
];

function SeccionFormatos() {
  const [currentSection, setCurrentSection] = useState(0);
  const [hoveredSection, setHoveredSection] = useState(null);
  const navigate = useNavigate();

  const handleScroll = (event) => {
    if (event.deltaY > 0) {
      const newNextSection = (currentSection + 1) % sections.length;
      setCurrentSection(newNextSection);
    } else if (event.deltaY < 0) {
      const newPreviousSection = (currentSection - 1 + sections.length) % sections.length;
      setCurrentSection(newPreviousSection);
    }
  };

  const handleClick = (path) => {
    navigate(path);
  };

  const goToNextSection = () => {
    const newNextSection = (currentSection + 1) % sections.length;
    setCurrentSection(newNextSection);
  };

  const goToPreviousSection = () => {
    const newPreviousSection = (currentSection - 1 + sections.length) % sections.length;
    setCurrentSection(newPreviousSection);
  };

  return (
    <div className="App" onWheel={handleScroll}>
      <div className="arrow up" onClick={goToPreviousSection}>&uarr;</div>
      <div className="section-container">
        {sections.map((section, index) => (
          <div
            key={section.id}
            className={`section ${section.className} ${index === currentSection ? 'visible' : index === (currentSection + 1) % sections.length ? 'next' : index === (currentSection - 1 + sections.length) % sections.length ? 'previous' : ''} ${section.subMenu ? 'has-submenu' : ''}`}
            onMouseEnter={() => section.subMenu && setHoveredSection(index)}
            onMouseLeave={() => setHoveredSection(null)}
            onClick={() => handleClick(section.path)}
          >
            <h1>
              {section.title.includes('<br />') ? (
                section.title.split('<br />').map((part, i) => (
                  <React.Fragment key={i}>
                    {part}
                    {i < section.title.split('<br />').length - 1 && <br />}
                  </React.Fragment>
                ))
              ) : (
                section.title
              )}
            </h1>
            <div className='neon-card'>
              <img src={section.imageUrl} alt={section.title} className="section-image" />
              <p>0{`${index + 1}/0${sections.length}`}</p>
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
      <div className="arrow down" onClick={goToNextSection}>&darr;</div>
    </div>
  );
}

export default SeccionFormatos;
