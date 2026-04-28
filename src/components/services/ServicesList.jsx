'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import './styles/ServicesList.css';

/* ── Scroll-driven SVG path background ── */
function SvgScrollBackground() {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Dynamically load GSAP + ScrollTrigger from CDN (only once)
    const loadGsap = async () => {
      if (window.__gsapLoaded) { initAnimation(); return; }
      await Promise.all([
        new Promise((res) => {
          const s = document.createElement('script');
          s.src = 'https://unpkg.com/gsap@3/dist/gsap.min.js';
          s.onload = res; document.head.appendChild(s);
        }),
        new Promise((res) => {
          const s = document.createElement('script');
          s.src = 'https://unpkg.com/gsap@3/dist/ScrollTrigger.min.js';
          s.onload = res; document.head.appendChild(s);
        }),
      ]);
      window.__gsapLoaded = true;
      initAnimation();
    };

    const initAnimation = () => {
      const { gsap, ScrollTrigger } = window;
      if (!gsap || !ScrollTrigger || !sectionRef.current) return;
      gsap.registerPlugin(ScrollTrigger);

      gsap.to(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
          onUpdate: (self) => {
            const offset = -(2400 * self.progress);
            sectionRef.current?.style.setProperty('--strokeDashoffset', offset);
          },
        },
      });
    };

    loadGsap();
  }, []);

  return (
    <div ref={sectionRef} className="svg-scroll-bg" aria-hidden="true">
      {/* Render SVG paths inline */}
      <svg
        className="svg-paths"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 740 2000"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="sl-cl1" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="40" y2="20">
            <stop offset="0%" stopColor="#b0c8ff" />
            <stop offset="30%" stopColor="#93c5fd" />
            <stop offset="60%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>

          {/* Flattened paths for desktop */}
          <path
            id="sl-line01"
            d="m 106,35h 375c 114,0 226,128 226,235v 236c 0,136 -122,222 -224,221l -182,-2c -89,1 -141,42 -142,158l -2,204c -1,117 37,173 134,173h 186c 110,-3 230,111 230,220v 242c 0,113 -125,225 -248,225H 105"
          />
          <path
            id="sl-line02"
            d="m 33,75h 444c 96,0 190,107 190,201v 224c 0,116 -98,188 -190,187l -192,-2c -92,0 -166,75 -166,168v 278c 0,94 74,169 166,169h 194c 92,0 188,94 188,188v 228c 0,94 -104,191 -214,191H 105"
          />
          <path
            id="sl-line03"
            d="m 155,137h 308c 94,0 162,86 162,177v 178c 0,109 -50,174 -166,173L 277,653C 158,653 77,762 77,849v 302c 0,118 107,196 180,197l 204,4c 92,0 164,67 164,160v 200c 0,91 -89,163 -188,163H 105"
          />
          <path
            id="sl-line04"
            d="m 283,173c 2,0 165,0 165,0C 544,175 577,238 577,330v 156c 0,94 -48,126 -140,125L 269,609C 167,602 29,702 29,851v 312c 0,111 101,235 242,235h 162c 109,1 144,49 144,136v 162c 0,73 -53,130 -118,130l -353,1"
          />

          {/* Straight vertical paths for mobile */}
          <path id="sl-line-mobile-1" d="M 185,0 V 2000" />
          <path id="sl-line-mobile-2" d="M 370,0 V 2000" />
          <path id="sl-line-mobile-3" d="M 555,0 V 2000" />
          <path id="sl-line-mobile-4" d="M 100,0 V 2000" />
          <path id="sl-line-mobile-5" d="M 640,0 V 2000" />
        </defs>

        <use href="#sl-line01" className="svg-use svg-use--desktop svg-use--1" />
        <use href="#sl-line02" className="svg-use svg-use--desktop svg-use--2" />
        <use href="#sl-line03" className="svg-use svg-use--desktop svg-use--3" />
        <use href="#sl-line04" className="svg-use svg-use--desktop svg-use--4" />

        <use href="#sl-line-mobile-1" className="svg-use svg-use--mobile svg-use--1" />
        <use href="#sl-line-mobile-2" className="svg-use svg-use--mobile svg-use--2" />
        <use href="#sl-line-mobile-3" className="svg-use svg-use--mobile svg-use--3" />
        <use href="#sl-line-mobile-4" className="svg-use svg-use--mobile svg-use--4" />
        <use href="#sl-line-mobile-5" className="svg-use svg-use--mobile svg-use--1" />
      </svg>
    </div>
  );
}

/* ── Service image with fade transition ── */
function ServiceImage({ src, alt }) {
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
    <div ref={ref} className={`service-detail-image img-reveal${visible ? ' img-reveal--visible' : ''}`}>
      <Image src={src} alt={alt} width={500} height={350} className="service-img" />
    </div>
  );
}

