import React, { useState } from 'react';
import contactService from '../services/contactService';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
    newsletter: false
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: '',
    errors: {}
  });

  const [loading, setLoading] = useState(false);

  const projectTypes = [
    'Web Application',
    'Mobile App', 
    'E-commerce',
    'AI/ML Solution',
    'Cloud Migration',
    'Other'
  ];

  const budgetRanges = [
    'Less than $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000+'
  ];

  const timelineOptions = [
    'ASAP',
    '1-3 months',
    '3-6 months',
    '6-12 months',
    'Flexible'
  ];

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value
    });

    // Clear field error when user starts typing
    if (formStatus.errors[e.target.name]) {
      setFormStatus({
        ...formStatus,
        errors: {
          ...formStatus.errors,
          [e.target.name]: null
        }
      });
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    } else if (formData.name.length < 2) {
      errors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }

    if (!formData.projectType) {
      errors.projectType = 'Project type is required';
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormStatus({
        ...formStatus,
        errors
      });
      return;
    }

    setLoading(true);
    setFormStatus({ ...formStatus, errors: {} });

    try {
      const response = await contactService.submitContact(formData);
      
      setFormStatus({
        submitted: true,
        success: true,
        message: response.message || 'Thank you! We\'ll contact you within 24 hours.',
        errors: {}
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: '',
        newsletter: false
      });

      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setFormStatus({
          submitted: false,
          success: false,
          message: '',
          errors: {}
        });
      }, 5000);

    } catch (error) {
      console.error('Form submission error:', error);
      
      setFormStatus({
        submitted: true,
        success: false,
        message: error.message || 'Something went wrong. Please try again.',
        errors: {}
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-form-container">
      {formStatus.submitted && (
        <div className={`alert ${formStatus.success ? 'alert-success' : 'alert-error'}`}>
          {formStatus.success ? '✅' : '❌'} {formStatus.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="contact-form" noValidate>
        <h3>Send Us a Message</h3>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">
              Full Name <span className="required">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={formStatus.errors.name ? 'error' : ''}
              placeholder="John Doe"
              disabled={loading}
            />
            {formStatus.errors.name && (
              <span className="error-message">{formStatus.errors.name}</span>
            )}
          </div>
          
          <div className="form-group">
            <label htmlFor="email">
              Email Address <span className="required">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={formStatus.errors.email ? 'error' : ''}
              placeholder="john@example.com"
              disabled={loading}
            />
            {formStatus.errors.email && (
              <span className="error-message">{formStatus.errors.email}</span>
            )}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Your Company Name (Optional)"
            disabled={loading}
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="projectType">
              Project Type <span className="required">*</span>
            </label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className={formStatus.errors.projectType ? 'error' : ''}
              disabled={loading}
            >
              <option value="">Select project type</option>
              {projectTypes.map((type, index) => (
                <option key={index} value={type}>{type}</option>
              ))}
            </select>
            {formStatus.errors.projectType && (
              <span className="error-message">{formStatus.errors.projectType}</span>
            )}
          </div>
          
          <div className="form-group">
            <label htmlFor="budget">Budget Range</label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              disabled={loading}
            >
              <option value="">Select budget (Optional)</option>
              {budgetRanges.map((range, index) => (
                <option key={index} value={range}>{range}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="timeline">Timeline</label>
          <select
            id="timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            disabled={loading}
          >
            <option value="">Select timeline (Optional)</option>
            {timelineOptions.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="message">
            Project Details <span className="required">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={formStatus.errors.message ? 'error' : ''}
            placeholder="Tell us about your project, goals, and requirements..."
            rows="5"
            disabled={loading}
          />
          {formStatus.errors.message && (
            <span className="error-message">{formStatus.errors.message}</span>
          )}
          <small className="hint">
            {formData.message.length}/2000 characters
          </small>
        </div>

        <div className="form-group checkbox-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="newsletter"
              checked={formData.newsletter}
              onChange={handleChange}
              disabled={loading}
            />
            <span>
              Subscribe to our newsletter for tech insights and updates
            </span>
          </label>
        </div>

        <button 
          type="submit" 
          className={`btn btn-primary btn-full ${loading ? 'btn-loading' : ''}`}
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>

        <p className="form-note">
          <span className="required">*</span> Required fields
        </p>
      </form>
    </div>
  );
};

export default ContactForm;