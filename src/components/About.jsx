import React from 'react';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <h2>ABOUT US</h2>
          <p className="section-subheading">
            Meet the team behind VibeSense and learn about our mission
          </p>

          {/* Our Story - Enhanced Design */}
          <div className="about-story-enhanced">
            <div className="story-content-enhanced">
              <div className="story-header-enhanced">
                <div className="story-icon-enhanced">
                  <span>💡</span>
                </div>
                <h3>Our Story</h3>
              </div>
              
              <div className="story-text-enhanced">
                <div className="highlight-text">
                  As university students who frequently use motorcycles and bicycles, we've 
                  experienced firsthand the anxiety of vehicle theft. After several incidents 
                  right outside the campus, we realized existing security solutions were either too 
                  expensive, too complicated, or simply ineffective.
                </div>
              </div>

            
            </div>
          </div>

          {/* Our Team - Simple & Modern Design */}
          <div className="about-team-modern">
            <div className="team-header-modern">
              <h3>Meet Our Team</h3>
            </div>
            
            <div className="team-grid-modern">
              {/* Team Member 1 - Dzaky */}
              <div className="team-card-modern">
                <div className="member-photo-container">
                  <img src="/assets/dzaky.jpg" alt="Muhamad Dzaky Maulana" className="member-photo-modern" />
                  <div className="photo-overlay-modern"></div>
                </div>
                <h4 className="member-name-modern">Muhamad Dzaky Maulana</h4>
              </div>
              
              {/* Team Member 2 - Hilmy */}
              <div className="team-card-modern">
                <div className="member-photo-container">
                  <img src="/assets/hilmy.jpg" alt="Muhammad Hilmy Mahardika" className="member-photo-modern" />
                  <div className="photo-overlay-modern"></div>
                </div>
                <h4 className="member-name-modern">Muhammad Hilmy Mahardika</h4>
              </div>
              
              {/* Team Member 3 - Ompong */}
              <div className="team-card-modern">
                <div className="member-photo-container">
                  <img src="/assets/ompong.jpg" alt="Ibnu Zaky Fauzi" className="member-photo-modern" />
                  <div className="photo-overlay-modern"></div>
                </div>
                <h4 className="member-name-modern">Ibnu Zaky Fauzi</h4>
              </div>
            </div>
          </div>

          {/* Our Mission - Enhanced Cards */}
          <div className="about-mission-enhanced">
            <div className="mission-header-enhanced">
              <h3>Our Mission</h3>
            </div>
            
            <div className="mission-grid-enhanced">
              <div className="mission-item enhanced">
                <div className="mission-number">01</div>
                <div className="mission-glow"></div>
                <div className="mission-icon">
                  <span>🔒</span>
                </div>
                <h4>Secure</h4>
                <p>Provide reliable protection that vehicle owners can trust</p>
              </div>
              
              <div className="mission-item enhanced">
                <div className="mission-number">02</div>
                <div className="mission-glow"></div>
                <div className="mission-icon">
                  <span>💰</span>
                </div>
                <h4>Affordable</h4>
                <p>Make security accessible without breaking the bank</p>
              </div>
              
              <div className="mission-item enhanced">
                <div className="mission-number">03</div>
                <div className="mission-glow"></div>
                <div className="mission-icon">
                  <span>📱</span>
                </div>
                <h4>Smart</h4>
                <p>Integrate modern technology for seamless user experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;