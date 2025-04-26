import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  // Helper function to create the correct link type based on current page
  const createSectionLink = (to, children) => {
    if (isHomePage) {
      return (
        <ScrollLink
          to={to}
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className="text-gray-400 hover:text-white transition cursor-pointer"
        >
          {children}
        </ScrollLink>
      );
    } else {
      return (
        <RouterLink to={`/#${to}`} className="text-gray-400 hover:text-white transition">
          {children}
        </RouterLink>
      );
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-6 px-4" id="footer">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Wanderlust</h3>
            <p className="text-gray-400 mb-6">
              Making travel dreams come true since 2015. Your journey is our passion.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/" className="bg-gray-800 hover:bg-teal-600 w-10 h-10 rounded-full flex items-center justify-center transition" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://x.com/" className="bg-gray-800 hover:bg-teal-600 w-10 h-10 rounded-full flex items-center justify-center transition" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/" className="bg-gray-800 hover:bg-teal-600 w-10 h-10 rounded-full flex items-center justify-center transition" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.pinterest.com/" className="bg-gray-800 hover:bg-teal-600 w-10 h-10 rounded-full flex items-center justify-center transition" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-pinterest"></i>
              </a>
            </div>
          </div>
          
          {/* Destinations */}
          <div>
            <h4 className="text-lg font-bold mb-6">Destinations</h4>
            <ul className="space-y-3">
              <li>
                <RouterLink to="/destination/bali" className="text-gray-400 hover:text-white transition">
                  Bali, Indonesia
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/destination/santorini" className="text-gray-400 hover:text-white transition">
                  Santorini, Greece
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/destination/kyoto" className="text-gray-400 hover:text-white transition">
                  Kyoto, Japan
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/destination/amalfi" className="text-gray-400 hover:text-white transition">
                  Amalfi Coast, Italy
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/destination/machu" className="text-gray-400 hover:text-white transition">
                  Machu Picchu, Peru
                </RouterLink>
              </li>
            </ul>
          </div>
          
          {/* Travel Types */}
          <div>
            <h4 className="text-lg font-bold mb-6">Travel Types</h4>
            <ul className="space-y-3">
              <li>
                <RouterLink to="/travel-type/luxury-escapes" className="text-gray-400 hover:text-white transition">
                  Luxury Escapes
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/travel-type/adventure-travel" className="text-gray-400 hover:text-white transition">
                  Adventure Travel
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/travel-type/beach-getaways" className="text-gray-400 hover:text-white transition">
                  Beach Getaways
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/travel-type/cultural-experiences" className="text-gray-400 hover:text-white transition">
                  Cultural Experiences
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/travel-type/honeymoon-packages" className="text-gray-400 hover:text-white transition">
                  Honeymoon Packages
                </RouterLink>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt text-teal-500 mt-1 mr-3"></i>
                <span className="text-gray-400">
                  123 Wanderlust Way, Traveler's District, Adventure Land
                </span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone text-teal-500 mr-3"></i>
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope text-teal-500 mr-3"></i>
                <span className="text-gray-400">hello@wanderlust.travel</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-clock text-teal-500 mr-3"></i>
                <span className="text-gray-400">Monday-Friday: 9am - 6pm</span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-800 mb-8" />
        
        <div className="flex justify-center items-center">
        <p className="text-gray-500 text-sm text-center">
          &copy; 2025 Wanderlust Travel. All rights reserved.
        </p>
      </div>
     </div>
    </footer>
  );
};

export default Footer;