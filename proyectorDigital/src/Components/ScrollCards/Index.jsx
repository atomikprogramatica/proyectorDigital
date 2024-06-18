import React, { useState } from 'react'
import images from '../../imagenesMenu';
import './scroll.css';

const sections = [
    { id: 1, title: 'TRADICIO<br />NALES', imageUrl: images.tradicionalAds },
    { id: 2, title: 'RICH<br />MEDIA', imageUrl: images.richMedia },
    { id: 3, title: 'SOCIAL+', imageUrl: images.socialAds },
    { id: 4, title: 'GAMING', imageUrl: images.gamingAds },
    { id: 5, title: 'VIDEO+', imageUrl: images.videoAds },
    { id: 6, title: 'AUDIO<br />ADS', imageUrl: images.audioAds }, 
    { id: 7, title: 'NOTIFICATION<br />PUSH', imageUrl: images.notificationPush },
    { id: 8, title: 'CTV', imageUrl: images.ctvAds },
  ];
const ScrollCards = () => {

    const [currentSection, setCurrentSection] = useState(0);

    const handleScroll = (event) => {
      if (event.deltaY > 0) {
        const newNextSection = (currentSection + 1) % sections.length;
        setCurrentSection(newNextSection);
      } else if (event.deltaY < 0) {
        const newPreviousSection = (currentSection - 1 + sections.length) % sections.length;
        setCurrentSection(newPreviousSection);
      }
    };


  return (
    <div className="App" onWheel={handleScroll}>
      <div className="section-container">
        {sections.map((section, index) => (
          <div
            key={section.id}
            className={`section ${index === currentSection ? 'visible' : index === (currentSection + 1) % sections.length ? 'next' : index === (currentSection - 1 + sections.length) % sections.length ? 'previous' : ''}`}
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
            <img src={section.imageUrl} alt={section.title} className="section-image" />
            <p>{`${index + 1}/${sections.length}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


export default ScrollCards