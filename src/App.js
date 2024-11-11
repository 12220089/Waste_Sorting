import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import ImageUploader from './components/ImageUploader';
import './App.css'; // Optional: Style your app here

function App() {
  return (
    <Router>
      <div className="App">
        <header style={{ display: 'flex', alignItems: 'center', padding: '10px', backgroundColor: '#23494A', color: 'white' }}>
        <Link to="/" className="logo">
        <img 
  src={`${process.env.PUBLIC_URL}/logo.png`} 
  alt="Waste Sorting Assistant Logo" 
  style={{ height: 'auto', width: '80px', marginLeft:'20px'
  }} 
/>


        </Link>
          <nav style={{ marginLeft: 'auto' }}>
            <Link to="/" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>Home</Link>
            <Link to="/about-us" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>About Us</Link>
            <Link to="/contact-us" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>Contact Us</Link>
            <Link to="/upload" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>Upload Image</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/upload" element={<ImageUploader />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
