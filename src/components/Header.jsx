'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { memo, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react'; // ✅ Modern icons
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
    // Close mobile menu
    setIsMobileMenuOpen(false);

    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Trigger navItemEmerge animation on all nav links
    if (navRef.current) {
      const links = navRef.current.querySelectorAll('.nav-link');
      links.forEach((link, i) => {
        link.style.animationDelay = `${i * 60}ms`;
        link.classList.remove('nav-click-anim');
        // Force reflow so re-adding the class restarts the animation
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

  return (
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
          <Link
            href="/our-advantage"
            className={getNavLinkClass('/our-advantage')}
            onClick={handleNavClick}
          >
            Our Advantage
          </Link>
          <Link href="/our-work" className={getNavLinkClass('/our-work')} onClick={handleNavClick}>
            Our Work
          </Link>
          <Link href="/contact" className={getNavLinkClass('/contact')} onClick={handleNavClick}>
            Contact Us
          </Link>
        </nav>

        {/* ✅ Modern Mobile Menu Button with Icon Toggle */}
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
  );
}

export default memo(Header);