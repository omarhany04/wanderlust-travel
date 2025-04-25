import React from 'react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section className="hero-section flex items-center justify-center">
      <div className="text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Explore The World</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Discover breathtaking destinations and create unforgettable memories
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link
            to="search-bar-section"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            <button className="bg-teal-600 text-white px-8 py-3 rounded-full hover:bg-teal-700 transition text-lg font-medium w-full md:w-auto">
              Find Your Trip
            </button>
          </Link>
          <Link
            to="footer"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            <button className="bg-white text-teal-600 px-8 py-3 rounded-full hover:bg-gray-100 transition text-lg font-medium w-full md:w-auto">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;