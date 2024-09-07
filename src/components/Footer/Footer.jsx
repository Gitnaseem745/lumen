import React from 'react'
import { section } from '../../lumenContent'

const social = ["LinkedIn", "Twitter", "Behance", "Instagram", "Facebook", "Dribble", "Youtube", "Threads"];
const Footer = () => {
  return (
    <section className='footer'>
        <div>
            <h1 className='footerTitle'>
            <span className='font-normal'>{section.footer.title}</span>
            {section.footer.description}</h1>
        </div>
        <div className="footerBottom">
        <div className="address">
            <div className="mail">
            <p>info@lumen.com</p>
            <hr/>
            </div>
            <p className='dummyAddress'>901 N Sydney, Suite 198 America, NA 22789, USA</p>
            <a href='' className='font-semibold'>Privacy Policy</a>
        </div>
        <div className="socialLinks">
        {social.map((app)=>(
            <a href="">{app}</a>
        ))}
        </div>
        </div>
    </section>
  )
}

export default Footer
