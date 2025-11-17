'use client';
import './styles/WorkProcess.css';

export default function WorkProcess() {
  const steps = [
    {
      number: '01',
      icon: 'pi-list',
      title: 'Planning',
      description: 'Stakeholder mapping & content strategy',
    },
    {
      number: '02',
      icon: 'pi-users',
      title: 'Engagement',
      description: 'Media and community relations',
    },
    {
      number: '03',
      icon: 'pi-megaphone',
      title: 'Advocacy',
      description: 'Storytelling through PR & influencers',
    },
    {
      number: '04',
      icon: 'pi-send',
      title: 'Amplification',
      description: 'Leveraging media partnerships',
    },
    {
      number: '05',
      icon: 'pi-check-circle',
      title: 'Validation',
      description: 'Analytics & measurable results',
    },
  ];

  return (
    <section className="work-process-section">
      <div className="work-process-container">
        <div className="work-process-headlines">
          <div className="headline-bg">Work Process</div>
          <div className="headline-fg">Work Process</div>
        </div>
        <h2 className="process-title">Our Proven Work Process</h2>
        <div className="process-steps">
          {steps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="step-icon-wrapper">
                <div className="step-icon">
                  <i className={`pi ${step.icon}`}></i>
                  <span className="step-number-badge">{step.number}</span>
                </div>
                {index < steps.length - 1 && <div className="step-connector"></div>}
              </div>
              <h4 className="step-title">{step.title}</h4>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
