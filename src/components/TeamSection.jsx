'use client';
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import './styles/TeamSection.css';

const teamMembers = [
  {
    name: 'Sachithra Wickramanayake',
    role: 'CEO & Director',
    img: '/images/team-member-images-3.jpeg',
    facebook: 'https://www.facebook.com/sachithra.wickramanayaka',
  },
  {
    name: 'Praboth Udugama',
    role: 'Director – Operations',
    img: '/images/team-member-images-2.jpeg',
    facebook: 'https://www.facebook.com/prabothudugama',
  },
  {
    name: 'Jayan Liyanage',
    role: 'Operations & Event Manager',
    img: '/images/team-member-images-1.jpeg',
    facebook: 'https://www.facebook.com/jayanliyanage.sl',
  },
  {
    name: 'Samadhi Dassanayaka',
    role: 'Project & Brand Strategy Manager',
    img: '/images/team-member-images-4.jpeg',
    facebook: 'https://www.facebook.com/samadhi.dassanayaka',
  },
  {
    name: 'Pasan Madhushanka',
    role: 'Head of Digital Marketing',
    img: '/images/team-member-images-5.jpeg',
    facebook: 'https://www.facebook.com/pasan.madhushanka.94',
  },
];

export default function TeamSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsCount = teamMembers.length;
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const goTo = useCallback((idx) => setCurrentIndex((idx + cardsCount) % cardsCount), [cardsCount]);
  const prev = useCallback(() => goTo(currentIndex - 1), [goTo, currentIndex]);
  const next = useCallback(() => goTo(currentIndex + 1), [goTo, currentIndex]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [prev, next]);

  useEffect(() => {
    const handleTouchStart = (e) => { touchStartX.current = e.changedTouches[0].screenX; };
    const handleTouchEnd = (e) => {
      touchEndX.current = e.changedTouches[0].screenX;
      const diff = touchStartX.current - touchEndX.current;
      if (Math.abs(diff) > 50) { if (diff > 0) next(); else prev(); }
    };
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [prev, next]);

  return (
    <section className="team-section" data-aos="fade-up">
      {/* Animated Background Dots */}
      <div className="bg-dots-container" aria-hidden="true">
        {/* Static decorative dot grids like in screenshot */}
        <div className="dot-grid dot-grid--tl"></div>
        <div className="dot-grid dot-grid--tr"></div>
        <div className="dot-grid dot-grid--bl"></div>
        <div className="dot-grid dot-grid--br"></div>
        <div className="dot-grid dot-grid--ml"></div>
        <div className="dot-grid dot-grid--mr"></div>
        <div className="dot-single dot-single--1"></div>
        <div className="dot-single dot-single--2"></div>
        <div className="dot-single dot-single--3"></div>
        <div className="dot-single dot-single--4"></div>
        {/* Floating animated dots */}
        {Array.from({ length: 18 }).map((_, i) => (
          <div key={i} className={`floating-dot floating-dot--${i + 1}`}></div>
        ))}
      </div>

      <div className="team-headline">
        <div className="headline-bg">Our Team</div>
        <div className="headline-fg">Our Team</div>
      </div>
      <div className="team-title">
        Meet Our <span className="team-title-accent">Expert Team</span>
      </div>
      <div className="carousel-container">
        <button className="nav-arrow left" onClick={prev} aria-label="Previous">
          <span className="pi pi-chevron-left"></span>
        </button>
        <div className="carousel-track">
          {teamMembers.map((member, i) => {
            const offset = (i - currentIndex + cardsCount) % cardsCount;
            let cardClass = 'card';
            if (offset === 0) cardClass += ' center';
            else if (offset === 1) cardClass += ' right-1';
            else if (offset === 2) cardClass += ' right-2';
            else if (offset === cardsCount - 1) cardClass += ' left-1';
            else if (offset === cardsCount - 2) cardClass += ' left-2';
            else cardClass += ' hidden';
            return (
              <div
                key={i}
                className={cardClass}
                onClick={() => goTo(i)}
                tabIndex={0}
                aria-label={member.name}
              >
                <Image
                  src={member.img}
                  alt={member.name}
                  width={280}
                  height={380}
                  draggable={false}
                />
                {member.facebook && (
                  <a
                    href={member.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fb-icon"
                    aria-label={`${member.name} Facebook`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                      <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.883v2.26h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                    </svg>
                  </a>
                )}
              </div>
            );
          })}
        </div>
        <button className="nav-arrow right" onClick={next} aria-label="Next">
          <span className="pi pi-chevron-right"></span>
        </button>
      </div>
      <div className="member-info">
        <h2 className="member-name">{teamMembers[currentIndex].name}</h2>
        <p className="member-role">{teamMembers[currentIndex].role}</p>
      </div>
      <div className="dots">
        {teamMembers.map((_, i) => (
          <div
            key={i}
            className={'dot' + (i === currentIndex ? ' active' : '')}
            onClick={() => goTo(i)}
            tabIndex={0}
            aria-label={`Go to member ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}