import React from 'react';
import './TeamCard.css';

const TeamCard = ({ name, role, image, bio }) => {
  return (
    <div className="team-card">
      <div className="team-image">
        <img src={image} alt={name} />
      </div>
      <div className="team-info">
        <h3>{name}</h3>
        <p className="team-role">{role}</p>
        <p className="team-bio">{bio}</p>
       <div className="team-social">
  <a 
    href="https://linkedin.com" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="social-icon"
  >
    in
  </a>

  <a 
    href="https://twitter.com" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="social-icon"
  >
    tw
  </a>

  <a 
    href="https://github.com" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="social-icon"
  >
    gh
  </a>
</div>

      </div>
    </div>
  );
};

export default TeamCard;