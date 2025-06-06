import { useEffect } from 'react';

const ScrollAnimation = () => {
  useEffect(() => {
    // Smooth scroll animation untuk sections
    const sections = document.querySelectorAll('.about, .features, .comparison, .pricing, .testimonials, .cta');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
      section.classList.add('section');
      observer.observe(section);
    });

    // Tambahkan smooth scroll untuk semua anchor links
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    
    smoothScrollLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
          // Smooth scroll dengan offset untuk navbar
          const offsetTop = targetSection.offsetTop - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
    
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
      
      // Cleanup event listeners - perbaikan cleanup
      smoothScrollLinks.forEach(link => {
        const handler = (e) => {
          e.preventDefault();
          const targetId = link.getAttribute('href');
          const targetSection = document.querySelector(targetId);
          if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;
            window.scrollTo({
              top: offsetTop,
              behavior: 'smooth'
            });
          }
        };
        link.removeEventListener('click', handler);
      });
    };
  }, []);
  
  return null;
};

export default ScrollAnimation;