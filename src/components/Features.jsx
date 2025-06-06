import React from 'react';

const Features = () => {
  const features = [
    {
      icon: "🚨",
      title: "Instant Alerts",
      description: "Triggers a loud alarm and sends mobile notifications when your vehicle is tampered with."
    },
    {
      icon: "🔋",
      title: "Long Battery Life",
      description: "Up to 3 months of operation on a single charge, with easy USB recharging."
    },
    {
      icon: "📱",
      title: "Mobile Connectivity",
      description: "Bluetooth connectivity to your smartphone for real-time notifications and control."
    },
    {
      icon: "💧",
      title: "Weather Resistant",
      description: "IPX4 rated water resistance keeps it functional in all weather conditions."
    },
    {
      icon: "🔒",
      title: "Easy Installation",
      description: "Secure attachment to any bike or motorcycle in seconds, no tools required."
    },
    {
      icon: "🔊",
      title: "Super Loud Alarm",
      description: "90dB siren that scares thieves away and alerts people nearby."
    }
  ];

  return (
    <section className="features" id="features">
      <div className="container">
        <h2>Why VibeSense Is A Must-Have</h2>
        <p className="section-subheading">
          Protect your valuable ride with our cutting-edge vibration detection technology
        </p>
        
        <div className="feature-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">
                <span className="feature-emoji">{feature.icon}</span>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;