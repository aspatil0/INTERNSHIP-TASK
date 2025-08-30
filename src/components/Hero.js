import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Your AI-Powered<br />
              <span className="highlight">Design </span>Assistant
            </h1>
            <p className="hero-description">
              Unlock your creative potential. Seamlessly generate, customize, and perfect your designs with cutting-edge AI technology.
            </p>
            <div className="hero-buttons">
              <a href="#get-started" className="btn btn-primary">Get Started</a>
              <a href="#templates" className="btn btn-secondary">More Templates</a>
            </div>
          </div>
          <div className="hero-image">
            <img src="/aa.png" alt="AI Design Assistant" className="hero-graphic" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
