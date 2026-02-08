'use client';
import Image from 'next/image';
import './styles/ServicesList.css';

export default function ServicesList() {
  const services = [
    {
      id: 1,
      title: 'Public Relations & Media Engagement',
      subtitle: 'Build credibility and shape your narrative with strategic media relations',
      description:
        "We secure meaningful coverage across Sri Lanka's most influential media channels, ensuring your story reaches the right audience at the right time.",
      image: '/images/project-images-1.jpg',
      items: [
        { name: 'PR Program for Organizations', price: 'Rs 250,000 +VAT' },
        { name: 'Tailored Packages', price: '' },
        { name: 'Product News Releases', price: 'Rs 25,000 +VAT' },
        { name: 'Audiovisual Engagement', price: '' },
        { name: 'Press Release Service', price: 'Rs 25,000 +VAT' },
        { name: 'Appointment Rs. 50,000', price: '' },
        { name: 'Media Event Coverage', price: '' },
        { name: 'TV Appearance Rs. 50,000', price: '' },
      ],
    },
    {
      id: 2,
      title: 'Digital Marketing & Social Media',
      subtitle: 'Turn followers into loyal customers',
      description:
        'From strategy to execution, we manage every aspect of your digital engagement and conversions. Turn followers into fans and clicks into customers.',
      image: '/images/project-images-2.jpg',
      packages: [
        { name: 'Digital Starter Package', price: 'Rs 30,000' },
        { name: 'SEO Content', price: 'Rs 50,000' },
        { name: 'Standard Package', price: 'Rs 50,000' },
        { name: 'Advanced Package', price: 'Rs 75,000' },
      ],
      campaignPricing: [
        { name: 'LEAD ADS (FB) Campaigns', price: 'Rs 40,000' },
        { name: 'LEAD Linkedin (BASIC)', price: 'Rs 60,000' },
      ],
      features: [
        'Comprehensive Social Media Management & Strategy',
        'Targeted Digital Advertising Campaigns (Social, Search, Display)',
        'Community Management & Growth',
        'Online Reputation Management',
      ],
    },
    {
      id: 3,
      title: 'Crisis Communication',
      subtitle: 'Navigate challenging situations with confidence',
      description:
        "When crisis strikes, we'll help you navigate challenging situations and safeguard your brand's integrity with expert crisis management solutions.",
      image: '/images/hero-background-1.jpg',
      items: [
        { name: 'Crisis Management Retainer', price: 'Rs 200,000 +VAT' },
        { name: 'Strategic Response Planning & Strategy', price: '' },
        { name: 'Real-time Issue Monitoring & Management', price: '' },
        { name: 'Development of Crisis Communication Protocols', price: '' },
        { name: 'Spokesperson Training and Message Control', price: '' },
      ],
    },
    {
      id: 4,
      title: 'Event Management & Brand Activations',
      subtitle: 'Create experiences that resonate',
      description:
        'We design and execute memorable events and activations that forge deep emotional connections with your target audience and amplify brand presence.',
      image: '/images/hero-background-2.jpg',
      items: [
        {
          name: 'Corporate/Product Launches and Brand Experience Design (Rs 300,000 Min BASE Regarding Project)',
          price: '',
        },
        { name: 'End-to-end Event Planning & Execution', price: '' },
        { name: 'On-site Coordination & Logistics', price: '' },
        { name: 'Securing comprehensive Event Media Coverage', price: '' },
        { name: 'Guest & Stakeholder Management', price: '' },
      ],
    },
    {
      id: 5,
      title: 'Content Creation',
      subtitle: 'Tell your story with content that engages',
      description:
        'Our creative team produces high-quality, multi-format content that resonates with audiences and drives action. From video to social posts, we craft content that converts.',
      image: '/images/hero-background-3.jpg',
      items: [
        { name: 'Professional Video Package', price: 'Rs 50,000 +VAT' },
        { name: 'Professional Video Production & Social Content', price: 'Rs 50,000- Rs 300,000' },
        { name: 'Influencer-Generated Content', price: 'Rs 20,000 >' },
      ],
      features: [
        'Compelling Copywriting for ads, websites, and blogs',
        'Professional Video Production & Editing',
        'Photography & Visual Assets',
        'Engaging Graphic Design & Multimedia Content',
      ],
    },
    {
      id: 6,
      title: 'Investor & Stakeholder Communications',
      subtitle: 'Maintain trust and transparency',
      description:
        'Maintain clear, consistent messaging to keep your investors, partners, and key stakeholders informed, engaged, and confident in your vision.',
      image: '/images/project-images-1.jpg',
      packages: [
        { name: 'Annual Report Writing/Communication', price: 'Rs 350,000 +VAT' },
        { name: 'Shareholder Meeting & Press Release Package', price: 'Rs 75,000' },
      ],
      features: [
        'Development of Annual Reports & Financial Communications',
        'Stakeholder Mapping & Engagement Strategies',
        'Internal Communications Support',
        'ESG documentation, Social, Governance Reporting',
      ],
    },
  ];

  return (
    <section className="services-list-section">
      <div className="services-list-header">
        <div className="services-list-headlines">
          <div className="headline-bg">Our Core Services</div>
          <div className="headline-fg">Our Core Services</div>
        </div>
        <h2 className="services-list-title">
          Comprehensive solutions to <span className="text-blue">elevate your brand</span>
          <br />
          <span className="text-blue">and drive results.</span>
        </h2>
      </div>

      <div className="services-list-container">
        {/* Service 1: Public Relations & Media Engagement */}
        <div className="service-detail-card layout-left">
          <div className="service-detail-content">
            <div className="service-detail-header">
              <span className="service-icon background-color-01 pi pi-megaphone"></span>
              <div>
                <h3 className="service-detail-title">Public Relations & Media Engagement</h3>
                <h4 className="service-subtitle font-color-01">
                  Build credibility and shape your narrative with strategic media relations
                </h4>
              </div>
            </div>
            <p className="service-description">
              We secure meaningful coverage across Sri Lanka&apos;s most influential media channels,
              ensuring your story reaches the right audience at the right time.
            </p>

            <div className="service-items">

              <div className="service-items-set">
                <span className="service-item-head">Press Release Service</span>
                <span className="item-name">
                  Drafting in English/Sinhala/Tamil, delivery to all media, minimum 8 articles
                </span>
                {/* <span className="item-name item-price">Investment: Rs. 70,000</span> */}
              </div>

              <div className="service-items-set mt-2">
                <span className="service-item-head">Press Conference Management</span>
                <span className="item-name">
                  Full management, media invitations, spokesperson prep, minimum 10 articles
                </span>
                {/* <span className="item-name item-price"> Investment: Rs. 180,000</span> */}
              </div>

              <div className="service-items-set mt-2">
                <span className="service-item-head">Media Event Coverage</span>
                <span className="item-name">
                  Strategic planning, coordination, tri-lingual releases, minimum 10 articles{' '}
                </span>
                {/* <span className="item-name item-price">Investment: Rs. 150,000</span> */}
              </div>
            </div>
          </div>

          <div className="service-detail-image">
            <Image
              src="/services/services-image-01.png"
              alt="Public Relations & Media Engagement"
              width={500}
              height={350}
              className="service-img"
            />
          </div>
        </div>

        {/* Service 2: Digital Marketing & Social Media */}
        <div className="service-detail-card layout-right">
          <div className="service-detail-content">
            <div className="service-detail-header">
              <span className="service-icon background-color-02 pi pi-mobile"></span>
              <div>
                <h3 className="service-detail-title">Digital Marketing & Social Media</h3>
                <h4 className="service-subtitle font-color-02">
                  Connect with your audience where they live-online
                </h4>
              </div>
            </div>
            <p className="service-description">
              We develop data-driven digital strategies that increase brand awareness, engagement,
              and conversions. Turn followers into fans and clicks into customers.
            </p>

            <div className="service-features">
              <div className="feature-item">
                <span className="feature-check font-color-02">✓</span>
                <span className="feature-text">
                  Comprehensive Social Media Management & Strategy
                </span>
              </div>
              <div className="feature-item">
                <span className="feature-check font-color-02">✓</span>
                <span className="feature-text">
                  Targeted Digital Advertising Campaigns (Social, Search, Display)
                </span>
              </div>
              <div className="feature-item">
                <span className="feature-check font-color-02">✓</span>
                <span className="feature-text">Community Management & Growth</span>
              </div>
              <div className="feature-item">
                <span className="feature-check font-color-02">✓</span>
                <span className="feature-text">Online Reputation Management</span>
              </div>
            </div>
          </div>

          <div className="service-detail-image">
            <Image
              src="/services/services-image-02.jpg"
              alt="Digital Marketing & Social Media"
              width={500}
              height={350}
              className="service-img"
            />
          </div>
        </div>

        {/* Service 3: Crisis Communication */}
        <div className="service-detail-card layout-left">
          <div className="service-detail-content">
            <div className="service-detail-header">
              <span className="service-icon background-color-03 pi pi-shield"></span>
              <div>
                <h3 className="service-detail-title">Crisis Communication</h3>
                <h4 className="service-subtitle font-color-03">
                  Protect your reputation when it matters most
                </h4>
              </div>
            </div>
            <p className="service-description">
              We provide rapid, strategic counsel to navigate challenging situations and safeguard
              your brand&apos;s integrity with expert crisis management solutions.
            </p>

            <div className="service-items">
              <div className="service-item service-item-03">
                <span className="item-name">Crisis Management Package</span>
                {/* <span className="item-price font-color-03">Rs 200,000 +VAT</span> */}
              </div>
              <div className="check-list">
                <span className="feature-check font-color-03">✓</span>
                <span className="item-name-full">24/7 Crisis Preparedness & Planning</span>
              </div>
              <div className="check-list">
                <span className="feature-check font-color-03">✓</span>
                <span className="item-name-full">Real-time Issue Monitoring & Management</span>
              </div>
              <div className="check-list">
                <span className="feature-check font-color-03">✓</span>
                <span className="item-name-full">
                  Development of Clear Communication Protocols{' '}
                </span>
              </div>
              <div className="check-list">
                <span className="feature-check font-color-03">✓</span>
                <span className="item-name-full"> Spokesperson Training and Message Control</span>
              </div>
            </div>
          </div>

          <div className="service-detail-image">
            <Image
              src="/services/services-images-03.jpg"
              alt="Crisis Communication"
              width={500}
              height={350}
              className="service-img"
            />
          </div>
        </div>

        {/* Service 4: Event Management & Brand Activations */}
        <div className="service-detail-card layout-right">
          <div className="service-detail-content">
            <div className="service-detail-header">
              <span className="service-icon background-color-04 pi pi-calendar-plus"></span>
              <div>
                <h3 className="service-detail-title">Event Management & Brand Activations</h3>
                <h4 className="service-subtitle font-color-04">
                  Create unforgettable experiences that bring your brand to life
                </h4>
              </div>
            </div>
            <p className="service-description">
              We design and execute memorable events and activations that forge deep emotional
              connections with your target audience and create lasting brand impressions.{' '}
            </p>

            <div className="service-items">
              <div className="check-list">
                <span className="feature-check font-color-04">✓</span>
                <span className="item-name-full"> End-to-end Event Planning & Execution</span>
              </div>
              <div className="check-list">
                <span className="feature-check font-color-04">✓</span>
                <span className="item-name-full"> Creative Brand Activation Concepts</span>
              </div>
              <div className="check-list">
                <span className="feature-check font-color-04">✓</span>
                <span className="item-name-full">Securing comprehensive Event Media Coverage</span>
              </div>
              <div className="check-list">
                <span className="feature-check font-color-04">✓</span>
                <span className="item-name-full"> Guest & Stakeholder Management</span>
              </div>
            </div>
          </div>

          <div className="service-detail-image">
            <Image
              src="/services/services-images-04.jpg"
              alt="Event Management & Brand Activations"
              width={500}
              height={350}
              className="service-img"
            />
          </div>
        </div>

        {/* Service 5: Content Creation */}
        <div className="service-detail-card layout-left">
          <div className="service-detail-content">
            <div className="service-detail-header">
              <span className="service-icon pi pi-pencil background-color-05"></span>
              <div>
                <h3 className="service-detail-title">Content Creation</h3>
                <h4 className="service-subtitle font-color-05">
                  Tell your story with content that captivates and converts
                </h4>
              </div>
            </div>
            <p className="service-description">
              Our creative team produces high-quality, multi-format content that resonates with your
              audience and supports your business goals across all platforms.
            </p>

            <span className="item-name">
              Tell your story with content that engages and converts.
            </span>
            <div className="service-items">
              <div className="service-item service-item-05">
                <span className="item-name">Strategic Web Article Placement</span>
                {/* <span className="item-price font-color-05">
                  Rs. 20,000/article <span className="font-color-05 pi pi-arrow-up"></span>
                </span> */}
              </div>
              <span className="item-name">Professional Video Production & Social Content </span>
              <section className="service-items mb-0">
                <div className="service-item service-item-05">
                  <span className="item-name">Video Podcast & Web News  {/* Package: */}</span>
                  {/* <span className="item-price font-color-05">Rs. 170,000 - Rs. 180,000</span> */}
                </div>
                <div className="service-item service-item-05">
                  <span className="item-name">Influencer-Generated Content </span>
                  {/* <span className="item-price font-color-05">
                    Rs. 20,000 <span className="font-color-05 pi pi-arrow-up"></span>
                  </span> */}
                </div>
              </section>
            </div>

            <div className="service-features">
              <div className="feature-item">
                <span className="feature-check font-color-05">✓</span>
                <span className="feature-text ">
                  Compelling Copywriting for ads, websites, and blogs
                </span>
              </div>
              <div className="feature-item">
                <span className="feature-check font-color-05">✓</span>
                <span className="feature-text">Professional Video Production & Editing</span>
              </div>
              <div className="feature-item">
                <span className="feature-check font-color-05">✓</span>
                <span className="feature-text">Strategic Brand Journalism</span>
              </div>
              <div className="feature-item">
                <span className="feature-check font-color-05">✓</span>
                <span className="feature-text">Engaging Graphic Design & Multimedia Content</span>
              </div>
            </div>
          </div>

          <div className="service-detail-image">
            <Image
              src="/services/services-images-05.jpg"
              alt="Content Creation"
              width={500}
              height={350}
              className="service-img"
            />
          </div>
        </div>

        {/* Service 6: Investor & Stakeholder Communications */}
        <div className="service-detail-card layout-right">
          <div className="service-detail-content">
            <div className="service-detail-header">
              <span className="service-icon pi pi-file-import background-color-06"></span>
              <div>
                <h3 className="service-detail-title">Investor & Stakeholder Communications</h3>
                <h4 className="service-subtitle font-color-06">
                  Build trust and transparency with your most important audiences
                </h4>
              </div>
            </div>
            <p className="service-description">
              We craft clear, consistent messaging to keep your investors, partners, and key
              stakeholders informed, engaged, and confident in your vision.
            </p>

            <div className="service-packages">
              <h5 className="packages-title">Our Core Investor Relations Packages</h5>
              <section className="service-items">
                <div className="service-item service-item-06">
                  <span className="item-name">Annual Report & Financial Communications</span>
                  {/* <span className="item-price font-color-06">Rs. 300,000 + VAT</span> */}
                </div>
                <div className="service-item service-item-06">
                  <span className="item-name">Stakeholder Briefing & Press Release Package</span>
                  {/* <span className="item-price font-color-06">Rs. 70,000</span> */}
                </div>
              </section>
            </div>

            <div className="service-features">
              <div className="feature-item">
                <span className="feature-check font-color-06">✓</span>
                <span className="feature-text">
                  Development of Annual Reports & Financial Communications{' '}
                </span>
              </div>
              <div className="feature-item">
                <span className="feature-check font-color-06">✓</span>
                <span className="feature-text">Stakeholder Mapping & Engagement Strategies</span>
              </div>
              <div className="feature-item">
                <span className="feature-check font-color-06">✓</span>
                <span className="feature-text">Internal Communications Support</span>
              </div>
              <div className="feature-item">
                <span className="feature-check font-color-06">✓</span>
                <span className="feature-text">
                  ESG (Environmental, Social, Governance) Reporting{' '}
                </span>
              </div>
            </div>
          </div>

          <div className="service-detail-image">
            <Image
              src="/services/services-images-06.jpg"
              alt="Investor & Stakeholder Communications"
              width={500}
              height={350}
              className="service-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
