import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuItemClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        <div className="navbar-brand">
          <span className="logo-text">VIBESENSE</span>
          <span className="logo-tag">SECURITY</span>
        </div>
        
        <div className={`navbar-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <a href="#about" onClick={handleMenuItemClick} className="nav-link">About</a>
          <a href="#features" onClick={handleMenuItemClick} className="nav-link">Features</a>
          <a href="#comparison" onClick={handleMenuItemClick} className="nav-link">Compare</a>
          <a href="#pricing" onClick={handleMenuItemClick} className="nav-link">Pricing</a>
          <a href="#testimonials" onClick={handleMenuItemClick} className="nav-link">Reviews</a>
          <div className="navbar-logo-container">
            <img src="/assets/logo.jpg" alt="VibeSense Logo" className="navbar-logo" />
          </div>
        </div>
        
        <div 
          className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;