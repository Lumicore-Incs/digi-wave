'use client';
import Image from 'next/image';
import { OrganizationChart } from 'primereact/organizationchart';
import './styles/CompanyNetwork.css';

export default function CompanyNetwork() {
  const data = [
    {
      expanded: true,
      type: 'company',
      className: 'company-node',
      data: {
        logo: '/images/logo-wickramanayake-holdings.jpg',
        name: 'Wickramanayake Holdings (PVT) LTD',
      },
      children: [
        {
          expanded: true,
          type: 'division',
          className: 'division-node division-events',
          data: {
            title: 'Wickramanayake Event',
            items: ['Events', 'Advertising', 'Audio, Video, Filming'],
          },
        },
        {
          expanded: true,
          type: 'division',
          className: 'division-node division-digiwave',
          data: {
            title: 'DigiWave',
            items: ['Public Relations', 'Digital Marketing'],
          },
        },
        {
          expanded: true,
          type: 'division',
          className: 'division-node division-news',
          data: {
            title: 'News & Media',
            subtitle: '(Our Brands)',
            items: [
              { name: 'News 19', icon: '/images/logos/brand-logo-1.png' },
              { name: 'News Center', icon: '/images/logos/news.jpg' },
              { name: 'The Life Traveler', icon: '/images/logos/travel.png' },
              { name: 'Art', icon: '/images/logos/logo1.png' },
              { name: 'Channel E', icon: '/images/logos/channelE.jpg' },
              { name: 'Ceylonwire', icon: '/images/logos/Ceylonwire.jpg' },
              { name: 'Daily Times', icon: '/images/logos/brand-logo-2.png' },
              { name: 'Wayaba.lk', icon: '/images/logos/brand-logo-25.webp' },
              { name: 'Rundown Podcast', icon: '/images/logos/brand-logo-4.png' },
            ],
          },
        },
      ],
    },
  ];

  const nodeTemplate = (node) => {
    if (node.type === 'company') {
      return (
        <div className="company-node-content">
          <div className="company-logo">
            <Image src={node.data.logo} alt="WH Logo" width={80} height={80} />
          </div>
          <div className="company-name">{node.data.name}</div>
        </div>
      );
    }

    if (node.type === 'division') {
      return (
        <div className="division-container">
          <h4 className="division-title">
            {node.data.title}
            {node.data.subtitle && <span className="division-subtitle">{node.data.subtitle}</span>}
          </h4>
          <div className="division-node-content">
            <ul className="division-list">
              {node.data.items.map((item, index) => (
                <li key={index}>
                  {typeof item === 'object' ? (
                    <>
                      <span className="item-icon">
                        <Image
                          src={item.icon}
                          alt={item.name}
                          width={24}
                          height={24}
                        />
                      </span>
                      <span className="item-name">{item.name}</span>
                    </>
                  ) : (
                    item
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <section className="company-network-section">
      <div className="company-network-container">
        <div className="network-subtitle-headline">
          <div className="headline-bg">Wickramanayake Holdings</div>
          <div className="headline-fg">Wickramanayake Holdings</div>
        </div>
        <h2 className="network-title">
          A powerful network driving <span className="text-blue">Digital Transformation</span>
        </h2>

        <div className="org-chart-wrapper">
          <OrganizationChart value={data} nodeTemplate={nodeTemplate} />
          <span className="org-chart-line"></span>
        </div>
      </div>
    </section>
  );
}
