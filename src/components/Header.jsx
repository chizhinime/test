import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo as Link to Home */}
          <Link to="/" className="logo-link">
            <img src={logo} alt="ChizhiDigital Logo" className="logo-image" />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>
          
          {/* Mobile Hamburger Button */}
          <button 
            className={`hamburger ${isMenuOpen ? 'open' : ''}`} 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <nav className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/about" onClick={toggleMenu}>About</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;