'use client';
import { useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Toast } from 'primereact/toast';
import { Dialog } from 'primereact/dialog';
import { useRef } from 'react';
import './styles/QuoteForm.css';

export default function QuoteForm() {
  const toast = useRef(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalState, setModalState] = useState('loading'); // 'loading' or 'success'
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
      const response = await fetch('/api/send-quote', {
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

          <form className="quote-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <InputText
                  id="firstName"
                  className="form-input"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <InputText
                  id="lastName"
                  className="form-input"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <InputText
                  type="email"
                  id="email"
                  className="form-input"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <InputText
                  type="tel"
                  id="phone"
                  className="form-input"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <InputTextarea
                id="message"
                rows={5}
                className="form-textarea"
                value={formData.message}
                onChange={handleInputChange}
              />
            </div>

            <Button
              label={loading ? "Sending..." : "Send"}
              className="form-submit-btn"
              type="submit"
              disabled={loading}
              loading={loading}
            />
          </form>
        </div>
      </div>
      <Toast ref={toast} />

      {/* Modern Modal */}
      <Dialog
        visible={showModal}
        modal
        className="quote-modal"
        style={{ width: '90vw', maxWidth: '550px' }}
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
                Your quote request has been received
              </p>
              <div className="success-divider"></div>
              <p className="success-message">
                We appreciate you reaching out to us. Our team is reviewing your request and will get back to you shortly with a personalized solution tailored to your needs.
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
