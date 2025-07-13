//La barre de navigation en haut.


import React from 'react';
import './Styles/Navbar.css';
import ThemeToggle from './ThemeToggle';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-title">Mon Portfolio</div>
      <ul className="navbar-links">
        <li><a href="#accueil">Accueil</a></li>
        <li><a href="#apropos">À propos</a></li>
        <li><a href="#projets">Projets</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="navbar-icon">
        {/* Exemple d’icône engrenage en SVG */}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="#6c63ff" strokeWidth="2" fill="#FFD600"/>
          <path d="M12 8v4l3 2" stroke="#22223b" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>
      <div className="navbar-right">
        <ThemeToggle />
      </div>
    </nav>
  );
}

export default Navbar;
