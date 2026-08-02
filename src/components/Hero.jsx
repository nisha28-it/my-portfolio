// src/components/Hero.jsx
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <h1 className="hero-title">
          <span className="highlight">Sreenisha M</span>
        </h1>
        <h2 className="hero-subtitle">FRONTEND DEVELOPER</h2>
        <p className="hero-description">
          Building clean, responsive web experiences with React & TypeScript
        </p>
        <div className="hero-buttons">
          <a href="https://github.com/nisha28-it" className="btn btn-primary">GitHub →</a>
          <a href="https://linkedin.com/in/sree-nisha-m-037b57376" className="btn btn-secondary">LinkedIn</a>
          <a href="https://sreenisha-resume-copy.revdoku.site/" className="btn btn-primary">Resume →</a>
          <a href="#contact" className="btn btn-primary">Contact Me</a>
        </div>
        <div className="stats">
          <div className="stat">
            <div className="stat-value">8.11</div>
            <div className="stat-label">CGPA</div>
          </div>
          <div className="stat">
            <div className="stat-value">4+</div>
            <div className="stat-label">PROJECTS</div>
          </div>
          <div className="stat">
            <div className="stat-value">4+</div>
            <div className="stat-label">INTERNSHIPS</div>
          </div>
          <div className="stat">
            <div className="stat-value">5+</div>
            <div className="stat-label">TECHNOLOGIES</div>
          </div>
        </div>
        <div className="scroll-indicator">SCROLL</div>
      </div>
    </section>
  );
};

export default Hero;