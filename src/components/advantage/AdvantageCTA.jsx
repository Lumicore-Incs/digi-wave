'use client';
import { Button } from 'primereact/button';
import { useRouter } from 'next/navigation';

import './styles/AdvantageCTA.css';

export default function AdvantageCTA() {
  const router = useRouter();

  const handleNavigateToContact = () => {
    router.push('/contact');
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
    <section className="advantage-cta-section" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
      <div className="advantage-cta-container">
        <div className="advantage-headlines" data-aos="fade-down" data-aos-duration="800">
          <div className="headline-bg font-bold">Ready to Leverage Our Advantage?</div>
          <div className="headline-fg font-bold">Ready to Leverage Our Advantage?</div>
        </div>
        <h2 className="advantage-cta-title">
          {renderAnimatedText("Let's drive your business forward ")}
          <span className="text-blue">{renderAnimatedText("with our proven approach.", 1.2)}</span>
        </h2>
        <Button 
          label="Schedule A Strategy Session" 
          className="advantage-cta-button" 
          onClick={handleNavigateToContact} 
          data-aos="zoom-in" 
          data-aos-delay="1800"
        />
      </div>
    </section>
  );
}
