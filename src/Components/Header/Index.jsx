import { useState, useRef, useEffect } from 'react';
import logotipo from '../../assets/logo-animacion-blanco.gif';
import './header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);


  return (
    <div className='header'>
      <nav className='header-box'>
        <NavLink to='../proyectorDigital' className='navLinkHeader'>
          <img src={logotipo} alt="Logotipo Header" />
        </NavLink>
        <div>
          <NavLink to="/proyectorDigital">INSTRUCTIVO</NavLink>
          <NavLink to="/proyectorDigital/ver-formatos">SPECS</NavLink>
          <NavLink to="/proyectorDigital/contacto">CONTACTO</NavLink>
          <div onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
      <div className={`menu ${menuOpen ? 'open' : ''}`} ref={menuRef}>
        <div className="menu-content">
          <div>
            <svg onClick={toggleMenu} xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24">
              <path fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M20 20L4 4m16 0L4 20"/>
            </svg>
          </div>
          <h2 className="menu-subtitle">Tradicionales</h2>
          <NavLink to="/proyectorDigital/ver-formatos/tradicionales"><p className="menu-item">Banners Display</p></NavLink>
          <NavLink to="/proyectorDigital/ver-formatos/tradicionales"><p className="menu-item">DCO</p></NavLink>
          <NavLink to="/proyectorDigital/ver-formatos/tradicionales"><p className="menu-item">Native</p></NavLink>
          <NavLink to="/proyectorDigital/ver-formatos/tradicionales"><p className="menu-item">Video Programático</p></NavLink>
          <NavLink to="/proyectorDigital/ver-formatos/tradicionales"><p className="menu-item">TikTok</p></NavLink>
          <NavLink to="/proyectorDigital/ver-formatos/tradicionales"><p className="menu-item">Youtube Video</p></NavLink>
          <NavLink to="/proyectorDigital/ver-formatos/rich-media"><h2 className="menu-subtitle">Rich Media</h2></NavLink>
          <NavLink to="/proyectorDigital/ver-formatos/social"><h2 className="menu-subtitle">Social +</h2></NavLink>
          <h2 className="menu-subtitle">Gaming</h2>
          <NavLink to="/proyectorDigital/ver-formatos/gaming"><p className="menu-item">Display Gaming</p></NavLink>
          <NavLink to="/proyectorDigital/ver-formatos/gaming"><p className="menu-item">Display In-Game</p></NavLink>
          <NavLink to="/proyectorDigital/ver-formatos/gaming"><p className="menu-item">Audio In-Game</p></NavLink>
          <NavLink to="/proyectorDigital/ver-formatos/gaming"><p className="menu-item">GamingAd (Rich Media)</p></NavLink>
          <NavLink to="/proyectorDigital/ver-formatos/gaming"><p className="menu-item">Video Rewarded</p></NavLink>
          <h2 className="menu-subtitle">Video+</h2>
          <NavLink to="/proyectorDigital/ver-formatos/video"><p className="menu-item">4k Streaming</p></NavLink>
          <NavLink to="/proyectorDigital/ver-formatos/video"><p className="menu-item">Interactive</p></NavLink>
          <NavLink to="/proyectorDigital/ver-formatos/video"><p className="menu-item">InFrame</p></NavLink>
          <NavLink to="/proyectorDigital/ver-formatos/audio"><h2 className="menu-subtitle">Audio Ad</h2></NavLink>
          <NavLink to="/proyectorDigital/ver-formatos/notification-push"><h2 className="menu-subtitle">Notification Push</h2></NavLink>
          <NavLink to="/proyectorDigital/ver-formatos/ctv"><h2 className="menu-subtitle">CTV</h2></NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header;