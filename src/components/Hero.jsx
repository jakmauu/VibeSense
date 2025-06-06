import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [logoLoaded, setLogoLoaded] = useState(true);
  const [deviceLoaded, setDeviceLoaded] = useState(true);

  const handleImageError = (e, type) => {
    console.log(`${type} image failed to load:`, e.target.src);
    if (type === 'logo') {
      setLogoLoaded(false);
    } else if (type === 'device') {
      setDeviceLoaded(false);
    }
    e.target.parentElement.classList.add('logo-fallback');
  };

  const handleImageLoad = (e, type) => {
    console.log(`${type} image loaded successfully:`, e.target.src);
    if (type === 'logo') {
      setLogoLoaded(true);
    } else if (type === 'device') {
      setDeviceLoaded(true);
    }
    e.target.classList.add('loaded');
    e.target.parentElement.classList.remove('logo-fallback');
  };

  const handleScrollToSection = (e, targetId) => {
    e.preventDefault();
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      const offsetTop = targetSection.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-background"></div>
      <div className="container hero-content">
        {/* Logo utama yang diperbaiki */}
        <div className="hero-logo-main">
          <div className={`logo-container ${!logoLoaded ? 'logo-fallback' : ''}`}>
            <img 
              src="/assets/logo.jpg"
              alt="VibeSense" 
              className={`hero-main-logo ${logoLoaded ? 'loaded' : ''}`}
              onError={(e) => handleImageError(e, 'logo')}
              onLoad={(e) => handleImageLoad(e, 'logo')}
            />
            <div className="logo-fallback-text">
              VS
            </div>
          </div>
        </div>
        
        <h1 className="hero-title">VIBESENSE</h1>
        <p className="hero-description">
          The sleek security solution that detects vibrations and protects your ride from theft
        </p>
        
        <div className="hero-buttons">
          <button 
            className="btn btn-primary hero-btn"
            onClick={(e) => handleScrollToSection(e, '#features')}
          >
            EXPLORE FEATURES
          </button>
          <button 
            className="btn btn-secondary hero-btn"
            onClick={(e) => handleScrollToSection(e, '#pricing')}
          >
            VIEW PRICING
          </button>
        </div>
        
        {/* Product showcase simple dan interaktif */}
        <div className="hero-product-section">
          <div className="product-showcase">
            <div className="product-frame">
              <img 
                src="/assets/produk.png"
                alt="VibeSense Security Device" 
                className="product-image"
                onError={(e) => {
                  console.log('Product image failed to load, showing fallback');
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
                onLoad={(e) => {
                  console.log('Product image loaded successfully');
                  e.target.classList.add('loaded');
                }}
              />
              
              {/* Fallback jika gambar tidak load */}
              <div className="product-fallback" style={{display: 'none'}}>
                <div className="fallback-content">
                  <div className="fallback-icon">📱</div>
                  <span className="fallback-text">VibeSense Device</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;