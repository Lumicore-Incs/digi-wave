'use client';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import './styles/ContactForm.css';

export default function ContactForm() {
  return (
    <section className="contact-form-section">
      <div className="contact-intro">
        <div className="contact-intro-headlines">
          <div className="headline-bg">We&apos;re Here to Help</div>
          <div className="headline-fg">We&apos;re Here to Help</div>
        </div>{' '}
        <p className="contact-intro-text text-blue">
          Have a project in mind? Want to learn how our exclusive media access and digital expertise
          can elevate your brand? We&apos;re just a message away.
        </p>
      </div>

      <div className="contact-form-container">
        <div className="contact-info-section">
          <div className="footer-bg" />
          <div className="contact-info-card">
            <h3 className="contact-info-title">Get In Touch</h3>

            <div className="contact-info-item">
              <h4 className="contact-info-label">Email</h4>
              <a href="mailto:info@digiwave.com" className="contact-info-link">
                info@digiwave@gmail.com
              </a>
            </div>

            <div className="contact-info-item">
              <h4 className="contact-info-label">Phone</h4>
              <a href="tel:+94774719369990" className="contact-info-link">
                +94 77 (471) 936 9990
              </a>
            </div>

            <div className="contact-info-item">
              <h4 className="contact-info-label">Website</h4>
              <a
                href="https://www.digiwave.lk"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-info-link"
              >
                www.digiwave.lk
              </a>
            </div>

            <div className="contact-social-icons">
              <a href="#" className="contact-social-icon" aria-label="Facebook">
                <i className="pi pi-facebook"></i>
              </a>
              <a href="#" className="contact-social-icon" aria-label="Twitter">
                <i className="pi pi-twitter"></i>
              </a>
              <a href="#" className="contact-social-icon" aria-label="LinkedIn">
                <i className="pi pi-linkedin"></i>
              </a>
              <a href="#" className="contact-social-icon" aria-label="Instagram">
                <i className="pi pi-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form-section-right">
          <div className="contact-intro-headlines">
            <div className="headline-bg">Contact Us</div>
            <div className="headline-fg text-left">Contact Us</div>
          </div>
          <h2 className="contact-form-title">
            Get Your <span className="text-blue">Free Quote</span> Today
          </h2>

          <form className="contact-form">
            <div className="contact-form-row">
              <div className="contact-form-group">
                <label htmlFor="firstName">First Name</label>
                <InputText id="firstName" className="contact-form-input" />{' '}
              </div>
              <div className="contact-form-group">
                <label htmlFor="lastName">Last Name</label>
                <InputText id="lastName" className="contact-form-input" />{' '}
              </div>
            </div>

            <div className="contact-form-row">
              <div className="contact-form-group">
                <label htmlFor="email">Email</label>
                <InputText type="email" id="email" className="contact-form-input" />{' '}
              </div>
              <div className="contact-form-group">
                <label htmlFor="phone">Phone</label>
                <InputText type="tel" id="phone" className="contact-form-input" />{' '}
              </div>
            </div>

            <div className="contact-form-group">
              <label htmlFor="message">Message</label>
              <InputTextarea id="message" rows={5} className="contact-form-textarea" />{' '}
            </div>

            <Button label="Send" className="contact-form-submit-btn" />
          </form>
        </div>
      </div>
    </section>
  );
}
