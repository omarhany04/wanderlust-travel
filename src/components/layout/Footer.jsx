import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-6 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Wanderlust</h3>
            <p className="text-gray-400 mb-6">
              Making travel dreams come true since 2015. Your journey is our passion.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-teal-600 w-10 h-10 rounded-full flex items-center justify-center transition">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="bg-gray-800 hover:bg-teal-600 w-10 h-10 rounded-full flex items-center justify-center transition">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="bg-gray-800 hover:bg-teal-600 w-10 h-10 rounded-full flex items-center justify-center transition">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="bg-gray-800 hover:bg-teal-600 w-10 h-10 rounded-full flex items-center justify-center transition">
                <i className="fab fa-pinterest"></i>
              </a>
            </div>
          </div>
          
          {/* Destinations */}
          <div>
            <h4 className="text-lg font-bold mb-6">Destinations</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/destinations" className="text-gray-400 hover:text-white transition">
                  Bali, Indonesia
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="text-gray-400 hover:text-white transition">
                  Santorini, Greece
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="text-gray-400 hover:text-white transition">
                  Kyoto, Japan
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="text-gray-400 hover:text-white transition">
                  Amalfi Coast, Italy
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="text-gray-400 hover:text-white transition">
                  Machu Picchu, Peru
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Travel Types */}
          <div>
            <h4 className="text-lg font-bold mb-6">Travel Types</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/destinations" className="text-gray-400 hover:text-white transition">
                  Luxury Escapes
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="text-gray-400 hover:text-white transition">
                  Adventure Travel
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="text-gray-400 hover:text-white transition">
                  Beach Getaways
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="text-gray-400 hover:text-white transition">
                  Cultural Experiences
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="text-gray-400 hover:text-white transition">
                  Honeymoon Packages
                </Link>
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
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; 2025 Wanderlust Travel. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/privacy" className="text-gray-500 text-sm hover:text-white transition">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-500 text-sm hover:text-white transition">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-gray-500 text-sm hover:text-white transition">
              Cookie Policy
            </Link>
            <Link to="/sitemap" className="text-gray-500 text-sm hover:text-white transition">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;