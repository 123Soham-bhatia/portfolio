import React from 'react';
import touch from "../src/touch.png"

const Touch = () => {
    return <div id='touch'  className='touch' style={{marginTop:'10vh',marginLeft:'5vw',marginRight:'5vw',background: 'linear-gradient(to right, #4360B4 10%, purple 90%)',borderRadius:'20px',display:'flex'}}  >

<div>
    <img style={{width:'45vw' ,height:'auto',borderRadius:'20px'}}  src={touch} alt='touch'  ></img>
</div>

        <div  style={{padding:'100px'}}  >
        <header style={{fontSize:'50px', color:'white',paddingLeft:'8vw'}}  >Get In Touch</header>
            <form style={{paddingTop:'2vh'}}  >
                <div style={{display:'flex',gap:'10px'}}  >
                <label> 
                    <input type='name' placeholder='first name' style={{background:'#AEAEC3', width:'15vw',height:'6vh',borderRadius:'15px',padding:'10px',fontSize:'23px',color:'white'}}></input>
                </label>
                <label>
                <input type='name' placeholder='last name' style={{background:'#AEAEC3', width:'15vw',height:'6vh',borderRadius:'15px',padding:'10px',fontSize:'23px',color:'white'}}></input>
                </label>
                </div>


                <div style={{display:'flex',paddingTop:'10px',gap:'10px'}}  >
                <label> 
                    <input type='email' placeholder='email' style={{background:'#AEAEC3', width:'15vw',height:'6vh',borderRadius:'15px',padding:'10px',fontSize:'23px',color:'white'}}></input>
                </label>
                <label>
                <input type='phone number' placeholder='phone number' style={{background:'#AEAEC3', width:'15vw',height:'6vh',borderRadius:'15px',padding:'10px',fontSize:'23px',color:'white'}}></input>
                </label>
                </div>
                <div style={{paddingTop:'10px'}} >
                    <input type='textarea' placeholder='message' style={{background:'#AEAEC3', width:'32vw',height:'6vh',borderRadius:'15px',padding:'10px',fontSize:'23px',color:'white'}}></input>
                </div>
                <div>
                    <button  style={{background:'#EAEC3' , width:'8vw' ,height:'5vh', marginTop:'4vh' , marginLeft:'12vw',fontSize:'23px',borderRadius:'13px'}}   > Send</button>
                </div>
            </form>
        </div>
    </div>;
}

export default Touch;