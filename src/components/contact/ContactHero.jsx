'use client';
import './styles/ContactHero.css';

export default function ContactHero() {
  const title = "Let's Create Waves Together";

  const renderTitle = () => {
    return title.split('').map((char, index) => (
      <span
        key={index}
        className="char-reveal"
        style={{ animationDelay: `${index * 0.05}s` }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <section className="contact-hero">
      <div className="contact-hero-overlay">
        <div className="contact-hero-content">
          <h1 className="contact-hero-title glitched" data-aos="fade-in" data-aos-duration="1000">
            <span className="main-text">{renderTitle()}</span>
            <span className="glitch-window" aria-hidden="true">{renderTitle()}</span>
          </h1>
          <p className="contact-hero-subtitle" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
            Ready to transform your brand&apos;s presence? Get in touch with DigiWave and
            <br />
            let&apos;s start your next success story
          </p>
        </div>
      </div>
    </section>
  );
}
