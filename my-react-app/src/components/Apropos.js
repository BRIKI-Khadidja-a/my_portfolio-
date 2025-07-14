import React from 'react';
import Competences from './Competences';
import DownloadCVButton from './DownloadCVButton';
import './Styles/Apropos.css';

const Apropos = () => (
  <section className="apropos-section">
    <div className="apropos-row">
      <div className="apropos-content">
        <h2 className="apropos-title">À propos de moi</h2>
        <p>
          Développeuse web passionnée, je m’appelle BRIKI Khadidja. Forte d’une solide expérience dans la conception et la réalisation d’applications modernes et performantes, j’ai à cœur de proposer des solutions innovantes, accessibles et élégantes, en privilégiant la qualité du code et l’expérience utilisateur.
        </p>
        <p>
          Mon objectif est de mettre mes compétences techniques et ma créativité au service de projets ambitieux, en assurant une veille constante sur les nouvelles technologies et en m’adaptant rapidement aux besoins spécifiques de chaque client ou entreprise.
        </p>
        <p>
          Mon parcours m’a permis de travailler sur des projets variés, allant de sites vitrines à des applications complexes, et de maîtriser un large éventail de langages et d’outils.
        </p>
        <DownloadCVButton />
      </div>
      <Competences />
    </div>
    <div className="education-block">
      <div className="education-title">Éducation</div>
      <div className="education-desc">
        Ingénieure en Informatique à l’USTHB (Université des Sciences et de la Technologie Houari-Boumediene)
      </div>
    </div>
  </section>
);

export default Apropos;


