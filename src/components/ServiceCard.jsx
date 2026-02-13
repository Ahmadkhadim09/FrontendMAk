import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="service-card">
      <div className="service-icon">{icon}</div>
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
      <a href="/services" className="service-link">
        Learn More →
      </a>
    </div>
  );
};

export default ServiceCard;