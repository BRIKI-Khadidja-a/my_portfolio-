

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'; // adapte le chemin si besoin
import Accueil from './components/Accueil';
import Contact from './components/Contact';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/contact" element={<Contact />} />
        {/* Ajoute d'autres routes ici si besoin */}
      </Routes>
    </Router>
  );
}

export default App;