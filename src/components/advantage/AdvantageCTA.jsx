'use client';
import { Button } from 'primereact/button';
import './styles/AdvantageCTA.css';

export default function AdvantageCTA() {
  return (
    <section className="advantage-cta-section">
      <div className="advantage-cta-container">
        <div className="advantage-headlines">
          <div className="headline-bg font-bold">Ready to Leverage Our Advantage?</div>
          <div className="headline-fg font-bold">Ready to Leverage Our Advantage?</div>
        </div>
        <h2 className="advantage-cta-title">
          Let&apos;s drive your business forward{' '}
          <span className="text-blue">with our proven approach.</span>
        </h2>
        <Button label="Schedule A Strategy Session" className="advantage-cta-button" />
      </div>
    </section>
  );
}
