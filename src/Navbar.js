import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close menu after clicking a link
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-content">
        <div className="left-section" style={{ display:"flex",justifyContent:"space-between",alignItems:"center",gap:"55vw"}}>
          <div className="hamburger" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div><h1 className="nav-logo">Portfolio</h1></div>
          
        </div>
        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <a href="#home" onClick={handleLinkClick}>Home</a>
          <a href="#about" onClick={handleLinkClick}>About</a>
          <a href="#skills" onClick={handleLinkClick}>Skills</a>
          <a href="#projects" onClick={handleLinkClick}>Projects</a>
          <a href="#contact" onClick={handleLinkClick}>Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
