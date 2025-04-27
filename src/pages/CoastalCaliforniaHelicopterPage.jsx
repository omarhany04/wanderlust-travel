import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import Newsletter from '../components/sections/Newsletter';
import ReservationModal from '../components/common/ReservationModal';

const CoastalCaliforniaHelicopterPage = () => {
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
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://i.ibb.co/HDvd05yZ/Coastal-California-Tour.jpg')` }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <span className="inline-block bg-teal-100 text-teal-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Premium Experience
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Coastal California Helicopter Tour</h1>
            <div className="flex items-center justify-center mb-4">
              <div className="text-yellow-400 flex">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <span className="ml-2 text-white">
                4.7 (38 reviews)
              </span>
            </div>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Soar above California's breathtaking coastline in a luxury helicopter
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
                <div className="font-bold">2-3 Hours</div>
              </div>
            </div>
            <div className="flex items-center">
              <i className="fas fa-tag text-2xl mr-3"></i>
              <div>
                <div className="text-sm">Price</div>
                <div className="font-bold">$349 per person</div>
              </div>
            </div>
            <div className="flex items-center">
              <i className="fas fa-users text-2xl mr-3"></i>
              <div>
                <div className="text-sm">Group Size</div>
                <div className="font-bold">Max 5 People</div>
              </div>
            </div>
            <div className="flex items-center">
              <i className="fas fa-map-marker-alt text-2xl mr-3"></i>
              <div>
                <div className="text-sm">Location</div>
                <div className="font-bold">San Diego to La Jolla</div>
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
                    Experience the stunning California coastline from a truly unique perspective with our exclusive helicopter tour. This unforgettable aerial adventure showcases the dramatic meeting of land and sea along one of America's most beautiful stretches of shoreline.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Flying in our state-of-the-art helicopter, you'll enjoy panoramic views that are simply impossible to appreciate from ground level. Our carefully designed flight path takes you over miles of pristine beaches, dramatic cliffs, luxurious oceanfront estates, and charming coastal communities.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Your journey begins in San Diego, where you'll meet your experienced pilot who will provide a comprehensive safety briefing before takeoff. Once airborne, you'll soar along the Pacific coast, with the vast blue ocean on one side and Southern California's stunning landscape on the other.
                  </p>
                  <p className="text-gray-600 mb-4">
                    As you cruise at the perfect altitude for sightseeing, your pilot will serve as your personal guide, pointing out landmarks and sharing fascinating insights about the region's geography, history, and famous residents. The helicopter's noise-canceling headset system ensures you won't miss a word of commentary.
                  </p>
                  <p className="text-gray-600 mb-4">
                    You'll fly over iconic spots including the pristine shores of Coronado Beach, the dramatic sea caves and coves of La Jolla, and the magnificent Torrey Pines State Natural Reserve. Keep your eyes peeled for marine life below—it's common to spot dolphins, sea lions, and even migrating whales (seasonal) from this privileged vantage point.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Our tour includes a special landing at a scenic overlook where you'll enjoy champagne and gourmet refreshments while taking in the breathtaking coastal panorama. This mid-flight break provides the perfect opportunity to capture stunning photos and simply savor the moment.
                  </p>
                </div>

                {/* Highlights Section */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Tour Highlights</h3>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-teal-600 mt-1 mr-3"></i>
                        <span className="text-gray-700">Aerial views of San Diego's stunning coastline in a luxury helicopter</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-teal-600 mt-1 mr-3"></i>
                        <span className="text-gray-700">Exclusive landing at a scenic coastal overlook with champagne service</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-teal-600 mt-1 mr-3"></i>
                        <span className="text-gray-700">Fly over famous landmarks including La Jolla Cove and Torrey Pines</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-teal-600 mt-1 mr-3"></i>
                        <span className="text-gray-700">Opportunity to spot marine wildlife including dolphins and whales (seasonal)</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-teal-600 mt-1 mr-3"></i>
                        <span className="text-gray-700">Expert pilot commentary on local landmarks and geography</span>
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
                      <span className="text-gray-700">Helicopter flight (approx. 60-90 minutes)</span>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg flex items-center">
                      <i className="fas fa-check text-teal-600 mr-3"></i>
                      <span className="text-gray-700">Experienced pilot and live commentary</span>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg flex items-center">
                      <i className="fas fa-check text-teal-600 mr-3"></i>
                      <span className="text-gray-700">Noise-canceling headsets</span>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg flex items-center">
                      <i className="fas fa-check text-teal-600 mr-3"></i>
                      <span className="text-gray-700">Champagne and refreshments</span>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg flex items-center">
                      <i className="fas fa-check text-teal-600 mr-3"></i>
                      <span className="text-gray-700">Exclusive landing at scenic overlook</span>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg flex items-center">
                      <i className="fas fa-check text-teal-600 mr-3"></i>
                      <span className="text-gray-700">Digital souvenir photos</span>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg flex items-center">
                      <i className="fas fa-check text-teal-600 mr-3"></i>
                      <span className="text-gray-700">Luxury transportation to/from helipad</span>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg flex items-center">
                      <i className="fas fa-check text-teal-600 mr-3"></i>
                      <span className="text-gray-700">All helipad fees and taxes</span>
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
                    <h4 className="text-xl font-bold text-gray-800">1:00 PM - Arrival & Check-in</h4>
                    <p className="text-gray-600 mt-2">
                      Arrive at our exclusive helipad lounge in San Diego. Enjoy welcome refreshments while completing a brief check-in process. Meet your professional pilot who will provide an overview of your flight path and safety instructions.
                    </p>
                  </div>
                  <div className="border-l-4 border-teal-600 pl-4 py-2">
                    <h4 className="text-xl font-bold text-gray-800">1:30 PM - Takeoff & San Diego Skyline</h4>
                    <p className="text-gray-600 mt-2">
                      Board your luxury helicopter and take off for an initial sweep over San Diego's iconic skyline. Admire the architectural details of downtown skyscrapers and the vast expanse of San Diego Bay from your privileged aerial vantage point.
                    </p>
                  </div>
                  <div className="border-l-4 border-teal-600 pl-4 py-2">
                    <h4 className="text-xl font-bold text-gray-800">1:45 PM - Coronado & Point Loma</h4>
                    <p className="text-gray-600 mt-2">
                      Cruise over the magnificent Coronado Bridge and the historic Hotel del Coronado with its distinctive red turrets. Continue past the naval installations on Point Loma and enjoy sweeping views of the entire San Diego Bay entrance.
                    </p>
                  </div>
                  <div className="border-l-4 border-teal-600 pl-4 py-2">
                    <h4 className="text-xl font-bold text-gray-800">2:00 PM - Northern Coastal Communities</h4>
                    <p className="text-gray-600 mt-2">
                      Fly northward along the coast, over the charming beach communities of Pacific Beach and Mission Beach. Your pilot will point out local landmarks and share interesting facts about the history and development of these iconic California beach towns.
                    </p>
                  </div>
                  <div className="border-l-4 border-teal-600 pl-4 py-2">
                    <h4 className="text-xl font-bold text-gray-800">2:15 PM - La Jolla Coves & Sea Caves</h4>
                    <p className="text-gray-600 mt-2">
                      Arrive at one of the tour highlights - the dramatic coastline of La Jolla. From the air, you'll have a perfect view of the famous sea caves, secluded coves, and marine wildlife that makes this area so special. Keep your cameras ready as this offers some of the most dramatic coastal scenery in California.
                    </p>
                  </div>
                  <div className="border-l-4 border-teal-600 pl-4 py-2">
                    <h4 className="text-xl font-bold text-gray-800">2:30 PM - Torrey Pines Landing & Refreshment Break</h4>
                    <p className="text-gray-600 mt-2">
                      Experience a special landing at a scenic overlook near Torrey Pines State Natural Reserve. Step out of the helicopter to enjoy champagne and gourmet refreshments while taking in the stunning coastal panorama. Your pilot will point out geographic features visible from this exceptional vantage point.
                    </p>
                  </div>
                  <div className="border-l-4 border-teal-600 pl-4 py-2">
                    <h4 className="text-xl font-bold text-gray-800">3:00 PM - Return Flight</h4>
                    <p className="text-gray-600 mt-2">
                      Reboard your helicopter for the return journey to San Diego. The return flight takes a slightly different route, offering new perspectives of the coastline. Fly directly over the magnificent Torrey Pines Golf Course, home of numerous PGA tournaments, before heading south along the coast.
                    </p>
                  </div>
                  <div className="border-l-4 border-teal-600 pl-4 py-2">
                    <h4 className="text-xl font-bold text-gray-800">3:30 PM - Landing & Conclusion</h4>
                    <p className="text-gray-600 mt-2">
                      Touch down at the helipad where your aerial adventure began. In the lounge, your pilot will present you with digital copies of photos taken during your flight, and our team will be available to answer any questions about what you've seen and experienced.
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
                      src="https://i.ibb.co/cS40sWKj/Helicopter.jpg" 
                      alt="Helicopter Interior" 
                      className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-md h-64">
                    <img 
                      src="https://i.ibb.co/ccQPpJmk/SanDiego.jpg" 
                      alt="San Diego Skyline Aerial View" 
                      className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-md h-64">
                    <img 
                      src="https://i.ibb.co/DmRnJYD/Camera.jpg" 
                      alt="Camera Ready" 
                      className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-md h-64">
                    <img 
                      src="https://i.ibb.co/FbYVt7Pk/Torrey.jpg" 
                      alt="Torrey Pines Reserve" 
                      className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-md h-64">
                    <img 
                      src="https://i.ibb.co/YTfd0Scz/La-Colla-Cove.jpg" 
                      alt="La Jolla Cove" 
                      className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-md h-64">
                    <img 
                      src="https://i.ibb.co/WNMH27z2/Food.jpg" 
                      alt="Food and Champagne" 
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
                  <div className="text-yellow-400 text-4xl font-bold mr-4">4.7</div>
                  <div>
                    <div className="flex text-yellow-400 mb-1">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                    </div>
                    <div className="text-gray-600">Based on 38 reviews</div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                        <span className="text-gray-700 font-bold">MK</span>
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-800">Michael & Kristin Brooks</h5>
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
                      This helicopter tour was absolutely worth every penny! We've been to San Diego several times, but seeing the coastline from the air gave us a completely new appreciation for its beauty. Our pilot Jake was professional, knowledgeable, and clearly passionate about the area. The helicopter was immaculate and comfortable, and the champagne break at Torrey Pines was magical - we even spotted dolphins from our viewpoint! The perfect way to celebrate our anniversary.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                        <span className="text-gray-700 font-bold">LC</span>
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-800">Lisa Chen</h5>
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
                      As a photography enthusiast, this tour was a dream come true! The views of the coastline, especially around La Jolla, were simply spectacular. I appreciated that the pilot understood exactly what angles would work best for photos and slowed down at key spots so I could get the perfect shots. The noise-canceling headsets were a nice touch, making it easy to hear the commentary while still being able to enjoy the peaceful feeling of flying. The landing spot was perfectly chosen for even more photo opportunities. I've already recommended this to several friends!
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                        <span className="text-gray-700 font-bold">JR</span>
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-800">James Rodriguez</h5>
                        <div className="text-gray-600 text-sm">February 2025</div>
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
                      The helicopter tour provided stunning views that simply can't be matched from the ground. Our pilot was excellent and very informative about the landmarks we were seeing. The champagne break was a nice touch, though I would have enjoyed a bit more time in the air. We were lucky enough to see a pod of dolphins off La Jolla which was truly special. The only small downside was that our flight was delayed by about 30 minutes due to weather concerns, but safety comes first so I can't complain too much. Overall, a great experience I would recommend to anyone visiting San Diego who wants to see it from a different perspective.
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
                <h3 className="text-xl font-bold mb-2">Book This Tour</h3>
                <p className="text-teal-100">Secure your spot today!</p>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Price:</span>
                    <span className="font-bold text-gray-800">$349 per person</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-bold text-gray-800">2-3 Hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Availability:</span>
                    <span className="font-bold text-gray-800">Daily (Weather Permitting)</span>
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
                  Our travel experts are ready to help you plan your aerial adventure.
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
                  src="https://i.ibb.co/WRX4LFv/Luxury-Cruises-Banner.jpg" 
                  alt="Luxury Cruise Journey" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-bold">Luxury Cruise Journey</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">Embark on a breathtaking luxury cruise featuring world-class amenities, exotic destinations, and unforgettable experiences across the seas.</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-800 font-bold">$499 / person</span>
                  <Link to="/experiences/luxury-cruise-journey" className="bg-teal-600 text-white px-4 py-2 rounded-full hover:bg-teal-700 transition">
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
          </div>
        </div>
      </div>

      {/* Reservation Modal */}
      <ReservationModal 
        isOpen={modalOpen}
        onClose={closeModal}
        destinationName="Coastal California Helicopter Tour"
        price="349"
        duration="1"
        departureDate="Available Daily (Weather Permitting)"
      />
      
      <Newsletter />
    </div>
  );
};

export default CoastalCaliforniaHelicopterPage;