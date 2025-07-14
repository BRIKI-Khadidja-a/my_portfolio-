import React from 'react';

const DownloadCVButton = () => {
  return (
    <a
      href="/cv(1).pdf"
      download
      className="download-cv-btn"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        background: 'linear-gradient(90deg, #8f88ff 0%, #7c7be6 100%)',
        color: '#fff',
        padding: '12px 24px',
        borderRadius: '18px',
        fontSize: '1.1rem',
        fontWeight: 500,
        textDecoration: 'none',
        boxShadow: '0 2px 8px rgba(60,56,99,0.10)',
        marginTop: '24px',
        transition: 'background 0.2s',
      }}
    >
      <span role="img" aria-label="CV" style={{ fontSize: '1.3rem' }}>📄</span>
      Télécharger mon CV
    </a>
  );
};

export default DownloadCVButton; 