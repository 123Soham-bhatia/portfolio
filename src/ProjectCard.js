import React, { useEffect, useState } from 'react';
import movie from '../src/movie.png';
import news from "../src/news.png";
import spotify from "../src/Spotify.png";

const ProjectCard = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        // Set animate to true after a short delay to trigger the animation
        const timeout = setTimeout(() => {
            setAnimate(true);
        }, 500); // Adjust the delay as needed

        // Clear the timeout to avoid memory leaks
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className={`project-card ${animate ? 'animate' : ''}`}>
            <ul style={{ display:'flex',justifyContent:'space-between',padding:'3vh' }}>
                <li>  <a href='https://github.com/123Soham-bhatia' alt="github link" target='main' >  <img style={{ width: '20vw', borderRadius: '20px', height: '23vh',cursor:'pointer' }} src={spotify} alt='spotify' /></a> </li>
                <li>  <a href='https://github.com/123Soham-bhatia/News-App.git'  alt="github link" target='main' >   <img style={{ width: '20vw', borderRadius: '20px', height: '23vh',cursor:'pointer' }} src={news} alt='news' /> </a>   </li>
                <li> <a href='https://github.com/123Soham-bhatia' alt="github link" target='main' >   <img style={{ width: '20vw', borderRadius: '20px', height: '23vh',cursor:'pointer' }} src={movie} alt='movie' /></a></li>
                <li>  <a  href='https://github.com/123Soham-bhatia' alt="github link" target='main'  >   <div style={{ width: '20vw', borderRadius: '20px', height: '23vh', background: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '25px', fontFamily: 'monospace', fontWeight: 'bolder' }}>Working on more</div></a></li>
            </ul>
        </div>
    );
}

export default ProjectCard;
