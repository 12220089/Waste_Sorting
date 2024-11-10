import React from 'react';
import './AboutUs.css';
import bottleIcon from '../images/bottles.png';
import foodWasteIcon from '../images/food.png';
import hazardousIcon from '../images/electronics.png';
import td from '../images/td.jpg';
import sz73 from '../images/sz73.jpg';
import sz72 from '../images/sz72.jpg';
import tw from '../images/tw.jpg';

const AboutUs = () => {
    return (
        <div className="about-page">
            <div className="about-us">
                <div className="what-we-do">
                    <h2>What We Do</h2>
                    <p>
                        We help sort waste into recyclable and non-recyclable categories based on uploaded images. Our system
                        accurately identifies different types of waste, ensuring proper disposal and recycling.
                    </p>
                    <div className="waste-icons">
                        <div className="icon-item">
                            <img src={foodWasteIcon} alt="Food Waste" style={{ width: '150px', height: '150px' }} />
                            <p>Food Waste</p>
                        </div>
                        <div className="icon-item">
                            <img src={hazardousIcon} alt="Hazardous Waste" style={{ width: '150px', height: '150px' }} />
                            <p>Hazardous Waste</p>
                        </div>
                        <div className="icon-item">
                            <img src={bottleIcon} alt="Bottles" style={{ width: '150px', height: '150px' }} />
                            <p>Bottles</p>
                        </div>
                    </div>
                </div>
                
                <div className="mission">
                    <h2>Our Mission</h2>
                    <p>
                        Our mission is to make waste sorting and recycling easier and more accessible for everyone.
                        By providing a tool that helps users accurately sort their waste, we hope to reduce waste
                        contamination and promote environmental responsibility worldwide.
                    </p>
                </div>
                
                <div className="vision">
                    <h2>Our Vision</h2>
                    <p>
                        We envision a world where waste is managed efficiently, resources are preserved, and communities
                        are empowered to take action towards a sustainable future. Our Waste Sorting Assistant is a step
                        towards achieving that goal.
                    </p>
                </div>
                
                <div className="team">
                    <h2>Meet Our Team</h2>
                    <div className="team-members">
                        <div className="team-member">
                            <img src={sz72}alt="Team Member" />
                            <h3>Sonam Zangmo</h3>
                            <p>12220072</p>
                        </div>
                        <div className="team-member">
                            <img src={sz73} alt="Team Member" />
                            <h3>Sonam Zangmo</h3>
                            <p>12220073</p>
                        </div>
                        <div className="team-member">
                            <img src={tw} alt="Team Member" />
                            <h3>Tshendu Wangmo</h3>
                            <p>12220087</p>
                        </div>
                        <div className="team-member">
                            <img src={td} alt="Team Member" />
                            <h3>Tshering Delkar</h3>
                            <p>12220089</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer outside the main container */}
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

export default AboutUs;
