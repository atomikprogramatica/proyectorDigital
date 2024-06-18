import { useState, useRef, useEffect } from 'react';
import logotipo from '../../assets/logo-animacion-blanco.gif';
import './header.css';

const Header = () => {

  const [menuOpen, setMenuOpen ] = useState(false);
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
    <div>
        <nav className='header-box'>
              <a href='/'>
                <img src={logotipo} alt="Logotipo Header"/>
              </a>
            <div>
                <a href="">INSTRUCTIVO</a>
                <a href="">SPECS</a>
                <a href="">CONTACTO</a>
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
            <svg onClick={toggleMenu} xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M20 20L4 4m16 0L4 20"/></svg>
          </div>
          <h2 className="menu-subtitle">Tradicionales</h2>
          <p className="menu-item">Banners Display</p>
          <p className="menu-item">DCO</p>
          <p className="menu-item">Native</p>
          <p className="menu-item">Video Programático</p>
          <p className="menu-item">TikTok</p>
          <p className="menu-item">Youtube Video</p>
          <h2 className="menu-subtitle">Rich Media</h2>
          <h2 className="menu-subtitle">Social +</h2>
          <h2 className="menu-subtitle">Gaming</h2>
          <p className="menu-item">Display Gaming</p>
          <p className="menu-item">Display In-Game</p>
          <p className="menu-item">Audio In-Game</p>
          <p className="menu-item">GamingAd (Rich Media)</p>
          <p className="menu-item">Video Rewarded</p>
          <h2 className="menu-subtitle">Video+</h2>
          <p className="menu-item">4k Streaming</p>
          <p className="menu-item">Interactive</p>
          <p className="menu-item">InFrame</p>
          <h2 className="menu-subtitle">Audio Ad</h2>
          <h2 className="menu-subtitle">Notification Push</h2>
          <h2 className="menu-subtitle">CTV</h2>
        </div>
      </div>
    </div>
  )
}

export default Header;