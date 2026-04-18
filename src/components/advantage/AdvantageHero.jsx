'use client';
import './styles/AdvantageHero.css';

export default function AdvantageHero() {
  const title = "Your Unfair Advantage in the Market";

  const renderTitle = () => {
    return title.split(' ').map((word, wordIndex, wordsArray) => (
      <span key={wordIndex} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
        {word.split('').map((char, charIndex) => {
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
    <section className="advantage-hero">
      <div className="advantage-hero-overlay">
        <div className="advantage-hero-content">
          <h1 className="advantage-hero-title glitched" data-aos="fade-in" data-aos-duration="1000">
            <span className="main-text">{renderTitle()}</span>
            <span className="glitch-window" aria-hidden="true">{renderTitle()}</span>
          </h1>
          <p className="advantage-hero-subtitle" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
            In a crowded digital landscape, we provide the unique leverage, access, and
            <br />
            expertise to make your brand stand out and succeed.
          </p>
        </div>
      </div>
    </section>
  );
}
