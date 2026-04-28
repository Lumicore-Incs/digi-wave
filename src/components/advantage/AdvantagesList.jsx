'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import './styles/AdvantagesList.css';

/* ── Advantage image with fade transition ── */
function AdvantageImage({ src, alt }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`advantage-image img-reveal${visible ? ' img-reveal--visible' : ''}`}>
      <Image src={src} alt={alt} width={500} height={350} className="advantage-img" />
    </div>
  );
}

export default function AdvantagesList() {
  const advantages = [
    {
      id: 1,
      icon: '1',
      color: 'blue',
      title: 'Exclusive Media Access',
      description:
        "We don't just have contacts; we have direct access. As part of the Wickramanayake Holdings ecosystem, we have unparalleled entry to Sri Lanka's leading TV, radio, print, and digital channels. Your story doesn't just get sent—it gets seen and heard.",
      image: '/advantage/advantage-images-1.jpg',
    },
    {
      id: 2,
      icon: '2',
      color: 'green',
      title: 'Strong Corporate Backbone',
      description:
        'Our foundation under Wickramanayake Holdings (Pvt) Ltd provides a level of stability, resources, and credibility that standalone agencies cannot match. This means reliability for you and the corporate strength to execute large-scale, complex campaigns.',
      image: '/advantage/advantage-images-2.jpg',
    },
    {
      id: 3,
      icon: '3',
      color: 'purple',
      title: 'Local Insight, Global Standards',
      description:
        'We understand the nuances of the Sri Lankan market—the culture, the languages, the media consumption habits. We blend this deep local insight with international best practices in PR and digital strategy, giving you the best of both worlds.',
      image: '/advantage/advantage-images-3.jpg',
    },
    {
      id: 4,
      icon: '4',
      color: 'red',
      title: 'Results-Driven Methodology',
      description:
        'We are obsessed with your ROI. Our 5-step "DigiWave Approach" ensures that every campaign is strategically planned, expertly executed, and meticulously measured against clear, predefined goals. We don\'t just run campaigns; we deliver outcomes.',
      image: '/advantage/advantage-images-4.jpg',
    },
    {
      id: 5,
      icon: '5',
      color: 'orange',
      title: 'Innovation DNA',
      description:
        'The digital wave never stops moving, and neither do we. We are constantly exploring new platforms, technologies, and creative storytelling techniques. For us, every new client campaign is a new wave to ride, and we thrive on the challenge.',
      image: '/advantage/advantage-images-5.jpg',
    },
  ];

  return (
    <section className="advantages-list-section">
      <div className="advantages-list-header" data-aos="fade-down" data-aos-duration="1200">
        <div className="advantages-list-headlines" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
          <div className="headline-bg font-bold">Why Partner with DigiWave?</div>
          <div className="headline-fg font-bold">Why Partner with DigiWave?</div>
        </div>
        <h2 className="advantages-list-title" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
          Five compelling reasons that <span className="text-blue">set us apart from the</span>
          <br />
          <span className="text-blue">competition</span>
        </h2>
      </div>

      <div className="advantages-list-container">
        {advantages.map((advantage, index) => (
          <div
            key={advantage.id}
            className={`advantage-card ${index % 2 === 0 ? 'layout-left' : 'layout-right'}`}
            data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
            data-aos-duration="1000"
            data-aos-offset="200"
          >
            <div className="advantage-content">
              <div className="flex align-items-center gap-3">
                <div
                  className={`advantage-icon-wrapper bg-${advantage.color}`}
                  data-aos="zoom-in"
                  data-aos-duration="800"
                  data-aos-delay="500"
                >
                  <span className="advantage-icon">{advantage.icon}</span>
                </div>
                <h3 className="advantage-title">{advantage.title}</h3>
              </div>
              <p className="advantage-description">{advantage.description}</p>
            </div>

            <AdvantageImage 
              src={advantage.image} 
              alt={advantage.title} 
            />
Digital Transformation          </div>
        ))}
      </div>
    </section>
  );
}
