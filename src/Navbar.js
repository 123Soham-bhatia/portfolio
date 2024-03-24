import React, { useEffect, useState } from 'react';

const Navbar = () => {
    const [clickedItem, setClickedItem] = useState(null);
    const [clickit,setclickit] = useState(false);

    const handleItemClick = (index,id) => {
        setClickedItem(index);

        const element = document.getElementById(id);
if (element) {
  element.scrollIntoView({ behavior: 'smooth' });
}

    }
  function status(){
if(clickit === true){
    setclickit(false)
}
else{
    setclickit(false)
}

    }
   
    useEffect (()=>{
        if(window.innerWidth < 1024){
            const things = document.getElementsByTagName('li');
            things.style.display = "none"
const image = document.getElementsByTagName("img");
image.style.display = "none";
        }
    },[window.innerWidth])

    function scroll(id) {
        const element = document.getElementById(id);
     
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
      
   


    return (
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            position: 'fixed',
            paddingLeft: '3vw',
            paddingRight: '9vw',
            background: 'linear-gradient(rgba(0,255,255,0.1) , rgba(255,255,255,0.1))',
            backdropFilter: 'blur(5px)',
            width: '89vw',
            height: '13vh'
        }} >
            <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }} >
                <img style={{ width: '70px', height: '40px', paddingTop: '12px', paddingLeft: '10px' }} src='https://media.tenor.com/aNVkfUVH1GsAAAAM/gif.gif' alt='Randompic' ></img>
                <h3 style={{ color: 'white',fontSize:'38px',cursor:"pointer" }} >Portfolio</h3>
            </div>
            <div className='' style={{ display: 'flex', alignItems: 'center', }} >
                <ul style={{ display: 'flex', listStyleType: 'none', gap: '20px', color: 'white',fontSize:'20px' }} >
                    <li
                        style={{ textDecoration: clickedItem === 0 ? 'underline' : 'none', cursor: 'pointer' }}
                        onClick={() => handleItemClick(0,'home')}
                    >
                        Home
                    </li>
                    <li
                        style={{ textDecoration: clickedItem === 1 ? 'underline' : 'none', cursor: 'pointer' }}
                        onClick={() => handleItemClick(1,'skills')}
                    >
                        Skills
                    </li>
                    <li
                        style={{ textDecoration: clickedItem === 2 ? 'underline' : 'none', cursor: 'pointer' }}
                        onClick={() => handleItemClick(2,'projects')}
                    >
                        Projects
                    </li>
                </ul>
            </div>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }} >
                <ul style={{ display: 'flex', gap: '12px', listStyle: 'none' }}>
                    <li style={{}} >
                        <button style={{height:'3.3vh', width:'2wv'  ,borderRadius:'5px'}} ><a href='https://www.linkedin.com/in/soham-bhatia-8b6816254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='main' ><img style={{ width: "1.8vw", height: '3vh' }} src='https://cdn4.iconfinder.com/data/icons/social-media-and-logos-11/32/Logo_LinkedIn-64.png' alt='linkedin' ></img></a></button>
                    </li>
                    <li style={{}} >
                        <button style={{height:'3.3vh', width:'2wv'  ,borderRadius:'5px'}} ><a href='https://github.com/123Soham-bhatia' target='main' ><img style={{width: "1.8vw", height: '3vh' }} src='https://cdn4.iconfinder.com/data/icons/social-media-and-logos-11/32/Logo_Github-64.png' alt='github'  ></img></a></button>
                    </li>
                    <li style={{}} >
                        <button style={{height:'3.3vh', width:'2wv'  ,borderRadius:'5px'}} ><a href='https://www.instagram.com/soham_b_0403?igsh=MTg2NW9kbGxjZDJweg==' target='main' ><img
                            style={{ width: "1.8vw", height: '3vh'}} src='https://cdn4.iconfinder.com/data/icons/social-media-and-logos-11/32/Logo_Instagram-64.png' alt='insta' ></img></a></button>
                    </li>
                </ul>
                <div><button onClick={() => scroll('touch')} className='letsConnect'>Let's Connect</button>
</div>

            </div>
            <img onClick={status} style={{display:'none'}}  src='https://img.icons8.com/?size=48&id=ykhOFnBIQN8l&format=png' alt='dropdown' ></img>
          

        </div>
    );
}

export default Navbar;
