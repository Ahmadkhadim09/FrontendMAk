import React from 'react';
import './TestimonialCard.css';

const TestimonialCard = ({ testimonial }) => {
  const { name, company, content, rating, avatar, _id } = testimonial;
  
  const DEFAULT_API_BASE =
    process.env.NODE_ENV === 'production'
      ? 'https://makdevs-server.onrender.com/api'
      : 'http://localhost:5000/api';

  const apiUrl =
    process.env.REACT_APP_API_URL?.trim().replace(/\/+$/, '') || DEFAULT_API_BASE;
  const avatarUrl = avatar && avatar.data 
    ? `${apiUrl}/testimonials/${_id}/avatar`
    : 'https://via.placeholder.com/100';

  return (
    <div className="testimonial-card">
      <div className="testimonial-rating">
        {[...Array(rating)].map((_, i) => (
          <span key={i} className="star">⭐</span>
        ))}
      </div>
      <p className="testimonial-content">"{content}"</p>
      <div className="testimonial-author">
        <img src={avatarUrl} alt={name} className="author-avatar" />
        <div className="author-info">
          <h4>{name}</h4>
          <p>{company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;