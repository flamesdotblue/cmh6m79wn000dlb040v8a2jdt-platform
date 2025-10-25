import React from 'react';
import HeroSection from './components/HeroSection';
import FeatureShowcase from './components/FeatureShowcase';
import StrategyExplainer from './components/StrategyExplainer';
import FooterCTA from './components/FooterCTA';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <HeroSection />
      <FeatureShowcase />
      <StrategyExplainer />
      <FooterCTA />
    </div>
  );
}

export default App;
