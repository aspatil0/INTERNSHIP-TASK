import React from 'react';
import './Pricing.css';

const Pricing = ({ toggle, setToggle }) => {
  const plans = [
    {
      id: 1,
      name: 'FREE',
      price: toggle === 'monthly' ? '$0' : '$0',
      period: 'm',
      subtitle: 'For 30 Days trail',
      features: [
        'Basic AI-generated designs',
        'Limited Access to customization tools',
        'Standard templates library',
        '5 projects per month',
        '250 Credits per month',
        'Priority email support'
      ],
      buttonText: 'Get Started',
      buttonClass: 'btn-secondary',
      highlighted: false
    },
    {
      id: 2,
      name: 'BASIC',
      price: toggle === 'monthly' ? '$14.99' : '$200.00',
      period: 'm',
      subtitle: toggle === 'monthly' ? 'Billed Monthly' : 'Billed Yearly',
      features: [
        'Advanced AI-generated designs',
        'Full access to customization tools',
        'Premium templates library',
        'Unlimited projects',
        'Real-time collaboration',
        'Priority email support'
      ],
      buttonText: 'Get Started',
      buttonClass: 'btn-secondary',
    },
    {
      id: 3,
      name: 'PRO',
      price: toggle === 'monthly' ? '$29.99' : '$299.99',
      period: 'm',
      subtitle: toggle === 'monthly' ? 'Billed Monthly' : 'Billed Yearly',
      features: [
        'All features included in Pro Plan',
        'Dedicated account manager',
        'Custom AI solutions and designs',
        'Onboarding and training sessions',
        '24/7 priority support',
        'Advanced analytics and reporting',
      ],
      buttonText: 'Get Started',
      buttonClass: 'btn-secondary',
      highlighted: false
    }
  ];

  return (
    <section className="pricing section" style={{backgroundColor: '#000000'}}>
      <div className="container">
        <h2 className="section-title">
          Affordable Plans for <span className="highlight">Every Need</span>
        </h2>
        <p className="section-description">
          Choose the perfect plan for your design projects, from startups to enterprises. Our pricing tiers are designed to offer flexibility and value, ensuring you get the most out of our AI-powered design assistant.
        </p>
        
        <div className="pricing-toggle">
          <button
            className={`toggle-btn ${toggle === 'monthly' ? 'active' : ''}`}
            onClick={() => setToggle('monthly')}
          >
            Monthly
          </button>
          <button
            className={`toggle-btn ${toggle === 'yearly' ? 'active' : ''}`}
            onClick={() => setToggle('yearly')}
          >
            Yearly
          </button>
        </div>
        
        <div className="pricing-grid">
          {plans.map((plan) => (
            <div 
              key={plan.id} 
              className={`pricing-card ${plan.highlighted ? 'highlighted' : ''}`}
            >
              <div className="plan-header">
                <h3 className="plan-name">{plan.name}</h3>
                <div className="plan-price">
                  <span className="price">{plan.price}</span>
                  <span className="period">/{plan.period}</span>
                </div>
                <p className="plan-subtitle">{plan.subtitle}</p>
              </div>
              
              <ul className="plan-features">
                {plan.features.map((feature, index) => (
                  <li key={index} className="feature-item">
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a href="#get-started" className={`btn ${plan.buttonClass}`}>
                {plan.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
