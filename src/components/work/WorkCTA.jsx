'use client';
import { Button } from 'primereact/button';
import './styles/WorkCTA.css';

export default function WorkCTA() {
  return (
    <section className="work-cta-section">
      <div className="work-cta-container">
        <div className="work-cta-header">
          <div className="headline-bg">Ready to Create Your Success Story?</div>
          <div className="headline-fg">Ready to Create Your Success Story?</div>
        </div>
        <h2 className="work-cta-title">
          Join leading brands <span className="text-blue">succeeding with DigiWave.</span>
        </h2>
        <div className="work-cta-buttons">
          <Button label="Start your campaign" className="work-cta-button primary" />
          <Button label="Explore our services" className="work-cta-button secondary" />
        </div>
      </div>
    </section>
  );
}
