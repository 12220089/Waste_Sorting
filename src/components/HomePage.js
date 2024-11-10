import React from 'react';
import './HomePage.css';
import heroBanner from '../images/herobanner.jpg'; // Adjusted path

const Homepage = () => {
    return (
        <div className="homepage">
            <div className="hero-banner">
                <img src={heroBanner} alt="Waste Sorting Assistant" className="hero-image" />
            </div>
            <div className="content">
                <h2>About Our Waste Sorting Assistant</h2>
                <p>
                    Welcome to the Waste Sorting Assistant! Upload an image of waste, and our tool will help you 
                    determine the proper category for disposal. Make waste sorting easy and contribute to a cleaner, 
                    greener future.
                </p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>
                        <span className="highlight-number">13 %</span> 
                        <br />
                        of household waste recycled worldwide
                    </p>
                </div>
                <div className="card">
                <p>
                        <span className="highlight-number">38.9</span> 
                        <br />
                        million onnes of household and similar waste collected by the public waste management service in France.
                    </p>
                </div>
                <div className="card">
                <p>
                        <span className="highlight-number">25</span> 
                        <br />
                        billions glass bottles sorted in Europe per year
                    </p>
                </div>
            </div>
            <footer className="footer">
                <p>&copy; 2024 Waste Sorting Assistant. All rights reserved.</p>
                <div className="footer-links">
                    <a href="#about">About Us</a>
                    <a href="#contact">Contact</a>
                    <a href="#privacy">Privacy Policy</a>
                </div>
            </footer>

        </div>
    );
};

export default Homepage;
