// src/components/About.jsx
import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hi! I'm Sreenisha, a 2nd year Information Technology student at K.S.R. College of Engineering,
              Namakkal, with a CGPA of 8.11. I'm passionate about building clean, responsive, and user-friendly web
              experiences. I specialize in frontend development with React, TypeScript, and modern web technologies.
            </p>
            <div className="info-grid">
              <div className="info-item">
                <strong>COLLEGE</strong>
                <span>K.S.R. College of Engineering</span>
              </div>
              <div className="info-item">
                <strong>DEGREE</strong>
                <span>BE - Information Technology</span>
              </div>
              <div className="info-item">
                <strong>LOCATION</strong>
                <span>Namakkal, Tamil Nadu</span>
              </div>
              <div className="info-item">
                <strong>EMAIL</strong>
                <span>nishamanogaran28@gmail.com</span>
              </div>
            </div>
          </div>
          <div className="about-photo">
            <div className="photo-placeholder">
              📸 Add your photo here
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;