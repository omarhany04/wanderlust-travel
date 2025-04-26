import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

const Featured = () => {
  return (
    <section id="featured" className="py-20 px-4 bg-teal-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Featured Experiences</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Unforgettable adventures and exclusive experiences to make your trip special
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Featured image */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img 
              src="https://i.ibb.co/27W9H1Z9/Private-Island.jpg" 
              alt="Private Island Hopping Tour" 
              className="w-full object-cover"
            />
          </div>
          
          {/* Featured content */}
          <div className="p-6">
          <div className="flex items-center justify-center mb-4">
                  <span className="inline-block bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
                    🌴 Exclusive Experience
                  </span>
                </div>
            <h3 className="text-2xl font-bold text-gray-800 mt-4 mb-2">
              Private Island Hopping Tour
            </h3>
            <div className="flex items-center mb-4">
              <div className="text-yellow-400 flex">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <span className="ml-1 text-gray-600 text-sm">5.0 (89 reviews)</span>
            </div>
            <p className="text-gray-600 mb-6">
              Embark on an exclusive island-hopping adventure in the crystal-clear waters of 
              the Andaman Sea. This private tour takes you to hidden gems away from the tourist 
              crowds, with opportunities for swimming, snorkeling, and relaxing on pristine beaches.
            </p>
            <ul className="mb-8">
              <li className="flex items-center mb-3">
                <i className="fas fa-check text-teal-600 mr-2"></i>
                <span className="text-gray-700">Private speedboat with experienced captain</span>
              </li>
              <li className="flex items-center mb-3">
                <i className="fas fa-check text-teal-600 mr-2"></i>
                <span className="text-gray-700">Gourmet lunch on a secluded beach</span>
              </li>
              <li className="flex items-center mb-3">
                <i className="fas fa-check text-teal-600 mr-2"></i>
                <span className="text-gray-700">Professional snorkeling equipment provided</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-teal-600 mr-2"></i>
                <span className="text-gray-700">Sunset cocktails and photos</span>
              </li>
            </ul>
            <div className="flex items-center justify-between">
              <div>
                <span className="text-3xl font-bold text-gray-800">$299</span>
                <span className="text-gray-600"> / person</span>
              </div>
              <Link to="/experiences/island-hopping-tour">
                <Button variant="primary">
                  View Details
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;