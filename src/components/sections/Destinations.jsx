import React, { useState, useEffect } from 'react';
import DestinationCard from '../common/DestinationCard';

// Destination data
const destinationsData = [
  {
    id: 1,
    name: 'bali',
    location: 'Bali, Indonesia',
    price: '1,299',
    rating: 4.8,
    reviews: 243,
    duration: 7,
    description: 'Experience the magic of Bali with its stunning beaches, lush rice terraces, and vibrant cultural heritage.',
    image: 'https://i.ibb.co/xrkmDBQ/Bali1.jpg',
  },
  {
    id: 2,
    name: 'santorini',
    location: 'Santorini, Greece',
    price: '1,599',
    rating: 4.9,
    reviews: 187,
    duration: 6,
    description: 'Discover the iconic white-washed buildings, blue domes, and breathtaking sunsets of Santorini.',
    image: 'https://i.ibb.co/7x2XSpfw/Santorini.jpg',
  },
  {
    id: 3,
    name: 'kyoto',
    location: 'Kyoto, Japan',
    price: '1,899',
    rating: 4.7,
    reviews: 215,
    duration: 9,
    description: 'Immerse yourself in Japanese culture with traditional temples, serene gardens, and historic districts.',
    image: 'https://i.ibb.co/6cctdpSH/Kyoto.jpg',
  },
  {
    id: 4,
    name: 'amalfi',
    location: 'Amalfi Coast, Italy',
    price: '1,499',
    rating: 4.6,
    reviews: 178,
    duration: 8,
    description: "Stunning cliffs, pastel villages, and the sparkling sea await you on Italy's most romantic coastline.",
    image: 'https://i.ibb.co/CK8DybZr/Amalfi-Coast.jpg',
    initiallyHidden: true,
  },
  {
    id: 5,
    name: 'machu',
    location: 'Machu Picchu, Peru',
    price: '2,199',
    rating: 5.0,
    reviews: 94,
    duration: 10,
    description: 'Journey through the Andes to the Lost City of the Incas with our guided, unforgettable adventure.',
    image: 'https://i.ibb.co/S46DGWWp/Machu-Picchu.jpg',
    initiallyHidden: true,
  },
];

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