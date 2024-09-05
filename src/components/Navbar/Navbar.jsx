import React from 'react'
const menu = ["our showcase", "menu",];
const Navbar = () => {
  return (
    <nav className='nav'>
        <p className='logo'>lumen</p>
        <div className="navRight">
        {menu.map((item, index)=>(
            <a key={index} className='navLink'>{item}</a>
        ))}
        <i className="ri-menu-line text-xl pt-1 cursor-pointer"></i>
        </div>
    </nav>
  )
}

export default Navbar
