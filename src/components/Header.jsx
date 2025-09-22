import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import  Lightman from '../assets/img/lightman-ng.svg'

function Header() {

    const [hamburgerActive, setHamburgerActive] = useState(false);
      
    // Hamburger menu toggle
    const toggleHamburger = () => {

        setHamburgerActive(!hamburgerActive);
    };
      
  return (
    <>
        <div className="top-menu">
        <Link to="/"><img src={Lightman} alt="LightmanNg"/></Link>
        
        <div className="menu">
            <ul className="menu-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact-us">Contact Us</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
            </ul>
        </div>
        <a href="" className="btn-download">Download the App</a>

        <div className={`hamburger ${hamburgerActive ? 'active' : ''}`} onClick={toggleHamburger} id="hamburger" >
            <span></span>
            <span></span>
            <span></span>
        </div>
        </div>
        <div className={`menu-mobile shadow-sm ${hamburgerActive ? 'active' : ''}`} id="mobile-menu">
        <ul className="menu-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
        </ul>
        </div>
    </>

  )
}

export default Header
