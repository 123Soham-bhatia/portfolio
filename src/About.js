import React, { useRef, useEffect } from 'react';
import Typed from 'typed.js'; // Import Typed.js

const About = () => {
    const textRef = useRef(null);

    useEffect(() => {
      // Initialize Typed.js once the component is mounted
      const toRotate = ["Web Developer", "Illustrator", "UI/UX Designer"];
      const options = {
        strings: toRotate,
        typeSpeed: 50, // typing speed in milliseconds
        backSpeed: 25, // backspacing speed in milliseconds
        startDelay: 1000, // delay before typing starts in milliseconds
        backDelay: 1000, // delay before backspacing starts in milliseconds
        loop: true, // loop the animation indefinitely
        showCursor: false,
      };
  
      const typed = new Typed(textRef.current, options);
  
      // Cleanup function
      return () => {
        typed.destroy(); // destroy Typed.js instance when the component unmounts
      };
    }, []); 
    return (
        <div id='home' style={{ paddingTop: '28vh', paddingLeft: '2vw' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button style={{ background: '#55575D', color: 'white', height: '5vh', fontSize: '24px', padding: '5px',border:'2px solid white' }}>Welcome to my Portfolio</button>
            </div>
            <h2 style={{ color: 'white', display: 'flex', justifyContent: 'center', fontSize: '60px', paddingTop: '3vh' }}>Soham Bhatia</h2>

            <span style={{ display: 'flex',justifyContent:'center',fontSize:"33px",color:'white',paddingTop:'1.5vh' }}>
  {"{ "}
  <span ref={textRef} className="wrap"></span> {/* Apply the wrap class here */}
  {" }"}
</span>


            <span style={{ display: 'flex', justifyContent: 'center', textAlign: 'center', color: 'white', fontSize: '24px', paddingTop: '3vh', paddingLeft: '5vw', paddingRight: '5vw' }}>"As a beginner Web Developer and Illustrator, I have a passion for creating visually appealing and functional digital content. I am constantly seeking to improve my skills and expand my knowledge, experimenting with different tools and techniques to create engaging designs and user-friendly websites. With a combination of creativity and technical know-how, I am eager to bring my ideas to life and make a meaningful impact in the digital world."</span>
        </div>
    );
}

export default About;
