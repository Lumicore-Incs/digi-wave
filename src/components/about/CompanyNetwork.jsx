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
        name: 'Wikramanakye Holdings Pvt (LTD)',
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
              'News 19',
              'News Center',
              'The Life Center',
              'Art',
              'Channel E',
              'Ceylonwire',
              'Daily Times',
              'Wayaba.lk',
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
                <li key={index}>{item}</li>
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
