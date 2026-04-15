'use client';
import { useRouter } from 'next/navigation';
import { Button } from 'primereact/button';
import './styles/CTASection.css';

export default function CTASection() {
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
    <section className="cta-section" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
      <div className="cta-container">
        <div className="cta-headlines" data-aos="fade-down" data-aos-duration="800">
          <div className="headline-bg">Ready to Transform Your Brand?</div>
          <div className="headline-fg">Ready to Transform Your Brand?</div>
        </div>
        <h2 className="cta-title">
          {renderAnimatedText("Join the successful brands ")}
          <span className="text-blue">{renderAnimatedText("partnering with DigiWave.", 0.8)}</span>
        </h2>
        <Button 
          label="Start Your Journey Today" 
          className="cta-button" 
          onClick={handleNavigateToContact} 
          data-aos="zoom-in" 
          data-aos-delay="1500"
        />
      </div>
    </section>
  );
}
