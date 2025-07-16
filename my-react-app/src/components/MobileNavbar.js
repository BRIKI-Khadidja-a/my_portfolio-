// src/components/MobileNavbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import "./Styles/Navbar.css";

function MobileNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar mobile-navbar">
      <div className="navbar-title">Mon Portfolio</div>
      <button className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </button>
      <div className="navbar-right">
        <ThemeToggle />
      </div>
      {open && (
        <ul className="mobile-menu">
          <li><Link to="/" onClick={() => setOpen(false)}>Accueil</Link></li>
          <li><Link to="/apropos" onClick={() => setOpen(false)}>À propos</Link></li>
          <li><a href="#projets" onClick={() => setOpen(false)}>Projets</a></li>
          <li><Link to="/certificats" onClick={() => setOpen(false)}>Certificats</Link></li>
          <li><Link to="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
        </ul>
      )}
    </nav>
  );
}

export default MobileNavbar;
