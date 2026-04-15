'use client';

import Image from 'next/image';
import { useState } from 'react';
import './styles/OurAdvantage.css';

const advantageSteps = [
  {
    label: 'Award Winning',
    icon: '/images/our-advantage-icons-1.png',
    image: '/images/project-images-1.jpg',
    head: '“ යුග යාත්‍රා “ LIVE in Concert',
    text: 'We built a strong narrative around “යුග යාත්‍රා“, using digital media to reach targeted audiences and creating buzz through a focused PR campaign—radio spots, preview articles, and a dynamic social media countdown that captured the spirit of this musical journey.',
  },
  {
    label: 'Digital Reach',
    icon: '/images/our-advantage-icons-2.png',
    image: '/images/project-images-2.jpg',
    head: 'Galle Food Festival',
    text: 'We executed a multi-channel campaign to drive massive turnout and nationwide buzz for Galle Food Fest. With targeted social media, influencer collaborations, and strategic media outreach, the event drew record crowds and major coverage — becoming the talk of the town.',
  },
  {
    label: 'Music Events',
    icon: '/images/our-advantage-icons-3.png',
    image: '/our-work/our-work-images-13.jpg',
    head: 'LIVE in Concert',
    text: 'We crafted a powerful narrative around the event, leveraging digital advertising to target specific demographics and executing a PR blitz that included radio interviews, preview articles, and strategic social media countdowns.',
  },
];

export default function OurAdvantage() {
  const [activeStep, setActiveStep] = useState(0);
  const activeContent = advantageSteps[activeStep];

  return (
    <section className="our-advantage-section" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-out-cubic" data-aos-once="true">
      <div className="our-advantage-content">
        <div className="our-advantage-headline" data-aos="fade-left" data-aos-duration="1000">
          <div className="headline-bg">Our Latest projects</div>
          <div className="headline-fg">Our Latest Projects</div>
        </div>
        <div className="our-advantage-title" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
          Explore Our Showcase of <span className="featured-work">Featured Work</span>
        </div>
        <div className="our-advantage-steps">
          <div className="steps-row">
            {advantageSteps.map((step, idx) => (
              <div
                className={`step-item step-item-${idx} ${activeStep === idx ? 'active' : ''}`}
                key={idx}
                onClick={() => setActiveStep(idx)}
                style={{ cursor: 'pointer' }}
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={400 + idx * 100}
              >
                <div
                  className={`step-icon-bg step-icon-bg-${idx} ${
                    activeStep === idx ? 'active' : ''
                  }`}
                >
                  <Image
                    src={step.icon}
                    alt="features work images"
                    width={30}
                    height={30}
                    className="our-advantage-image"
                  />{' '}
                </div>
                {idx < advantageSteps.length - 1 && <div className="step-connector" />}
              </div>
            ))}
          </div>
        </div>
        <div className="our-advantage-row">
          <div className="our-advantage-card" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="600">
            <div className="our-advantage-desc-head">{activeContent.head}</div>
            <div className="our-advantage-desc-text">{activeContent.text}</div>
          </div>
          <div className="our-advantage-image-wrap" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="800">
            <Image
              src={activeContent.image}
              alt="features work images"
              width={320}
              height={200}
              className="our-advantage-image"
              sizes="(max-width: 768px) 100vw, 320px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
