'use client';
import Image from 'next/image';
import './styles/ProjectShowcase.css';

export default function ProjectShowcase() {
  const projects = [
    {
      id: 1,
      number: '1',
      color: 'blue',
      title: 'Galle Food Festival',
      challenge:
        'To generate massive public turnout and nationwide media coverage for a premier culinary event in Galle.',
      solution:
        'A multi-pronged campaign combining targeted social media promotions, influencer collaborations, and a strategic press outreach across our exclusive print, television, and digital media network.',
      results:
        '"Galle Food Fest a big success." The event saw record-breaking attendance and was featured prominently in major news outlets, becoming the talk of the town.',
      image: '/our-work/food-festival-01.jpg',
      tags: ['Event Management', 'Media Coverage', 'Social Media', 'PR Campaign'],
      tagColor: '#0046B6',
      tagBackground: '#DBEAFE',
    },
    {
      id: 2,
      number: '2',
      color: 'purple',
      title: 'ELVE in Concert',
      challenge: 'Build buzz and sell out a high-profile international concert in Sri Lanka.',
      solution:
        'We crafted a powerful narrative around the event, leveraging digital advertising to target specific demographics and executing a PR blitz that included radio interviews, preview articles, and strategic social media countdowns.',
      results:
        'A highly successful and widely discussed concert, with strong media coverage and positive public sentiment.',
      image: '/our-work/elve-concert.jpg',
      tags: ['Digital Advertising', 'PR Campaign', 'Radio Interviews', 'Social Media'],
      tagColor: '#723C92',
      tagBackground: '#F5DBFE',
    },
    {
      id: 3,
      number: '3',
      color: 'orange',
      title: 'Strong Navy Campaign',
      challenge: 'To enhance the public image and recruitment drive for a naval organization.',
      solution:
        'A patriotic and empowering brand journalism and PR campaign, highlighting the strength and legacy of the navy through compelling video content, feature articles, and targeted community engagement.',
      results:
        "Increased brand affinity and successful stakeholder communication, strengthening the organization's public profile.",
      image: '/our-work/strong-navy-campaign.jpg',
      tags: [
        'Brand Journalism',
        'Video Content',
        'Community Engagement',
        'Stakeholder Communication',
      ],
      tagColor: '#D57604',
      tagBackground: '#FEEBDB',
    },
    {
      id: 4,
      number: '4',
      color: 'green',
      title: 'Monik Legacy 24 - "We Thrive Together"',
      challenge: 'To launch a new brand or initiative with a powerful, community-focused message.',
      solution:
        'A full-scale launch event managed by our sister company, Wickramanayake Event, amplified by DigiWave\'s integrated PR and digital strategy. We used the "We Thrive Together" mantra to build a movement, not just a campaign.',
      results:
        "A powerful and cohesive brand launch that successfully established the new entity's identity.",
      image: '/our-work/monik-legacy.jpg',
      tags: ['Brand Launch', 'Event Management', 'Integrated PR', 'Digital Strategy'],
      tagColor: '#008E34',
      tagBackground: '#DBFEEF',
    },
  ];

  return (
    <section className="project-showcase-section">
      <div className="project-showcase-header">
        <div className="project-showcase-headline">
          <div className="headline-bg">Featured Projects</div>
          <div className="headline-fg">Featured Projects</div>
        </div>
        <h2 className="project-showcase-title">
          Real campaigns, <span className="text-blue">Real results, Real impact</span>
        </h2>
      </div>

      <div className="project-showcase-container">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`project-card ${index % 2 === 0 ? 'layout-right' : 'layout-left'}`}
          >
            <div className="project-content">
              <div className="flex align-items-center gap-3">
                <div className={`project-number-badge bg-${project.color}`}>{project.number}</div>
                <h3 className="project-title">{project.title}</h3>
              </div>

              <div className="project-section">
                <h4 className="project-section-title">The Challenge</h4>
                <p className="project-section-text">{project.challenge}</p>
              </div>

              <div className="project-section">
                <h4 className="project-section-title">Our Solution</h4>
                <p className="project-section-text">{project.solution}</p>
              </div>

              <div className="project-section">
                <h4 className="project-section-title">The Results</h4>
                <p className="project-section-text">{project.results}</p>
              </div>

              <div className="project-tags">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="project-tag"
                    style={{ background: project.tagBackground, color: project.tagColor }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="project-image">
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={400}
                className={`project-img ${index % 2 === 0 ? 'l-border-radius' : 'r-border-radius'}`}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
