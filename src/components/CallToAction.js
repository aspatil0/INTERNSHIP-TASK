import React from 'react';
import './CallToAction.css';

const CallToAction = () => {
  return (
    <section className="cta section" style={{backgroundColor: '#000000'}}>
      <div className="container">
        <div className="cta-content">
          <div className="cta-text">
            <h2 className="cta-title">
              Start Your Design <span className="highlight">Journey</span> Today
            </h2>
            <p className="cta-description">
              Join thousands of designers who are already using AI to create stunning designs faster than ever before. Start your free trial today and experience the future of design.
            </p>
            <div className="cta-buttons">
              <a href="#pricing" className="btn btn-primary">Get Started Free</a>
            </div>
          </div>
          <div className="cta-image">
            <img src="/ppp.png" alt="AI Design Assistant" className="cta-graphic" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
