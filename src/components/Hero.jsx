'use client';
import { Button } from 'primereact/button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import ParticleAnimation from './ParticleAnimation';
import './styles/Hero.css';
import './styles/btn-glow.css'; // ← single import makes it available site-wide
                                 //   (or move to globals.css / layout.tsx once)

export default function Hero() {
  const router = useRouter();

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
      }, 600);
    }, 5000);
    return () => clearInterval(interval);
  }, [bgImages.length]);

  const renderAnimatedTitle = () => {
    const title = 'Innovation in Every Wave';
    return (
      <h1 className="hero-title glitched">
        {title}
        <span className="glitch-window" aria-hidden="true">{title}</span>
      </h1>
    );
  };

  return (
    <section id="home" className="hero">
      <div className="hero-bg-container">
        {bgImages.map((src, index) => (
          <div
            key={src}
            className={`hero-bg-image ${index === bgIndex ? 'active' : ''} ${fade ? '' : 'fading'}`}
          >
            <Image
              src={src}
              alt="Hero Background"
              fill
              priority={index === 0}
              quality={85}
              className="object-cover"
              sizes="100vw"
            />
          </div>
        ))}
      </div>

      <ParticleAnimation />

      <div className="hero-overlay">
        <div className="hero-container">
          <div className="hero-content" data-aos="fade-up">
            {renderAnimatedTitle()}
            <p className="hero-subtitle">who you are, what you do.</p>

            <div className="cta-buttons">
              {/*
                btn-glow is already on both buttons.
                No other change needed — colour, padding, text are untouched.
              */}
              <Button
                label="Get In Touch"
                className="btn btn-primary2 btn-glow"
                onClick={() => router.push('/about')}
              />
              <Button
                label="Contact Us"
                className="btn btn-secondary btn-glow"
                onClick={() => router.push('/contact')}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}