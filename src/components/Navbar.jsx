// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo">Sreenisha M</div>
        <ul className="nav-links">
          {navItems.map(item => (
            <li key={item}>
              <a 
                href={`#${item.toLowerCase()}`}
                className={activeSection === item.toLowerCase() ? 'active' : ''}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <div className="internship-badge">Available for Internships</div>
      </div>
    </nav>
  );
};

export default Navbar;