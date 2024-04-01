import React from 'react';
import up from "../src/up.png"

const Footer = () => {

    function scroll(id) {
        const element = document.getElementById(id);
     
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    return <div style={{
        background:'linear-gradient(to right, #6450D2 20%, #1E1E20 80%)' , height:'12vh', display: 'flex' , justifyContent: 'space-between' , alignItems: 'center' , marginTop:'7vh',padding:'25px'
    }}  >

      <div></div>
        <div style={{color:'white' , fontSize:'15px' , alignSelf: 'flex-end'}}>
              Copyright ©2024. All Rights Reserved
        </div>
         <div >
            <img onClick={() => scroll('home')} src={up} alt='up' >
            </img>
         </div>
    </div>;
}

export default Footer;