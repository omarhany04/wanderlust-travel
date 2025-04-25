import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle mobile menu toggle
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close mobile menu when a link is clicked
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 bg-white bg-opacity-95 transition-all duration-300 ${
      scrolled ? 'shadow-md' : 'shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-teal-600">
              Wanderlust
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/#destinations" className="nav-link px-4 py-2 text-teal-600 font-medium">
              Destinations
            </Link>
            <Link to="/#featured" className="nav-link px-4 py-2 text-teal-600 font-medium">
              Featured
            </Link>
            <Link to="/#testimonials" className="nav-link px-4 py-2 text-teal-600 font-medium">
              Testimonials
            </Link>
            <Link to="/#subscribe" className="nav-link px-4 py-2 text-teal-600 font-medium">
              Subscribe
            </Link>
          </div>
          
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMobileMenu}
              className="text-gray-600 hover:text-teal-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden bg-white ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link 
            to="/#destinations" 
            className="block px-3 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-md"
            onClick={closeMobileMenu}
          >
            Destinations
          </Link>
          <Link 
            to="/#featured" 
            className="block px-3 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-md"
            onClick={closeMobileMenu}
          >
            Featured
          </Link>
          <Link 
            to="/#testimonials" 
            className="block px-3 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-md"
            onClick={closeMobileMenu}
          >
            Testimonials
          </Link>
          <Link 
            to="/#subscribe" 
            className="block px-3 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-md"
            onClick={closeMobileMenu}
          >
            Subscribe
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;