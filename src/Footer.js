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
        background:'linear-gradient(to right, #6450D2 20%, #1E1E20 80%)' , height:'13vh' , marginTop:'7vh',padding:'5px'
    }}  >
        <div  >
            <header style={{color:'white' , fontSize:'15px',display:'flex', justifyContent:'center',alignItems:'center'}} >Copyright ©2024. All Rights Reserved</header>
        </div>
         <div  style={{display:'flex' , justifyContent:'flex-end' , alignItems:'center'}} >
            <img onClick={() => scroll('home')} style={{ }} src={up} alt='up' >
            </img>
         </div>
    </div>;
}

export default Footer;