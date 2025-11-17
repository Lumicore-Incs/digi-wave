'use client';
import { Button } from 'primereact/button';
import './styles/CTASection.css';

export default function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-headlines">
          <div className="headline-bg">Ready to Transform Your Brand?</div>
          <div className="headline-fg">Ready to Transform Your Brand?</div>
        </div>
        <h2 className="cta-title">
          Join the successful brands <span className="text-blue">partnering with DigiWave.</span>
        </h2>
        <Button label="Start Your Journey Today" className="cta-button" />
      </div>
    </section>
  );
}
