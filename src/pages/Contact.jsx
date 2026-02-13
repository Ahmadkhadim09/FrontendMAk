import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  const services = [
    'Web Development',
    'Mobile Development',
    'Cloud Solutions',
    'AI & Machine Learning',
    'Cybersecurity',
    'Data Analytics'
  ];

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1 className="contact-title">Get In Touch</h1>
          <p className="contact-subtitle">
            Let's discuss how we can help bring your vision to life
          </p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Let's Work Together</h2>
              <p>
                Have a project in mind? We'd love to hear about it. Fill out the form
                and we'll get back to you within 24 hours.
              </p>

              <div className="info-items">
                <div className="info-item">
                  <div className="info-icon">📍</div>
                  <div>
                    <h3>Visit Us</h3>
                    <p>123 Tech Street<br />Silicon Valley, CA 94000</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">📞</div>
                  <div>
                    <h3>Call Us</h3>
                    <p>+1 (555) 123-4567</p>
                    <p>Mon-Fri, 9am-6pm PST</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">✉️</div>
                  <div>
                    <h3>Email Us</h3>
                    <p>info@makdevs.com</p>
                    <p>support@makdevs.com</p>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <a href="#" className="social-link">LinkedIn</a>
                <a href="#" className="social-link">Twitter</a>
                <a href="#" className="social-link">GitHub</a>
                <a href="#" className="social-link">Dribbble</a>
              </div>
            </div>

            <div className="contact-form-container">
              {submitted ? (
                <div className="success-message">
                  <h3>Thank You!</h3>
                  <p>We've received your message and will get back to you soon.</p>
                  <button onClick={() => setSubmitted(false)} className="btn btn-primary">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="company">Company</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 555 123 4567"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="service">Service Interested In *</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Project Details *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your project..."
                      rows="6"
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary btn-full">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;