import React, { useState } from 'react';
import { GitHub, Code, Database, Server } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');

  const skills = [
    { name: 'HTML', icon: <Code className="w-8 h-8" />, category: 'Frontend' },
    { name: 'CSS', icon: <Code className="w-8 h-8" />, category: 'Frontend' },
    { name: 'JavaScript', icon: <Code className="w-8 h-8" />, category: 'Frontend' },
    { name: 'React', icon: <Code className="w-8 h-8" />, category: 'Frontend' },
    { name: 'Tailwind', icon: <Code className="w-8 h-8" />, category: 'Frontend' },
    { name: 'TypeScript', icon: <Code className="w-8 h-8" />, category: 'Frontend' },
    { name: 'Node.js', icon: <Server className="w-8 h-8" />, category: 'Backend' },
    { name: 'Express', icon: <Server className="w-8 h-8" />, category: 'Backend' },
    { name: 'MongoDB', icon: <Database className="w-8 h-8" />, category: 'Backend' },
    { name: 'Firebase', icon: <Database className="w-8 h-8" />, category: 'Backend' },
    { name: 'Docker', icon: <Server className="w-8 h-8" />, category: 'DevOps' },
    { name: 'GitHub', icon: <GitHub className="w-8 h-8" />, category: 'DevOps' },
    { name: 'C++', icon: <Code className="w-8 h-8" />, category: 'Languages' },
    { name: 'Python', icon: <Code className="w-8 h-8" />, category: 'Languages' },
    { name: 'C', icon: <Code className="w-8 h-8" />, category: 'Languages' },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-purple-900/20 backdrop-blur-lg z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Portfolio
            </span>
            <div className="space-x-8">
              {['home', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`capitalize ${
                    activeSection === section
                      ? 'text-purple-400'
                      : 'text-gray-300 hover:text-purple-400'
                  } transition-colors duration-300`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            Full Stack Developer
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Building the future of the web with modern technologies and innovative solutions.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-purple-900/10">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['Frontend', 'Backend', 'DevOps', 'Languages'].map((category) => (
              <div key={category} className="p-6 rounded-xl bg-purple-900/20 backdrop-blur-lg hover:bg-purple-900/30 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4 text-purple-400">{category}</h3>
                <div className="space-y-4">
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center space-x-3 group hover:translate-x-2 transition-transform duration-300"
                      >
                        <div className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                          {skill.icon}
                        </div>
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-purple-900/20 hover:bg-purple-900/30 transition-all duration-300"
            >
              <GitHub className="w-6 h-6" />
            </a>
            {/* Add more social links as needed */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;