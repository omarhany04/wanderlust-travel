import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import DestinationsPage from './pages/DestinationsPage';
import DestinationDetail from './pages/DestinationDetail';
import TravelTypePage from './pages/TravelTypePage';
import TravelExperienceDetail from './pages/TravelExperienceDetail';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import IslandHoppingTourPage from './pages/IslandHoppingTourPage';
import LuxuryCruiseJourneyPage from './pages/LuxuryCruiseJourneyPage';
import WineCountryBalloonPage from './pages/WineCountryBalloonPage';
import CoastalCaliforniaHelicopterPage from './pages/CoastalCaliforniaHelicopterPage';
import SearchResultsPage from './pages/SearchResultsPage';
import './assets/styles/globals.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<DestinationsPage />} />
          <Route path="/destination/:destinationName" element={<DestinationDetail />} />
          <Route path="/travel-type/:travelTypeSlug" element={<TravelTypePage />} />
          <Route path="/travel-type/:travelTypeSlug/experience/:experienceName" element={<TravelExperienceDetail />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/experiences/island-hopping-tour" element={<IslandHoppingTourPage />} />
          <Route path="/experiences/luxury-cruise-journey" element={<LuxuryCruiseJourneyPage />} />
          <Route path="/experiences/wine-country-balloon" element={<WineCountryBalloonPage />} />
          <Route path="/experiences/coastal-california-helicopter-tour" element={<CoastalCaliforniaHelicopterPage />} />
          <Route path="/search" element={<SearchResultsPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;