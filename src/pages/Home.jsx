import React, { useState } from 'react';
import Hero from '../components/sections/Hero';
import SearchBar from '../components/sections/SearchBar';
import Destinations from '../components/sections/Destinations';
import Featured from '../components/sections/Featured';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Testimonials from '../components/sections/Testimonials';
import Newsletter from '../components/sections/Newsletter';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (searchData) => {
    if (searchData && searchData.destination) {
      setSearchQuery(searchData.destination);
    }
  };

  return (
    <div>
      <Hero />
      <SearchBar onSearch={handleSearch} />
      <Destinations searchQuery={searchQuery} />
      <Featured />
      <WhyChooseUs />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;