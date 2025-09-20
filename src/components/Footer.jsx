import React from 'react'
import { Link } from 'react-router-dom';
import  Lightman from '../assets/img/lightman-ng.svg';
import  Whatsapp from '../assets/img/whatsapp.svg'
import  Twitter from '../assets/img/twitter.svg'
import  Facebook from '../assets/img/facebook.svg'
import  Instagram from '../assets/img/instagram.svg'

function Footer() {
    const d = new Date();
    let year = d.getFullYear();
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-left">
          <img src={Lightman} alt="LightmanNg" />
          <p>Your Fast and reliable power bill payment solution</p>
          <div className="socials">
            <a href=""><img src={Whatsapp} alt="Whatsap Link"/></a>
            <a href=""><img src={Twitter} alt="Twitter Handle"/></a>
            <a href=""><img src={Facebook} alt="Facebook Handle"/></a>
            <a href=""><img src={Instagram} alt="Instagram Handle"/></a>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-right-content">
            <ul className="footer-list">
              <li><h3>Legal</h3></li>
              <li><Link to="">Terms of service</Link></li>
              <li><Link to="">Privacy Policy</Link></li>
              <li><Link to="">Refund policy</Link></li>
            </ul>
          </div>

          <div className="footer-left-content">
            <ul className="footer-list">
              <li><h3>Contact Us</h3></li>
              <li>support@lightmanng.com</li>
              <li>+2349130013114</li>
              <li>info@lightmanng.com</li>
            </ul>
          </div>          

        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-left">
          <span>&copy; {year} &#8212; Copyright</span><br/>
          <span>All Rights reserved</span>
        </div>
        <div className="footer-right">
          <span>UNIT 5B, 6 FORCES AVENUE,</span><br/>
          <span>PORTHARCOURT, RIVERS STATE</span>
        </div>
      </div>
    </div>
    
  )
}

export default Footer
