import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import destinationsData from '../../data/destinationsData';
import travelTypesData from '../../data/travelTypesData';

const GlobalSearch = ({ initialQuery = '' }) => {
  const [searchParams] = useSearchParams();
  const urlQuery = searchParams.get('q') || '';
  const [searchQuery, setSearchQuery] = useState(initialQuery || urlQuery || '');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isResultsVisible, setIsResultsVisible] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  // Search function to find matches across all data
  const performSearch = (query) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    const normalizedQuery = query.toLowerCase().trim();
    
    // Search destinations
    const matchedDestinations = destinationsData.filter(
      destination => 
        destination.location.toLowerCase().includes(normalizedQuery) ||
        destination.description.toLowerCase().includes(normalizedQuery)
    ).map(destination => ({
      type: 'destination',
      id: destination.id,
      name: destination.location,
      description: destination.description,
      image: destination.image,
      path: `/destination/${destination.name}`
    }));

    // Search travel types
    const matchedTravelTypes = travelTypesData.filter(
      travelType => 
        travelType.title.toLowerCase().includes(normalizedQuery) ||
        travelType.subtitle.toLowerCase().includes(normalizedQuery) ||
        travelType.description.toLowerCase().includes(normalizedQuery)
    ).map(travelType => ({
      type: 'travelType',
      id: travelType.id,
      name: travelType.title,
      description: travelType.subtitle,
      image: travelType.heroImage,
      path: `/travel-type/${travelType.slug}`
    }));
    
    // Search featured experiences
    const featuredExperiences = [
      {
        id: 'island-hopping',
        name: 'Private Island Hopping Tour',
        description: 'Embark on an exclusive island-hopping adventure in the crystal-clear waters of the Andaman Sea.',
        image: 'https://i.ibb.co/KcQ3xfFy/Speed-Boat.jpg',
        path: '/experiences/island-hopping-tour'
      },
      {
        id: 'luxury-cruise',
        name: 'Luxury Cruise Journey',
        description: 'Embark on a breathtaking luxury cruise featuring world-class amenities.',
        image: 'https://i.ibb.co/WRX4LFv/Luxury-Cruises-Banner.jpg',
        path: '/experiences/luxury-cruise'
      },
      {
        id: 'wine-balloon',
        name: 'Wine Country Balloon Experience',
        description: 'Drift above rolling vineyards and breathtaking landscapes during a serene sunrise hot air balloon flight.',
        image: 'https://i.ibb.co/21kv6qgb/Hot-Air-Ballon.jpg',
        path: '/experiences/wine-country-balloon'
      },
      {
        id: 'helicopter-tour',
        name: 'Coastal California Helicopter Tour',
        description: 'Soar above California\'s breathtaking coastline in a luxury helicopter.',
        image: 'https://i.ibb.co/HDvd05yZ/Coastal-California-Tour.jpg',
        path: '/experiences/coastal-california-helicopter-tour'
      }
    ];

    const matchedExperiences = featuredExperiences.filter(
      experience => 
        experience.name.toLowerCase().includes(normalizedQuery) ||
        experience.description.toLowerCase().includes(normalizedQuery)
    ).map(experience => ({
      type: 'experience',
      id: experience.id,
      name: experience.name,
      description: experience.description,
      image: experience.image,
      path: experience.path
    }));

    // Combine and limit results
    const allResults = [
      ...matchedDestinations,
      ...matchedTravelTypes,
      ...matchedExperiences
    ];
    
    setSearchResults(allResults);
  };

  // Debounce search to avoid excessive renders
  useEffect(() => {
    const timer = setTimeout(() => {
      performSearch(searchQuery);
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Handle clicks outside search results to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsResultsVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle search input changes
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    setIsSearching(true);
    setIsResultsVisible(value.trim() !== '');
  };

  // Handle key press events (Enter)
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsResultsVisible(false);
    }
  };

  // Clear search
  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
    setIsResultsVisible(false);
  };

  // Handle search result selection
  const handleResultClick = (path) => {
    navigate(path);
    clearSearch();
  };

  return (
    <div className="relative" ref={searchRef}>
      <div className="relative">
        <input
          type="text"
          placeholder="Search destinations, experiences..."
          className="w-full px-4 py-2 pl-10 pr-12 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
          value={searchQuery}
          onChange={handleSearchChange}
          onKeyPress={handleKeyPress}
          onFocus={() => setIsResultsVisible(searchQuery.trim() !== '')}
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <i className="fas fa-search text-gray-400"></i>
        </div>
        {searchQuery && (
          <button
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
            onClick={clearSearch}
          >
            <i className="fas fa-times"></i>
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {isResultsVisible && (
        <div className="absolute z-50 mt-2 w-full bg-white rounded-lg shadow-lg max-h-96 overflow-y-auto">
          {isSearching ? (
            <div className="p-4 text-center text-gray-500">
              <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-teal-600 mx-auto mb-2"></div>
              Searching...
            </div>
          ) : searchResults.length === 0 ? (
            <div className="p-4 text-center text-gray-500">
              No results found for "{searchQuery}"
            </div>
          ) : (
            <div>
              {/* Group results by category */}
              {['destination', 'travelType', 'experience'].map(category => {
                const categoryResults = searchResults.filter(result => result.type === category);
                if (categoryResults.length === 0) return null;
                
                return (
                  <div key={category}>
                    <div className="px-4 py-2 bg-gray-100 font-medium text-gray-700 sticky top-0">
                      {category === 'destination' ? 'Destinations' : 
                       category === 'travelType' ? 'Travel Types' : 'Experiences'}
                    </div>
                    <div>
                      {categoryResults.map(result => (
                        <div
                          key={`${result.type}-${result.id}`}
                          className="px-4 py-3 hover:bg-gray-50 cursor-pointer flex items-center"
                          onClick={() => handleResultClick(result.path)}
                        >
                          <div className="w-12 h-12 rounded-md overflow-hidden mr-4">
                            <img
                              src={result.image}
                              alt={result.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-gray-800">{result.name}</div>
                            <div className="text-sm text-gray-600 truncate">{result.description}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
              
              {/* View All Results Button */}
              {searchResults.length > 0 && (
                <div className="p-4 border-t border-gray-100">
                  <button 
                    onClick={() => {
                      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
                      setIsResultsVisible(false);
                    }}
                    className="w-full py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition"
                  >
                    View All Results
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default GlobalSearch;