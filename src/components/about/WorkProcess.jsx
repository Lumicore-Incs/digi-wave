'use client';
import './styles/WorkProcess.css';

export default function WorkProcess() {
  const steps = [
    {
      number: '01',
      icon: 'pi-list',
      title: 'Planning',
      description: 'Stakeholder mapping & content strategy',
      colorIndex: 0,
    },
    {
      number: '02',
      icon: 'pi-users',
      title: 'Engagement',
      description: 'Media and community relations',
      colorIndex: 1,
    },
    {
      number: '03',
      icon: 'pi-megaphone',
      title: 'Advocacy',
      description: 'Storytelling through PR & influencers',
      colorIndex: 2,
    },
    {
      number: '04',
      icon: 'pi-send',
      title: 'Amplification',
      description: 'Leveraging media partnerships',
      colorIndex: 3,
    },
    {
      number: '05',
      icon: 'pi-check-circle',
      title: 'Validation',
      description: 'Analytics & measurable results',
      colorIndex: 4,
    },
  ];

  const colorSchemes = [
    { light: '#e3f2fd', mid: '#1e88e5', dark: '#0d47a1' },      // Blue
    { light: '#f3e5f5', mid: '#7e57c2', dark: '#512da8' },      // Purple
    { light: '#e0f2f1', mid: '#26a69a', dark: '#00695c' },      // Teal
    { light: '#fff3e0', mid: '#ff9800', dark: '#e65100' },      // Orange
    { light: '#fce4ec', mid: '#ec407a', dark: '#c2185b' },      // Pink
  ];

  return (
    <section className="work-process-section">
      <div className="work-process-container">
        <div className="work-process-headlines">
          <h1 className="headline-bg">Work Process</h1>
          <h2 className="headline-fg">Work Process</h2>
        </div>
        <h2 className="process-title">Our Proven Work Process</h2>
        
        <div className="process-steps">
          {steps.map((step, index) => {
            const colors = colorSchemes[step.colorIndex];
            return (
              <div
                key={index}
                className="process-step"
                style={{
                  '--stagger-index': index,
                  '--step-delay': `${index * 0.15}s`,
                  '--color-light': colors.light,
                  '--color-mid': colors.mid,
                  '--color-dark': colors.dark,
                }}
              >
                <div className="step-icon-wrapper">
                  <div className="step-icon">
                    <i className={`pi ${step.icon}`}></i>
                  </div>
                  <span className="step-number-badge">{step.number}</span>
                </div>

                {index < steps.length - 1 && (
                  <div className="step-connector"></div>
                )}

                <h4 className="step-title">{step.title}</h4>
                <p className="step-description">{step.description}</p>

                <div className="step-glow"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}