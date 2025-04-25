import React, { useState, useEffect } from 'react';
import DestinationCard from '../common/DestinationCard';
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
        </div>
        
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
              isHidden={destination.initiallyHidden && !viewAll}
            />
          ))}
        </div>
        
        {!viewAll && (
          <div className="text-center mt-12">
            <button
              onClick={handleViewAll}
              className="border-2 border-teal-600 text-teal-600 px-8 py-3 rounded-full hover:bg-teal-50 transition font-medium"
            >
              View All Destinations
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Destinations;