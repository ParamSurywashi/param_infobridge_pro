import React from 'react';
import { FaInstagram, FaTiktok } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer-container">
    <div className="footer-content">
      <div className="footer-column">
        <h3>SHOP</h3>
        <ul>
          <li>Variety Packs</li>
          <li>Our Flavors</li>
          <li>Subscribe & Save</li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>SUPPORT</h3>
        <ul>
          <li>Find Us</li>
          <li>Shipping & Return Policy</li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>Accessibility Options</li>
          <li>Accessibility Statement</li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>QUESTIONS</h3>
        <p className='g-link'>hello@drinkwildwonder.com</p>
      </div>
      <div className="footer-column">
        <h3>WHOLESALE</h3>
        <p className='g-link'>sales@drinkwildwonder.com</p>
      </div>
      <div className="brand-section">
      <a href="/" className="brand-logo footlogo">
            wildwonder®
          </a>
      <div className="social-icons">
         <FaInstagram />
         <FaTiktok  />
      </div>
    </div>
    </div>

  </footer>
  );
}

export default Footer;
