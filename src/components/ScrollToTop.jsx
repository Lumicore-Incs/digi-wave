'use client';
import React, { useState, useEffect } from 'react';
import VideoPlaylist from '@/components/about/VideoPlaylist';
import './styles/ScrollToTop.css';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const [isInAdvantageSection, setIsInAdvantageSection] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/94774419900', '_blank');
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Hide youtube-btn when OurAdvantage section (with its own player) is in view
  useEffect(() => {
    const section = document.querySelector('.our-advantage-section');
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsInAdvantageSection(entry.isIntersecting),
      { threshold: 0.15 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="scroll-to-top">
      {isVideoVisible && <VideoPlaylist onClose={() => setIsVideoVisible(false)} />}
      {isVisible && (
        <>
          {!isInAdvantageSection && (
            <div
              onClick={() => setIsVideoVisible(!isVideoVisible)}
              className="youtube-btn"
              aria-label="Toggle Video Player"
            >
              {/* YouTube logo icon */}
              <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M27.4 3.14C27.07 1.9 26.1 0.93 24.86 0.6C22.68 0 14 0 14 0C14 0 5.32 0 3.14 0.6C1.9 0.93 0.93 1.9 0.6 3.14C0 5.32 0 10 0 10C0 10 0 14.68 0.6 16.86C0.93 18.1 1.9 19.07 3.14 19.4C5.32 20 14 20 14 20C14 20 22.68 20 24.86 19.4C26.1 19.07 27.07 18.1 27.4 16.86C28 14.68 28 10 28 10C28 10 28 5.32 27.4 3.14Z"
                  fill="white"
                  fillOpacity="0.15"
                />
                <path
                  d="M11.2 14.28L18.48 10L11.2 5.72V14.28Z"
                  fill="white"
                />
              </svg>
            </div>
          )}

          <div
            onClick={openWhatsApp}
            className="whatsapp-btn"
            aria-label="Open WhatsApp"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </div>

          <div
            onClick={scrollToTop}
            className="scroll-btn"
            aria-label="Scroll to top"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 19V5" />
              <path d="M5 12l7-7 7 7" />
            </svg>
          </div>
        </>
      )}
    </div>
  );
};

export default ScrollToTop;