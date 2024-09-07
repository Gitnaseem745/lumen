import React from 'react'

const InspireCard = ({img, tag, name}) => {
  return (
    <div className='flex flex-col gap-4'>
    <img src={img} className='inspireImg'/>
    <div className="flex flex-row">
    <i class="inspireIcon  ri-building-line"></i>
    <p className='inspireTag'>{tag}</p>
    </div>
    <h1 className='inspireH1'>{name}</h1>
    </div>
  )
}

export default InspireCard
