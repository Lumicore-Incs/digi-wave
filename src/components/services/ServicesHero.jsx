'use client';
import './styles/ServicesHero.css';

export default function ServicesHero() {
  const title = "Amplify Your Brand. Ignite Your Growth.";

  const renderTitle = () => {
    let charCount = 0;
    const words = title.split(' ');
    return words.map((word, wordIndex) => (
      <span key={wordIndex} className="word-wrapper" style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
        {word.split('').map((char, charIndex) => {
          const delay = charCount * 0.05;
          charCount++;
          return (
            <span
              key={charIndex}
              className="char-reveal"
              style={{ animationDelay: `${delay}s` }}
            >
              {char}
            </span>
          );
        })}
        {wordIndex < words.length - 1 && (
          <span className="char-reveal" style={{ animationDelay: `${charCount++ * 0.05}s` }}>
            &nbsp;
          </span>
        )}
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
