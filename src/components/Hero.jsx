'use client';

import { Button } from 'primereact/button';
import { useEffect, useState } from 'react';
import './styles/Hero.css';

export default function Hero() {
  // Background images for rotation
  const bgImages = [
    '/images/hero-background-1.jpg',
    '/images/hero-background-2.jpg',
    '/images/hero-background-3.jpg',
  ];
  const [bgIndex, setBgIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setBgIndex((prev) => (prev + 1) % bgImages.length);
        setFade(true);
      }, 600); // fade out duration
    }, 5000);
    return () => clearInterval(interval);
  }, [bgImages.length]);

  return (
    <section id="home" className="hero">
      <div
        className={`hero-bg ${fade ? 'fade-in' : 'fade-out'}`}
        style={{ backgroundImage: `url(${bgImages[bgIndex]})` }}
      ></div>
      <div className="hero-overlay">
        <div className="hero-container">
          <div className="hero-content" data-aos="fade-up">
            <h1 className="hero-title">Innovation in Every Wave</h1>
            <p className="hero-subtitle">who you are, what you do.</p>
            <div className="cta-buttons">
              <Button label="Get In Touch" className="btn btn-primary" />
              <Button label="Contact Us" className="btn btn-secondary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
