import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import TeamCard from '../components/TeamCard';
import TestimonialCard from '../components/TestimonialCard';
import './Home.css';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
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

  const [ideaData, setIdeaData] = useState({
    name: '',
    email: '',
    ideaTitle: '',
    ideaDescription: '',
    industry: '',
    acceptTerms: false
  });

  const [formStatus, setFormStatus] = useState({ submitted: false, success: false, message: '' });
  const [ideaStatus, setIdeaStatus] = useState({ submitted: false, success: false, message: '' });
  const [loading, setLoading] = useState({ contact: false, idea: false });

  // Slider images/data
  const slides = [
    {
      id: 1,
      title: "Web Development",
      description: "Custom web applications built with React, Node.js, and modern technologies",
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      cta: "Learn More",
      link: "/services"
    },
    {
      id: 2,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile apps for iOS and Android",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      cta: "View Portfolio",
      link: "/portfolio"
    },
    {
      id: 3,
      title: "AI & Machine Learning",
      description: "Intelligent solutions powered by cutting-edge AI algorithms",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      cta: "Explore AI",
      link: "/services"
    },
    {
      id: 4,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure on AWS, Azure, and GCP",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      cta: "Cloud Services",
      link: "/services"
    }
  ];

  // Auto-slider effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleContactChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value
    });
  };

  const handleIdeaChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setIdeaData({
      ...ideaData,
      [e.target.name]: value
    });
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setLoading({ ...loading, contact: true });
    
    // Simulate API call
    setTimeout(() => {
      setFormStatus({ 
        submitted: true, 
        success: true, 
        message: 'Thank you! We\'ll contact you within 24 hours.' 
      });
      setFormData({
        name: '', email: '', company: '', projectType: '', 
        budget: '', timeline: '', message: '', newsletter: false
      });
      setLoading({ ...loading, contact: false });
      
      setTimeout(() => {
        setFormStatus({ submitted: false, success: false, message: '' });
      }, 5000);
    }, 1500);
  };

  const handleIdeaSubmit = async (e) => {
    e.preventDefault();
    setLoading({ ...loading, idea: true });
    
    // Simulate API call
    setTimeout(() => {
      setIdeaStatus({ 
        submitted: true, 
        success: true, 
        message: 'Your innovative idea has been received! We\'ll evaluate and get back to you.' 
      });
      setIdeaData({
        name: '', email: '', ideaTitle: '', ideaDescription: '', industry: '', acceptTerms: false
      });
      setLoading({ ...loading, idea: false });
      
      setTimeout(() => {
        setIdeaStatus({ submitted: false, success: false, message: '' });
      }, 5000);
    }, 1500);
  };

  const services = [
    { icon: '💻', title: 'Web Development', description: 'Custom web applications with React, Node.js, and Python.' },
    { icon: '📱', title: 'Mobile Apps', description: 'Native and cross-platform mobile apps for iOS and Android.' },
    { icon: '☁️', title: 'Cloud Solutions', description: 'Scalable infrastructure on AWS, Azure, and GCP.' },
    { icon: '🤖', title: 'AI & Machine Learning', description: 'Intelligent solutions with cutting-edge AI algorithms.' },
  ];

  const team = [
    { name: 'John Doe', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', bio: '10+ years in software development and team leadership.' },
    { name: 'Jane Smith', role: 'Lead Developer', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', bio: 'Full-stack developer specializing in React and Node.js.' },
    { name: 'Mike Johnson', role: 'UI/UX Director', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', bio: 'Creating beautiful and intuitive user experiences.' },
    { name: 'Sarah Williams', role: 'AI Specialist', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', bio: 'Expert in machine learning and neural networks.' }
  ];

  const testimonials = [
    { name: 'Mike Johnson', company: 'TechCorp', content: 'MAKDEVS delivered an exceptional product that exceeded our expectations!', rating: 5 },
    { name: 'Sarah Williams', company: 'StartUp Inc', content: 'Professional team, excellent communication, and outstanding technical skills.', rating: 5 },
    { name: 'David Brown', company: 'Enterprise Solutions', content: 'They transformed our legacy system into a modern, scalable platform.', rating: 5 },
    { name: 'Emily Davis', company: 'Innovation Labs', content: 'The AI solution they built for us increased efficiency by 300%.', rating: 5 }
  ];

  const projectTypes = ['Web Application', 'Mobile App', 'E-commerce', 'AI/ML Solution', 'Cloud Migration', 'Other'];
  const budgetRanges = ['Less than $10,000', '$10,000 - $25,000', '$25,000 - $50,000', '$50,000 - $100,000', '$100,000+'];
  const timelineOptions = ['ASAP', '1-3 months', '3-6 months', '6-12 months', 'Flexible'];
  const industries = ['Technology', 'Healthcare', 'Finance', 'Education', 'Retail', 'Manufacturing', 'Other'];

  return (
    <div className="home">
      {/* Hero Slider Section */}
      <section className="hero-slider">
        <div className="slider-container">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(${slide.image})` }}
            >
              <div className="slide-content">
                <h1 className="slide-title">{slide.title}</h1>
                <p className="slide-description">{slide.description}</p>
                <Link to={slide.link} className="btn btn-primary slide-btn">
                  {slide.cta} →
                </Link>
              </div>
            </div>
          ))}

          <button className="slider-btn prev" onClick={prevSlide}>❮</button>
          <button className="slider-btn next" onClick={nextSlide}>❯</button>

          <div className="slider-dots">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Comprehensive software solutions tailored to your business needs</p>
          <div className="services-grid">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item"><h3>100+</h3><p>Projects Delivered</p></div>
            <div className="stat-item"><h3>50+</h3><p>Happy Clients</p></div>
            <div className="stat-item"><h3>5+</h3><p>Years Experience</p></div>
            <div className="stat-item"><h3>24/7</h3><p>Support</p></div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2 className="section-title">Our Team</h2>
          <p className="section-subtitle">Meet the talented individuals behind our success</p>
          <div className="team-grid">
            {team.map((member, index) => (
              <TeamCard key={index} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">Don't just take our word for it</p>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Idea Submission Section */}
      <section className="idea-section">
        <div className="container">
          <div className="idea-header">
            <h2 className="section-title">Have an Innovative Idea?</h2>
            <p className="section-subtitle">Share your vision with us and let's bring it to life together</p>
          </div>
          
          <div className="idea-card">
            {ideaStatus.submitted && ideaStatus.success && (
              <div className="success-message">
                <span className="success-icon">✅</span>
                <p>{ideaStatus.message}</p>
              </div>
            )}
            
            <form onSubmit={handleIdeaSubmit} className="idea-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="idea-name">Your Name *</label>
                  <input
                    type="text"
                    id="idea-name"
                    name="name"
                    value={ideaData.name}
                    onChange={handleIdeaChange}
                    required
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="idea-email">Email Address *</label>
                  <input
                    type="email"
                    id="idea-email"
                    name="email"
                    value={ideaData.email}
                    onChange={handleIdeaChange}
                    required
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="idea-title">Idea Title *</label>
                <input
                  type="text"
                  id="idea-title"
                  name="ideaTitle"
                  value={ideaData.ideaTitle}
                  onChange={handleIdeaChange}
                  required
                  placeholder="e.g., AI-Powered Personal Assistant"
                />
              </div>

              <div className="form-group">
                <label htmlFor="idea-industry">Industry *</label>
                <select
                  id="idea-industry"
                  name="industry"
                  value={ideaData.industry}
                  onChange={handleIdeaChange}
                  required
                >
                  <option value="">Select an industry</option>
                  {industries.map((industry, index) => (
                    <option key={index} value={industry}>{industry}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="idea-description">Describe Your Idea *</label>
                <textarea
                  id="idea-description"
                  name="ideaDescription"
                  value={ideaData.ideaDescription}
                  onChange={handleIdeaChange}
                  required
                  placeholder="What problem does it solve? Who is it for? What makes it unique?"
                  rows="5"
                />
              </div>

              <div className="form-group checkbox-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="acceptTerms"
                    checked={ideaData.acceptTerms}
                    onChange={handleIdeaChange}
                    required
                  />
                  <span>I agree to the <Link to="/terms">terms and conditions</Link> *</span>
                </label>
              </div>

              <button 
                type="submit" 
                className={`btn btn-primary btn-full ${loading.idea ? 'btn-loading' : ''}`}
                disabled={loading.idea}
              >
                {loading.idea ? 'Submitting...' : 'Submit Your Idea'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-info-side">
              <h2>Let's Discuss Your Project</h2>
              <p>Fill out the form and we'll get back to you within 24 hours.</p>
              
              <div className="benefits-list">
                <div className="benefit-item">
                  <span className="benefit-icon">✓</span>
                  <div><h4>Free Consultation</h4><p>30-minute video call to understand your requirements</p></div>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">✓</span>
                  <div><h4>Detailed Proposal</h4><p>Comprehensive project plan and cost estimate</p></div>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">✓</span>
                  <div><h4>No Obligation</h4><p>Free consultation with no commitment required</p></div>
                </div>
              </div>

              <div className="quick-contact">
                <h4>Quick Contact</h4>
                <p>📞 +1 (555) 123-4567</p>
                <p>✉️ projects@makdevs.com</p>
                <p>💬 Live Chat Available</p>
              </div>
            </div>

            <div className="contact-form-side">
              {formStatus.submitted && formStatus.success && (
                <div className="success-message">
                  <span className="success-icon">✅</span>
                  <p>{formStatus.message}</p>
                </div>
              )}

              <form onSubmit={handleContactSubmit} className="contact-form">
                <h3>Project Inquiry</h3>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleContactChange}
                      required
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleContactChange}
                      required
                      placeholder="john@example.com"
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
                    onChange={handleContactChange}
                    placeholder="Your Company Name"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="projectType">Project Type *</label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleContactChange}
                      required
                    >
                      <option value="">Select type</option>
                      {projectTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="budget">Budget Range</label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleContactChange}
                    >
                      <option value="">Select budget</option>
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
                    onChange={handleContactChange}
                  >
                    <option value="">Select timeline</option>
                    {timelineOptions.map((option, index) => (
                      <option key={index} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Project Details *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleContactChange}
                    required
                    placeholder="Describe your project, goals, and requirements..."
                    rows="4"
                  />
                </div>

                <div className="form-group checkbox-group">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="newsletter"
                      checked={formData.newsletter}
                      onChange={handleContactChange}
                    />
                    <span>Subscribe to our newsletter for tech insights</span>
                  </label>
                </div>

                <button 
                  type="submit" 
                  className={`btn btn-primary btn-full ${loading.contact ? 'btn-loading' : ''}`}
                  disabled={loading.contact}
                >
                  {loading.contact ? 'Sending...' : 'Send Inquiry'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>Let's discuss how we can help bring your vision to life</p>
            <Link to="/contact" className="btn btn-primary">
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;