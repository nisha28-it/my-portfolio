import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Smart Hostel Management System",
      description: "Full-stack web app with role-based dashboards for admin, staff, and students. Features QR-based attendance with GPS verification, complaint management, and a food voting system.",
      tech: ["Spring Boot", "MySQL", "HTML"],
      github: "#"
    },
    {
      title: "Golf Charity Subscription Platform",
      description: "Full-stack platform with user authentication, monthly/yearly subscription plans, Stripe payment integration, prize draw engine, and admin dashboard.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      github: "#"
    },
    {
      title: "Finance Dashboard",
      description: "Interactive financial dashboard built with React, featuring real-time data visualization, expense tracking, and clean responsive UI.",
      tech: ["React", "JavaScript", "CSS"],
      github: "#"
    },
    {
      title: "Escape Room Hub",
      description: "JavaScript-based interactive escape room web experience with puzzle logic, timer mechanics, and immersive UI design.",
      tech: ["JavaScript", "HTML", "CSS"],
      github: "#"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a href={project.github} className="github-link">GitHub →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;