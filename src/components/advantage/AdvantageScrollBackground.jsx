'use client';
import { useEffect, useRef } from 'react';
import './styles/AdvantageScrollBackground.css';

export default function AdvantageScrollBackground({ reverse = false }) {
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
            // Reverse direction as requested by the user
            const baseOffset = 2400;
            const offset = reverse ? (baseOffset * self.progress) : -(baseOffset * self.progress);
            sectionRef.current?.style.setProperty('--strokeDashoffset', offset);
          },
        },
      });
    };

    loadGsap();
  }, [reverse]);

  return (
    <div ref={sectionRef} className="advantage-scroll-bg" aria-hidden="true">
      {/* Render SVG paths inline */}
      <svg
        className="svg-paths"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 740 2000"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="adv-cl1" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="40" y2="20">
            <stop offset="0%" stopColor="#b0c8ff" />
            <stop offset="30%" stopColor="#93c5fd" />
            <stop offset="60%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>

          {/* Flattened paths for desktop */}
          <path
            id="adv-line01"
            d="m 106,35h 375c 114,0 226,128 226,235v 236c 0,136 -122,222 -224,221l -182,-2c -89,1 -141,42 -142,158l -2,204c -1,117 37,173 134,173h 186c 110,-3 230,111 230,220v 242c 0,113 -125,225 -248,225H 105"
          />
          <path
            id="adv-line02"
            d="m 33,75h 444c 96,0 190,107 190,201v 224c 0,116 -98,188 -190,187l -192,-2c -92,0 -166,75 -166,168v 278c 0,94 74,169 166,169h 194c 92,0 188,94 188,188v 228c 0,94 -104,191 -214,191H 105"
          />
          <path
            id="adv-line03"
            d="m 155,137h 308c 94,0 162,86 162,177v 178c 0,109 -50,174 -166,173L 277,653C 158,653 77,762 77,849v 302c 0,118 107,196 180,197l 204,4c 92,0 164,67 164,160v 200c 0,91 -89,163 -188,163H 105"
          />
          <path
            id="adv-line04"
            d="m 283,173c 2,0 165,0 165,0C 544,175 577,238 577,330v 156c 0,94 -48,126 -140,125L 269,609C 167,602 29,702 29,851v 312c 0,111 101,235 242,235h 162c 109,1 144,49 144,136v 162c 0,73 -53,130 -118,130l -353,1"
          />

          {/* Straight vertical paths for mobile */}
          <path id="adv-line-mobile-1" d="M 185,0 V 2000" />
          <path id="adv-line-mobile-2" d="M 370,0 V 2000" />
          <path id="adv-line-mobile-3" d="M 555,0 V 2000" />
          <path id="adv-line-mobile-4" d="M 100,0 V 2000" />
          <path id="adv-line-mobile-5" d="M 640,0 V 2000" />
        </defs>

        <use href="#adv-line01" className="svg-use svg-use--desktop svg-use--1" />
        <use href="#adv-line02" className="svg-use svg-use--desktop svg-use--2" />
        <use href="#adv-line03" className="svg-use svg-use--desktop svg-use--3" />
        <use href="#adv-line04" className="svg-use svg-use--desktop svg-use--4" />

        <use href="#adv-line-mobile-1" className="svg-use svg-use--mobile svg-use--1" />
        <use href="#adv-line-mobile-2" className="svg-use svg-use--mobile svg-use--2" />
        <use href="#adv-line-mobile-3" className="svg-use svg-use--mobile svg-use--3" />
        <use href="#adv-line-mobile-4" className="svg-use svg-use--mobile svg-use--4" />
        <use href="#adv-line-mobile-5" className="svg-use svg-use--mobile svg-use--1" />
      </svg>
    </div>
  );
}
