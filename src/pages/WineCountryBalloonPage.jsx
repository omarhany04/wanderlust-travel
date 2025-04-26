import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import Newsletter from '../components/sections/Newsletter';
import ReservationModal from '../components/common/ReservationModal';

const WineCountryBalloonPage = () => {
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
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://i.ibb.co/21kv6qgb/Hot-Air-Ballon.jpg')` }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <span className="inline-block bg-teal-100 text-teal-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Signature Experience
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Wine Country Balloon Experience</h1>
            <div className="flex items-center justify-center mb-4">
              <div className="text-yellow-400 flex">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <span className="ml-2 text-white">
                4.9 (42 reviews)
              </span>
            </div>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Drift above rolling vineyards and breathtaking landscapes during a serene sunrise hot air balloon flight
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
                <div className="font-bold">4-5 Hours</div>
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
                <div className="font-bold">4-8 People per Balloon</div>
              </div>
            </div>
            <div className="flex items-center">
              <i className="fas fa-map-marker-alt text-2xl mr-3"></i>
              <div>
                <div className="text-sm">Location</div>
                <div className="font-bold">Napa Valley, California</div>
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
                <h2 className="text-3xl font-bold text-gray-800 mb-6">About This Experience</h2>
                <div className="prose prose-lg max-w-none mb-8">
                  <p className="text-gray-600 mb-4">
                    Experience the magic of Napa Valley from a whole new perspective with our Wine Country Balloon Experience. This unforgettable journey combines the thrill of hot air ballooning with the sophistication of wine country, creating memories that will last a lifetime.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Your adventure begins in the quiet moments before dawn, as you watch our experienced crew inflate the colorful balloon that will carry you into the sky. As the sun begins to rise, you'll gently lift off the ground and float peacefully above the patchwork of vineyards, rolling hills, and picturesque estates that make Napa Valley one of the world's most beautiful wine regions.
                  </p>
                  <p className="text-gray-600 mb-4">
                    From your privileged vantage point hundreds of feet above the valley floor, witness the first rays of sunlight gilding the landscape, casting long shadows and illuminating the rows of grapevines stretching toward the horizon. Your pilot, an expert in both ballooning and local geography, will point out landmarks and share fascinating insights about the region's terroir and wine-making traditions.
                  </p>
                  <p className="text-gray-600 mb-4">
                    The tranquility of balloon flight is unlike any other form of travel—floating silently with the breeze, with only the occasional blast from the burner to remind you of the gentle technology keeping you aloft. Each flight path is unique, determined by the day's wind patterns, ensuring that every journey is a one-of-a-kind experience.
                  </p>
                  <p className="text-gray-600 mb-4">
                    After approximately an hour in the air, you'll return to earth for the second part of your experience: a private wine tasting at one of Napa's premier boutique wineries. Here, you'll sample exceptional wines paired with a gourmet breakfast spread featuring locally sourced ingredients. The winemaker will guide you through each tasting, explaining the unique characteristics that Napa's microclimate and soil impart to their vintages.
                  </p>
                </div>

                {/* Highlights Section */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Experience Highlights</h3>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-teal-600 mt-1 mr-3"></i>
                        <span className="text-gray-700">Sunrise hot air balloon flight over Napa Valley's stunning vineyard landscape</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-teal-600 mt-1 mr-3"></i>
                        <span className="text-gray-700">Experienced pilots with extensive knowledge of the region</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-teal-600 mt-1 mr-3"></i>
                        <span className="text-gray-700">Private wine tasting experience at a boutique winery</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-teal-600 mt-1 mr-3"></i>
                        <span className="text-gray-700">Gourmet breakfast with locally sourced ingredients</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-teal-600 mt-1 mr-3"></i>
                        <span className="text-gray-700">Commemorative flight certificate and professional photos of your experience</span>
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
                      <span className="text-gray-700">Hot air balloon flight (approx. 1 hour)</span>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg flex items-center">
                      <i className="fas fa-check text-teal-600 mr-3"></i>
                      <span className="text-gray-700">Expert pilot and commentary</span>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg flex items-center">
                      <i className="fas fa-check text-teal-600 mr-3"></i>
                      <span className="text-gray-700">Private winery tasting with guide</span>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg flex items-center">
                      <i className="fas fa-check text-teal-600 mr-3"></i>
                      <span className="text-gray-700">Gourmet breakfast with champagne toast</span>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg flex items-center">
                      <i className="fas fa-check text-teal-600 mr-3"></i>
                      <span className="text-gray-700">Transportation between launch site and winery</span>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg flex items-center">
                      <i className="fas fa-check text-teal-600 mr-3"></i>
                      <span className="text-gray-700">Digital souvenir photos</span>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg flex items-center">
                      <i className="fas fa-check text-teal-600 mr-3"></i>
                      <span className="text-gray-700">Commemorative flight certificate</span>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg flex items-center">
                      <i className="fas fa-check text-teal-600 mr-3"></i>
                      <span className="text-gray-700">All necessary safety equipment</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Itinerary Tab Content */}
            {activeTab === 'itinerary' && (
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Experience Itinerary</h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-teal-600 pl-4 py-2">
                    <h4 className="text-xl font-bold text-gray-800">5:15 AM - Check-in & Briefing</h4>
                    <p className="text-gray-600 mt-2">
                      Arrive at our meeting point in Yountville where you'll be greeted by our friendly team. Enjoy a light pre-flight coffee or tea while our pilot provides a comprehensive safety briefing and explains what to expect during your balloon adventure.
                    </p>
                  </div>
                  <div className="border-l-4 border-teal-600 pl-4 py-2">
                    <h4 className="text-xl font-bold text-gray-800">5:45 AM - Balloon Inflation</h4>
                    <p className="text-gray-600 mt-2">
                      Witness the magical process of balloon inflation as our experienced ground crew prepares for launch. This is a fascinating spectacle and a great photo opportunity as the enormous balloon gradually takes shape in the pre-dawn light.
                    </p>
                  </div>
                  <div className="border-l-4 border-teal-600 pl-4 py-2">
                    <h4 className="text-xl font-bold text-gray-800">6:15 AM - Lift-off & Sunrise Flight</h4>
                    <p className="text-gray-600 mt-2">
                      Board your balloon basket and experience the gentle sensation of lifting off the ground. Rise into the air just as the first rays of sunlight begin to illuminate the valley. Spend approximately one hour floating over the picturesque landscape of Napa Valley, with exceptional views of vineyards, mountains, and morning mist.
                    </p>
                  </div>
                  <div className="border-l-4 border-teal-600 pl-4 py-2">
                    <h4 className="text-xl font-bold text-gray-800">7:30 AM - Landing & Celebration</h4>
                    <p className="text-gray-600 mt-2">
                      Experience a gentle landing in one of the valley's open fields. Participate in the traditional post-flight champagne toast, a ballooning tradition that dates back to the 18th century, and receive your commemorative flight certificate.
                    </p>
                  </div>
                  <div className="border-l-4 border-teal-600 pl-4 py-2">
                    <h4 className="text-xl font-bold text-gray-800">8:00 AM - Transfer to Winery</h4>
                    <p className="text-gray-600 mt-2">
                      Board our comfortable transportation for a short, scenic drive to a prestigious boutique winery that specially opens early for our guests. Enjoy the morning tranquility of wine country before the typical tourist crowds arrive.
                    </p>
                  </div>
                  <div className="border-l-4 border-teal-600 pl-4 py-2">
                    <h4 className="text-xl font-bold text-gray-800">8:30 AM - Gourmet Breakfast & Wine Tasting</h4>
                    <p className="text-gray-600 mt-2">
                      Arrive at the winery for a private tasting experience paired with a gourmet breakfast prepared by a local chef. Sample 4-5 premium wines while learning about the winemaking process and the unique characteristics of Napa Valley terroir.
                    </p>
                  </div>
                  <div className="border-l-4 border-teal-600 pl-4 py-2">
                    <h4 className="text-xl font-bold text-gray-800">10:00 AM - Experience Conclusion</h4>
                    <p className="text-gray-600 mt-2">
                      The experience concludes at the winery, where you'll receive digital copies of your souvenir photos. You're welcome to continue exploring the winery at your leisure or return to Yountville with our transportation. Our team can provide recommendations for additional activities to enjoy in Napa Valley for the remainder of your day.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Gallery Tab Content */}
            {activeTab === 'gallery' && (
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Experience Gallery</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="rounded-lg overflow-hidden shadow-md h-64">
                    <img 
                      src="https://i.ibb.co/G28NvtR/Balloon-Inflation.jpg" 
                      alt="Balloon Inflation" 
                      className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-md h-64">
                    <img 
                      src="https://i.ibb.co/r7ZMdNG/Balloon-Flight.jpg" 
                      alt="Balloon Flight Over Vineyards" 
                      className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-md h-64">
                    <img 
                      src="https://i.ibb.co/ZKbTJwh/Balloon-Sunrise.jpg" 
                      alt="Sunrise View from Balloon" 
                      className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-md h-64">
                    <img 
                      src="https://i.ibb.co/pLQxFmb/Wine-Tasting.jpg" 
                      alt="Private Wine Tasting" 
                      className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-md h-64">
                    <img 
                      src="https://i.ibb.co/DK9fjKY/Gourmet-Breakfast.jpg" 
                      alt="Gourmet Breakfast" 
                      className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-md h-64">
                    <img 
                      src="https://i.ibb.co/V9kXDXG/Napa-Valley-Vineyard.jpg" 
                      alt="Napa Valley Vineyard" 
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
                  <div className="text-yellow-400 text-4xl font-bold mr-4">4.9</div>
                  <div>
                    <div className="flex text-yellow-400 mb-1">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <div className="text-gray-600">Based on 42 reviews</div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                        <span className="text-gray-700 font-bold">EB</span>
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-800">Emma & Brian Taylor</h5>
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
                      We booked this for our anniversary and it exceeded all expectations! Our pilot Mark was so knowledgeable and made us feel completely at ease. The views of the valley at sunrise were absolutely breathtaking—the photos don't do it justice. The wine tasting afterward at a small family-owned winery was the perfect complement to the balloon ride. The entire experience felt intimate and special, not touristy at all. Absolutely worth waking up early for!
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                        <span className="text-gray-700 font-bold">SJ</span>
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-800">Sarah Johnson</h5>
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
                      This balloon experience was the highlight of my solo trip to Napa! I was a bit nervous about the flight, but the crew was so professional and reassuring. The balloon itself felt completely stable, and the silence as we drifted over the vineyards was truly magical. Our group was small (just 6 people), which made it feel exclusive. The breakfast and wine tasting afterward was delicious, and I appreciated the care taken to explain each wine. A perfect way to see Napa from a different perspective.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                        <span className="text-gray-700 font-bold">DM</span>
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-800">David Martinez</h5>
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
                      I surprised my wife with this balloon ride for her birthday, and it was worth every penny! The whole experience was seamless from start to finish. Watching the balloon inflate in the early morning light was fascinating, and once we were in the air, the views were simply incredible. Our pilot pointed out all the famous vineyards and shared interesting facts about the valley's history. The post-flight champagne toast followed by the wine tasting and gourmet breakfast at the winery was the perfect way to cap off the morning. If you're debating whether to do this, just go for it—it's truly a once-in-a-lifetime experience.
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
                <h3 className="text-xl font-bold mb-2">Book This Experience</h3>
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
                    <span className="font-bold text-gray-800">4-5 Hours</span>
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
                  <span>Free cancellation up to 72 hours before</span>
                </div>
              </div>
              
              <div className="border-t p-6">
                <h4 className="font-bold text-gray-800 mb-3">Have Questions?</h4>
                <p className="text-gray-600 mb-4">
                  Our travel experts are ready to help you plan your wine country adventure.
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
        destinationName="Wine Country Balloon Experience"
        price="299"
        duration="1"
        departureDate="Available Daily (Weather Permitting)"
      />
      
      <Newsletter />
    </div>
  );
};

export default WineCountryBalloonPage;