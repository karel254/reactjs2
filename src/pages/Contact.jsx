import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <section id='contact'>
    <span className="contactTittle">Our Contacts</span>
    <span className="contactDesc">For more services that might require online assistance or query purposes, you can contact us on the following handles.</span>
<div className="contactBars">
    <div className="contactBar">
       
          <div className="contactBarText">
            <h2>Whatsapp</h2>
            <p>+254735626873</p>  
          </div>
          </div>

    <div className="contactBar">  
       
          <div className="contactBarText">
            <h2>Microsoft outlook(also email)</h2>
            <p>daltechAfrica@outlook.com</p>  
          </div>
    </div>

    <div className="contactBar">
      
          <div className="contactBarText">
            <h2>Phone</h2>
            <p>073354256</p>  
          </div>
    </div>    
</div>
   </section>
  )
}

export default Contact