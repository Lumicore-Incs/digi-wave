'use client';
import Image from 'next/image';
import './styles/BrandLogos.css';

const logos = [
  { src: '/images/New folder/brand-logo-1.png', alt: 'Brand 1' },
  { src: '/images/New folder/brand-logo-2.png', alt: 'Brand 2' },
  { src: '/images/New folder/brand-logo-3.png', alt: 'Brand 3' },
  { src: '/images/New folder/brand-logo-4.png', alt: 'Brand 4' },
  { src: '/images/New folder/brand-logo-5.png', alt: 'Brand 5' },
  { src: '/images/New folder/brand-logo-6.png', alt: 'Brand 6' },
  { src: '/images/New folder/brand-logo-7.jpg', alt: 'Brand 7' },
  { src: '/images/New folder/brand-logo-8.png', alt: 'Brand 8' },
  { src: '/images/New folder/brand-logo-9.png', alt: 'Brand 9' },
  { src: '/images/New folder/brand-logo-10.png', alt: 'Brand 10' },
  { src: '/images/New folder/brand-logo-11.png', alt: 'Brand 11' },
  { src: '/images/New folder/brand-logo-12.png', alt: 'Brand 12' },
  { src: '/images/New folder/brand-logo-13.png', alt: 'Brand 13' },
  { src: '/images/New folder/brand-logo-14.png', alt: 'Brand 14' },
  { src: '/images/New folder/brand-logo-15.png', alt: 'Brand 15' },
  { src: '/images/New folder/brand-logo-16.png', alt: 'Brand 16' },
  { src: '/images/New folder/brand-logo-17.png', alt: 'Brand 17' },
  { src: '/images/New folder/brand-logo-18.png', alt: 'Brand 18' },
  { src: '/images/New folder/brand-logo-19.png', alt: 'Brand 19' },
  { src: '/images/New folder/brand-logo-20.png', alt: 'Brand 20' },
  { src: '/images/New folder/brand-logo-21.png', alt: 'Brand 21' },
  { src: '/images/New folder/brand-logo-22.png', alt: 'Brand 22' },
  { src: '/images/New folder/brand-logo-23.png', alt: 'Brand 23' },
  { src: '/images/New folder/brand-logo-24.png', alt: 'Brand 24' },
];

export default function BrandLogos() {
  return (
    <section className="brand-logos-section" data-aos="zoom-in">
      <div className="brand-logos-bg">
        <div className="brand-logos-track">
          <div className="brand-logos-inner">
            <div className="brand-logos-strip" aria-hidden="false">
              {logos.map((logo, idx) => (
                <div className="brand-logo-item" key={idx}>
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={100}
                    height={60}
                    className="brand-logo-img"
                    draggable={false}
                  />
                </div>
              ))}
            </div>

            <div className="brand-logos-strip" aria-hidden="true">
              {logos.map((logo, idx) => (
                <div className="brand-logo-item" key={`dup-${idx}`}>
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={100}
                    height={60}
                    className="brand-logo-img"
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
