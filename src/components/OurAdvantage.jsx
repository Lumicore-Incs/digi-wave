'use client';
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import VideoPlaylist from '@/components/about/VideoPlaylist';
import './styles/OurAdvantage.css';

const advantageSteps = [
  {
    label: 'Award Winning',
    icon: '/images/our-advantage-icons-1.png',
    image: '/images/project-images-1.jpg',
    head: '" යුග යාත්‍රා " LIVE in Concert',
    text: 'We built a strong narrative around "යුග යාත්‍රා", using digital media to reach targeted audiences and creating buzz through a focused PR campaign—radio spots, preview articles, and a dynamic social media countdown that captured the spirit of this musical journey.',
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
    <section
      className="our-advantage-section"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="ease-out-cubic"
      data-aos-once="true"
    >
      {/* Bubble Animation Background */}
      <ul className="bg-bubbles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>

      <div className="our-advantage-wrapper">
        <div className="our-advantage-content">
        <div
          className="our-advantage-headline"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <div className="headline-bg">Our Latest projects</div>
          <div className="headline-fg">Our Latest Projects</div>
        </div>
        <div
          className="our-advantage-title"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          Explore Our Showcase of <span className="featured-work">Featured Work</span>
        </div>
        <div className="our-advantage-steps">
          <div className="steps-row">
            {advantageSteps.map((step, idx) => (
              <div key={idx} className="step-wrapper">
                <button
                  className={`step-item ${activeStep === idx ? 'active' : ''}`}
                  onClick={() => setActiveStep(idx)}
                  aria-label={step.label}
                >
                  <motion.div 
                    className={`step-icon-bg step-icon-bg-${idx}`}
                    animate={activeStep === idx ? {
                      y: [0, -8, 0],
                      scale: [1, 1.1, 1],
                    } : {
                      y: [0, -4, 0],
                    }}
                    transition={{
                      y: {
                        duration: activeStep === idx ? 2 : 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      },
                      scale: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }}
                    whileHover={{ scale: 1.15, transition: { duration: 0.2 } }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Image
                      src={step.icon}
                      alt={step.label}
                      width={30}
                      height={30}
                    />
                  </motion.div>
                  <motion.span 
                    className="step-label"
                    animate={activeStep === idx ? {
                      scale: [1, 1.05, 1],
                      opacity: [0.7, 1, 0.7]
                    } : {
                      scale: 1,
                      opacity: 0.6
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {step.label}
                  </motion.span>
                </button>

                {idx < advantageSteps.length - 1 && (
                  <div className="step-connector" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Content Row */}
        <div className="our-advantage-row">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${activeStep}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="our-advantage-card"
            >
              <div className="our-advantage-desc-head">{activeContent.head}</div>
              <div className="our-advantage-desc-text">{activeContent.text}</div>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`image-${activeStep}`}
              initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
              transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
              className="our-advantage-image-wrap"
            >
              <Image
                src={activeContent.image}
                alt="project"
                width={320}
                height={200}
                className="our-advantage-image"
              />
            </motion.div>
          </AnimatePresence>
        </div>
        </div>

        {/* ── Video Player Layer – right side ── */}
        <div className="our-advantage-video-layer">
          <VideoPlaylist inline />
        </div>
      </div>
    </section>
  );
}