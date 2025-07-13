//(Bouton de changement de thème)

import React, { useState, useEffect } from 'react';//On importe React, ainsi que les hooks useState (pour gérer l’état du thème) et useEffect (pour appliquer le thème au body).


const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      style={{
        background: 'none',
        border: '2px solid #ccc',
        borderRadius: '50%',
        width: '48px',
        height: '48px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        outline: 'none',
      }}
      aria-label="Toggle theme"
    >
      {darkMode ? (
        // Icône lune
        <span role="img" aria-label="Lune" style={{ fontSize: '2rem' }}>🌙</span>
      ) : (
        // Icône soleil
        <span role="img" aria-label="Soleil" style={{ fontSize: '2rem' }}>☀️</span>
      )}
    </button>
  );
};

export default ThemeToggle;