export default function ServicesList() {
  return (
    <section className="services-list-section">
      {/* Scroll-driven SVG path background */}
      <SvgScrollBackground />

      <div className="services-list-header">
        <div className="services-list-headlines" data-aos="fade-up" data-aos-duration="1000">
          <div className="headline-bg">Our Core Services</div>
          <div className="headline-fg">Our Core Services</div>
        </div>
        <h2 className="services-list-title" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
          Comprehensive solutions to <span className="text-blue">elevate your brand</span>
          <br />
          <span className="text-blue">and drive results.</span>
        </h2>
      </div>

      <div className="services-list-container">

        {/* ── Service 1 ── */}
        <div className="service-detail-card layout-left" data-aos="fade-right" data-aos-duration="1200">
          <div className="service-detail-content">
            <div className="service-detail-header">
              <span className="service-icon background-color-01 pi pi-megaphone" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100"></span>
              <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                <h3 className="service-detail-title">Public Relations &amp; Media Engagement</h3>
                <h4 className="service-subtitle font-color-01">Build credibility and shape your narrative with strategic media relations</h4>
              </div>
            </div>
            <p className="service-description" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
              We secure meaningful coverage across Sri Lanka&apos;s most influential media channels, ensuring your story reaches the right audience at the right time.
            </p>
            <div className="service-items">
              <div className="service-items-set" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
                <span className="service-item-head">Press Release Service</span>
                <span className="item-name">Drafting in English/Sinhala/Tamil, delivery to all media, minimum 8 articles</span>
              </div>
              <div className="service-items-set mt-2" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
                <span className="service-item-head">Press Conference Management</span>
                <span className="item-name">Full management, media invitations, spokesperson prep, minimum 10 articles</span>
              </div>
              <div className="service-items-set mt-2" data-aos="fade-up" data-aos-duration="800" data-aos-delay="600">
                <span className="service-item-head">Media Event Coverage</span>
                <span className="item-name">Strategic planning, coordination, tri-lingual releases, minimum 10 articles</span>
              </div>
            </div>
          </div>
          <ServiceImage src="/services/services-image-01.png" alt="Public Relations & Media Engagement" />
        </div>

        {/* ── Service 2 ── */}
        <div className="service-detail-card layout-right" data-aos="fade-left" data-aos-duration="1200">
          <div className="service-detail-content">
            <div className="service-detail-header">
              <span className="service-icon background-color-02 pi pi-mobile" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100"></span>
              <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                <h3 className="service-detail-title">Digital Marketing &amp; Social Media</h3>
                <h4 className="service-subtitle font-color-02">Connect with your audience where they live—online</h4>
              </div>
            </div>
            <p className="service-description" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
              We develop data-driven digital strategies that increase brand awareness, engagement, and conversions. Turn followers into fans and clicks into customers.
            </p>
            <div className="service-features" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
              {['Comprehensive Social Media Management & Strategy', 'Targeted Digital Advertising Campaigns (Social, Search, Display)', 'Community Management & Growth', 'Online Reputation Management'].map((f, i) => (
                <div key={i} className="feature-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay={500 + i * 100}>
                  <span className="feature-check font-color-02">✓</span>
                  <span className="feature-text">{f}</span>
                </div>
              ))}
            </div>
          </div>
          <ServiceImage src="/services/services-image-02.jpg" alt="Digital Marketing & Social Media" />
        </div>

        {/* ── Service 3 ── */}
        <div className="service-detail-card layout-left" data-aos="fade-right" data-aos-duration="1200">
          <div className="service-detail-content">
            <div className="service-detail-header">
              <span className="service-icon background-color-03 pi pi-shield" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100"></span>
              <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                <h3 className="service-detail-title">Crisis Communication</h3>
                <h4 className="service-subtitle font-color-03">Protect your reputation when it matters most</h4>
              </div>
            </div>
            <p className="service-description" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
              We provide rapid, strategic counsel to navigate challenging situations and safeguard your brand&apos;s integrity with expert crisis management solutions.
            </p>
            <div className="service-items">
              <div className="service-item service-item-03" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
                <span className="item-name">Crisis Management Package</span>
              </div>
              {['24/7 Crisis Preparedness & Planning', 'Real-time Issue Monitoring & Management', 'Development of Clear Communication Protocols', 'Spokesperson Training and Message Control'].map((f, i) => (
                <div key={i} className="check-list" data-aos="fade-up" data-aos-duration="800" data-aos-delay={500 + i * 100}>
                  <span className="feature-check font-color-03">✓</span>
                  <span className="item-name-full">{f}</span>
                </div>
              ))}
            </div>
          </div>
          <ServiceImage src="/services/services-images-03.jpg" alt="Crisis Communication" />
        </div>

        {/* ── Service 4 ── */}
        <div className="service-detail-card layout-right" data-aos="fade-left" data-aos-duration="1200">
          <div className="service-detail-content">
            <div className="service-detail-header">
              <span className="service-icon background-color-04 pi pi-calendar-plus" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100"></span>
              <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                <h3 className="service-detail-title">Event Management &amp; Brand Activations</h3>
                <h4 className="service-subtitle font-color-04">Create unforgettable experiences that bring your brand to life</h4>
              </div>
            </div>
            <p className="service-description" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
              We design and execute memorable events and activations that forge deep emotional connections with your target audience and create lasting brand impressions.
            </p>
            <div className="service-items">
              {['End-to-end Event Planning & Execution', 'Creative Brand Activation Concepts', 'Securing comprehensive Event Media Coverage', 'Guest & Stakeholder Management'].map((f, i) => (
                <div key={i} className="check-list" data-aos="fade-up" data-aos-duration="800" data-aos-delay={400 + i * 100}>
                  <span className="feature-check font-color-04">✓</span>
                  <span className="item-name-full">{f}</span>
                </div>
              ))}
            </div>
          </div>
          <ServiceImage src="/services/services-images-04.jpg" alt="Event Management & Brand Activations" />
        </div>

        {/* ── Service 5 ── */}
        <div className="service-detail-card layout-left" data-aos="fade-right" data-aos-duration="1200">
          <div className="service-detail-content">
            <div className="service-detail-header">
              <span className="service-icon pi pi-pencil background-color-05" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100"></span>
              <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                <h3 className="service-detail-title">Content Creation</h3>
                <h4 className="service-subtitle font-color-05">Tell your story with content that captivates and converts</h4>
              </div>
            </div>
            <p className="service-description" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
              Our creative team produces high-quality, multi-format content that resonates with your audience and supports your business goals across all platforms.
            </p>
            <span className="item-name" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">Tell your story with content that engages and converts.</span>
            <div className="service-items">
              <div className="service-item service-item-05" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
                <span className="item-name">Strategic Web Article Placement</span>
              </div>
              <span className="item-name" data-aos="fade-up" data-aos-duration="800" data-aos-delay="600">Professional Video Production &amp; Social Content</span>
              <section className="service-items mb-0">
                <div className="service-item service-item-05" data-aos="fade-up" data-aos-duration="800" data-aos-delay="700">
                  <span className="item-name">Video Podcast &amp; Web News</span>
                </div>
                <div className="service-item service-item-05" data-aos="fade-up" data-aos-duration="800" data-aos-delay="800">
                  <span className="item-name">Influencer-Generated Content</span>
                </div>
              </section>
            </div>
            <div className="service-features">
              {['Compelling Copywriting for ads, websites, and blogs', 'Professional Video Production & Editing', 'Strategic Brand Journalism', 'Engaging Graphic Design & Multimedia Content'].map((f, i) => (
                <div key={i} className="feature-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay={900 + i * 100}>
                  <span className="feature-check font-color-05">✓</span>
                  <span className="feature-text">{f}</span>
                </div>
              ))}
            </div>
          </div>
          <ServiceImage src="/services/services-images-05.jpg" alt="Content Creation" />
        </div>

        {/* ── Service 6 ── */}
        <div className="service-detail-card layout-right" data-aos="fade-left" data-aos-duration="1200">
          <div className="service-detail-content">
            <div className="service-detail-header">
              <span className="service-icon pi pi-file-import background-color-06" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100"></span>
              <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                <h3 className="service-detail-title">Investor &amp; Stakeholder Communications</h3>
                <h4 className="service-subtitle font-color-06">Build trust and transparency with your most important audiences</h4>
              </div>
            </div>
            <p className="service-description" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
              We craft clear, consistent messaging to keep your investors, partners, and key stakeholders informed, engaged, and confident in your vision.
            </p>
            <div className="service-packages">
              <h5 className="packages-title" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">Our Core Investor Relations Packages</h5>
              <section className="service-items">
                <div className="service-item service-item-06" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
                  <span className="item-name">Annual Report &amp; Financial Communications</span>
                </div>
                <div className="service-item service-item-06" data-aos="fade-up" data-aos-duration="800" data-aos-delay="600">
                  <span className="item-name">Stakeholder Briefing &amp; Press Release Package</span>
                </div>
              </section>
            </div>
            <div className="service-features">
              {['Development of Annual Reports & Financial Communications', 'Stakeholder Mapping & Engagement Strategies', 'Internal Communications Support', 'ESG (Environmental, Social, Governance) Reporting'].map((f, i) => (
                <div key={i} className="feature-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay={700 + i * 100}>
                  <span className="feature-check font-color-06">✓</span>
                  <span className="feature-text">{f}</span>
                </div>
              ))}
            </div>
          </div>
          <ServiceImage src="/services/services-images-06.jpg" alt="Investor & Stakeholder Communications" />
        </div>

      </div>
    </section>
  );
}