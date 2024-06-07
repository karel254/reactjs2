import React from "react";
import { Link } from "react-router-dom";
import { appLinks } from "../constants/Links";
import "./Navbar.css";
import menu from "../assets/Menub.gif";
function Navbar() {
  const [showMenu, setShowMenu] = React.useState(false);
  return (
    <nav className="navbar navbar-expand-lg container bg-light">
      <div className="desktopMenu">
  
       
        <div className="container-fluid-expand bg-light">
          <ul className="navbar-nav">
          <li className="nav-item">
          <Link to={appLinks?.Landing} className="navbar-brand">
          Home
          </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to={appLinks?.Dashboard}>
               Our Services
              </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to={appLinks?.AboutUs}>
               Meet Our Team
              </Link>
            </li>
            
            <li className="nav-item">
             <Link className="nav-link" to={appLinks?.Contact}>
                Contact Us
              </Link>
            </li>
          </ul>
          </div>
        </div>
     
     
<img src={menu} alt="Menu" className="mobileMenu" onClick={()=>setShowMenu(!showMenu)}/>
  <div className="navMenu" style={{display: showMenu? 'flex': 'none'}}>

   <Link className="nav-link" to={appLinks?.Landing} onClick={()=>setShowMenu(false)}>Home</Link>
   <Link className="nav-link" to={appLinks?.Dashboard} onClick={()=>setShowMenu(false)}>Our Services</Link>
   <Link className="nav-link" to={appLinks?.AboutUs} onClick={()=>setShowMenu(false)}>Meet Our Team</Link>
   <Link className="nav-link" to={appLinks?.Contact} onClick={()=>setShowMenu(false)}>Contact Us</Link>  
   </div>
    </nav>
  );
}

export default Navbar;