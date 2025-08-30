import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      id: 1,
      icon: '⬆️',
      title: 'Upload Brief',
      description: 'Share your project details and let our AI grasp your vision.'
    },
    {
      id: 2,
      icon: '✨',
      title: 'Generate Designs',
      description: 'Watch as our AI crafts unique design ideas tailored to you.'
    },
    {
      id: 3,
      icon: '🚀',
      title: 'Refine Creation',
      description: 'Perfect your chosen concept with easy-to-use AI tools.'
    }
  ];

  return (
    <section className="features section" style={{backgroundColor: '#000000'}}>
      <div className="container">
        <h2 className="section-title">
          Unleash Your <span className="highlight">Creativity</span>
        </h2>
        <p className="section-description">
          Discover how our AI-Powered Design Assistant transforms your ideas into stunning designs effortlessly. Follow these simple steps to turn your vision into reality.
        </p>
        
        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div className="feature-icon">
                <span>{feature.icon}</span>
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
