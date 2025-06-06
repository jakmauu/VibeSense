import React from 'react';

const Pricing = () => {
  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <h2>Choose Your Protection Plan</h2>
        <p className="section-subheading">
          Affordable security options for every rider
        </p>
        
        <div className="pricing-grid">
          <div className="pricing-card">
            <div className="pricing-header">
              <h3>Basic Model</h3>
              <div className="price">Rp 120.000</div>
              <p>Perfect for everyday riders</p>
            </div>
            <div className="pricing-features">
              <ul>
                <li>✅ 90dB Loud Alarm</li>
                <li>✅ Vibration Detection</li>
                <li>✅ Easy Installation</li>
                <li>✅ 3-Month Battery Life</li>
                <li>✅ Weather Resistant</li>
                <li>❌ Mobile App Integration</li>
              </ul>
            </div>
            <div className="pricing-footer">
              <div className="pricing-note">
                <p>📋 Currently in development phase</p>
              </div>
            </div>
          </div>
          
          <div className="pricing-card featured">
            <div className="popular-tag">Most Popular</div>
            <div className="pricing-header">
              <h3>Premium Model</h3>
              <div className="price">Rp 180.000</div>
              <p>Advanced protection with mobile alerts</p>
            </div>
            <div className="pricing-features">
              <ul>
                <li>✅ 90dB Loud Alarm</li>
                <li>✅ Vibration Detection</li>
                <li>✅ Easy Installation</li>
                <li>✅ 3-Month Battery Life</li>
                <li>✅ Weather Resistant</li>
                <li>✅ Mobile App Integration</li>
                <li>✅ Real-time Notifications</li>
                <li>✅ Remote Alarm Control</li>
              </ul>
            </div>
            <div className="pricing-footer">
              <div className="pricing-note">
                <p>📋 Currently in development phase</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;