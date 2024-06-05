import React from "react";
import { Link } from "react-router-dom";
import { appLinks } from "../constants/Links";
import "./Navbar.css";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary">
      <div className="container-fluid bg-primary">
        <Link to={appLinks?.Landing} className="navbar-brand">
          Home
        </Link>
        <div >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to={appLinks?.Dashboard}>
               Our Services
              </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to={appLinks?.AboutUs}>
                About Us
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
    </nav>
  );
}

export default Navbar;