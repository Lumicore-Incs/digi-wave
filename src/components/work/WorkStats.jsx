'use client';
import { useEffect, useRef, useState } from 'react';
import './styles/WorkStats.css';

export default function WorkStats() {
  const [campaigns, setCampaigns] = useState(0);
  const [placements, setPlacements] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

  const stats = [
    {
      number: campaigns,
      suffix: '+',
      label: 'Successful Campaigns',
      target: 50,
    },
    {
      number: placements,
      suffix: '+',
      label: 'Media Placements',
      target: 100,
    },
    {
      number: satisfaction,
      suffix: '%',
      label: 'Client Satisfaction',
      target: 95,
    },
    {
      number: '24/7',
      suffix: '',
      label: 'Crisis Support',
      target: null,
    },
  ];

  useEffect(() => {
    const currentRef = statsRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounter(setCampaigns, 50, 1500);
            animateCounter(setPlacements, 100, 1500);
            animateCounter(setSatisfaction, 95, 1500);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasAnimated]);

  const animateCounter = (setter, target, duration) => {
    const startTime = Date.now();
    const step = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutQuad = progress * (2 - progress);
      const current = Math.floor(easeOutQuad * target);
      setter(current);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setter(target);
      }
    };
    requestAnimationFrame(step);
  };

  return (
    <section className="work-stats-section">
      <div className="work-stats-container">
        <div className="work-stats-headline" data-aos="fade-right" data-aos-duration="1000">
          <div className="headline-bg">Our Track Record</div>
          <div className="headline-fg">Our Track Record</div>
        </div>
        <h2 className="work-stats-title" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">Numbers that speak to our success</h2>

        <div className="work-stats-grid" ref={statsRef}>
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="work-stat-item"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={400 + index * 100}
            >
              <div className="work-stat-number">
                {stat.number}
                {stat.suffix}
              </div>
              <div className="work-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
