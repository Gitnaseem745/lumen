import React from 'react'

const ResourceCard = ({img, tag, name}) => {
  return (
    <div className='flex flex-col gap-4'>
    <img src={img} className='resourceImg'/>
    <p className='resourceTag'>{tag}</p>
    <h1 className='resourceH1'>{name}</h1>
    </div>
  )
}

export default ResourceCard
