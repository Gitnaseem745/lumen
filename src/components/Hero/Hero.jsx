import React from 'react'
import { section } from '../../lumenContent';

const words = ["Capture", "Moments", "Light"];
const Hero = () => {
  return (
    <section className='w-full'>
        <div className='p-[15vw] w-full'>
        <h1 className='heroTitle'>{section.home.title}</h1>
        <div className="flex gap-9">
        {words.map((word, index)=>(
        <h1 className='outLined stroke' key={index}>{word}</h1>
        ))}
        </div>
        </div>
        <div className="px-[15vw] py-[5vw]">
            <p className='heroDes'>{section.home.description}</p>
        </div>
    </section>
  )
}
export default Hero
