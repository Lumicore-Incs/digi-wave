'use client';
import './styles/ContactProcess.css';

export default function ContactProcess() {
  const steps = [
    {
      icon: 'pi-comments',
      title: 'We Listen',
      description: 'Our team will review your requirements carefully',
    },
    {
      icon: 'pi-sync',
      title: 'We Plan',
      description: "We'll schedule a free consultation to understand your goals",
    },
    {
      icon: 'pi-file-edit',
      title: 'We Propose',
      description: "You'll receive a customized strategy and proposal",
    },
    {
      icon: 'pi-check-circle',
      title: 'We Execute',
      description: "Let's ride the digital wave together!",
    },
  ];

  return (
    <>
      <section className="contact-process-section">
        <div className="contact-process-container">
          <div className="contact-process-header">
            <div className="contact-process-headlines" data-aos="fade-left" data-aos-duration="1000">
              <div className="headline-bg">What Happens Next?</div>
              <div className="headline-fg">What Happens Next?</div>
            </div>
            <h2 className="contact-process-title" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
              Our simple 4-step process to <span className="text-blue">get you started</span>
            </h2>
          </div>

          <div className="contact-process-steps">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="contact-process-step"
                data-aos="fade-up"
                data-aos-delay={index * 150}
                data-aos-duration="1000"
                data-aos-easing="ease-out-cubic"
                data-aos-once="true"
              >
                <div className="contact-step-icon-wrapper">
                  <div className="contact-step-icon">
                    <i className={`pi ${step.icon}`}></i>
                  </div>
                </div>
                <h4 className="contact-step-title">{step.title}</h4>
                <p className="contact-step-description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-follow-section">
        <div className="contact-follow-container">
          <div className="contact-follow-headlines" data-aos="fade-right" data-aos-duration="1000">
            <div className="headline-bg">Follow Our Wave</div>
            <div className="headline-fg">Follow Our Wave</div>
          </div>
          <p className="contact-follow-text" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
            Stay connected with us for the latest campaigns
          </p>

          <div className="contact-follow-socials">
            <a href="#" className="contact-follow-icon" aria-label="Facebook" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
              <i className="pi pi-facebook"></i>
            </a>
            <a href="#" className="contact-follow-icon" aria-label="Twitter" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
              <i className="pi pi-twitter"></i>
            </a>
            <a href="#" className="contact-follow-icon" aria-label="LinkedIn" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
              <i className="pi pi-linkedin"></i>
            </a>
            <a href="#" className="contact-follow-icon" aria-label="Instagram" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="700">
              <i className="pi pi-instagram"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
