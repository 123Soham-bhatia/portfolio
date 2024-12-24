import React, { useState } from 'react';
import './Contact.css';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-container" id="contact">
      <div className="contact-wrapper">
        <div className="contact-header">
          <h1>CONTACT</h1>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-text">
              Get in touch with us to transform your digital vision into reality. 
              Whether you're looking to create something extraordinary or solve 
              complex challenges, we're here to help shape the future together.
            </div>

            <div className="info-sections">
              <div className="info-section">
                <h3>Address</h3>
                <p>Example Street, Sample City - 44</p>
              </div>

              <div className="info-section">
                <h3>Phone</h3>
                <p>+123 456 789</p>
              </div>

              <div className="info-section">
                <h3>E-mail</h3>
                <p>info@example.com</p>
              </div>

              <div className="social-links">
                <Facebook />
                <Twitter />
                <Instagram />
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h2>CONTACT FORM</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="form-control"
                  onChange={handleChange}
                  value={formData.name}
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your phone"
                  className="form-control"
                  onChange={handleChange}
                  value={formData.phone}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your e-mail"
                  className="form-control"
                  onChange={handleChange}
                  value={formData.email}
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Message"
                  className="form-control"
                  onChange={handleChange}
                  value={formData.message}
                />
              </div>
              <button type="submit" className="submit-btn">
                SEND MESSAGE →
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;