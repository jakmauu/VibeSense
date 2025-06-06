import React from 'react';

const CallToAction = () => {
  return (
    <section className="cta" id="contact">
      <div className="container">
        <h2>Ready to Secure Your Ride?</h2>
        <p className="cta-text">
          Order now and get a special 15% launch discount. Limited time offer!
        </p>
        <div className="cta-form">
          <form>
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <select required>
                <option value="">Select Model</option>
                <option value="basic">Basic Model - Rp 120.000</option>
                <option value="premium">Premium Model - Rp 180.000</option>
              </select>
            </div>
            <div className="form-group">
              <input type="number" placeholder="Quantity" min="1" defaultValue="1" required />
            </div>
            <button type="submit" className="btn btn-large">Order Now</button>
          </form>
        </div>
        <div className="guarantee">
          <span className="guarantee-icon">🛡️</span>
          <p>30-day money-back guarantee if you're not completely satisfied</p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;