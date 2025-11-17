import Image from 'next/image';
import Link from 'next/link';
import './styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-bg" />
      <div className="footer-content">
        <div className="footer-col footer-brand pr-6">
          <Image
            src="/images/logo-white.png"
            alt="DigiWave Logo"
            width={180}
            height={60}
            className="footer-logo"
          />
          <div className="footer-desc">
            A Next-Generation PR and Digital Marketing Agency riding the digital wave to transform
            your brand&#39;s story.
          </div>
          <div className="footer-socials">
            <span className="footer-dot" />
            <span className="footer-dot" />
          </div>
        </div>
        <div className="footer-col footer-links">
          <div className="footer-title">Quick Links</div>
          <ul>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/services">Our Services</Link>
            </li>
            <li>
              <Link href="/our-advantage">Our Advantage</Link>
            </li>
            <li>
              <Link href="/our-work">Our Work</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="footer-col footer-contact">
          <div className="footer-title">Contact Info</div>
          <ul>
            <li>
              <span className="pi pi-envelope"></span> digiwavesrilanka@gmail.com
            </li>
            <li>
              <span className="pi pi-phone"></span> +94 77 444 199 00
            </li>
            <li>
              <span className="pi pi-globe"></span> www.digiwave.lk
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
