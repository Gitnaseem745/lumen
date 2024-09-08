import React from 'react';
import { project, section } from '../../lumenContent';
import FeaturedCard from './FeaturedCard';
import Button from '../Button/Button';

const Featured = () => {
  return (
    <section  className='py-[10vw] px-[15vw]'>
        <div>
            <h1 className='text-2xl max-sm:text-[16px]'>{section.featured.title}</h1>
            <h1 className='featuredTitle w-[50%] max-sm:w-full max-sm:text-3xl'>{section.featured.description}</h1>
        </div>
        <div className="pb-[5vw] max-sm:pt-[20vw] flex flex-col max-sm:gap-20">
        {project.map((project)=>(
            <FeaturedCard theme={project.theme} name={project.name} tags={project.tags} img={project.img} />
        ))}
        </div>
        <Button btnText="view all projects" />
    </section>
  )
}

export default Featured
