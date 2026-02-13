import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies',
      features: [
        'Custom websites & web applications',
        'E-commerce solutions',
        'CMS development',
        'API development & integration',
        'Performance optimization'
      ],
      tech: ['React', 'Node.js', 'Python', 'PHP', 'MongoDB']
    },
    {
      icon: '📱',
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications',
      features: [
        'Native iOS & Android apps',
        'Cross-platform (React Native, Flutter)',
        'App store optimization',
        'Mobile UI/UX design',
        'App maintenance & support'
      ],
      tech: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase']
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment',
      features: [
        'Cloud migration',
        'Infrastructure as code',
        'Serverless architecture',
        'DevOps & CI/CD',
        'Cloud security'
      ],
      tech: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes']
    },
    {
      icon: '🤖',
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions powered by cutting-edge AI',
      features: [
        'Predictive analytics',
        'Natural language processing',
        'Computer vision',
        'Recommendation systems',
        'Chatbots & virtual assistants'
      ],
      tech: ['TensorFlow', 'PyTorch', 'OpenAI', 'LangChain', 'Hugging Face']
    },
    {
      icon: '🔒',
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions for your business',
      features: [
        'Security audits',
        'Penetration testing',
        'Compliance consulting',
        'Incident response',
        'Security training'
      ],
      tech: ['Kali Linux', 'Metasploit', 'Wireshark', 'Nmap', 'Burp Suite']
    },
    {
      icon: '📊',
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights',
      features: [
        'Business intelligence',
        'Data visualization',
        'Big data processing',
        'Real-time analytics',
        'Data warehousing'
      ],
      tech: ['Power BI', 'Tableau', 'Apache Spark', 'Hadoop', 'Snowflake']
    }
  ];

  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="container">
          <h1 className="services-title">Our Services</h1>
          <p className="services-subtitle">
            Comprehensive solutions tailored to your business needs
          </p>
        </div>
      </section>

      <section className="services-list">
        <div className="container">
          {services.map((service, index) => (
            <div key={index} className="service-detail-card">
              <div className="service-header">
                <span className="service-icon-large">{service.icon}</span>
                <h2>{service.title}</h2>
              </div>
              <p className="service-description">{service.description}</p>
              
              <div className="service-features">
                <h3>Key Features</h3>
                <ul>
                  {service.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="service-tech">
                <h3>Technologies</h3>
                <div className="tech-tags">
                  {service.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

              <button className="btn btn-primary">Get a Quote</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;