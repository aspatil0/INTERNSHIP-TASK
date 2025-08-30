import React, { useState } from 'react';
import Hero from './components/Hero';
import LogoBar from './components/LogoBar';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Blog from './components/Blog';
import CallToAction from './components/CallToAction';
import './App.css';

function App() {
  const [pricingToggle, setPricingToggle] = useState('monthly');

  return (
    <div className="App">
      <Hero />
      <LogoBar />
      <Features />
      <Pricing toggle={pricingToggle} setToggle={setPricingToggle} />
      <Blog />
      <CallToAction />
    </div>
  );
}

export default App;
