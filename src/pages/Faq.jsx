import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import  OpenIcon from '../assets/img/open-icon.svg'
import  CloseIcon from '../assets/img/close-icon.svg'
import faqData from '../data/faqData';
function Faq() {


      useEffect(() => {
        document.title = "LightmanNg FAQ";
    }, []);

    const [openId, setOpenId] = useState(null);

    const handleToggle = (id) => {
        setOpenId(openId === id ? null : id);
    };  

  return (
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
  )
}

export default Faq
