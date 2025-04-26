import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';
import Hero from '../components/sections/Hero';
import SearchBar from '../components/sections/SearchBar';
import Destinations from '../components/sections/Destinations';
import Featured from '../components/sections/Featured';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Testimonials from '../components/sections/Testimonials';
import Newsletter from '../components/sections/Newsletter';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const handleSearch = (searchData) => {
    if (searchData && searchData.destination) {
      setSearchQuery(searchData.destination);
    }
  };

  // Handle scrolling to sections based on hash in URL
  useEffect(() => {
    // Get the hash without the # symbol
    const hash = location.hash.replace('#', '');
    
    if (hash) {
      // Give time for the page to render before scrolling
      setTimeout(() => {
        scroller.scrollTo(hash, {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart',
          offset: -80 // Same offset as in the Header component
        });
      }, 100);
    } else {
      // If no hash is present, scroll to top
      window.scrollTo(0, 0);
    }
  }, [location]);

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