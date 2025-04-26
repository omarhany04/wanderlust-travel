import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DestinationCard from '../common/DestinationCard';
import Button from '../common/Button';
import destinationsData from '../../data/destinationsData';

const Destinations = ({ searchQuery = '' }) => {
  const [viewAll, setViewAll] = useState(false);

  // Filter destinations based on search query
  const filteredDestinations = destinationsData.filter(destination => 
    destination.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    destination.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    searchQuery === ''
  );

  // Animation on scroll
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.scale-up');
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
          element.classList.add('slide-in');
        }
      });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);
    
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
      window.removeEventListener('load', animateOnScroll);
    };
  }, []);

  const handleViewAll = () => {
    setViewAll(true);
  };

  return (
    <section id="destinations" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Destinations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our handpicked selection of stunning locations from around the world
          </p>
          {searchQuery && (
            <div className="mt-4 text-teal-600 font-medium">
              {filteredDestinations.length > 0 ? (
                `Showing ${filteredDestinations.length} ${filteredDestinations.length === 1 ? 'result' : 'results'} for "${searchQuery}"`
              ) : (
                `No destinations found for "${searchQuery}"`
              )}
            </div>
          )}
        </div>
        
        {filteredDestinations.length === 0 && searchQuery ? (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">No matching destinations found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search terms or browse our popular destinations below.
            </p>
            <Link to="/search">
              <Button variant="primary">Explore All Experiences</Button>
            </Link>
          </div>
        ) : (
          <>
            <div id="destination-list" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDestinations.map(destination => (
                <DestinationCard
                  key={destination.id}
                  name={destination.name}
                  location={destination.location}
                  price={destination.price}
                  rating={destination.rating}
                  reviews={destination.reviews}
                  duration={destination.duration}
                  description={destination.description}
                  image={destination.image}
                  isHidden={destination.initiallyHidden && !viewAll && !searchQuery}
                />
              ))}
            </div>
            
            {!viewAll && !searchQuery && filteredDestinations.some(d => d.initiallyHidden) && (
              <div className="text-center mt-12">
                <button
                  onClick={handleViewAll}
                  className="border-2 border-teal-600 text-teal-600 px-8 py-3 rounded-full hover:bg-teal-50 transition font-medium"
                >
                  View All Destinations
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default Destinations;