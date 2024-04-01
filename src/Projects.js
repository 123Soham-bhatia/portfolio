import React,{useEffect,useState} from 'react';

import movie from '../src/movie.png';
import news from "../src/news.png";
import spotify from "../src/Spotify.png";
// import space from "./projects image.gif"


const Projects = () => {

    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        // Set animate to true after a short delay to trigger the animation
        const timeout = setTimeout(() => {
            setAnimate(true);
        }, 500); // Adjust the delay as needed

        // Clear the timeout to avoid memory leaks
        return () => clearTimeout(timeout);
    }, []);

    return <div  id='projects' style={{paddingTop:'10vh'}}   >
        <div style={{ }} >
            <header  style={{paddingTop:'10vh' , color:'white', fontSize:'50px' ,textAlign:'center'}} >Projects</header>
            <p style={{color:'white',fontSize:'30px' ,padding:'100px'}}  >I'm excited to showcase my passion for illustration and design. As a creative artist, I have honed my skills in producing unique and eye-catching illustrations. My goal is to create art that is aesthetically pleasing and mundane in its own way. I believe that a great illustration should capture the essence of its subject and evoke emotions in the viewer. Take a look at my recent projects and get in touch if you'd like to collaborate or commission me for your project.</p>
           
        </div>

        <div className={`project-card ${animate ? 'animate' : ''}`}>
            <ul style={{ display:'flex',justifyContent:'space-between',padding:'3vh' }}>
                <li>  <a href='https://github.com/123Soham-bhatia' alt="github link" target='main' >  <img style={{ width: '20vw', borderRadius: '20px', height: '23vh',cursor:'pointer' }} src={spotify} alt='spotify' /></a> </li>
                <li>  <a href='https://github.com/123Soham-bhatia/News-App.git'  alt="github link" target='main' >   <img style={{ width: '20vw', borderRadius: '20px', height: '23vh',cursor:'pointer' }} src={news} alt='news' /> </a>   </li>
                <li> <a href='https://github.com/123Soham-bhatia' alt="github link" target='main' >   <img style={{ width: '20vw', borderRadius: '20px', height: '23vh',cursor:'pointer' }} src={movie} alt='movie' /></a></li>
                <li>  <a  href='https://github.com/123Soham-bhatia' alt="github link" target='main'  >   <div style={{ width: '20vw', borderRadius: '20px', height: '23vh', background: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '25px', fontFamily: 'monospace', fontWeight: 'bolder' }}>Working on more</div></a></li>
            </ul>
        </div>
    </div>;
}

export default Projects;