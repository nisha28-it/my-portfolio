import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">Contact</h2>
        <p className="contact-subtitle">
          I'm open to internships and entry-level frontend roles. Feel free to reach out!
        </p>
        
        <div className="contact-info">
          <div className="contact-item">
            <span className="contact-label">📧 Email:</span>
            <a href="mailto:nishamanogaran28@gmail.com">nishamanogaran28@gmail.com</a>
          </div>
          <div className="contact-item">
            <span className="contact-label">🐙 GitHub:</span>
            <a href="https://github.com/nisha28-it">github.com/nisha28-it</a>
          </div>
          <div className="contact-item">
            <span className="contact-label">🔗 LinkedIn:</span>
            <a href="https://linkedin.com/in/sree-nisha-m-037b57376">linkedin.com/in/sree-nisha-m-037b57376</a>
          </div>
        </div>

        <footer className="footer">
          <p>© 2026 Sreenisha M - Built with React</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;