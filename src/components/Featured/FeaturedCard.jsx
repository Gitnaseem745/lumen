import React from 'react'

const FeaturedCard = ({theme, name, tags, img}) => {
  return (
    <div className="featuredCard">
        <div className="featuredText">
            <div className='featuredTextDiv'>
            <p className='text-xl max-sm:text-sm'>{theme}</p>
            <h1 className='featuredH1'>{name}</h1>
            <h1 className='font-bold opacity-50 max-sm:text-xs'>{tags}</h1>
            </div>
        </div>
        <div className="featuredImg">
            <div className='w-[90%] h-[90%]'>
            <img src={img} className='w-full h-full object-cover'/>
            </div>
        </div>
    </div>
  )
}

export default FeaturedCard
