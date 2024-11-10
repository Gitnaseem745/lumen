import React from 'react'
import { inspiration, section } from '../../lumenContent'
import Button from '../Button/Button'
import InspireCard from './InspireCard'

const Inspire = () => {
  return (
    <section className='py-[10vw] px-[15vw]'>
            <div className='flex gap-10 flex-col'>
            <h1 className='featuredTitle w-[40%] max-sm:w-full'>{section.inspiration.title}</h1>
            {/* <h1 className='sectionDes'>{section.inspiration.description}</h1> */}
            </div>
            <div className="resourceCardContainer">
            {inspiration.map((inspire, i)=>(
            <InspireCard img={inspire.img} key={i} tag={inspire.tag} name={inspire.name} />
        ))}
        </div>
        <Button btnText="see all inspirations" />
    </section>
  )
}

export default Inspire
