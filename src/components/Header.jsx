'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { memo, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import './styles/Header.css';

function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef(null);

  const getNavLinkClass = (path) => {
    return `nav-link ${pathname === path ? 'active' : ''}`;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (navRef.current) {
      const links = navRef.current.querySelectorAll('.nav-link');
      links.forEach((link, i) => {
        link.style.animationDelay = `${i * 60}ms`;
        link.classList.remove('nav-click-anim');
        void link.offsetWidth;
        link.classList.add('nav-click-anim');
        link.addEventListener(
          'animationend',
          () => link.classList.remove('nav-click-anim'),
          { once: true }
        );
      });
    }
  };

  const FacebookIcon = () => (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );

  const TikTokIcon = () => (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.78a8.18 8.18 0 0 0 4.78 1.52V6.85a4.85 4.85 0 0 1-1.01-.16z" />
    </svg>
  );

  const YouTubeIcon = () => (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon fill="rgba(8,12,42,0.95)" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
    </svg>
  );

  const InstagramIcon = () => (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );

  const SocialIcons = () => (
    <>
      <a
        href="https://www.facebook.com/profile.php?id=61580452866043"
        className="social-icon-link facebook"
        aria-label="Facebook"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FacebookIcon />
      </a>
      <a
        href="https://www.tiktok.com/@wickramanayake.ho"
        className="social-icon-link tiktok"
        aria-label="TikTok"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TikTokIcon />
      </a>
      <a
        href="https://www.youtube.com/@wickramanayake"
        className="social-icon-link youtube"
        aria-label="YouTube"
        target="_blank"
        rel="noopener noreferrer"
      >
        <YouTubeIcon />
      </a>
      <a
        href="https://www.instagram.com/yourhandle"
        className="social-icon-link instagram"
        aria-label="Instagram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <InstagramIcon />
      </a>
    </>
  );

  return (
    <>
      {/* Mobile Social Bar */}
      <div className="mobile-social-bar">
        <SocialIcons />
      </div>

      <header className="header">
        <div className="header-content">
          <div className="logo-section">
            <Image
              src="/images/logo-white.png"
              alt="DigiWave Logo"
              width={180}
              height={60}
              priority
            />
          </div>

          <nav ref={navRef} className={`nav-menu ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <Link href="/" className={getNavLinkClass('/')} onClick={handleNavClick}>
              Home
            </Link>
            <Link href="/about" className={getNavLinkClass('/about')} onClick={handleNavClick}>
              About Us
            </Link>
            <Link href="/services" className={getNavLinkClass('/services')} onClick={handleNavClick}>
              Our Services
            </Link>
            <Link href="/our-advantage" className={getNavLinkClass('/our-advantage')} onClick={handleNavClick}>
              Our Advantage
            </Link>
            <Link href="/our-work" className={getNavLinkClass('/our-work')} onClick={handleNavClick}>
              Our Work
            </Link>
            <Link href="/contact" className={getNavLinkClass('/contact')} onClick={handleNavClick}>
              Contact Us
            </Link>
          </nav>

          <div className="desktop-social-icons">
            <SocialIcons />
          </div>

          <button
            className="mobile-menu-btn"
            aria-label="Toggle menu"
            onClick={toggleMobileMenu}
            type="button"
          >
            {isMobileMenuOpen ? (
              <X size={28} strokeWidth={2.5} />
            ) : (
              <Menu size={28} strokeWidth={2.5} />
            )}
          </button>
        </div>
      </header>
    </>
  );
}

export default memo(Header);