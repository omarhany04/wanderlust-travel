import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import DestinationCard from '../components/common/DestinationCard';
import Button from '../components/common/Button';
import destinationsData from '../data/destinationsData';
import travelTypesData from '../data/travelTypesData';

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState({
    destinations: [],
    travelTypes: [],
    experiences: []
  });
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('all');

  const featuredExperiences = [
    {
      id: 'island-hopping',
      name: 'Private Island Hopping Tour',
      description: 'Embark on an exclusive island-hopping adventure in the crystal-clear waters of the Andaman Sea.',
      image: 'https://i.ibb.co/KcQ3xfFy/Speed-Boat.jpg',
      path: '/experiences/island-hopping-tour',
      price: '299',
      rating: 5,
      reviews: 89,
      duration: 1
    },
    {
      id: 'luxury-cruise',
      name: 'Luxury Cruise Journey',
      description: 'Embark on a breathtaking luxury cruise featuring world-class amenities, exotic destinations, and unforgettable experiences across the seas.',
      image: 'https://i.ibb.co/WRX4LFv/Luxury-Cruises-Banner.jpg',
      path: '/experiences/luxury-cruise-journey',
      price: '499',
      rating: 4.8,
      reviews: 64,
      duration: 7
    },
    {
      id: 'wine-balloon',
      name: 'Wine Country Balloon Experience',
      description: 'Drift above rolling vineyards and breathtaking landscapes during a serene sunrise hot air balloon flight, followed by a private wine tasting at a renowned vineyard.',
      image: 'https://i.ibb.co/21kv6qgb/Hot-Air-Ballon.jpg',
      path: '/experiences/wine-country-balloon',
      price: '299',
      rating: 4.9,
      reviews: 42,
      duration: 1
    },
    {
      id: 'helicopter-tour',
      name: 'Coastal California Helicopter Tour',
      description: 'Soar above California\'s breathtaking coastline in a luxury helicopter, with panoramic views of stunning beaches, rugged cliffs, and charming seaside towns.',
      image: 'https://i.ibb.co/HDvd05yZ/Coastal-California-Tour.jpg',
      path: '/experiences/coastal-california-helicopter-tour',
      price: '349',
      rating: 4.7,
      reviews: 38,
      duration: 1
    }
  ];

  // Search function
  const performSearch = () => {
    setLoading(true);
    const normalizedQuery = query.toLowerCase().trim();

    if (!normalizedQuery) {
      setResults({
        destinations: [],
        travelTypes: [],
        experiences: []
      });
      setLoading(false);
      return;
    }

    // Search destinations
    const matchedDestinations = destinationsData.filter(
      destination => 
        destination.location.toLowerCase().includes(normalizedQuery) ||
        destination.description.toLowerCase().includes(normalizedQuery) ||
        (destination.longDescription && destination.longDescription.toLowerCase().includes(normalizedQuery))
    );

    // Search travel types
    const matchedTravelTypes = travelTypesData.filter(
      travelType => 
        travelType.title.toLowerCase().includes(normalizedQuery) ||
        travelType.subtitle.toLowerCase().includes(normalizedQuery) ||
        travelType.description.toLowerCase().includes(normalizedQuery) ||
        (travelType.longDescription && travelType.longDescription.toLowerCase().includes(normalizedQuery))
    );

    // Search experiences
    const matchedExperiences = featuredExperiences.filter(
      experience => 
        experience.name.toLowerCase().includes(normalizedQuery) ||
        experience.description.toLowerCase().includes(normalizedQuery)
    );

    setResults({
      destinations: matchedDestinations,
      travelTypes: matchedTravelTypes,
      experiences: matchedExperiences
    });
    setLoading(false);
  };

  useEffect(() => {
    performSearch();
    // Scroll to top when query changes
    window.scrollTo(0, 0);
  }, [query]);

  const totalResults = 
    results.destinations.length + 
    results.travelTypes.length + 
    results.experiences.length;

  // Filter results based on active filter
  const getFilteredResults = () => {
    if (activeFilter === 'all') {
      return {
        destinations: results.destinations,
        travelTypes: results.travelTypes,
        experiences: results.experiences
      };
    }

    return {
      destinations: activeFilter === 'destinations' ? results.destinations : [],
      travelTypes: activeFilter === 'travelTypes' ? results.travelTypes : [],
      experiences: activeFilter === 'experiences' ? results.experiences : []
    };
  };

  const filteredResults = getFilteredResults();

  return (
    <div className="min-h-screen">
      {/* Search Header */}
      <div className="bg-teal-600 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {query ? `Search Results for "${query}"` : 'Search Results'}
          </h1>
          <p className="text-teal-100 text-lg">
            {loading 
              ? 'Searching...' 
              : `Found ${totalResults} ${totalResults === 1 ? 'result' : 'results'}`}
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto py-4 space-x-4">
            <button
              className={`px-4 py-2 font-medium rounded-full whitespace-nowrap ${
                activeFilter === 'all'
                  ? 'bg-teal-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveFilter('all')}
            >
              All Results ({totalResults})
            </button>
            <button
              className={`px-4 py-2 font-medium rounded-full whitespace-nowrap ${
                activeFilter === 'destinations'
                  ? 'bg-teal-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveFilter('destinations')}
            >
              Destinations ({results.destinations.length})
            </button>
            <button
              className={`px-4 py-2 font-medium rounded-full whitespace-nowrap ${
                activeFilter === 'travelTypes'
                  ? 'bg-teal-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveFilter('travelTypes')}
            >
              Travel Types ({results.travelTypes.length})
            </button>
            <button
              className={`px-4 py-2 font-medium rounded-full whitespace-nowrap ${
                activeFilter === 'experiences'
                  ? 'bg-teal-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveFilter('experiences')}
            >
              Experiences ({results.experiences.length})
            </button>
          </div>
        </div>
      </div>

      {/* Results Content */}
      <div className="max-w-7xl mx-auto py-12 px-4">
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-600"></div>
          </div>
        ) : totalResults === 0 ? (
          <div className="text-center py-16">
            <div className="text-5xl mb-4">🔍</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">No results found</h2>
            <p className="text-gray-600 mb-8">
              We couldn't find any matches for "{query}". Please try another search term.
            </p>
            <Link to="/">
              <Button variant="primary">Return to Home</Button>
            </Link>
          </div>
        ) : (
          <div className="space-y-16">
            {/* Destinations Results */}
            {filteredResults.destinations.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Destinations
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredResults.destinations.map(destination => (
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
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Travel Types Results */}
            {filteredResults.travelTypes.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Travel Types
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredResults.travelTypes.map(travelType => (
                    <Link 
                      key={travelType.id}
                      to={`/travel-type/${travelType.slug}`}
                      className="bg-white rounded-xl overflow-hidden shadow-lg flex flex-col md:flex-row hover:shadow-xl transition"
                    >
                      <div className="md:w-2/5 h-48 md:h-auto">
                        <img 
                          src={travelType.heroImage} 
                          alt={travelType.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6 md:w-3/5">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{travelType.title}</h3>
                        <p className="text-gray-600 mb-4">{travelType.subtitle}</p>
                        <span className="text-teal-600 font-medium flex items-center">
                          Explore Options <i className="fas fa-arrow-right ml-2"></i>
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Experiences Results */}
            {filteredResults.experiences.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Experiences
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredResults.experiences.map(experience => (
                    <div key={experience.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
                      <div className="relative h-48">
                        <img 
                          src={experience.image} 
                          alt={experience.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-4">
                          <div className="text-white font-bold">${experience.price}</div>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{experience.name}</h3>
                        <div className="flex items-center mb-4">
                          <div className="text-yellow-400 flex">
                            {[...Array(Math.floor(experience.rating))].map((_, i) => (
                              <i key={i} className="fas fa-star"></i>
                            ))}
                            {experience.rating % 1 !== 0 && <i className="fas fa-star-half-alt"></i>}
                          </div>
                          <span className="ml-2 text-gray-600 text-sm">
                            {experience.rating} ({experience.reviews} reviews)
                          </span>
                        </div>
                        <p className="text-gray-600 mb-4">{experience.description}</p>
                        <Link 
                          to={experience.path}
                          className="block text-center bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResultsPage;