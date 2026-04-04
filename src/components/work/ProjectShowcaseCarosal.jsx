'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Carousel } from 'primereact/carousel';
import './styles/ProjectShowcaseCarosal.css';

export default function ProjectShowcaseCarosal() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const images = [
    { id: 1, src: '/our-work/our-work-images-1.jpg', alt: 'Project Showcase 1' },
    { id: 2, src: '/our-work/our-work-images-2.jpg', alt: 'Project Showcase 2' },
    { id: 3, src: '/our-work/our-work-images-3.jpg', alt: 'Project Showcase 3' },
    { id: 4, src: '/our-work/our-work-images-4.jpg', alt: 'Project Showcase 4' },
    { id: 5, src: '/our-work/our-work-images-5.jpg', alt: 'Project Showcase 5' },
    { id: 6, src: '/our-work/our-work-images-6.jpg', alt: 'Project Showcase 6' },
    { id: 7, src: '/our-work/our-work-images-7.jpg', alt: 'Project Showcase 7' },
    { id: 8, src: '/our-work/our-work-images-8.jpg', alt: 'Project Showcase 8' },
    { id: 9, src: '/our-work/our-work-images-9.jpg', alt: 'Project Showcase 9' },
    { id: 10, src: '/our-work/our-work-images-10.jpg', alt: 'Project Showcase 10' },
    { id: 11, src: '/our-work/our-work-images-11.jpg', alt: 'Project Showcase 11' },
    { id: 12, src: '/our-work/our-work-images-12.jpg', alt: 'Project Showcase 12' },
    { id: 13, src: '/our-work/our-work-images-13.jpg', alt: 'Project Showcase 13' },
    { id: 14, src: '/our-work/our-work-images-14.jpg', alt: 'Project Showcase 14' },
  ];

  const imageTemplate = (image) => {
    return (
      <div className="carousel-image-wrapper">
        <Image
          src={image.src}
          alt={image.alt}
          width={1200}
          height={700}
          className="carousel-image"
          priority={image.id <= 3}
        />
      </div>
    );
  };

  return (
    <section className="project-carousel-section">
      <div className="project-carousel-container">
        <div className="carousel-header">
          <div className="carousel-headlines">
            <div className="headline-bg">Our Work Gallery</div>
            <div className="headline-fg">Our Work Gallery</div>
          </div>
          <h2 className="carousel-title">
            Explore Our <span className="text-blue">Success Stories</span>
          </h2>
        </div>

        {isClient && (
        <Carousel
          value={images}
          numVisible={1}
          numScroll={1}
          itemTemplate={imageTemplate}
          circular
          autoplay
          autoplayInterval={2000}
          className="project-carousel"
        />
        )}
      </div>
    </section>
  );
}
