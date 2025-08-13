import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-content">
        <div className="footer-brand">
          <Link to="/" className="logo-link">
            <h3>ChizhiDigital</h3>
          </Link>
          <p className="tagline">Digital Products Marketplace</p>
        </div>
        
        <div className="footer-links">
          <div className="links-column">
            <h4>Shop</h4>
            <Link to="/products">All Products</Link>
            <Link to="/products/category/templates">Templates</Link>
            <Link to="/products/category/planners">Planners</Link>
          </div>
          
          <div className="links-column">
            <h4>Company</h4>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/faq">FAQs</Link>
          </div>
          
          <div className="links-column">
            <h4>Legal</h4>
            <Link>Privacy Policy</Link>
            <Link>Terms of Service</Link>
            <Link>Refund Policy</Link>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} ChizhiDigital. All rights reserved.</p>
        <div className="social-links">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;