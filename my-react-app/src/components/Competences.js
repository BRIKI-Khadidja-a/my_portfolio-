import React from 'react';
import './Styles/Competences.css';

const competences = [
  'JavaScript', 'React', 'Node.js', 'Python', 'HTML', 'CSS',
  'SQL', 'Git', 'Java', 'C', 'TypeScript','React','PostgreSQL'
];

const Competences = () => (
  <div className="competences-block">
    <h3>Compétences</h3>
    <div className="competences-list">
      {competences.map((comp, idx) => (
        <span className="competence-badge" key={idx}>{comp}</span>
      ))}
    </div>
  </div>
);

export default Competences; 