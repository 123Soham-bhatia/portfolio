// import './App.css';
import './Hero.css'; // Assuming styles are in Hero.css

const Hero = () => {
    return (
      <section id="home" className="hero-section">
        <div className="hero-content">
          <div className="card">
            <p className="greeting">👋 Hello, world!</p>
            <h1>I'm <span className="highlighted">Soham  Bhatia</span></h1>
            <p className="description">Enthusiastic software engineer from the India</p>
            <div className="social-links">
            <a href="https://mittrandibalti.s3.eu-north-1.amazonaws.com/my+ressumee.pdf" className="btn resume-btn" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
              <a href="https://github.com/123Soham-bhatia"  className="icon github-icon">github</a>
              <a href="https://www.linkedin.com/in/soham-bhatia-8b6816254/" className="icon linkedin-icon">Linkedin</a>
              <a href="mailto:bhatiasoham013@gmail.com" className="icon email-icon">Email</a>

              <a href="https://www.instagram.com/soham_b_0403/profilecard/?igsh=MTg2NW9kbGxjZDJweg==" className="icon instagram-icon">insta</a>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Hero;
