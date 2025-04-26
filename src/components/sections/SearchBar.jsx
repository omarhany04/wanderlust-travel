import React, { useState } from 'react';
import { Link } from 'react-scroll';
import GlobalSearch from '../common/GlobalSearch';

const SearchBar = ({ onSearch }) => {
  const [destination, setDestination] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [travelers, setTravelers] = useState('1 Adult');
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (onSearch) {
      onSearch({
        destination,
        checkIn,
        checkOut,
        travelers
      });
    }
  };

  const toggleAdvancedSearch = () => {
    setShowAdvancedSearch(!showAdvancedSearch);
  };

  return (
    <section id="search-bar-section" className="relative max-w-5xl mx-auto px-4 -mt-16 z-10">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="mb-6">
          <GlobalSearch />
        </div>

        <div className="flex items-center justify-between mb-4">
          <h3 className="text-gray-700 font-medium">Filter Your Trip</h3>
          <button
            type="button"
            onClick={toggleAdvancedSearch}
            className="text-teal-600 text-sm flex items-center"
          >
            {showAdvancedSearch ? (
              <>
                <span>Simple Search</span>
                <i className="fas fa-chevron-up ml-1"></i>
              </>
            ) : (
              <>
                <span>Advanced Search</span>
                <i className="fas fa-chevron-down ml-1"></i>
              </>
            )}
          </button>
        </div>
        
        {showAdvancedSearch && (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-gray-700 mb-2 text-sm font-medium">Destination</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-map-marker-alt text-gray-400"></i>
                </div>
                <input
                  id="destination-search"
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                  placeholder="Where to?"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2 text-sm font-medium">Check in</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="far fa-calendar-alt text-gray-400"></i>
                </div>
                <input
                  type="date"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2 text-sm font-medium">Check out</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="far fa-calendar-alt text-gray-400"></i>
                </div>
                <input
                  type="date"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2 text-sm font-medium">Travelers</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-user text-gray-400"></i>
                </div>
                <select
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                  value={travelers}
                  onChange={(e) => setTravelers(e.target.value)}
                >
                  <option>1 Adult</option>
                  <option>2 Adults</option>
                  <option>2 Adults, 1 Child</option>
                  <option>2 Adults, 2 Children</option>
                </select>
              </div>
            </div>

            <div className="md:col-span-4">
              <Link
                to="destinations"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                <button
                  type="submit"
                  className="w-full bg-teal-600 text-white p-3 rounded-lg hover:bg-teal-700 transition font-medium"
                >
                  Search for Amazing Destinations
                </button>
              </Link>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default SearchBar;