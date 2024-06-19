import React from 'react';
import Header from '../Header/Index';
import Main from '../Main';
import './home.css'; // Importa el archivo CSS

const Home = () => {
  return (
    <div className="home-container">
      <div className="aurora"></div>
      <div className="home-content">
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default Home;
