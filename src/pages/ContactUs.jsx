 import React, { useEffect } from 'react';
import  MessageQoute from '../assets/img/message-quote.svg'
import  Envelope from '../assets/img/envelope.svg'
import  PhoneCall from '../assets/img/phone-call.svg'
import  Whatsap from '../assets/img/whatsap.svg'
import  MapPin from '../assets/img/map-pin.svg'
import  Whatsapp from '../assets/img/whatsapp.svg'
import  Twitter from '../assets/img/twitter.svg'
import  Facebook from '../assets/img/facebook.svg'
import  Instagram from '../assets/img/instagram.svg'

function ContactUs() {

      useEffect(() => {
        document.title = "LightmanNg Contact Us";
    }, []);

  return (
    <div className="contact-us-container">
        <div className="contact-us-left">
            <div className="get-in-touch">
                <h1>Get In Touch With Us</h1>
                <p>Have questions, comments, or suggestions? We'd love to hear them! Contact us through these channels.</p>

            </div>
            <img src={MessageQoute} className="get-in-touch-img" alt=""/>

        </div>
        <div className="contact-us-right">
            <div className="support">
                <h5>24/7 Support</h5>
                <div className="support-tab">
                    <span><img src={Envelope} alt=""/> support@lightmanNG.com</span>
                    <span className="fa fa-angle-right"></span>
                </div>
                <div className="support-tab">
                    <span><img src={PhoneCall} alt=""/> +234 913 001 3114</span>
                    <span className="fa fa-angle-right"></span>
                </div>
                <div className="support-tab">
                    <span><img src={Whatsap} alt=""/> Message us on WhatsApp</span>
                    <span className="fa fa-angle-right"></span>
                </div>
                <div className="support-tab">
                    <span><img src={MapPin} alt=""/> UNIT 5B, 6 FORCES AVENUE, PORTHARCOURT , RIVERS STATE</span>
                    <span className="fa fa-angle-right"></span>
                </div>
            </div>
            <div className="keep-in-touch">
                <div className="info">
                    <h5>Keep in touch</h5>
                    <p>Stay connected with us on social media for the latest news, updates and promotions</p>
                </div>
                <div className="socials">
                    <a href=""><img src={Whatsapp} alt="Whatsap Link"/></a>
                    <a href=""><img src={Twitter} alt="Twitter Handle"/></a>
                    <a href=""><img src={Facebook} alt="Facebook Handle"/></a>
                    <a href=""><img src={Instagram} alt="Instagram Handle"/></a>
                </div>
            </div>            
        </div>
    </div>    
  )
}

export default ContactUs
