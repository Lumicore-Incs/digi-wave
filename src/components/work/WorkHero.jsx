'use client';
import './styles/WorkHero.css';

export default function WorkHero() {
  const title = "Our Work Speaks Volumes";

  const renderTitle = () => {
    let charCount = 0;
    const words = title.split(' ');
    return words.map((word, wordIndex) => (
      <span key={wordIndex} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
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
    <section className="work-hero">
      <div className="work-hero-overlay">
        <div className="work-hero-content">
          <h1 className="work-hero-title glitched" data-aos="fade-in" data-aos-duration="1000">
            <span className="main-text">{renderTitle()}</span>
            <span className="glitch-window" aria-hidden="true">{renderTitle()}</span>
          </h1>
          <p className="work-hero-subtitle" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
            We don&apos;t just talk about results—we deliver them. Explore a selection of
            <br />
            our successful campaigns and see the DigiWave effect in action.
          </p>
        </div>
      </div>
    </section>
  );
}
