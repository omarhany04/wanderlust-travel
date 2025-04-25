import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Button from '../components/common/Button';
import Newsletter from '../components/sections/Newsletter';
import destinationsData from '../data/destinationsData';

const DestinationDetail = () => {
  const { destinationName } = useParams();
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the destination that matches the URL parameter
    const foundDestination = destinationsData.find(
      dest => dest.name === destinationName
    );
    
    if (foundDestination) {
      setDestination(foundDestination);
    }
    
    setLoading(false);
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [destinationName]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-600"></div>
      </div>
    );
  }

  if (!destination) {
    return (
      <div className="min-h-screen py-24 px-4 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Destination Not Found</h1>
        <p className="text-gray-600 mb-8">Sorry, we couldn't find the destination you're looking for.</p>
        <Link to="/destinations">
          <Button variant="primary">View All Destinations</Button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <div 
        className="relative h-[50vh] md:h-[60vh] bg-cover bg-center" 
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${destination.image})` }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-2">{destination.location}</h1>
            <div className="flex items-center justify-center mb-4">
              <div className="text-yellow-400 flex">
                {[...Array(Math.floor(destination.rating))].map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
                {destination.rating % 1 !== 0 && <i className="fas fa-star-half-alt"></i>}
              </div>
              <span className="ml-2 text-white">
                {destination.rating} ({destination.reviews} reviews)
              </span>
            </div>
            <p className="text-xl md:text-2xl">{destination.description}</p>
          </div>
        </div>
      </div>

      {/* Quick Info Section */}
      <div className="bg-teal-600 text-white py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="flex items-center">
              <i className="fas fa-calendar-alt text-2xl mr-3"></i>
              <div>
                <div className="text-sm">Duration</div>
                <div className="font-bold">{destination.duration} Days</div>
              </div>
            </div>
            <div className="flex items-center">
              <i className="fas fa-tag text-2xl mr-3"></i>
              <div>
                <div className="text-sm">Starting From</div>
                <div className="font-bold">${destination.price}</div>
              </div>
            </div>
            <div className="flex items-center">
              <i className="fas fa-users text-2xl mr-3"></i>
              <div>
                <div className="text-sm">Group Size</div>
                <div className="font-bold">Max 12 People</div>
              </div>
            </div>
            <div className="flex items-center">
              <i className="fas fa-map-marker-alt text-2xl mr-3"></i>
              <div>
                <div className="text-sm">Location</div>
                <div className="font-bold">{destination.location}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-12 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">About {destination.location}</h2>
            <div className="prose prose-lg max-w-none mb-8">
              {destination.longDescription.split('\n').map((paragraph, idx) => (
                <p key={idx} className="text-gray-600 mb-4">{paragraph.trim()}</p>
              ))}
            </div>

            {/* Highlights Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Highlights</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-3">
                  {destination.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start">
                      <i className="fas fa-check-circle text-teal-600 mt-1 mr-3"></i>
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Activities Section */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Activities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {destination.activities.map((activity, idx) => (
                  <div key={idx} className="bg-teal-50 p-4 rounded-lg flex items-center">
                    <i className="fas fa-hiking text-teal-600 mr-3"></i>
                    <span className="text-gray-700">{activity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Booking Card */}
          <div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden sticky top-24">
              <div className="bg-teal-600 text-white p-6">
                <h3 className="text-xl font-bold mb-2">Book This Trip</h3>
                <p className="text-teal-100">Secure your spot today!</p>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Price:</span>
                    <span className="font-bold text-gray-800">${destination.price} per person</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-bold text-gray-800">{destination.duration} days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Next Departure:</span>
                    <span className="font-bold text-gray-800">June 15, 2025</span>
                  </div>
                </div>
                
                <Button variant="primary" fullWidth={true} size="large">
                  Reserve Now
                </Button>
                
                <div className="mt-4 text-center text-gray-500 text-sm">
                  No payment required to reserve
                </div>
                
                <div className="mt-6 flex items-center text-gray-600 justify-center">
                  <i className="fas fa-calendar-check mr-2"></i>
                  <span>Free cancellation up to 30 days before departure</span>
                </div>
              </div>
              
              <div className="border-t p-6">
                <h4 className="font-bold text-gray-800 mb-3">Have Questions?</h4>
                <p className="text-gray-600 mb-4">
                  Our travel experts are ready to help you plan your dream trip.
                </p>
                <div className="flex items-center">
                  <i className="fas fa-phone-alt bg-teal-100 text-teal-600 p-3 rounded-full mr-4"></i>
                  <div>
                    <div className="text-sm text-gray-500">Call us at</div>
                    <div className="font-bold text-gray-800">+1 (555) 123-4567</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Newsletter />
    </div>
  );
};

export default DestinationDetail;