import React from 'react'
import './Landing.css';
import bg from  "../assets/Dalle(2).jpg";
function Landing() {
  return (<section id="landing">
  <div className="landingContent">
      <span className="hello">Hello</span>
      <span className="landingText">We're <span className="landingName">Daltech Software Solutions,</span><br/>Software Engineers✨</span>
     <div class="bg-primary text-white"><p className="landingPara">Is your organization the next success story? Let Daltech unlock your untapped<br/> potential. The future is coding - don't get left behind!</p>
      </div>

  </div>
  <img src={bg} alt="Profile" width="1000000" height="100000" className="bg"/>

 </section>
  )
}

export default Landing