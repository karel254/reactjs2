import React from 'react'
import './Contact.css'
import Image from  "../assets/whatlog(2).png"
import Mimage from  "../assets/microlog(2).png"
import Dmage from  "../assets/phonelog(2).png"





function Contact() {
  return (
    <section id='contact'>
    <span className="contactTittle">Our Contacts</span>
    <span className="contactDesc bg-secondary text-white">For more services that might require online assistance or query purposes, you can contact us on the following handles.</span>
<div className="contactBars">
    <div className="contactBar">
    <img src={Image} alt="Whatsapp" class="rounded" width="48" height="48" className="contactImg"/> 
          <div className="contactBarText">
            <h2>Whatsapp</h2>
            <p>+254735626873</p>  
          </div>
          </div>

    <div className="contactBar">  
    <img src={Mimage} alt="Microsoft" class="rounded" width="48" height="48" className="contactImg"/> 
          <div className="contactBarText">
            <h2>Microsoft outlook(also email)</h2>
            <p>daltechAfrica@outlook.com</p>  
          </div>
    </div>

    <div className="contactBar">
    <img src={Dmage} alt="Phone" class="rounded" width="48" height="48" className="contactImg"/> 
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