'use client';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import './styles/QuoteForm.css';

export default function QuoteForm() {
  return (
    <section className="quote-form-section">
      <div className="quote-form-container">
        <div className="quote-form-left">
          <div className="footer-bg" />
          <div className="contact-info-card">
            <h3 className="contact-title">Contact Us</h3>

            <div className="contact-item">
              <h4 className="contact-label">Email</h4>
              <a href="mailto:info@digiwave.com" className="contact-link">
                info@digiwave@gmail.com
              </a>
            </div>

            <div className="contact-item">
              <h4 className="contact-label">Phone</h4>
              <a href="tel:+94712345678" className="contact-link">
                +94 77 (471) 936 9990
              </a>
            </div>

            <div className="contact-item">
              <h4 className="contact-label">Website</h4>
              <a
                href="https://www.digiwave.lk"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                www.digiwave.lk
              </a>
            </div>

            <div className="social-icons">
              <a href="#" className="social-icon" aria-label="Facebook">
                <i className="pi pi-facebook"></i>
              </a>
              <a href="#" className="social-icon" aria-label="Twitter">
                <i className="pi pi-twitter"></i>
              </a>
              <a href="#" className="social-icon" aria-label="LinkedIn">
                <i className="pi pi-linkedin"></i>
              </a>
              <a href="#" className="social-icon" aria-label="Instagram">
                <i className="pi pi-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="quote-form-right">
          <div className="quote-form-headlines">
            <div className="headline-bg">Contact Us</div>
            <div className="headline-fg">Contact Us</div>
          </div>
          <h2 className="quote-form-title">
            Get Your <span className="text-blue">Free Quote</span> Today
          </h2>

          <form className="quote-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <InputText id="firstName" className="form-input" />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <InputText id="lastName" className="form-input" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <InputText type="email" id="email" className="form-input" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <InputText type="tel" id="phone" className="form-input" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <InputTextarea id="message" rows={5} className="form-textarea" />
            </div>

            <Button label="Send" className="form-submit-btn" />
          </form>
        </div>
      </div>
    </section>
  );
}
