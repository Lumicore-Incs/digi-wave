'use client';

import Image from 'next/image';
import './styles/About.css';

export default function About() {
  const features = [
    {
      icon: '/images/about-us-icons-1.png',
      title: 'Part of Wickramanayake Holdings',
      description: 'Strong corporate backbone with proven stability and resources',
      alt: 'Holdings Icon',
    },
    {
      icon: '/images/about-us-icons-2.png',
      title: 'Exclusive Media Access',
      description: 'Unparalleled connections across television, radio, and digital platforms',
      alt: 'Media Access Icon',
    },
    {
      icon: '/images/about-us-icons-3.png',
      title: 'Local Expertise, Global Standards',
      description: 'Deep market knowledge with international best practices',
      alt: 'Global Standards Icon',
    },
    {
      icon: '/images/about-us-icons-4.png',
      title: 'Multi-lingual Solutions',
      description: 'Comprehensive communication across diverse audiences',
      alt: 'Multilingual Icon',
    },
  ];

  return (
    <section className="about-section" data-aos="fade-right">
      <div className="relative">
        <div className="headline-bg">Innovate. Elevate. Excel.</div>
        <div className="headline-fg">Innovate. Elevate. Excel.</div>
      </div>
      <div className="about-container">
        <h2 className="about-headline">
          <span className="about-headline-bold">Your Strategic Partner in </span>
          <span className="about-headline-highlight">Digital Excellence</span>
        </h2>
        <div className="about-features-grid">
          {features.map((feature, idx) => (
            <div className="about-feature-card" key={idx}>
              <div className="about-feature-icon">
                <Image src={feature.icon} alt={feature.alt} width={48} height={48} />
              </div>
              <div className="about-feature-title">{feature.title}</div>
              <div className="about-feature-desc">{feature.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
