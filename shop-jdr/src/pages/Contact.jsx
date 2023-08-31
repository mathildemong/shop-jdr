import React from 'react'
import ContactGif from '../assets/contact.gif'
import '../styles/Contact.css';

function Contact() {
  return (
     
       <div className='contact'>
        <div className='contactTop' style={{ backgroundImage: `url(${ContactGif})` }}>
       <div className="contactContainer">
        <h1>NOUS CONTACTER</h1>
        <p className='aboutP'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis eius, ratione illo cumque, excepturi vitae ipsam voluptatem eum error aliquam laborum? Quae, magni facere. Tempore suscipit minus necessitatibus ea saepe in error omnis perferendis dolore fuga, animi assumenda sequi dignissimos aut architecto ipsa velit beatae expedita, porro vel? Quod, quam!</p>
      
        </div>
        <div className='contactBottom'></div>
        
        </div> 
        
        
     
     </div>
   
  )
}

export default Contact
