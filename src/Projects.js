import React, { useState } from 'react';
import './Projects.css';
import { ChevronDown, ChevronUp, ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      title: "Fin_Aid",
      description: "A finance tracking and guiding app",
      longDescription: "this is financial guiding site which tells you how when and where to save and invest the money to be financially stable. It also track your per month income and expenditure so that you can keep a check on the transactions you made and and can do an analysis that how much money is being spend on which item. user can add goals to keep them motivated.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Docker","CSS","Context-API"],
      demoLink: "#",
      githubLink: "https://github.com/123Soham-bhatia/Fin_aid",
    },
    {
      title: "The News Postman",
      description: "Real-time news application",
      longDescription: "This is a news app ,which gives latest news about India , also you can search any particular topic ,you can search the sources of our news.",
      technologies: ["React", "REST-API", "CSS", "Docker", "Context-API"],
      demoLink: "#",
      githubLink: "https://github.com/123Soham-bhatia/News-App",
    },
    {
      title: "An E-commerce ",
      description: "This is an E-commerce backend",
      longDescription: "This is a pure backend e-commerce platform that stands out from traditional e-commerce solutions. It incorporates full CRUD operations along with robust user authentication and authorization using email-based verification via Nodemailer. The platform seamlessly integrates with Cloudinary for uploading and managing images, videos, and other files. Additionally, it includes a secure payment gateway integration powered by Razorpay, ensuring smooth and reliable transactions..",
      technologies: ["Node", "express", "mongodb", "nodemailer","regex","cloudinary","razorpay"],
      demoLink: "#",
      githubLink: "https://github.com/123Soham-bhatia/Shopers",
    },
    {
      title: "Web scraper",
      description: "Modern web scraper",
      longDescription: "This is a modern web scraper which scrapes the data from the website and you can also download the data in a pdf format.",
      technologies: ["HTML", "CSS", "Flask", "Python"],
      demoLink: "#",
      githubLink: "https://github.com/123Soham-bhatia/webscrapper",
    }
  ];

  const toggleProject = (index) => {
    setActiveProject(activeProject === index ? null : index);
  };

  return (
    <section className="projects-section" id="projects">
      <div className="grid-background"></div>
      <div className="gradient-overlay"></div>
      
      <div className="content-wrapper">
        <h2 className="projects-title">Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-card ${activeProject === index ? 'active' : ''}`}
            >
              <div className="card-gradient"></div>
              
              <button
                onClick={() => toggleProject(index)}
                className="project-button"
              >
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="icon-wrapper">
                    {activeProject === index ? (
                      <ChevronUp className="chevron-icon" />
                    ) : (
                      <ChevronDown className="chevron-icon" />
                    )}
                  </div>
                </div>
                <p className="project-description">{project.description}</p>
              </button>
              
              <div className={`project-details ${activeProject === index ? 'expanded' : ''}`}>
                <div className="details-content">
                  <div className="divider"></div>
                  <p className="long-description">{project.longDescription}</p>
                  
                  <div className="tech-stack">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="project-links">
                    <a href={project.demoLink} className="link-button">
                      <ExternalLink className="link-icon" />
                      <span className="link-text">Live Demo</span>
                    </a>
                    <a href={project.githubLink} className="link-button">
                      <Github className="link-icon" />
                      <span className="link-text">Source Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;