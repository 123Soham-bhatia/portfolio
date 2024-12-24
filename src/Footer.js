import React from 'react';
import { Github, Linkedin, Mail, Twitter, Globe, Phone } from 'lucide-react';
import './Footer.css';
import sign from "./myojsign.png"

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Futuristic background elements */}
      <div className="footer-background">
        <div className="glowing-line"></div>
        <div className="blur-circle"></div>
      </div>

      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand Section */}
          <div className="footer-section brand-section">
            <img 
              src={sign}
              alt="Personal Signature" 
              className="signature"
            />
            <p className="brand-description">
              Crafting digital experiences through innovative web development and design. 
              Turning ideas into reality with clean code and creative solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="section-title">Quick Links</h3>
            <ul className="quick-links">
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#about">About Me</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Connect Section */}
          <div className="footer-section">
            <h3 className="section-title">Let's Connect</h3>
            <div className="social-icons">
              <a href="#github" aria-label="Github"><Github size={20} /></a>
              <a href="#linkedin" aria-label="LinkedIn"><Linkedin size={20} /></a>
              <a href="#twitter" aria-label="Twitter"><Twitter size={20} /></a>
              <a href="mailto:your.email@example.com" aria-label="Email"><Mail size={20} /></a>
            </div>
            <div className="contact-info">
              <div className="contact-item">
                <Globe size={16} />
                <span>Based in Your Location</span>
              </div>
              <div className="contact-item">
                <Phone size={16} />
                <span>+1 (234) 567-8900</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} Your Name. All rights reserved.
          </p>
          <div className="legal-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#sitemap">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;