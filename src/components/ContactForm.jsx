import React, { useState } from 'react';
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

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ 
    submitted: false, 
    success: false, 
    message: '' 
  });

  const API_URL = process.env.REACT_APP_API_URL || 'https://makdevs-server.onrender.com/api';

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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('📝 Form submitted:', formData);
    
    setLoading(true);
    
    try {
      console.log('📤 Sending to:', `${API_URL}/contact`);
      
      const response = await fetch(`${API_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      console.log('📥 Response status:', response.status);
      
      const data = await response.json();
      console.log('📥 Response data:', data);

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit');
      }

      setStatus({
        submitted: true,
        success: true,
        message: 'Thank you! We\'ll contact you within 24 hours.'
      });

      // Reset form
      setFormData({
        name: '', email: '', company: '', projectType: '',
        budget: '', timeline: '', message: '', newsletter: false
      });

    } catch (error) {
      console.error('❌ Error:', error);
      setStatus({
        submitted: true,
        success: false,
        message: error.message || 'Something went wrong. Please try again.'
      });
    } finally {
      setLoading(false);
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setStatus({ submitted: false, success: false, message: '' });
      }, 5000);
    }
  };

  return (
    <div className="contact-form-container">
      {status.submitted && (
        <div className={`alert ${status.success ? 'alert-success' : 'alert-error'}`}>
          {status.success ? '✅' : '❌'} {status.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="contact-form">
        <h3>Send Us a Message</h3>
        
        <div className="form-row">
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
              disabled={loading}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="john@example.com"
              disabled={loading}
            />
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
            placeholder="Your Company (Optional)"
            disabled={loading}
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="projectType">Project Type *</label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              required
              disabled={loading}
            >
              <option value="">Select type</option>
              {projectTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
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
              {budgetRanges.map(range => (
                <option key={range} value={range}>{range}</option>
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
            {timelineOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Tell us about your project..."
            rows="4"
            disabled={loading}
          />
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
            <span>Subscribe to our newsletter</span>
          </label>
        </div>

        <button 
          type="submit" 
          className={`btn btn-primary btn-full ${loading ? 'btn-loading' : ''}`}
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;