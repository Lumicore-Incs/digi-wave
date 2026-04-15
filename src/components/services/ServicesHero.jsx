'use client';
import './styles/ServicesHero.css';

export default function ServicesHero() {
  const title = "Amplify Your Brand. Ignite Your Growth.";

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
    <section className="services-hero">
      <div className="services-hero-overlay">
        <div className="services-hero-content">
          <h1 className="services-hero-title glitched" data-aos="fade-in" data-aos-duration="1000">
            <span className="main-text">{renderTitle()}</span>
            <span className="glitch-window" aria-hidden="true">{renderTitle()}</span>
          </h1>
          <p className="services-hero-subtitle" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
            We craft PR and digital marketing campaigns that build strong brands,
            <br />
            boost engagement, and deliver real results.
          </p>
        </div>
      </div>
    </section>
  );
}
