
import React from 'react'
import Navbar from '../Navbar/Navbar.jsx'
import Hero from '../Hero/Hero.jsx'
import { useState } from 'react';
const Home = () => {
    const [bgImage, setBgImage] = useState('');

    const handleMouseEnter = (word) => {
        setBgImage( word=="Capture" ? "url(src/assets/inspire_imgs/insImgThree.jpg)" :
                    word=="Moments" ? "url(src/assets/resource_imgs/resImgTwo.jpg)"  :
                    word=="Light" ? "url(src/assets/resource_imgs/resImgThree.jpg)"  : "");
    };

    const handleMouseLeave = () => {
      setBgImage('');
    };
    
  return (
    <section className='home' style={{ backgroundImage: bgImage, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center center", transition: 'background-image 0.3s ease-in-out' }}>
    <Navbar/>
    <Hero handleMouseLeave={handleMouseLeave} handleMouseEnter={handleMouseEnter}/>
    </section>
  )
}

export default Home
