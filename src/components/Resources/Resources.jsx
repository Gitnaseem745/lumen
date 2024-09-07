import React from 'react'
import {resource, section} from '../../lumenContent.js'
import ResourceCard from './ResourceCard.jsx'
import Button from '../Button/Button.jsx'
const Resources = () => {
  return (
    <section className='px-[15vw] py-[5vw]'>
        <div className='flex gap-10 flex-col'>
            <h1 className='featuredTitle w-[65%] max-sm:w-full'>{section.resources.title}</h1>
            <h1 className='sectionDes'>{section.resources.description}</h1>
        </div>
        <div className="resourceCardContainer">
        {resource.map((resource)=>(
            <ResourceCard img={resource.img} tag={resource.tag} name={resource.name} />
        ))}
        </div>
        <Button btnText="see all resources" />
    </section>
  )
}

export default Resources
