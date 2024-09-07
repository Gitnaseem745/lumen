import React from 'react'

const Button = ({btnText}) => {
  return (
    <div className='flex justify-center items-center'>
    <button className='btnStyle'>{btnText}</button>
    </div>
  )
}

export default Button
