import React from "react";
import {
  FileCode,
  Blocks,
  Code,
  Terminal,
  Database,
  Box,
  GitBranch,
  Braces,
  Container,
  Globe,
  Flame,
  Binary,
  Server,
  Laptop,
  Cloud,
  Layout,
} from "lucide-react";

const TechStack = () => {
  const technologies = [
    { name: "HTML5", icon: FileCode },
    { name: "CSS3", icon: Blocks },
    { name: "JavaScript", icon: Braces },
    { name: "TypeScript", icon: Code },
    { name: "React", icon: Box },
    { name: "Next.js", icon: Layout },
    { name: "Node.js", icon: Terminal },
    { name: "MongoDB", icon: Database },
    { name: "Git", icon: GitBranch },
    { name: "Docker", icon: Container },
    { name: "AWS", icon: Cloud },
    { name: "Express", icon: Server },
    { name: "Firebase", icon: Flame },
    { name: "C++", icon: Binary },
    { name: "REST APIs", icon: Globe },
    { name: "VS Code", icon: Laptop },
    { name: "Python", icon: Code },
    { name: "TailwindCSS", icon: Blocks },
  ];

  return (
    <div className="tech-stack-container" id="skills">
      <h2 className="tech-stack-title">Technology Stack</h2>
      <div className="tech-stack-grid">
        {technologies.map((tech) => {
          const IconComponent = tech.icon;
          return (
            <div key={tech.name} className="tech-item">
              <div className="icon-container">
                <IconComponent size={60} className="icon" />
              </div>
              <span className="tech-name">{tech.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechStack;
