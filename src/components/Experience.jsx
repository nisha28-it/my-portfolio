import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <h2 className="section-title">Experience</h2>
        
        <div className="experience-section">
          <h3 className="subsection-title">INTERNSHIPS</h3>
          <div className="internship-list">
            <div className="internship-item">
              <h4>Web Development Intern</h4>
              <p className="company">Prodigy InfoTech</p>
              <p className="duration">May – Jun 2028 · Virtual</p>
            </div>
            <div className="internship-item">
              <h4>Web Development Intern</h4>
              <p className="company">CodSoft</p>
              <p className="duration">May – Jun 2028 · Virtual</p>
            </div>
            <div className="internship-item">
              <h4>Data Analytics Intern</h4>
              <p className="company">Infronex IT Products and Services</p>
              <p className="duration">Jan – Dec 2025 · On-site</p>
            </div>
          </div>
        </div>

        <div className="experience-section">
          <h3 className="subsection-title">CERTIFICATIONS</h3>
          <ul className="certification-list">
            <li>Data Structures and Algorithms — NPTEL Swayam</li>
            <li>Learnathon 2025 — Industry-standard Training Program</li>
            <li>QA: Become a Game Tester 2026 — Udemy</li>
          </ul>
        </div>

        <div className="experience-section">
          <h3 className="subsection-title">ACHIEVEMENTS</h3>
          <ul className="achievement-list">
            <li>Presented projects at technical symposiums at Hindustan College and Karpagam College</li>
            <li>Volunteered with Rotary Club — community outreach, event coordination, and social awareness</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;