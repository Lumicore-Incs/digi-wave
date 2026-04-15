import Image from 'next/image';
import Link from 'next/link';
import './styles/Footer.css';

export default function Footer() {
  return (
    <>
    <footer className="footer-section">
      <div className="footer-bg" />
      <div className="footer-content">
        <div className="footer-col footer-brand pr-6" data-aos="fade-up" data-aos-duration="1000">
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
        <div className="footer-col footer-links" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
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
        <div className="footer-col footer-contact footer-links" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
          <div className="footer-title">Contact Info</div>
          <ul style={{ color: '#fff' }}>
            <li>
              <span className="pi pi-envelope"></span>{' '}
              <a href="mailto:digiwavesrilanka@gmail.com" style={{ color: '#fff' }}>
                digiwavesrilanka@gmail.com
              </a>
            </li>

            <li>
              <span className="pi pi-phone"></span>{' '}
              <a href="tel:+94774419900" style={{ color: '#fff' }}>
                +94 77 441 9900
              </a>
            </li>

            <li>
              <span className="pi pi-phone"></span>{' '}
              <a href="tel:+94719089900" style={{ color: '#fff' }}>
                +94 71 908 9900
              </a>
            </li>

            <li>
              <span className="pi pi-globe"></span>{' '}
              <a href="https://www.digiwave.lk" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
                www.digiwave.lk
              </a>
            </li>
          </ul>
        </div>

      </div>
    </footer>

    {/* Footer / Copyright Section */}
    <footer className="public-footer" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="600">
      <div className="footer-bottom">
        <p>© 2026 Lumicore Labs. All Rights Reserved. | Designed & Developed with Adits Technologies</p>
        <p className="footer-credits">Powered by <a href="https://piyumalnipuna60.github.io/My-Portfoliyo-2" target="_blank" rel="noopener noreferrer">Nipuna Piyumal</a></p>
      </div>
    </footer>
    </>
  );
}
