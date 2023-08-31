import React from 'react'
import AboutBanner from '../assets/AboutBanner.jpg'
import '../styles/About.css';

function About() {
  return (
   
    <div className='about'>
       <div className='aboutTop' style={{ backgroundImage: `url(${AboutBanner})` }}>
        
        <div className="aboutContainer">
        <h1>A PROPOS</h1>
        <p className='aboutP'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis eius, ratione illo cumque, excepturi vitae ipsam voluptatem eum error aliquam laborum? Quae, magni facere. Tempore suscipit minus necessitatibus ea saepe in error omnis perferendis dolore fuga, animi assumenda sequi dignissimos aut architecto ipsa velit beatae expedita, porro vel? Quod, quam!</p>
        <div className='aboutBottom'></div>
        </div>
        <div className='aboutBottom'></div>
           </div>
       
    </div>
  )
}

export default About