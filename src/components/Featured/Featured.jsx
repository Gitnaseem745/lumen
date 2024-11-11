import React, { useEffect, useRef } from 'react';
import { project, section } from '../../lumenContent';
import FeaturedCard from './FeaturedCard';
import Button from '../Button/Button';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const Featured = () => {
    const gsapContainerRef = useRef(null);
  return (
    <section  className='py-[10vw] px-[15vw]' ref={gsapContainerRef}>
        <div className='gsapContainer'>
            <h1 className='text-2xl max-sm:text-[16px]'>{section.featured.title}</h1>
            <h1 className='featuredTitle w-[50%] max-sm:w-full max-sm:text-3xl'>{section.featured.description}</h1>
        </div>
        <div className="pb-[5vw] max-sm:pt-[20vw] flex flex-col max-sm:gap-20">
        {project.map((project, i)=>(
            <FeaturedCard key={i} theme={project.theme} name={project.name} tags={project.tags} img={project.img} />
        ))}
        </div>
        <Button btnText="view all projects" />
    </section>
  )
}

export default Featured
