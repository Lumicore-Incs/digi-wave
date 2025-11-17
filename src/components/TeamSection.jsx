'use client';
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import './styles/TeamSection.css';

const teamMembers = [
  {
    name: 'Jayan Liyanage',
    role: 'Operations & Event Manager',
    img: '/images/team-member-images-1.jpeg',
  },
  {
    name: 'Praboth Udugama',
    role: 'Director – Operations',
    img: '/images/team-member-images-2.jpeg',
  },
  {
    name: 'Sachithra Wickramanayake',
    role: 'CEO & Director',
    img: '/images/team-member-images-3.jpeg',
  },
  {
    name: 'Samadhi  Dassanayaka ',
    role: 'Project & Brand Strategy Manager',
    img: '/images/team-member-images-4.jpeg',
  },
  {
    name: 'Pasan Madhushanka',
    role: 'Head of Digital Marketing',
    img: '/images/team-member-images-5.jpeg',
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
  }, [currentIndex, prev, next]);

  useEffect(() => {
    const handleTouchStart = (e) => {
      touchStartX.current = e.changedTouches[0].screenX;
    };
    const handleTouchEnd = (e) => {
      touchEndX.current = e.changedTouches[0].screenX;
      const diff = touchStartX.current - touchEndX.current;
      if (Math.abs(diff) > 50) {
        if (diff > 0) next();
        else prev();
      }
    };
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentIndex, prev, next]);

  return (
    <section className="team-section" data-aos="fade-up">
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
