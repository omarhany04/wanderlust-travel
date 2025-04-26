import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Button from '../components/common/Button';
import Newsletter from '../components/sections/Newsletter';
import travelTypesData from '../data/travelTypesData';
import ReservationModal from '../components/common/ReservationModal';

const TravelExperienceDetail = () => {
  const { travelTypeSlug, experienceName } = useParams();
  const navigate = useNavigate();
  const [travelType, setTravelType] = useState(null);
  const [experience, setExperience] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    // Find the travel type that matches the URL parameter
    const foundTravelType = travelTypesData.find(
      type => type.slug === travelTypeSlug
    );
    
    if (foundTravelType) {
      setTravelType(foundTravelType);
      
      // Find the matching experience
      const foundExperience = foundTravelType.featuredDestinations.find(
        exp => exp.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') === experienceName
      );
      
      if (foundExperience) {
        setExperience(foundExperience);
      }
    }
    
    setLoading(false);
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [travelTypeSlug, experienceName]);

  const openModal = () => {
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

  if (!travelType || !experience) {
    return (
      <div className="min-h-screen py-24 px-4 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Experience Not Found</h1>
        <p className="text-gray-600 mb-8">Sorry, we couldn't find the experience you're looking for.</p>
        <Link to={`/travel-type/${travelTypeSlug}`}>
          <Button variant="primary">Back to {travelTypeSlug.replace('-', ' ')}</Button>
        </Link>
      </div>
    );
  }

  // Mock data for this experience (in a real application, this would come from the API)
  const experienceDetails = {
    highlights: [
      'Experience the breathtaking natural beauty of the region',
      'Enjoy personalized service and expert local guides',
      'Indulge in authentic regional cuisine and cultural experiences',
      'Stay in carefully selected accommodations that reflect local character',
      'Create lasting memories with thoughtfully curated activities'
    ],
    includes: [
      'Luxury accommodations for the duration of your stay',
      'Daily breakfast and select dining experiences',
      'Private transportation throughout your journey',
      'Expert guides for all activities and excursions',
      'All entrance fees to attractions and experiences'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Welcome',
        description: 'Upon arrival, you will be greeted by your personal concierge and transferred to your accommodation. Enjoy a welcome dinner and briefing about your upcoming adventure.'
      },
      {
        day: 2,
        title: 'Immersive Local Experience',
        description: 'After breakfast, embark on a guided tour of the local highlights. Experience authentic culture with special access to locations not available to regular tourists.'
      },
      {
        day: 3,
        title: 'Natural Wonders Exploration',
        description: 'Today is dedicated to exploring the natural beauty of the region. Hike through breathtaking landscapes and enjoy a picnic lunch in a scenic location.'
      },
      {
        day: 4,
        title: 'Relaxation & Culinary Delights',
        description: 'Enjoy a day of relaxation and culinary experiences. Learn about local cooking traditions and enjoy a special dinner prepared by renowned local chefs.'
      },
      {
        day: 5,
        title: 'Farewell & Departure',
        description: 'After a leisurely breakfast, enjoy some free time for last-minute shopping or exploration. Private transfer to the airport for your departure.'
      }
    ],
    price: '2,499',
    duration: 5
  };

  return (
    <div>
      {/* Hero Section */}
      <div 
        className="relative h-[50vh] md:h-[60vh] bg-cover bg-center" 
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${experience.image})` }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <span className="inline-block bg-teal-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
              {travelType.title}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{experience.name}</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">{experience.description}</p>
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
                <div className="font-bold">{experienceDetails.duration} Days</div>
              </div>
            </div>
            <div className="flex items-center">
              <i className="fas fa-tag text-2xl mr-3"></i>
              <div>
                <div className="text-sm">Starting From</div>
                <div className="font-bold">${experienceDetails.price}</div>
              </div>
            </div>
            <div className="flex items-center">
              <i className="fas fa-users text-2xl mr-3"></i>
              <div>
                <div className="text-sm">Group Size</div>
                <div className="font-bold">Max 8 People</div>
              </div>
            </div>
            <div className="flex items-center">
              <i className="fas fa-map-marker-alt text-2xl mr-3"></i>
              <div>
                <div className="text-sm">Type</div>
                <div className="font-bold">{travelType.title}</div>
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
            <h2 className="text-3xl font-bold text-gray-800 mb-6">About This Experience</h2>
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-gray-600 mb-4">
                {experience.description}
              </p>
              <p className="text-gray-600 mb-4">
                Immerse yourself in an unforgettable journey that combines luxury, authenticity, and meaningful experiences. 
                This carefully crafted itinerary takes you through the heart of {experience.name}, 
                revealing its hidden treasures and creating moments that will last a lifetime.
              </p>
              <p className="text-gray-600 mb-4">
                Our expert team has designed this experience to showcase the very best of what this 
                destination has to offer, while ensuring your comfort and providing unparalleled service throughout your journey.
              </p>
            </div>

            {/* Highlights Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Experience Highlights</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-3">
                  {experienceDetails.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start">
                      <i className="fas fa-check-circle text-teal-600 mt-1 mr-3"></i>
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Itinerary Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Itinerary</h3>
              <div className="space-y-6">
                {experienceDetails.itinerary.map((day, idx) => (
                  <div key={idx} className="border-l-4 border-teal-600 pl-4 py-2">
                    <h4 className="text-xl font-bold text-gray-800">Day {day.day}: {day.title}</h4>
                    <p className="text-gray-600 mt-2">{day.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Includes Section */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">What's Included</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {experienceDetails.includes.map((item, idx) => (
                  <div key={idx} className="bg-teal-50 p-4 rounded-lg flex items-center">
                    <i className="fas fa-check text-teal-600 mr-3"></i>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Booking Card */}
          <div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden sticky top-24">
              <div className="bg-teal-600 text-white p-6">
                <h3 className="text-xl font-bold mb-2">Book This Experience</h3>
                <p className="text-teal-100">Secure your spot today!</p>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Price:</span>
                    <span className="font-bold text-gray-800">${experienceDetails.price} per person</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-bold text-gray-800">{experienceDetails.duration} days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Next Departure:</span>
                    <span className="font-bold text-gray-800">June 15, 2025</span>
                  </div>
                </div>
                
                <Button 
                  variant="primary" 
                  fullWidth={true} 
                  size="large"
                  onClick={openModal}
                >
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
      
      {/* Reservation Modal */}
      <ReservationModal 
        isOpen={modalOpen}
        onClose={closeModal}
        destinationName={experience.name}
        price={experienceDetails.price}
        duration={experienceDetails.duration}
        departureDate="June 15, 2025"
      />
      
      <Newsletter />
    </div>
  );
};

export default TravelExperienceDetail;