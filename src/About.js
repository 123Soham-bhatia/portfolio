import "./About.css"

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="about-title">About Me</h2>
      <div className="about-container">
        {/* Left box with description */}
        <div className="about-description">
          <p>
            I'm a passionate <strong>full-stack developer</strong> with expertise in building modern, scalable, and user-friendly web applications. I thrive on solving complex problems and crafting innovative solutions.
          </p>
          <p>
            I’ve had the opportunity to work as an intern at:
          </p>
          <ul>
            <li>
              <strong>UNIQUS</strong>: Developed a dynamic website for a SaaS startup, focusing on student management software and enhancing their online presence.
            </li>
            <li>
              <strong>Digiglobe Solutions</strong>: Contributed to projects involving cutting-edge web technologies and collaborated with teams to deliver efficient solutions.
            </li>
          </ul>
          <p>
            With a solid foundation in web development, I am constantly learning new technologies and improving my skills. I enjoy contributing to impactful (specially real-life based ) projects and collaborating with like-minded individuals which helped in my personal and technical growth also.
          </p>
        </div>

        {/* Right Section with stats and achievements */}
        <div className="right-section">
          {/* Stats Section */}
          <div className="about-stats">
            <div className="stat-card">
              <h3>2+</h3>
              <p>Internships Completed</p>
            </div>
            <div className="stat-card">
              <h3>10+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-card">
              <h3>2+</h3>
              <p>Years of Coding</p>
            </div>
          </div>

          {/* Achievements Section */}
          <div className="achievements-box">
            <h3 className="achievements-title">Achievements</h3>
            <h4 className="achievements-description">
              Over the years, I have been able to not only sharpen my coding skills but also participate in various prestigious events and challenges that have helped me grow both personally and professionally. Here are some of my key achievements:
            </h4>
            <ul className="achievements-list">
              <li><strong>DSA Questions Solved on Leetcode & GFG</strong>: Solved over <strong>170-180</strong> data structures and algorithms problems.</li>
              <li><strong>Finalist at SIH (India's Biggest Hackathon)</strong></li>
              <li><strong>Part of Google Solution Challenge</strong>: Participated in the <strong>Google Solution Challenge</strong></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
