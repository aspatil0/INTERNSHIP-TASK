import React from 'react';
import './LogoBar.css';

const LogoBar = () => {
  const logos = [
    { id: 1, name: 'Logoipsum', icon: '🏢' },
    { id: 2, name: 'Logoipsum', icon: '⚡' },
    { id: 3, name: 'Logoipsum', icon: '🚀' },
    { id: 4, name: 'Logoipsum', icon: '💎' },
    { id: 5, name: 'Logoipsum', icon: '🌟' }
  ];

  // Duplicate logos for seamless scrolling
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="logo-bar">
      <div className="container">
        <div className="logos-container">
          <div className="logos-scroll">
            {duplicatedLogos.map((logo, index) => (
              <div key={`${logo.id}-${index}`} className="logo-item">
                <span className="logo-icon">{logo.icon}</span>
                <span className="logo-text">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoBar;
