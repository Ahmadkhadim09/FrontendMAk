import React from 'react';
import './TestimonialCard.css';

const TestimonialCard = ({ name, company, content, rating }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-rating">
        {[...Array(rating)].map((_, i) => (
          <span key={i} className="star">⭐</span>
        ))}
      </div>
      <p className="testimonial-content">"{content}"</p>
      <div className="testimonial-author">
        <div className="author-info">
          <h4>{name}</h4>
          <p>{company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;