import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      <div className="contact-us-container">
        <h2>Contact Us</h2>
        <p>If you have any questions, feel free to reach out to us through our contact form or email us at <a href="mailto:12220089.gcit@rub.edu.bt">12220089.gcit@rub.edu.bt</a>.</p>
        {submitted ? (
          <p className="success-message">Thank you for reaching out! We'll get back to you soon.</p>
        ) : (
          <form onSubmit={handleSubmit} className="contact-us-form">
            <div>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Message:</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="contact-us-button">Submit</button>
          </form>
        )}
      </div>

      {/* Footer positioned outside the main container */}
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

export default ContactUs;
