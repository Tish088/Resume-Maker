import React from 'react';
import './Footer.css';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src="/ResumeLogo.png" alt="Company Logo" style={{ maxWidth: '40%', height: 'auto'}} />
      </div>
      <div className="footer-content">
        <ul className="footer-links">
          <li><a href="/about">About Us</a></li>
          <li><a href="/pricing">Pricing</a></li>
          <li><a href="/terms">Terms and Conditions</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
        <div className="footer-statement">
          <p>Made with ❤️ in Kolkata, India</p>
          <p>Copyright &copy; {new Date().getFullYear()} ResumeSnap. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
