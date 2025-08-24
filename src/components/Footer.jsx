import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">YummyKart</div>

        <div className="footer-columns">
          <div className="footer-column">
            <h4>Eternal</h4>
            <ul>
              <li>Zomato</li>
              <li>Blinkit</li>
              <li>Swiggy</li>
              <li>Dominos</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>For Restaurants</h4>
            <ul>
              <li>Partner With Us</li>
              <li>Apps For You</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>For Delivery Partners</h4>
            <ul>
              <li>Partner With Us</li>
              <li>Apps For You</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Learn More</h4>
            <ul>
              <li>Privacy</li>
              <li>Security</li>
              <li>Terms of Service</li>
              <li>Help & Support</li>
            </ul>
          </div>
          <div className="footer-column social">
            <h4>Social Links</h4>
            <div className="social-icons">
              <i className="fab fa-linkedin-in"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-youtube"></i>
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-whatsapp"></i>
            </div>
            <img src="/images/appstore.png" alt="App Store" className="store-btn" />
            <img src="/images/playstore.png" alt="Play Store" className="store-btn" />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies.
        <br />© 2025 YummyKart™ Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
