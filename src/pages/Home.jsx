import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import TeamCard from '../components/TeamCard';
import TestimonialCard from '../components/TestimonialCard';
import projectService from '../services/projectService';
import ideaService from '../services/ideaService';
import ContactForm from '../components/ContactForm';
import Seo from '../components/Seo';
import { CONTACT } from '../config/contact';
import './Home.css';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [projects, setProjects] = useState([]);
  const [services, setServices] = useState([]);
  const [team, setTeam] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState({
    projects: true,
    services: true,
    team: true,
    testimonials: true
  });

  // State for idea form only (contact form is now in ContactForm component)
  const [ideaForm, setIdeaForm] = useState({
    name: '',
    email: '',
    ideaTitle: '',
    ideaDescription: '',
    industry: '',
    acceptTerms: false
  });

  const [ideaStatus, setIdeaStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const [ideaLoading, setIdeaLoading] = useState(false);

  // Slides data
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

  // Fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  // Auto-slider effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const fetchData = async () => {
    try {
      // Fetch projects
      const projectsRes = await projectService.getAllProjects(1, 4, { featured: true });
      setProjects(projectsRes.data.projects || []);
      
      // Get API URL (defaults to deployed backend in production)
      const DEFAULT_API_BASE =
        process.env.NODE_ENV === 'production'
          ? 'https://makdevs-server.onrender.com/api'
          : 'http://localhost:5000/api';
      const apiUrl =
        process.env.REACT_APP_API_URL?.trim().replace(/\/+$/, '') || DEFAULT_API_BASE;
      
      // Fetch services
      const servicesRes = await fetch(`${apiUrl}/services`);
      const servicesData = await servicesRes.json();
      setServices(servicesData.data?.services || []);
      
      // Fetch team
      const teamRes = await fetch(`${apiUrl}/team?featured=true`);
      const teamData = await teamRes.json();
      setTeam(teamData.data?.team || []);
      
      // Fetch testimonials
      const testimonialsRes = await fetch(`${apiUrl}/testimonials?featured=true`);
      const testimonialsData = await testimonialsRes.json();
      setTestimonials(testimonialsData.data?.testimonials || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading({
        projects: false,
        services: false,
        team: false,
        testimonials: false
      });
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleIdeaChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setIdeaForm({
      ...ideaForm,
      [e.target.name]: value
    });
  };

  const handleIdeaSubmit = async (e) => {
    e.preventDefault();
    setIdeaLoading(true);
    
    try {
      const response = await ideaService.submitIdea(ideaForm);
      
      setIdeaStatus({
        submitted: true,
        success: true,
        message: response.message || 'Your innovative idea has been received!'
      });
      
      setIdeaForm({
        name: '', email: '', ideaTitle: '', ideaDescription: '', industry: '', acceptTerms: false
      });
    } catch (error) {
      setIdeaStatus({
        submitted: true,
        success: false,
        message: error.message || 'Something went wrong. Please try again.'
      });
    } finally {
      setIdeaLoading(false);
      
      setTimeout(() => {
        setIdeaStatus({
          submitted: false,
          success: false,
          message: ''
        });
      }, 5000);
    }
  };

  const industries = ['Technology', 'Healthcare', 'Finance', 'Education', 'Retail', 'Manufacturing', 'Other'];

  return (
    <div className="home">
      <Seo
        title="Web Development & Software Solutions"
        description="MAKDEVS delivers custom web development, mobile apps, cloud infrastructure, and AI solutions. Get a free consultation for your next project."
        keywords="web development, software development, mobile apps, cloud solutions, AI development, custom software, MAKDEVS"
        path="/"
      />
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
            {loading.services ? (
              <div className="loading">Loading services...</div>
            ) : (
              services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))
            )}
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

      {/* Featured Projects Section */}
      <section className="projects-section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Some of our best work</p>
          <div className="projects-grid">
            {loading.projects ? (
              <div className="loading">Loading projects...</div>
            ) : (
              projects.map(project => (
                <div key={project._id} className="project-card">
                  {project.images && project.images.length > 0 && (
                    <img 
                      src={`${(process.env.REACT_APP_API_URL?.trim().replace(/\/+$/, '') || (process.env.NODE_ENV === 'production'
                        ? 'https://makdevs-server.onrender.com/api'
                        : 'http://localhost:5000/api'))}/projects/${project._id}/images/0`} 
                      alt={project.title}
                      className="project-image"
                    />
                  )}
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <Link to={`/portfolio/${project.slug}`} className="btn btn-outline">View Project</Link>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2 className="section-title">Our Team</h2>
          <p className="section-subtitle">Meet the talented individuals behind our success</p>
          <div className="team-grid">
            {loading.team ? (
              <div className="loading">Loading team...</div>
            ) : (
              team.map((member, index) => (
                <TeamCard key={index} member={member} />
              ))
            )}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">Don't just take our word for it</p>
          <div className="testimonials-grid">
            {loading.testimonials ? (
              <div className="loading">Loading testimonials...</div>
            ) : (
              testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))
            )}
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
            {ideaStatus.submitted && (
              <div className={`message ${ideaStatus.success ? 'success' : 'error'}`}>
                {ideaStatus.success ? '✅' : '❌'} {ideaStatus.message}
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
                    value={ideaForm.name}
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
                    value={ideaForm.email}
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
                  value={ideaForm.ideaTitle}
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
                  value={ideaForm.industry}
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
                  value={ideaForm.ideaDescription}
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
                    checked={ideaForm.acceptTerms}
                    onChange={handleIdeaChange}
                    required
                  />
                  <span>I agree to the <Link to="/terms">terms and conditions</Link> *</span>
                </label>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary btn-full"
                disabled={ideaLoading}
              >
                {ideaLoading ? 'Submitting...' : 'Submit Your Idea'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Section - USING YOUR CONTACT FORM COMPONENT */}
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
                <p>
                  <a href={CONTACT.phoneLink}>📞 {CONTACT.phoneDisplay}</a>
                </p>
                <p>
                  <a href={CONTACT.emailLink}>✉️ {CONTACT.email}</a>
                </p>
                <p>
                  <a
                    href={CONTACT.whatsappMessage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-link"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Chat on WhatsApp
                  </a>
                </p>
              </div>
            </div>

            <div className="contact-form-side">
              {/* USING THE IMPORTED CONTACT FORM COMPONENT */}
              <ContactForm />
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