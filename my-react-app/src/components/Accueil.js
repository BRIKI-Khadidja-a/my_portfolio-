import React from 'react';
import './Styles/Accueil.css';

const Accueil = () => {
  return (
    <section className="accueil-section">
      <div className="accueil-content">
        <h1 className="accueil-nom">BRIKI Khadidja</h1>
        <h2 className="accueil-titre">Développeur Full Stack</h2>
        <p className="accueil-description">
          Développeur passionné par l’innovation numérique, je conçois et réalise des solutions web sur mesure qui allient performance, design et accessibilité.<br />
          Fort d’une solide expertise en développement front-end et back-end, je donne vie à vos idées en créant des expériences interactives, intuitives et impactantes.<br />
          Mon objectif : transformer chaque projet en un produit digital unique, moderne et parfaitement adapté à vos besoins.
        </p>
      </div>
      <div className="accueil-avatar-wrapper">
        <div className="accueil-avatar-bg">
          <img
            src="/ma_photo.jpg"
            alt="BRIKI Khadidja"
            className="accueil-avatar-img"
            style={{ width: '90%', height: '90%', borderRadius: '50%', objectFit: 'cover' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Accueil;