'use client';
import Image from 'next/image';
import './styles/Services.css';

export default function Services() {
  const services = [
    {
      icon: '/images/services-icons-1.png',
      title: 'PR & Media',
      description: 'Strategic public relations and comprehensive media engagement',
    },
    {
      icon: '/images/services-icons-2.png',
      title: 'Digital Marketing',
      description: 'Social media management and targeted digital advertising',
    },
    {
      icon: '/images/services-icons-3.png',
      title: 'Crisis Communication',
      description: 'Expert crisis management and reputation protection',
    },
    {
      icon: '/images/services-icons-4.png',
      title: 'Event Management',
      description: 'Professional event planning and brand activations',
    },
  ];

  return (
    <section id="services" className="services-section" data-aos="fade-up">
      <div className="relative team-headline">
        <div className="headline-bg">Our Core Services</div>
        <div className="headline-fg">Our Core Services</div>
      </div>
      <div className="services-container">
        <h2 className="services-headline font-bald">
          Innovative Paths to{' '}
          <span className="services-headline-highlight">Digital Transformation</span>
        </h2>
        <div className="services-grid">
          {services.map((service, idx) => (
            <div className="service-card" key={idx} data-aos="fade-in" data-aos-delay={idx * 100}>
              <div className="service-icons">
                <Image src={service.icon} alt={service.title + ' icon'} width={32} height={32} />
              </div>
              <div className="service-title">{service.title}</div>
              <div className="service-description">{service.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
