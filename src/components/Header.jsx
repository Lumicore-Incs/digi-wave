'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { memo, useState } from 'react';
import { Menu, X } from 'lucide-react'; // ✅ Modern icons
import './styles/Header.css';

function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getNavLinkClass = (path) => {
    return `nav-link ${pathname === path ? 'active' : ''}`;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
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

        <nav className={`nav-menu ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link href="/" className={getNavLinkClass('/')} onClick={closeMobileMenu}>
            Home
          </Link>
          <Link href="/about" className={getNavLinkClass('/about')} onClick={closeMobileMenu}>
            About Us
          </Link>
          <Link href="/services" className={getNavLinkClass('/services')} onClick={closeMobileMenu}>
            Our Services
          </Link>
          <Link
            href="/our-advantage"
            className={getNavLinkClass('/our-advantage')}
            onClick={closeMobileMenu}
          >
            Our Advantage
          </Link>
          <Link href="/our-work" className={getNavLinkClass('/our-work')} onClick={closeMobileMenu}>
            Our Work
          </Link>
          <Link href="/contact" className={getNavLinkClass('/contact')} onClick={closeMobileMenu}>
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