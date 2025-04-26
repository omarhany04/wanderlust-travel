import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import Newsletter from '../components/sections/Newsletter';
import ReservationModal from '../components/common/ReservationModal';

const IslandHoppingTourPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('description');

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      {/* Hero Section */}
      <div 
        className="relative h-[60vh] bg-cover bg-center" 
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://i.ibb.co/27W9H1Z9/Private-Island.jpg')` }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <span className="inline-block bg-teal-100 text-teal-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Featured Experience
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Private Island Hopping Tour</h1>
            <div className="flex items-center justify-center mb-4">
              <div className="text-yellow-400 flex">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <span className="ml-2 text-white">
                5.0 (89 reviews)
              </span>
            </div>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Explore hidden islands in the crystal-clear waters of the Andaman Sea
            </p>
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
                <div className="font-bold">Full Day</div>
              </div>
            </div>
            <div className="flex items-center">
              <i className="fas fa-tag text-2xl mr-3"></i>
              <div>
                <div className="text-sm">Price</div>
                <div className="font-bold">$299 per person</div>
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
                <div className="text-sm">Location</div>
                <div className="font-bold">Andaman Sea, Thailand</div>
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
            {/* Tabs */}
            <div className="border-b border-gray-200 mb-8">
              <nav className="flex space-x-8">
                <button
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'description'
                      ? 'border-teal-600 text-teal-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                  onClick={() => setActiveTab('description')}
                >
                  Description
                </button>
                <button
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'itinerary'
                      ? 'border-teal-600 text-teal-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                  onClick={() => setActiveTab('itinerary')}
                >
                  Itinerary
                </button>
                <button
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'gallery'
                      ? 'border-teal-600 text-teal-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                  onClick={() => setActiveTab('gallery')}
                >
                  Gallery
                </button>
                <button
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'reviews'
                      ? 'border-teal-600 text-teal-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                  onClick={() => setActiveTab('reviews')}
                >
                  Reviews
                </button>
              </nav>
            </div>

            {/* Description Tab Content */}
            {activeTab === 'description' && (
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">About This Tour</h2>
                <div className="prose prose-lg max-w-none mb-8">
                  <p className="text-gray-600 mb-4">
                    Embark on an exclusive island-hopping adventure in the crystal-clear waters of 
                    the Andaman Sea. This private tour takes you to hidden gems away from the tourist 
                    crowds, with opportunities for swimming, snorkeling, and relaxing on pristine beaches.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Escape the ordinary and explore Thailand's most stunning islands with our expertly guided 
                    private tour. Your day begins as you board your private speedboat, where your experienced 
                    captain will navigate you through the emerald waters of the Andaman Sea.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Throughout the day, you'll discover secluded coves and hidden lagoons that remain untouched 
                    by mass tourism. Dive into vibrant coral reefs teeming with exotic marine life, where schools 
                    of colorful fish dance around you as you explore this underwater paradise with our professional 
                    snorkeling equipment.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Midday brings a gourmet picnic lunch served on a secluded beach. Savor fresh, local delicacies 
                    as the gentle waves provide a soothing soundtrack to your meal. After lunch, explore hidden caves 
                    and secret beaches accessible only by boat, or simply relax and soak up the tropical sun.
                  </p>
                  <p className="text-gray-600 mb-4">
                    As the day draws to a close, we'll find the perfect spot to witness the spectacular sunset. 
                    Enjoy handcrafted cocktails as the sky transforms into a canvas of red, orange, and purple hues. 
                    Our guide will capture these magical moments, providing you with professional photos to remember 
                    your journey.
                  </p>
                </div>

                {/* Highlights Section */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Tour Highlights</h3>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-teal-600 mt-1 mr-3"></i>
                        <span className="text-gray-700">Exclusive private speedboat with experienced captain and guide</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-teal-600 mt-1 mr-3"></i>
                        <span className="text-gray-700">Visit to 4-5 stunning islands and hidden coves</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-teal-600 mt-1 mr-3"></i>
                        <span className="text-gray-700">Snorkeling at premier reef locations with vibrant marine life</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-teal-600 mt-1 mr-3"></i>
                        <span className="text-gray-700">Gourmet lunch and refreshments throughout the day</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-teal-600 mt-1 mr-3"></i>
                        <span className="text-gray-700">Sunset cocktail experience with professional photography</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* What's Included Section */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">What's Included</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-teal-50 p-4 rounded-lg flex items-center">
                      <i className="fas fa-check text-teal-600 mr-3"></i>
                      <span className="text-gray-700">Private speedboat and crew</span>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg flex items-center">
                      <i className="fas fa-check text-teal-600 mr-3"></i>
                      <span className="text-gray-700">English-speaking guide</span>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg flex items-center">
                      <i className="fas fa-check text-teal-600 mr-3"></i>
                      <span className="text-gray-700">Gourmet lunch and snacks</span>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg flex items-center">
                      <i className="fas fa-check text-teal-600 mr-3"></i>
                      <span className="text-gray-700">Soft drinks and water</span>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg flex items-center">
                      <i className="fas fa-check text-teal-600 mr-3"></i>
                      <span className="text-gray-700">Snorkeling equipment</span>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg flex items-center">
                      <i className="fas fa-check text-teal-600 mr-3"></i>
                      <span className="text-gray-700">Sunset cocktails</span>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg flex items-center">
                      <i className="fas fa-check text-teal-600 mr-3"></i>
                      <span className="text-gray-700">Professional photographs</span>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg flex items-center">
                      <i className="fas fa-check text-teal-600 mr-3"></i>
                      <span className="text-gray-700">Hotel pickup and drop-off</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Itinerary Tab Content */}
            {activeTab === 'itinerary' && (
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Tour Itinerary</h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-teal-600 pl-4 py-2">
                    <h4 className="text-xl font-bold text-gray-800">08:00 AM - Hotel Pickup</h4>
                    <p className="text-gray-600 mt-2">
                      Your adventure begins with a comfortable pickup from your hotel. Meet your friendly guide who will brief you on the day's exciting itinerary.
                    </p>
                  </div>
                  <div className="border-l-4 border-teal-600 pl-4 py-2">
                    <h4 className="text-xl font-bold text-gray-800">09:00 AM - Departure by Private Speedboat</h4>
                    <p className="text-gray-600 mt-2">
                      Board your exclusive speedboat at the marina. After a safety briefing, set off into the azure waters of the Andaman Sea with your experienced captain.
                    </p>
                  </div>
                  <div className="border-l-4 border-teal-600 pl-4 py-2">
                    <h4 className="text-xl font-bold text-gray-800">09:45 AM - First Island Stop</h4>
                    <p className="text-gray-600 mt-2">
                      Arrive at a secluded island known for its pristine beach and crystal-clear waters. Enjoy swimming and relaxing in this paradise away from the crowds.
                    </p>
                  </div>
                  <div className="border-l-4 border-teal-600 pl-4 py-2">
                    <h4 className="text-xl font-bold text-gray-800">11:00 AM - Snorkeling Adventure</h4>
                    <p className="text-gray-600 mt-2">
                      Visit a vibrant coral reef teeming with tropical fish and marine life. Your guide will lead you to the best spots with professional snorkeling equipment provided.
                    </p>
                  </div>
                  <div className="border-l-4 border-teal-600 pl-4 py-2">
                    <h4 className="text-xl font-bold text-gray-800">12:30 PM - Gourmet Beach Lunch</h4>
                    <p className="text-gray-600 mt-2">
                      Enjoy a delicious gourmet picnic lunch prepared with fresh local ingredients, served on a secluded beach with stunning views. Relax in the shade as your crew sets up a comfortable dining area.
                    </p>
                  </div>
                  <div className="border-l-4 border-teal-600 pl-4 py-2">
                    <h4 className="text-xl font-bold text-gray-800">02:00 PM - Hidden Lagoon Exploration</h4>
                    <p className="text-gray-600 mt-2">
                      Discover a secret lagoon accessible only by boat. Marvel at the towering limestone cliffs and take Instagram-worthy photos in this natural wonder.
                    </p>
                  </div>
                  <div className="border-l-4 border-teal-600 pl-4 py-2">
                    <h4 className="text-xl font-bold text-gray-800">03:30 PM - Island Hopping</h4>
                    <p className="text-gray-600 mt-2">
                      Visit two more stunning islands, each with its own unique character and beauty. Take time to swim, explore, or simply relax on the white sandy beaches.
                    </p>
                  </div>
                  <div className="border-l-4 border-teal-600 pl-4 py-2">
                    <h4 className="text-xl font-bold text-gray-800">05:30 PM - Sunset Cocktails</h4>
                    <p className="text-gray-600 mt-2">
                      End your day with a magical sunset experience. Enjoy handcrafted cocktails while watching the sun dip below the horizon, painting the sky in spectacular colors. Your guide will capture these special moments with professional photography.
                    </p>
                  </div>
                  <div className="border-l-4 border-teal-600 pl-4 py-2">
                    <h4 className="text-xl font-bold text-gray-800">07:00 PM - Return & Hotel Drop-off</h4>
                    <p className="text-gray-600 mt-2">
                      Return to the marina as dusk settles over the Andaman Sea. Your driver will transfer you back to your hotel with memories to last a lifetime.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Gallery Tab Content */}
            {activeTab === 'gallery' && (
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Tour Gallery</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="rounded-lg overflow-hidden shadow-md h-64">
                    <img 
                      src="https://i.ibb.co/27W9H1Z9/Private-Island.jpg" 
                      alt="Tropical island with turquoise water" 
                      className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-md h-64">
                    <img 
                      src="https://i.ibb.co/dKk4R5s/snorkeling.jpg" 
                      alt="Snorkeling in coral reef" 
                      className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-md h-64">
                    <img 
                      src="https://i.ibb.co/3WKcpZy/beach-lunch.jpg" 
                      alt="Beach picnic setup" 
                      className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-md h-64">
                    <img 
                      src="https://i.ibb.co/9TLj9Bx/hidden-lagoon.jpg" 
                      alt="Hidden lagoon with limestone cliffs" 
                      className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-md h-64">
                    <img 
                      src="https://i.ibb.co/Ldk2YPj/speedboat.jpg" 
                      alt="Luxury speedboat" 
                      className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-md h-64">
                    <img 
                      src="https://i.ibb.co/3Y2jnR9/sunset.jpg" 
                      alt="Sunset over the ocean" 
                      className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Reviews Tab Content */}
            {activeTab === 'reviews' && (
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Guest Reviews</h2>
                <div className="flex items-center mb-8">
                  <div className="text-yellow-400 text-4xl font-bold mr-4">5.0</div>
                  <div>
                    <div className="flex text-yellow-400 mb-1">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <div className="text-gray-600">Based on 89 reviews</div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                        <span className="text-gray-700 font-bold">JD</span>
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-800">James Davidson</h5>
                        <div className="text-gray-600 text-sm">April 2025</div>
                      </div>
                      <div className="ml-auto text-yellow-400">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                    <p className="text-gray-700">
                      This was the highlight of our Thailand trip! Our guide Chai was knowledgeable and fun, and took us to stunning islands away from the tourist crowds. The private speedboat made the journey comfortable, and the lunch on a secluded beach was amazing. Snorkeling in crystal clear water with colorful fish all around was a magical experience. Highly recommend!
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                        <span className="text-gray-700 font-bold">ML</span>
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-800">Maria Lopez</h5>
                        <div className="text-gray-600 text-sm">March 2025</div>
                      </div>
                      <div className="ml-auto text-yellow-400">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                    <p className="text-gray-700">
                      Worth every penny! The private tour meant we could avoid the crowds and really enjoy each location. The hidden lagoon was breathtaking, and the sunset cocktails were a perfect end to the day. Our captain knew exactly where to take us for the best experiences, and the photos they took for us are stunning. A truly unforgettable experience!
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                        <span className="text-gray-700 font-bold">RK</span>
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-800">Rob & Kate Williams</h5>
                        <div className="text-gray-600 text-sm">February 2025</div>
                      </div>
                      <div className="ml-auto text-yellow-400">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                    <p className="text-gray-700">
                      We booked this for our honeymoon and it exceeded all expectations! From the moment we were picked up at our hotel to the final drop-off, everything was perfect. The islands were like something from a movie, the snorkeling was incredible, and the gourmet lunch on the beach was so romantic. The sunset cocktails were a beautiful touch, and we'll treasure the photos forever. Would do it again in a heartbeat!
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                        <span className="text-gray-700 font-bold">AT</span>
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-800">Alex Thompson</h5>
                        <div className="text-gray-600 text-sm">January 2025</div>
                      </div>
                      <div className="ml-auto text-yellow-400">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                    <p className="text-gray-700">
                      An absolute 10/10 experience! Having our own boat made all the difference - we could stay longer at places we loved and move on when we wanted to. The crew was professional and friendly, the food was delicious, and the snorkeling spots were teeming with fish. The hidden lagoon was like something from a dream. If you're considering this tour, just book it - you won't regret it!
                    </p>
                  </div>

                  <div className="text-center">
                    <Button variant="outline">Load More Reviews</Button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Booking Card */}
          <div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden sticky top-24">
              <div className="bg-teal-600 text-white p-6">
                <h3 className="text-xl font-bold mb-2">Book This Tour</h3>
                <p className="text-teal-100">Secure your spot today!</p>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Price:</span>
                    <span className="font-bold text-gray-800">$299 per person</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-bold text-gray-800">Full Day</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Next Available:</span>
                    <span className="font-bold text-gray-800">Tomorrow</span>
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
                  <span>Free cancellation up to 48 hours before</span>
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
        destinationName="Private Island Hopping Tour"
        price="299"
        duration="1"
        departureDate="Available Daily"
      />
      
      <Newsletter />
    </div>
  );
};

export default IslandHoppingTourPage;