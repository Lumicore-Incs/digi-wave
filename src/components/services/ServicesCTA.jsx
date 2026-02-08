'use client';
import { Button } from 'primereact/button';
import { useRouter } from 'next/navigation';

import './styles/ServicesCTA.css';

export default function ServicesCTA() {
  const router = useRouter();

  const handleNavigateToContact = () => {
    router.push('/contact');
  };


  return (
    <section className="services-cta-section">
      <div className="services-cta-container">
        <div className="services-cta-headlines">
          <div className="headline-bg">Ready to Ride the Digital Wave?</div>
          <div className="headline-fg">Ready to Ride the Digital Wave?</div>
        </div>
        <h2 className="services-cta-title">
          Let&apos;s build a campaign that drives{' '}
          <span className="text-blue">your vision forward.</span>
        </h2>
        <Button label="Get Your Free Consultation" className="services-cta-button" onClick={handleNavigateToContact} />
      </div>
    </section>
  );
}
