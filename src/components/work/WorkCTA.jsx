'use client';
import { Button } from 'primereact/button';
import { useRouter } from 'next/navigation';

import './styles/WorkCTA.css';

export default function WorkCTA() {
  const router = useRouter();

  const handleNavigateToContact = () => {
    router.push('/contact');
  };

  const handleNavigateToService = () => {
    router.push('/services');
  };

  const renderAnimatedText = (text, delayOffset = 0) => {
    return text.split('').map((char, index) => (
      <span
        key={index}
        className="char-reveal"
        style={{ animationDelay: `${delayOffset + index * 0.03}s` }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <section className="work-cta-section" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
      <div className="work-cta-container">
        <div className="work-cta-header" data-aos="fade-down" data-aos-duration="800">
          <div className="headline-bg">Ready to Create Your Success Story?</div>
          <div className="headline-fg">Ready to Create Your Success Story?</div>
        </div>
        <h2 className="work-cta-title">
          {renderAnimatedText("Join leading brands ")}
          <span className="text-blue">{renderAnimatedText("succeeding with DigiWave.", 0.6)}</span>
        </h2>
        <div className="work-cta-buttons" data-aos="zoom-in" data-aos-delay="1400">
          <Button label="Start your campaign" className="work-cta-button primary" onClick={handleNavigateToContact} />
          <Button label="Explore our services" className="work-cta-button secondary" onClick={handleNavigateToService} />
        </div>
      </div>
    </section>
  );
}
