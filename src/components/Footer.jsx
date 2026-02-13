import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">MAKDEVS</h3>
            <p className="footer-description">
              Transforming ideas into powerful software solutions. Your trusted technology partner.
            </p>
            <div className="social-links">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Services</h4>
            <ul className="footer-links">
              <li><Link to="/services">Web Development</Link></li>
              <li><Link to="/services">Mobile Apps</Link></li>
              <li><Link to="/services">Cloud Solutions</Link></li>
              <li><Link to="/services">AI & ML</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Contact Info</h4>
            <ul className="footer-contact">
              <li>📍 123 Tech Street, Silicon Valley, CA</li>
              <li>📞 +1 (555) 123-4567</li>
              <li>✉️ info@makdevs.com</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} MAKDEVS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;