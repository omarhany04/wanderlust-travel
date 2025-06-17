import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import GlobalSearch from '../common/GlobalSearch';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

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

  // Toggle search visibility
  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  // Navigation link renderer - handles both home page scrolling and other page navigation
  const NavLink = ({ to, children }) => {
    if (isHomePage) {
      // If we're already on home page, use ScrollLink for smooth scrolling
      return (
        <ScrollLink 
          to={to} 
          spy={true} 
          smooth={true} 
          offset={-80} 
          duration={500}
          className="nav-link px-4 py-2 text-teal-600 font-medium cursor-pointer"
          onClick={closeMobileMenu}
        >
          {children}
        </ScrollLink>
      );
    } else {
      // If on another page, use RouterLink to go to home page with hash
      return (
        <RouterLink 
          to={`/#${to}`} 
          className="nav-link px-4 py-2 text-teal-600 font-medium cursor-pointer"
          onClick={closeMobileMenu}
        >
          {children}
        </RouterLink>
      );
    }
  };

  return (
    <nav className={`fixed w-full z-50 bg-white bg-opacity-95 transition-all duration-300 ${
      scrolled ? 'shadow-md' : 'shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <RouterLink to="/" className="text-2xl font-bold text-teal-600">
              Wanderlust
            </RouterLink>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="destinations">Destinations</NavLink>
            <NavLink to="featured">Featured</NavLink>
            <NavLink to="testimonials">Testimonials</NavLink>
            <NavLink to="footer">Travel Types</NavLink>
            <NavLink to="subscribe">Subscribe</NavLink>
            <button
              onClick={toggleSearch}
              className="nav-link px-4 py-2 text-teal-600 font-medium cursor-pointer"
              aria-label={showSearch ? "Close search" : "Open search"}
            >
              <i className={`fas ${showSearch ? 'fa-times' : 'fa-search'}`}></i>
            </button>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleSearch}
              className="text-gray-600 hover:text-teal-600 mr-4"
              aria-label={showSearch ? "Close search" : "Open search"}
            >
              <i className={`fas ${showSearch ? 'fa-times' : 'fa-search'}`}></i>
            </button>
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
      
      {/* Search Bar */}
      {showSearch && (
        <div className="bg-white border-t border-gray-200 py-3 px-4 transition-all duration-300 animate-fadeIn">
          <div className="max-w-4xl mx-auto">
            <GlobalSearch />
          </div>
        </div>
      )}
      
      {/* Mobile menu */}
      <div className={`md:hidden bg-white ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NavLink to="destinations">Destinations</NavLink>
          <NavLink to="featured">Featured</NavLink>
          <NavLink to="testimonials">Testimonials</NavLink>
          <NavLink to="footer">Travel Types</NavLink>
          <NavLink to="subscribe">Subscribe</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;