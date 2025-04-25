import React from 'react';
import Destinations from '../components/sections/Destinations';
import Newsletter from '../components/sections/Newsletter';

const DestinationsPage = () => {
  return (
    <div>
      {/* Page Header Banner */}
      <div className="bg-teal-600 py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Our Destinations</h1>
          <p className="text-teal-100 text-xl max-w-3xl mx-auto">
            Discover the world's most breathtaking destinations and plan your next unforgettable journey
          </p>
        </div>
      </div>
      
      <Destinations />
      <Newsletter />
    </div>
  );
};

export default DestinationsPage;