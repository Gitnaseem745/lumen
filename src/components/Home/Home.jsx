
import React from 'react'
import Navbar from '../Navbar/Navbar.jsx'
import Hero from '../Hero/Hero.jsx'
import { useState } from 'react';
import { insImgFour, insImgThree } from '../../assets/inspire_imgs/index.js';
import { resImgThree, resImgTwo } from '../../assets/resource_imgs/index.js';
const Home = () => {
    const [bgImage, setBgImage] = useState('');
    const handleMouseEnter = (word) => {
        setBgImage( word=="Capture" ? insImgThree :
                    word=="Moments" ? resImgTwo :
                    word=="Light" ? resImgThree : "");
    };

    const handleMouseLeave = () => {
      setBgImage('');
    };

  return (
    <section className='home' style={{ backgroundImage: `url(${bgImage})`}}>
    <Navbar/>
    <Hero handleMouseLeave={handleMouseLeave} handleMouseEnter={handleMouseEnter}/>
    </section>
  )
}

export default Home
