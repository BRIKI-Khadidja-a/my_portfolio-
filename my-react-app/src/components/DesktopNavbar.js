// src/components/DesktopNavbar.js
import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import "./Styles/Navbar.css";

function DesktopNavbar() {
  return (
    <nav className="navbar desktop-navbar">
      <div className="navbar-title">Mon Portfolio</div>
      <ul className="desktop-menu">
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/apropos">À propos</Link></li>
        <li><a href="#projets">Projets</a></li>
        <li><Link to="/certificats">Certificats</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="navbar-right">
        <ThemeToggle />
      </div>
    </nav>
  );
}

export default DesktopNavbar;
