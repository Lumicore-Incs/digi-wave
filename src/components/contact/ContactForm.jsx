'use client';
import { useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Toast } from 'primereact/toast';
import { Dialog } from 'primereact/dialog';
import { useRef } from 'react';
import './styles/ContactForm.css';

export default function ContactForm() {
  const toast = useRef(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalState, setModalState] = useState('loading');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.firstName.trim() || !formData.email.trim()) {
      toast.current.show({
        severity: 'error',
        summary: 'Validation Error',
        detail: 'First name and email are required',
        life: 3000,
      });
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/send-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send email');
      }

      setShowModal(true);
      setModalState('success');

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch (error) {
      toast.current.show({
        severity: 'error',
        summary: 'Error',
        detail: error.message || 'Failed to send your request. Please try again later.',
        life: 5000,
      });
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="contact-form-section" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-out-cubic" data-aos-once="true">
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
          <div className="contact-info-card" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200">
            <h3 className="contact-info-title" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">Get In Touch</h3>

            <div className="contact-info-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
              <h4 className="contact-info-label">Email</h4>
              <a href="mailto:digiwavesrilanka@gmail.com" className="contact-info-link">
                digiwavesrilanka@gmail.com
              </a>
            </div>

            <div className="contact-info-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="600">
              <h4 className="contact-info-label">Phone</h4>
              <a href="tel:+94774419900" className="contact-info-link">
                +94 77 441 9900
              </a>
            </div>

            <div className="contact-info-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="700">
              <h4 className="contact-info-label">Phone</h4>
              <a href="tel:+94719089900" className="contact-info-link">
                +94 71 908 9900
              </a>
            </div>

            <div className="contact-info-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="800">
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

            <div className="contact-social-icons" data-aos="fade-up" data-aos-duration="800" data-aos-delay="900">
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
          <div className="contact-intro-headlines" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
            <div className="headline-bg">Contact Us</div>
            <div className="headline-fg text-left">Contact Us</div>
          </div>
          <h2 className="contact-form-title" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400">
            Get Your <span className="text-blue">Free Quote</span> Today
          </h2>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-row">
              <div className="contact-form-group" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
                <label htmlFor="firstName">First Name</label>
                <InputText 
                  id="firstName" 
                  className="contact-form-input"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />{' '}
              </div>
              <div className="contact-form-group" data-aos="fade-up" data-aos-duration="800" data-aos-delay="600">
                <label htmlFor="lastName">Last Name</label>
                <InputText 
                  id="lastName" 
                  className="contact-form-input"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />{' '}
              </div>
            </div>

            <div className="contact-form-row">
              <div className="contact-form-group" data-aos="fade-up" data-aos-duration="800" data-aos-delay="700">
                <label htmlFor="email">Email</label>
                <InputText 
                  type="email" 
                  id="email" 
                  className="contact-form-input"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />{' '}
              </div>
              <div className="contact-form-group" data-aos="fade-up" data-aos-duration="800" data-aos-delay="800">
                <label htmlFor="phone">Phone</label>
                <InputText 
                  type="tel" 
                  id="phone" 
                  className="contact-form-input"
                  value={formData.phone}
                  onChange={handleInputChange}
                />{' '}
              </div>
            </div>

            <div className="contact-form-group" data-aos="fade-up" data-aos-duration="800" data-aos-delay="900">
              <label htmlFor="message">Message</label>
              <InputTextarea 
                id="message" 
                rows={5} 
                className="contact-form-textarea"
                value={formData.message}
                onChange={handleInputChange}
              />{' '}
            </div>

            <Button 
              label={loading ? "Sending..." : "Send"} 
              className="contact-form-submit-btn"
              type="submit"
              disabled={loading}
              loading={loading}
              data-aos="fade-up" 
            />
          </form>
        </div>
      </div>
      <Toast ref={toast} />

      {/* Success Modal */}
      <Dialog
        visible={showModal}
        modal
        className="contact-modal"
        style={{ width: '90vw', maxWidth: '420px' }}
        onHide={() => setShowModal(false)}
        header={null}
        footer={null}
      >
        <div className="modal-content">
          {modalState === 'success' && (
            <div className="success-content">
              <div className="success-icon-wrapper">
                <div className="success-icon">
                  <i className="pi pi-check"></i>
                </div>
              </div>
              <h2 className="success-title">Thank You!</h2>
              <p className="success-subtitle">
                Your message has been received
              </p>
              <div className="success-divider"></div>
              <p className="success-message">
                We appreciate you reaching out to us. Our team is reviewing your message and will get back to you shortly with a response.
              </p>
              <Button
                label="Done"
                onClick={() => setShowModal(false)}
                className="success-btn"
              />
            </div>
          )}
        </div>
      </Dialog>
    </section>
  );
}
