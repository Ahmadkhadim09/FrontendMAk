import React, { useState } from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      image: 'https://via.placeholder.com/600x400',
      description: 'A full-featured e-commerce platform with real-time inventory, payment processing, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#'
    },
    {
      id: 2,
      title: 'Health & Fitness App',
      category: 'mobile',
      image: 'https://via.placeholder.com/600x400',
      description: 'Mobile app for tracking workouts, nutrition, and health metrics with social features.',
      technologies: ['React Native', 'Firebase', 'Redux'],
      link: '#'
    },
    {
      id: 3,
      title: 'AI Customer Service Bot',
      category: 'ai',
      image: 'https://via.placeholder.com/600x400',
      description: 'Intelligent chatbot using NLP to handle customer inquiries and support tickets.',
      technologies: ['Python', 'TensorFlow', 'FastAPI', 'React'],
      link: '#'
    },
    {
      id: 4,
      title: 'Cloud Migration Tool',
      category: 'cloud',
      image: 'https://via.placeholder.com/600x400',
      description: 'Automated tool for migrating on-premise applications to AWS cloud infrastructure.',
      technologies: ['AWS', 'Terraform', 'Docker', 'Kubernetes'],
      link: '#'
    },
    {
      id: 5,
      title: 'Real Estate Platform',
      category: 'web',
      image: 'https://via.placeholder.com/600x400',
      description: 'Property listing platform with virtual tours, mortgage calculator, and agent dashboard.',
      technologies: ['Vue.js', 'Django', 'PostgreSQL', 'Google Maps API'],
      link: '#'
    },
    {
      id: 6,
      title: 'Task Management App',
      category: 'mobile',
      image: 'https://via.placeholder.com/600x400',
      description: 'Cross-platform task management app with real-time sync and team collaboration.',
      technologies: ['Flutter', 'Node.js', 'WebSocket', 'MongoDB'],
      link: '#'
    }
  ];

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'web', label: 'Web Development' },
    { value: 'mobile', label: 'Mobile Apps' },
    { value: 'ai', label: 'AI & ML' },
    { value: 'cloud', label: 'Cloud Solutions' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="portfolio-page">
      <section className="portfolio-hero">
        <div className="container">
          <h1 className="portfolio-title">Our Portfolio</h1>
          <p className="portfolio-subtitle">
            Showcasing our best work and success stories
          </p>
        </div>
      </section>

      <section className="portfolio-content">
        <div className="container">
          <div className="portfolio-filters">
            {categories.map(category => (
              <button
                key={category.value}
                className={`filter-btn ${filter === category.value ? 'active' : ''}`}
                onClick={() => setFilter(category.value)}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="portfolio-grid">
            {filteredProjects.map(project => (
              <div key={project.id} className="portfolio-item">
                <div className="portfolio-image">
                  <img src={project.image} alt={project.title} />
                  <div className="portfolio-overlay">
                    <a href={project.link} className="view-project">View Project</a>
                  </div>
                </div>
                <div className="portfolio-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;