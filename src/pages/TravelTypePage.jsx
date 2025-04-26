import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Button from '../components/common/Button';
import Newsletter from '../components/sections/Newsletter';
import travelTypesData from '../data/travelTypesData';
import ReservationModal from '../components/common/ReservationModal';

const TravelTypePage = () => {
  const { travelTypeSlug } = useParams();
  const [travelType, setTravelType] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState(null);

  useEffect(() => {
    // Find the travel type that matches the URL parameter
    const foundTravelType = travelTypesData.find(
      type => type.slug === travelTypeSlug
    );
    
    if (foundTravelType) {
      setTravelType(foundTravelType);
    }
    
    setLoading(false);
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [travelTypeSlug]);

  const openModal = (destination) => {
    setSelectedDestination(destination);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-600"></div>
      </div>
    );
  }

  if (!travelType) {
    return (
      <div className="min-h-screen py-24 px-4 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Travel Type Not Found</h1>
        <p className="text-gray-600 mb-8">Sorry, we couldn't find the travel experience you're looking for.</p>
        <Link to="/">
          <Button variant="primary">Return Home</Button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <div 
        className="relative h-[60vh] bg-cover bg-center" 
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${travelType.heroImage})` }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{travelType.title}</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">{travelType.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="max-w-7xl mx-auto py-16 px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            {travelType.description}
          </h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto"></div>
        </div>

        <div className="prose prose-lg max-w-4xl mx-auto">
          {travelType.longDescription.split('\n').map((paragraph, idx) => (
            <p key={idx} className="text-gray-600 mb-6">{paragraph.trim()}</p>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">What We Offer</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {travelType.features.map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-check text-2xl text-teal-600"></i>
                </div>
                <p className="text-gray-700 font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Destinations Section */}
      <div className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Featured Experiences</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {travelType.featuredDestinations.map((destination, idx) => (
            <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-lg scale-up">
              <div className="relative h-64">
                <img 
                  src={destination.image} 
                  alt={destination.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-bold">{destination.name}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{destination.description}</p>
                <div className="flex justify-between items-center">
                  <Link 
                    to={`/travel-type/${travelTypeSlug}/experience/${destination.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} 
                    className="text-teal-600 font-medium flex items-center"
                  >
                    Learn More <i className="fas fa-arrow-right ml-2"></i>
                  </Link>
                  <button
                    onClick={() => openModal(destination)}
                    className="bg-teal-600 text-white px-4 py-2 rounded-full hover:bg-teal-700 transition"
                  >
                    Reserve
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reservation Modal */}
      {selectedDestination && (
        <ReservationModal
          isOpen={modalOpen}
          onClose={closeModal}
          destinationName={selectedDestination.name}
          price={selectedDestination.price || '1,999'}
          duration={selectedDestination.duration || 7}
          departureDate="June 15, 2025"
        />
      )}

      <Newsletter />
    </div>
  );
};

export default TravelTypePage;