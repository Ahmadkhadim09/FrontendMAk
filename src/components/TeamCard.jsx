import React from 'react';
import './TeamCard.css';

const TeamCard = ({ member }) => {
  const { name, role, bio, image, social, _id } = member;
  
  const apiUrl = process.env.REACT_APP_API_URL?.trim().replace(/\/+$/, '') || 'http://localhost:5000/api';
  const avatarUrl = image && image.data 
    ? `${apiUrl}/team/${_id}/avatar`
    : 'https://via.placeholder.com/300';

  return (
    <div className="team-card">
      <div className="team-image">
        <img src={avatarUrl} alt={name} />
      </div>
      <div className="team-info">
        <h3>{name}</h3>
        <p className="team-role">{role}</p>
        <p className="team-bio">{bio}</p>
        <div className="team-social">
          {social?.linkedin && (
            <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon">
              in
            </a>
          )}
          {social?.twitter && (
            <a href={social.twitter} target="_blank" rel="noopener noreferrer" className="social-icon">
              tw
            </a>
          )}
          {social?.github && (
            <a href={social.github} target="_blank" rel="noopener noreferrer" className="social-icon">
              gh
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;