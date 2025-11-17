'use client';
import Image from 'next/image';
import './styles/OurStory.css';

export default function OurStory() {
  return (
    <section className="our-story-section">
      <div className="our-story-container">
        <div className="our-story-left">
          <div className="story-images">
            <div className="story-image-large">
              <Image
                src="/about-us/about-us-images-2.jpg"
                alt="DigiWave Event"
                width={300}
                height={225}
                className="story-img"
              />
              <Image
                src="/about-us/about-us-images.jpg"
                alt="DigiWave Team"
                width={180}
                height={140}
                className="story-img-02 story-img"
              />
              <Image
                src="/about-us/about-us-background.jpg"
                alt="DigiWave Work"
                width={180}
                height={140}
                className="story-img-03 story-img w-10"
              />
            </div>
            <div className="story-images-small"></div>
          </div>
        </div>

        <div className="our-story-right">
          <div className="our-story-headline">
            <div className="headline-bg">Our Story</div>
            <div className="headline-fg">Our Story</div>
          </div>
          <h2 className="our-story-title">
            Tranforming <span className="text-blue">ideas</span>
            <br />
            <span className="text-blue"> Into Digital Reality</span>
          </h2>
          <p className="our-story-text">
            DigiWave helps brands embrace digital transformation with local insights, global
            expertise, and exclusive media access. We don’t just follow trends—we create them,
            guiding clients to succeed in the fast-changing digital world.
          </p>

          <div className="our-story-stats">
            <div className="stat-item">
              <div className="stat-number">30+</div>
              <div className="stat-label">Clients</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">99%</div>
              <div className="stat-label">Retention Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
