import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import Newsletter from '../components/sections/Newsletter';
import ReservationModal from '../components/common/ReservationModal';

const LuxuryCruiseJourneyPage = () => {
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
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://i.ibb.co/WRX4LFv/Luxury-Cruises-Banner.jpg')` }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <span className="inline-block bg-teal-100 text-teal-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Premium Experience
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Luxury Cruise Journey</h1>
            <div className="flex items-center justify-center mb-4">
              <div className="text-yellow-400 flex">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <span className="ml-2 text-white">
                4.8 (64 reviews)
              </span>
            </div>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Embark on a breathtaking luxury cruise featuring world-class amenities and exotic destinations
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
                <div className="font-bold">7 Days</div>
              </div>
            </div>
            <div className="flex items-center">
              <i className="fas fa-tag text-2xl mr-3"></i>
              <div>
                <div className="text-sm">Price</div>
                <div className="font-bold">$499 per person</div>
              </div>
            </div>
            <div className="flex items-center">
              <i className="fas fa-users text-2xl mr-3"></i>
              <div>
                <div className="text-sm">Group Size</div>
                <div className="font-bold">Limited Capacity</div>
              </div>
            </div>
            <div className="flex items-center">
              <i className="fas fa-map-marker-alt text-2xl mr-3"></i>
              <div>
                <div className="text-sm">Location</div>
                <div className="font-bold">Southeast Asia Waters</div>
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
                <h2 className="text-3xl font-bold text-gray-800 mb-6">About This Cruise</h2>
                <div className="prose prose-lg max-w-none mb-8">
                  <p className="text-gray-600 mb-4">
                    Embark on a journey of unparalleled luxury and adventure with our exclusive 7-day luxury cruise through the spectacular waters of Southeast Asia. This isn't just a cruise; it's a floating luxury resort experience that brings together exceptional cuisine, world-class entertainment, and unforgettable destinations.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Our state-of-the-art cruise ship features spacious suites with private balconies, allowing you to enjoy breathtaking ocean views in complete privacy. The vessel has been meticulously designed to provide an atmosphere of refined elegance while ensuring maximum comfort and convenience for our guests.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Throughout your journey, you'll enjoy gourmet dining experiences created by our team of international chefs, featuring both local specialties and global cuisine. From intimate chef's table experiences to al fresco dining under the stars, every meal becomes a memorable event.
                  </p>
                  <p className="text-gray-600 mb-4">
                    When you're not exploring exotic ports of call, our ship offers endless entertainment and relaxation options. Unwind at the luxurious spa with treatments inspired by ancient healing traditions, lounge by the infinity pool overlooking the ocean, or participate in enriching activities like cooking classes and cultural presentations.
                  </p>
                  <p className="text-gray-600 mb-4">
                    As we navigate through emerald waters dotted with limestone karsts and pristine islands, you'll have opportunities to discover hidden beaches, vibrant underwater ecosystems, and charming coastal villages. Our expert excursion team ensures that each shore visit is perfectly executed, offering both guided tours and opportunities for independent exploration.
                  </p>
                </div>

                {/* Highlights Section */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Cruise Highlights</h3>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-teal-600 mt-1 mr-3"></i>
                        <span className="text-gray-700">Luxury accommodation in spacious suites with private balconies</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-teal-600 mt-1 mr-3"></i>
                        <span className="text-gray-700">Gourmet dining experiences with international and local cuisine</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-teal-600 mt-1 mr-3"></i>
                        <span className="text-gray-700">Exclusive access to secluded beaches and hidden coves</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-teal-600 mt-1 mr-3"></i>
                        <span className="text-gray-700">Daily activities including water sports, cultural presentations, and cooking classes</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-teal-600 mt-1 mr-3"></i>
                        <span className="text-gray-700">Premium spa services inspired by ancient healing traditions</span>
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
                      <span className="text-gray-700">Luxury suite accommodation</span>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg flex items-center">
                      <i className="fas fa-check text-teal-600 mr-3"></i>
                      <span className="text-gray-700">All meals and select beverages</span>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg flex items-center">
                      <i className="fas fa-check text-teal-600 mr-3"></i>
                      <span className="text-gray-700">Daily housekeeping service</span>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg flex items-center">
                      <i className="fas fa-check text-teal-600 mr-3"></i>
                      <span className="text-gray-700">Entertainment and daily activities</span>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg flex items-center">
                      <i className="fas fa-check text-teal-600 mr-3"></i>
                      <span className="text-gray-700">Wi-Fi throughout the ship</span>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg flex items-center">
                      <i className="fas fa-check text-teal-600 mr-3"></i>
                      <span className="text-gray-700">Port charges and taxes</span>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg flex items-center">
                      <i className="fas fa-check text-teal-600 mr-3"></i>
                      <span className="text-gray-700">24-hour room service</span>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg flex items-center">
                      <i className="fas fa-check text-teal-600 mr-3"></i>
                      <span className="text-gray-700">Access to fitness center and pools</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Itinerary Tab Content */}
            {activeTab === 'itinerary' && (
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Cruise Itinerary</h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-teal-600 pl-4 py-2">
                    <h4 className="text-xl font-bold text-gray-800">Day 1: Embarkation - Singapore</h4>
                    <p className="text-gray-600 mt-2">
                      Board our luxury vessel at Singapore's cruise terminal. After a champagne welcome and orientation, settle into your suite and explore the ship's facilities. Join fellow travelers for the Captain's welcome dinner as we set sail into the sunset.
                    </p>
                  </div>
                  <div className="border-l-4 border-teal-600 pl-4 py-2">
                    <h4 className="text-xl font-bold text-gray-800">Day 2: Cruising the Gulf of Thailand</h4>
                    <p className="text-gray-600 mt-2">
                      Enjoy a full day at sea to experience all the ship has to offer. Relax by the infinity pool, indulge in a spa treatment, or participate in cooking classes featuring Southeast Asian cuisine. The evening features a gala dinner with international entertainment.
                    </p>
                  </div>
                  <div className="border-l-4 border-teal-600 pl-4 py-2">
                    <h4 className="text-xl font-bold text-gray-800">Day 3: Ko Samui, Thailand</h4>
                    <p className="text-gray-600 mt-2">
                      Arrive at the tropical paradise of Ko Samui. Choose between a cultural tour of Buddhist temples and local villages or a beach day with water sports at a private beach club. Return to the ship for a themed Thai dinner under the stars.
                    </p>
                  </div>
                  <div className="border-l-4 border-teal-600 pl-4 py-2">
                    <h4 className="text-xl font-bold text-gray-800">Day 4: Phang Nga Bay, Thailand</h4>
                    <p className="text-gray-600 mt-2">
                      Cruise through the dramatic limestone karsts of Phang Nga Bay. Enjoy a day of exploration via private longboat, visiting hidden lagoons and caves. Experience a special lunch at a floating village before returning to the ship for an evening of live music and entertainment.
                    </p>
                  </div>
                  <div className="border-l-4 border-teal-600 pl-4 py-2">
                    <h4 className="text-xl font-bold text-gray-800">Day 5: Langkawi, Malaysia</h4>
                    <p className="text-gray-600 mt-2">
                      Discover the natural beauty of Langkawi island. Options include a cable car ride to the SkyBridge for panoramic views, a mangrove safari, or relaxation at a luxury beach resort. The evening features a Malaysian cultural performance and dinner.
                    </p>
                  </div>
                  <div className="border-l-4 border-teal-600 pl-4 py-2">
                    <h4 className="text-xl font-bold text-gray-800">Day 6: Penang, Malaysia</h4>
                    <p className="text-gray-600 mt-2">
                      Explore the UNESCO-listed Georgetown in Penang, known for its colonial architecture and vibrant street art. Enjoy a guided culinary tour of this food paradise, sampling local specialties. Return to the ship for a farewell dinner with the Captain.
                    </p>
                  </div>
                  <div className="border-l-4 border-teal-600 pl-4 py-2">
                    <h4 className="text-xl font-bold text-gray-800">Day 7: Disembarkation - Singapore</h4>
                    <p className="text-gray-600 mt-2">
                      Return to Singapore after a morning of cruising. Enjoy a final breakfast on board before disembarkation. Optional extension packages in Singapore are available for those wishing to extend their journey.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Gallery Tab Content */}
            {activeTab === 'gallery' && (
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Cruise Gallery</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="rounded-lg overflow-hidden shadow-md h-64">
                    <img 
                      src="https://i.ibb.co/3TBrDP1/Cruise-Suite.jpg" 
                      alt="Luxury Suite" 
                      className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-md h-64">
                    <img 
                      src="https://i.ibb.co/Jk5Z1MT/Cruise-Dining.jpg" 
                      alt="Fine Dining" 
                      className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-md h-64">
                    <img 
                      src="https://i.ibb.co/WFGZ97K/Cruise-Pool.jpg" 
                      alt="Infinity Pool" 
                      className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-md h-64">
                    <img 
                      src="https://i.ibb.co/B2DtkNb/Phang-Nga.jpg" 
                      alt="Phang Nga Bay" 
                      className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-md h-64">
                    <img 
                      src="https://i.ibb.co/s3P7vJr/Cruise-Spa.jpg" 
                      alt="Luxury Spa" 
                      className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-md h-64">
                    <img 
                      src="https://i.ibb.co/R7Xsn0j/Langkawi.jpg" 
                      alt="Langkawi SkyBridge" 
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
                  <div className="text-yellow-400 text-4xl font-bold mr-4">4.8</div>
                  <div>
                    <div className="flex text-yellow-400 mb-1">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                    </div>
                    <div className="text-gray-600">Based on 64 reviews</div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                        <span className="text-gray-700 font-bold">RM</span>
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-800">Richard & Margaret Collins</h5>
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
                      This cruise exceeded our expectations in every way. The ship was stunning, and our suite with its private balcony was the perfect place to watch the sunset each evening. The staff anticipated our every need, and the dining was on par with Michelin-starred restaurants we've visited. The excursions were thoughtfully organized, giving us a real taste of each destination. We're already planning our next cruise with Wanderlust!
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                        <span className="text-gray-700 font-bold">JP</span>
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-800">Jennifer Parker</h5>
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
                      As a solo traveler, I was initially hesitant about taking a cruise, but this experience completely won me over. The staff was incredibly accommodating, and the small size of the ship meant I quickly got to know other guests. The excursions to Phang Nga Bay and Langkawi were highlights - seeing those limestone karsts up close was breathtaking. The onboard activities kept me entertained during sea days, and I particularly enjoyed the cooking classes. This cruise was the perfect balance of luxury, adventure, and relaxation.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                        <span className="text-gray-700 font-bold">TL</span>
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-800">Thomas Lee</h5>
                        <div className="text-gray-600 text-sm">January 2025</div>
                      </div>
                      <div className="ml-auto text-yellow-400">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                      </div>
                    </div>
                    <p className="text-gray-700">
                      The cruise was fantastic overall, though I would have enjoyed more time in Penang. The ship itself is beautiful and well-maintained, and our suite was spacious and comfortable. The food was exceptional - especially the seafood night and the Thai dinner. Staff were attentive without being intrusive. The only reason I'm not giving a full five stars is that one of our excursions was postponed due to weather, which is understandable but somewhat disappointing. Still, I would highly recommend this cruise to anyone looking for a luxury experience in Southeast Asia.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Booking Card */}
          <div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden sticky top-24">
              <div className="bg-teal-600 text-white p-6">
                <h3 className="text-xl font-bold mb-2">Book This Cruise</h3>
                <p className="text-teal-100">Secure your cabin today!</p>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Price:</span>
                    <span className="font-bold text-gray-800">$499 per person</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-bold text-gray-800">7 Days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Next Departure:</span>
                    <span className="font-bold text-gray-800">May 15, 2025</span>
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
                  <span>Free cancellation up to 60 days before</span>
                </div>
              </div>
              
              <div className="border-t p-6">
                <h4 className="font-bold text-gray-800 mb-3">Have Questions?</h4>
                <p className="text-gray-600 mb-4">
                  Our travel experts are ready to help you plan your dream cruise.
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
      
      {/* Similar Experiences */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">You May Also Like</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg scale-up">
              <div className="relative h-64">
                <img 
                  src="https://i.ibb.co/KcQ3xfFy/Speed-Boat.jpg" 
                  alt="Private Island Hopping Tour" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-bold">Private Island Hopping Tour</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">Embark on an exclusive island-hopping adventure in the crystal-clear waters of the Andaman Sea with opportunities for swimming and snorkeling.</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-800 font-bold">$299 / person</span>
                  <Link to="/experiences/island-hopping-tour" className="bg-teal-600 text-white px-4 py-2 rounded-full hover:bg-teal-700 transition">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-lg scale-up">
              <div className="relative h-64">
                <img 
                  src="https://i.ibb.co/21kv6qgb/Hot-Air-Ballon.jpg" 
                  alt="Wine Country Balloon Experience" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-bold">Wine Country Balloon Experience</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">Drift above rolling vineyards and breathtaking landscapes during a serene sunrise hot air balloon flight, followed by a private wine tasting.</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-800 font-bold">$299 / person</span>
                  <Link to="/experiences/wine-country-balloon" className="bg-teal-600 text-white px-4 py-2 rounded-full hover:bg-teal-700 transition">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-lg scale-up">
              <div className="relative h-64">
                <img 
                  src="https://i.ibb.co/HDvd05yZ/Coastal-California-Tour.jpg" 
                  alt="Coastal California Helicopter Tour" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-bold">Coastal California Helicopter Tour</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">Soar above California's breathtaking coastline in a luxury helicopter, with panoramic views of stunning beaches, rugged cliffs, and charming seaside towns.</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-800 font-bold">$349 / person</span>
                  <Link to="/experiences/coastal-california-helicopter-tour" className="bg-teal-600 text-white px-4 py-2 rounded-full hover:bg-teal-700 transition">
                    Learn More
                  </Link>
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
        destinationName="Luxury Cruise Journey"
        price="499"
        duration="7"
        departureDate="May 15, 2025"
      />
      
      <Newsletter />
    </div>
  );
};

export default LuxuryCruiseJourneyPage;