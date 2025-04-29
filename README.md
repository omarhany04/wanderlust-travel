# Wanderlust Travel Website

![Wanderlust Travel](https://i.ibb.co/dwLxwT3L/Background.jpg)

## 📝 Description

Wanderlust is a modern, responsive travel website built with React and Tailwind CSS. It's designed to showcase beautiful destinations around the world and provide users with a seamless experience to explore and book travel experiences. From luxurious escapes to adventure travel, Wanderlust offers a range of travel options with detailed information, stunning imagery, and easy booking functionality.

## ✨ Features

- **Responsive Design**: Fully responsive layout that works beautifully on all devices
- **Destination Browsing**: Explore handpicked destinations with detailed information
- **Travel Types**: Different categories of travel experiences (Luxury, Adventure, Beach, etc.)
- **Search Functionality**: Global search across destinations, travel types, and experiences
- **Booking System**: Reservation modal for booking travel experiences
- **Animated UI Elements**: Smooth animations and transitions for an engaging experience
- **Interactive Components**: Sliders, cards, and other interactive UI elements
- **Dynamic Content Loading**: Conditional rendering based on user interaction

## 🛠️ Technologies Used

- **React**: Frontend library for building the user interface
- **React Router**: For navigation between pages
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Font Awesome**: Icon library
- **React Scroll**: For smooth scrolling navigation
- **CSS Animations**: Custom animations for enhanced user experience

## 🚀 Installation and Setup

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/wanderlust-travel.git
   cd wanderlust-travel
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

4. Open your browser and visit:
   ```
   http://localhost:3000
   ```

## 📂 Project Structure

```
Directory structure:
└── omarhany04-wanderlust-travel/
    ├── README.md
    ├── package.json
    ├── public/
    │   ├── index.html
    │   ├── manifest.json
    │   └── robots.txt
    └── src/
        ├── App.css
        ├── App.js
        ├── App.test.js
        ├── index.css
        ├── index.js
        ├── reportWebVitals.js
        ├── setupTests.js
        ├── assets/
        │   └── styles/
        │       ├── animations.css
        │       └── globals.css
        ├── components/
        │   ├── common/
        │   │   ├── Button.jsx
        │   │   ├── DestinationCard.jsx
        │   │   ├── GlobalSearch.jsx
        │   │   └── ReservationModal.jsx
        │   ├── layout/
        │   │   ├── Footer.jsx
        │   │   ├── Header.jsx
        │   │   └── Layout.jsx
        │   └── sections/
        │       ├── Destinations.jsx
        │       ├── Featured.jsx
        │       ├── Hero.jsx
        │       ├── Newsletter.jsx
        │       ├── SearchBar.jsx
        │       ├── Testimonials.jsx
        │       └── WhyChooseUs.jsx
        ├── data/
        │   ├── destinationsData.js
        │   └── travelTypesData.js
        ├── hooks/
        │   └── useScrollPosition.js
        ├── pages/
        │   ├── AboutPage.jsx
        │   ├── CoastalCaliforniaHelicopterPage.jsx
        │   ├── ContactPage.jsx
        │   ├── DestinationDetail.jsx
        │   ├── DestinationsPage.jsx
        │   ├── Home.jsx
        │   ├── IslandHoppingTourPage.jsx
        │   ├── LuxuryCruiseJourneyPage.jsx
        │   ├── SearchResultsPage.jsx
        │   ├── TravelExperienceDetail.jsx
        │   ├── TravelTypePage.jsx
        │   └── WineCountryBalloonPage.jsx
        └── utils/
            └── animations.js

```

## 📱 Pages

- **Home**: The landing page showcasing highlighted destinations and features
- **Destinations**: Overview of all available travel destinations
- **Destination Detail**: In-depth information about specific destinations
- **Travel Types**: Different categories of travel (Luxury, Adventure, etc.)
- **Travel Experience Detail**: Specific travel experiences with itineraries
- **Island Hopping Tour**: Featured experience with detailed information
- **Search Results**: Displays results based on user search queries

## 🧩 Key Components

- **Header**: Navigation bar with links and search functionality
- **Footer**: Site links, contact information, and social media
- **DestinationCard**: Displays destination information in a card format
- **Button**: Reusable button component with various styles
- **ReservationModal**: Modal for booking travel experiences
- **GlobalSearch**: Search functionality available throughout the site
- **Testimonials**: Customer reviews with a slider interface
- **Newsletter**: Email signup for travel updates and promotions

## 💡 Features to be added

- User authentication and profiles
- Payment integration
- Wishlist functionality
- Reviews and ratings system
- Interactive maps for destinations
- Blog/travel guides section
- Multi-language support
