import React, { useState, useEffect, useRef } from 'react';
import $ from 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import  AppStore from '../assets/img/app-store.svg'
import  GooglePlay from '../assets/img/app-store.svg'
import  Phone from '../assets/img/phone.svg'
import  Qrcode from '../assets/img/qrcode.svg'
import  AppleLogo from '../assets/img/apple-logo.svg'
import  GooglePlayLogo from '../assets/img/google-play-logo.svg'
import  TokenGeneration from '../assets/img/token-generation.svg'
import  SecureTrusted from '../assets/img/secure-trusted.svg'
import  Support from '../assets/img/support.svg'
import  TrackPayment from '../assets/img/track-payment.svg'
import  ManageMeters from '../assets/img/manage-meters.svg'
import  PaymentFlow from '../assets/img/payment-flow.svg'
import  Analytics from '../assets/img/analytics.svg'
import  ArrowLeft from '../assets/img/arrow-left.svg'
import  ArrowRight from '../assets/img/arrow-right.svg'
import  OpenIcon from '../assets/img/open-icon.svg'
import  CloseIcon from '../assets/img/close-icon.svg'
import  HalfPhone from '../assets/img/half-phone.svg'
import faqData from '../data/faqData';
import customerData from '../data/customerData';


function Home() {
    const [popupVisible, setPopupVisible] = useState(false);
    const trackRef = useRef(null);
    const itemRefs = useRef([]);
    const [index, setIndex] = useState(0);
    const showPopup = {
        display: 'flex'
    };

    const hidePopup = {
        display: 'none'
    };

    const hideQrcodePopup = () => {

        setPopupVisible(!popupVisible)
    };
      


    const [openId, setOpenId] = useState(null);

    const handleToggle = (id) => {
        setOpenId(openId === id ? null : id);
    };

  const updateSlider = () => {
    const track = trackRef.current;
    const items = itemRefs.current;

    if (!track || !items[0]) return;

    const itemStyle = getComputedStyle(items[0]);
    const itemWidth = items[0].offsetWidth + parseFloat(itemStyle.marginRight || 32);
    const offset = index * itemWidth;

    track.style.transform = `translateX(-${offset}px)`;
  };

  // Update slider on index or resize
  useEffect(() => {
    updateSlider();
    window.addEventListener('resize', updateSlider);
    return () => window.removeEventListener('resize', updateSlider);
  }, [index]);

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev < customerData.length - 3.5 ? prev + 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    if (index < customerData.length - 3.5) {
      setIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex(prev => prev - 1);
    }
  };


  // Show popup after delay
  useEffect(() => {
    const timer = setTimeout(() => setPopupVisible(!popupVisible), 6000);
    return () => clearTimeout(timer);
  }, []);


  return (
    <>   
    <div className="hero-container">

        <div className="hero-content-left">
        <div className="hero-content-h1">
            <h1 className="hero-content-h1-first">Never Stress Over Power Bills Again 
            <span className="hero-content-h1-second"> Pay In Seconds. </span>
            </h1>
        </div>
        
        <p>Pay electricity bills instantly, track usage, and stay powered &#8212; anytime, anywhere.</p>
        <div className="btn-container">
            <a href="" className="btn-app-store"> <img src={AppStore} alt="" /></a>
            <a href="" className="btn-google-play"> <img src={GooglePlay} alt="" /></a>
        </div>
        </div>
        <div className="hero-content-right">

            <img src={Phone} className="phone" />
        </div>      
    </div>

    <div id="pop-box" className="popbox" style={popupVisible ? showPopup  : hidePopup} onClick={hideQrcodePopup}>
        <h6>Get the LightmanNG App</h6>
        <p>Scan to download. Available on Appstore and Playstore</p>
        <img src={Qrcode} alt="Scan Qrcode"/>
        <div>
        <a href=""><img src={AppleLogo} alt="App Store"/></a>
        <a href=""><img src={GooglePlayLogo} alt="Google Play Store"/></a>
        </div>
    </div>

    <div className="everything-container">
        <div className="everything-1">
            <h3>Power Up Your Life, The Smart Way</h3>
            <p>seamless, secure, and stress-free electricity bill payments</p>
        </div>
        <div className="everything-2">
            <div className="token-generation">
                <img src={TokenGeneration} alt=""/>
                <div className="token-genration-content">
                <h6>Instant Token Generation</h6>
                <p>Pay your electricity bills in seconds and receive tokens immediately.</p>
                </div>
            </div>
            <div className="secure-trusted">
                <img src={SecureTrusted} alt=""/>  
                <div className="secure-trusted-content">
                <h6>Secure & Trusted</h6>
                <p>We partnered with verified providers to ensure your transactions stay protected</p>
                </div>     
            </div>
            <div className="support">
                <img src={Support} alt=""/> 
                <div className="support-content">
                <h6>24/7 Support</h6>
                <p>Got an issue? Our support team is  just a tap away to help you out fast.</p>
                </div>       
            </div>

        </div>
        <div className="everything-3">
            <div>
                <h3>Everything You Need to Take Control of Your Power Bills.</h3>
                <p>Designed to save you time, money, and stress.</p>
            </div>

        </div> 
        <div className="everything-4">
            <div className="payment-description-1">
                <div className="keep-track-card">
                    <div className="track-payments">
                        <div className="track-payment-content">
                            <h6>Keep track of payments</h6>
                            <p>Get a clear record of every bill you’ve ever paid — receipts, statuses, and refunds included</p>
                        </div>
                        <img src={TrackPayment} className="track-payment-img" alt=""/>
                    </div>
                    <div className="manage-meters">
                        <div className="manage-meters-content">
                        <h6>Energy Reports & Analytics Dashboard</h6>
                        <p>Track your energy spending and usage patterns. Stay in control of your budget and consumption.</p>
                        </div>
                        <img src={ManageMeters} className="manage-meters-img" alt=""/>
                    </div>            
                </div>
                <div className="payment-description-2" id="mobile">
                    <div className="payment-flow-content">
                        <h6>Seamless Bill Payment Flow</h6>
                        <p>Pay your electricity bills in just a few taps and get instant confirmation, no delays.</p>
                    </div>
                    <img src={PaymentFlow} className="payment-flow-img" alt=""/>

                </div>        
                <div className="report-analytics-card">
                    <div className="report-analytics-content">
                        <h6>Energy Reports & Analytics Dashboard</h6>
                        <p>Track your energy spending and usage patterns. Stay in control of your budget and consumption.</p>
                    </div>
                    <img src={Analytics} className="analytic-img" alt=""/>
                </div>                
            </div>
            <div className="payment-description-2" id="desktop">
                <div className="payment-flow-content">
                    <h6>Seamless Bill Payment Flow</h6>
                    <p>Pay your electricity bills in just a few taps and get instant confirmation, no delays.</p>
                </div>
                <img src={PaymentFlow} className="payment-flow-img" alt=""/>

            </div>
        </div>    

    </div>

    <div className="customers-container">
        <div className="customer-heading">
            <div className="heading-content">
                <h3>What Our Customers Say</h3>
                <p>Experience the future of power payments through the words of our users</p>
            </div>
            <div className="scroll-buttons">
                <button className="btn button-left" onClick={handlePrev}><img src={ArrowLeft} alt="Left Arrow"/></button>
                <button className="btn button-right" onClick={handleNext}><img src={ArrowRight} alt="Right Arrow"/></button>
            </div>
        </div>
      <div className="customers" ref={trackRef}>
        {customerData.map((customer, i) => (
          <div
            key={i}
            className="customer-tab"
            ref={el => (itemRefs.current[i] = el)}
          >
            <p>{customer.text}</p>
            <div className="tab-info">
              <img src={customer.avatar} alt={customer.name} />
              <div className="name-location">
                <span>{customer.name}</span>
                <span>{customer.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    
    <div className="faq-container">

        <div className="faq-heading">
            <h3>Frequently asked questions</h3>
            <p>Everything you need to know about the product.</p>
        </div> 
        <div className="faq-list">
            <div className="frequently-ask-questions">
            {faqData.map(({ id, question, answer }) => (
                <div key={id}>
                <div className={`question question-${id}`} onClick={() => handleToggle(id)}>
                    <span>{question}</span>
                    <span>
                    <img
                        src={openId === id ? CloseIcon : OpenIcon}
                        className={openId === id ? 'close' : 'open'}
                        alt="toggle"
                    />
                    </span>
                </div>

                {openId === id && (
                    <div className={`question-answer question-answer-${id}`}>
                    <p>{answer}</p>
                    </div>
                )}
                </div>
            ))}
            </div>
        </div>
    </div>

    <div className="stay-connected-container">
        <div>
            <h3>Stay powered. Stay connected. Download LightmanNG now.</h3>
            <p>Track your energy spending and usage patterns. Stay in control of your budget and consumption.</p>
        </div>
        <div className="btn-container">
            <a href="" className="btn-app-store"> <img src={AppStore} alt=""/></a>
            <a href="" className="btn-google-play"> <img src={GooglePlay} alt=""/></a>
        </div>
        <img src={HalfPhone} alt="Download Description"/>
    </div>
    </>
  )
}

export default Home
