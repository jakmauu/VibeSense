import React from 'react';
import Hero from './Hero';
import About from './About';
import Features from './Features';
import ComparisonTable from './ComparisonTable';
import Pricing from './Pricing';
import Testimonials from './Testimonials';

import Footer from './Footer';
import Navbar from './Navbar';
import ScrollAnimation from './ScrollAnimation';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <ComparisonTable />
      <Pricing />
      <Testimonials />
  
      <Footer />
      <ScrollAnimation />
    </div>
  );
};

export default App;