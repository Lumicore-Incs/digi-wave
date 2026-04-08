'use client';
import './styles/AboutHero.css';

export default function AboutHero() {
  const title = "About DigiWave";

  const renderTitle = () => {
    return title.split('').map((char, index) => (
      <span
        key={index}
        className="char-reveal"
        style={{ animationDelay: `${index * 0.08}s` }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <section className="about-hero">
      <div className="about-hero-content">
        <h1 className="about-hero-title glitched" data-aos="fade-in" data-aos-duration="1000">
          <span className="main-text">{renderTitle()}</span>
          <span className="glitch-window" aria-hidden="true">{renderTitle()}</span>
        </h1>
        <p className="about-hero-subtitle" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
          Discover the story behind Sri Lanka&apos;s next-generation PR and
          <br />
          digital marketing agency
        </p>
      </div>
    </section>
  );
}
