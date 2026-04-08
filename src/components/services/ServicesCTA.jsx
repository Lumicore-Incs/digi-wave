'use client';
import { Button } from 'primereact/button';
import { useRouter } from 'next/navigation';

import './styles/ServicesCTA.css';

export default function ServicesCTA() {
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
    <section className="services-cta-section" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
      <div className="services-cta-container">
        <div className="services-cta-headlines" data-aos="fade-down" data-aos-duration="800">
          <div className="headline-bg">Ready to Ride the Digital Wave?</div>
          <div className="headline-fg">Ready to Ride the Digital Wave?</div>
        </div>
        <h2 className="services-cta-title">
          {renderAnimatedText("Let's build a campaign that drives ")}
          <span className="text-blue">{renderAnimatedText("your vision forward.", 1.2)}</span>
        </h2>
        <Button 
          label="Get Your Free Consultation" 
          className="services-cta-button" 
          onClick={handleNavigateToContact} 
          data-aos="zoom-in" 
          data-aos-delay="1800"
        />
      </div>
    </section>
  );
}
