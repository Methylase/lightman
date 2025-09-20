import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Faq from './pages/Faq';
import ContactUs from './pages/ContactUs';

function App() {

  return (
   <Router>
      <Header />       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
      <Footer />      
    </Router>
  )
}

export default App
