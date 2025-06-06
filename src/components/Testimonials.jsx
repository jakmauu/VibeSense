import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Muhamad Dzaky Maulana",
      role: "University Student",
      image: null, // Using default avatar
      rating: 5,
      text: "VibeSense bikin aman bersepeda di kampus! Dengan notifikasi real-time, saya bisa fokus kuliah tanpa khawatir sepeda saya dicuri. Sangat direkomendasikan!"
    },
    {
      name: "Ibnu Zaky Fauzi",
      role: "University Student",
      image: null, // Using default avatar
      rating: 5,
      text: "Sebagai kurir motor, keamanan kendaraan adalah prioritas utama. VibeSense memberikan ketenangan pikiran dengan fitur GPS dan notifikasi langsung. Saya bisa fokus bekerja tanpa khawatir kehilangan motor saya."
    },
    {
      name: "Muhamad Hilmy Mahardika",
      role: "University Student",
      image: null, // Using default avatar
      rating: 4,
      text: "VibeSense benar-benar mengubah cara saya menjaga keamanan sepeda saya. Fitur deteksi gerakan dan alarmnya sangat membantu. Saya merasa lebih aman saat meninggalkan sepeda di kampus."
    }
  ];

  const DefaultAvatar = ({ name }) => {
    const initials = name.split(' ').map(word => word[0]).join('').toUpperCase();
    
    return (
      <div className="default-avatar">
        <span className="avatar-initials">{initials}</span>
      </div>
    );
  };

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <h2>WHAT OUR USERS SAY</h2>
        <p className="section-subheading">
          Real experiences why Vibe Sense will be usefull for you
        </p>
        
        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <div className="testimonial-header">
                <div className="testimonial-avatar">
                  {testimonial.image ? (
                    <img src={testimonial.image} alt={testimonial.name} />
                  ) : (
                    <DefaultAvatar name={testimonial.name} />
                  )}
                </div>
                <div className="testimonial-meta">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                  <div className="testimonial-rating">
                    {"★".repeat(testimonial.rating)}
                    {"☆".repeat(5 - testimonial.rating)}
                  </div>
                </div>
              </div>
              <div className="testimonial-content">
                <p>"{testimonial.text}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;