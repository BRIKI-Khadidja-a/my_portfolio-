

import React from 'react';
import './App.css';
import Navbar from './components/Navbar'; // adapte le chemin si besoin
import Accueil from './components/Accueil';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Accueil />
    </div>
  );
}

export default App;