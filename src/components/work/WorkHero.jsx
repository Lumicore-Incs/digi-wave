'use client';
import './styles/WorkHero.css';

export default function WorkHero() {
  const title = "Our Work Speaks Volumes.";

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
