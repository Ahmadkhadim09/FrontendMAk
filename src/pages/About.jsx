import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1 className="about-title">About MAKDEVS</h1>
          <p className="about-subtitle">
            We are a team of passionate developers, designers, and innovators committed to building exceptional software solutions.
          </p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                Founded in 2020, MAKDEVS started as a small team of developers with a big dream: to create software that makes a difference. Today, we've grown into a full-service software development company serving clients worldwide.
              </p>
              <p>
                Our mission is to bridge the gap between innovative ideas and technical execution. We believe in the power of technology to transform businesses and improve lives.
              </p>
            </div>
            <div className="about-image">
              <img src="https://via.placeholder.com/600x400" alt="Our Team" />
            </div>
          </div>

          <div className="values-section">
            <h2 className="section-title">Our Core Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <h3>Innovation</h3>
                <p>We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.</p>
              </div>
              <div className="value-card">
                <h3>Quality</h3>
                <p>We never compromise on quality, ensuring every line of code meets our high standards.</p>
              </div>
              <div className="value-card">
                <h3>Collaboration</h3>
                <p>We work closely with our clients, treating their success as our own.</p>
              </div>
              <div className="value-card">
                <h3>Integrity</h3>
                <p>We operate with transparency and honesty in everything we do.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;