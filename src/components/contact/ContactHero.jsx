'use client';
import './styles/ContactHero.css';

export default function ContactHero() {
  const title = "Let's Create Waves Together";

  const renderTitle = () => {
    return title.split(' ').map((word, wordIndex, wordsArray) => (
      <span key={wordIndex} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
        {word.split('').map((char, charIndex) => {
          // Calculate global character index for consistent animation delays
          const previousWordsLength = wordsArray.slice(0, wordIndex).join(' ').length;
          const globalIndex = wordIndex === 0 ? charIndex : previousWordsLength + 1 + charIndex;
          
          return (
            <span
              key={charIndex}
              className="char-reveal"
              style={{ animationDelay: `${globalIndex * 0.05}s` }}
            >
              {char}
            </span>
          );
        })}
        {/* Add space after word if it's not the last one */}
        {wordIndex < wordsArray.length - 1 && (
          <span 
            className="char-reveal" 
            style={{ animationDelay: `${(wordsArray.slice(0, wordIndex + 1).join(' ').length) * 0.05}s` }}
          >
            &nbsp;
          </span>
        )}
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
