import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = {
    FRONTEND: ['HTML', 'CSS', 'React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
    BACKEND: ['Spring Boot', 'REST APIs', 'Supabase'],
    DATABASES: ['MySQL', 'MongoDB'],
    LANGUAGES: ['JavaScript', 'Java', 'TypeScript', 'Python', 'C'],
    TOOLS: ['Git', 'GitHub', 'Vercel', 'PowerBI', 'Tableau', 'Excel']
  };

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {Object.entries(skillCategories).map(([category, items]) => (
            <div key={category} className="skill-category">
              <h3 className="category-title">{category}</h3>
              <div className="skill-items">
                {items.map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;