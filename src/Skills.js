import React, { useState } from 'react';
import html from '../src/html.png';
import css from "../src/css.png";
import js from "../src/js.png";
import react from "../src/reactjs.png"
import tailwind from "../src/tailwind.png";
import nodejs from "../src/nodejs.png";
import mongodb from "../src/mongodb.png";
import express from "../src/express.png";
import redux from "../src/redux.png";
import git from "../src/git.png";
import github from "../src/github.png";
import mysql from "../src/mysql.png";
import './Skills.css'
import next from '../src/next.png'

const Skills = () => {
    const photo = [
        { id: 1, imageUrl: html },
        { id: 2, imageUrl: css },
        { id: 3, imageUrl: js },
        { id: 4, imageUrl: tailwind },
        { id: 5, imageUrl: react },
        { id: 6, imageUrl: nodejs },
        { id: 7, imageUrl: express },
        { id: 8, imageUrl: redux },
        { id: 9, imageUrl: git },
        { id: 10, imageUrl: github },
        { id: 11, imageUrl: mysql },
        { id: 12, imageUrl: mongodb }
    ]

    const [title, setTitle] = useState(0);

    const prevHandler = () => {
        setTitle((title - 1 + photo.length) % photo.length);
    }

    const nextHandler = () => {
        setTitle((title + 1) % photo.length);
    }

    return (
        <div id='skills' style={{ background: '#1E1E20', marginTop: '39vh', color: 'white', marginLeft: '5vw', marginRight: '5vw', padding: '80px', borderRadius: '10px' }}>
            <h2 style={{ textAlign: 'center', paddingTop: '3vh', fontSize: '32px' }}>Skills</h2>
            <p style={{ paddingTop: '4vh', fontSize: '25px' }}>In the realm of web development, proficiency in HTML, CSS, and JavaScript lays the foundation for crafting visually stunning and interactive user interfaces. Tailwind CSS expertise adds a layer of efficiency and consistency to design implementation. React.js proficiency enables the creation of dynamic and responsive front-end experiences, while Node.js and Express.js empower the development of scalable and robust server-side applications. Skills in MySQL and MongoDB facilitate effective data management and storage solutions. Git and GitHub proficiency ensures seamless collaboration and version control across projects. With these skills, I am equipped to tackle diverse web development challenges and deliver exceptional digital experiences</p>

            <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '5vh' }}>
                <img className='prev' onClick={prevHandler} src={next} alt='previous' style={{ width: '6vw' }} />
                <div className='skills' style={{ justifyContent: 'space-between', gap:'1vw' }}>
                    <img src={photo[title].imageUrl} alt='id' />
                    <img src={photo[(title + 1) % photo.length].imageUrl} alt='id' />
                    <img src={photo[(title + 2) % photo.length].imageUrl} alt='id' />
                </div>
                <img onClick={nextHandler} src={next} alt='next' style={{ width: '6vw' }} />
            </div>
        </div>
    );
}

export default Skills;
