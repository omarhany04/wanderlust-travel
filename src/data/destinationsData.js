const destinationsData = [
    {
      id: 1,
      name: 'bali',
      location: 'Bali, Indonesia',
      price: '1,299',
      rating: 4.8,
      reviews: 243,
      duration: 7,
      description: 'Experience the magic of Bali with its stunning beaches, lush rice terraces, and vibrant cultural heritage.',
      image: 'https://i.ibb.co/xrkmDBQ/Bali1.jpg',
      longDescription: `
        Bali, the famed Island of the Gods, is a tropical paradise that captivates with its blend of stunning landscapes, rich culture, and spiritual ambiance. 
        
        From the moment you arrive, you'll be immersed in Bali's unique charm - ornate temples set against lush rice terraces, pristine beaches with world-class surfing, and vibrant coral reefs teeming with marine life.
        
        Our curated Bali experience includes:
        • 7 days/6 nights in a luxury villa with private pool
        • Daily breakfast and select dining experiences
        • Private tour of iconic temples including Tanah Lot and Uluwatu
        • Guided trek through the Tegallalang Rice Terraces
        • Traditional Balinese cooking class
        • Sunrise hike to Mount Batur volcano
        • Spa treatment featuring traditional Balinese techniques
        
        Whether you're seeking spiritual renewal, adventure, romance, or simply relaxation on stunning beaches, Bali offers an unforgettable escape that will leave you transformed.
      `,
      highlights: [
        'Explore ancient temples and traditional villages',
        'Relax on pristine beaches and swim in crystal-clear waters',
        'Experience the vibrant arts scene in Ubud',
        'Indulge in Balinese cuisine and spa treatments',
        'Witness stunning sunsets at Tanah Lot Temple'
      ],
      activities: [
        'Surfing in Kuta and Uluwatu',
        'Snorkeling and diving in Amed',
        'White water rafting on the Ayung River',
        'Yoga and wellness retreats',
        'Traditional dance performances'
      ]
    },
    {
      id: 2,
      name: 'santorini',
      location: 'Santorini, Greece',
      price: '1,599',
      rating: 4.9,
      reviews: 187,
      duration: 6,
      description: 'Discover the iconic white-washed buildings, blue domes, and breathtaking sunsets of Santorini.',
      image: 'https://i.ibb.co/7x2XSpfw/Santorini.jpg',
      longDescription: `
        Santorini is the jewel of the Aegean, a crescent-shaped island formed from an ancient volcanic caldera, now famous for its dramatic cliffs, white-washed buildings, and spectacular sunsets.
        
        This enchanting Greek island offers a perfect blend of natural beauty, romantic ambiance, rich history, and Mediterranean charm. The iconic blue-domed churches against white buildings and the azure sea create one of the world's most recognizable and breathtaking landscapes.
        
        Our exclusive Santorini package includes:
        • 6 days/5 nights in a luxury cave hotel with caldera views
        • Daily Mediterranean breakfast on your private terrace
        • Guided tour of ancient Akrotiri archaeological site
        • Private catamaran cruise around the caldera with BBQ lunch
        • Wine tasting experience at traditional Santorinian wineries
        • Sunset dinner in Oia with premium seating
        • Airport/port transfers and transportation
        
        Whether you're honeymooning, celebrating an anniversary, or simply seeking a magical escape, Santorini offers an unforgettable blend of natural splendor, rich history, and luxurious relaxation.
      `,
      highlights: [
        'Witness world-famous sunsets from Oia',
        'Explore the ancient ruins of Akrotiri',
        'Swim in the volcanic hot springs',
        'Sample local wines from vineyards dating back centuries',
        'Relax on unique red and black volcanic beaches'
      ],
      activities: [
        'Catamaran sailing around the caldera',
        'Hiking from Fira to Oia along the caldera rim',
        'Wine tasting at traditional wineries',
        'Exploring charming villages',
        'Photography tours of iconic vistas'
      ]
    },
    {
      id: 3,
      name: 'kyoto',
      location: 'Kyoto, Japan',
      price: '1,899',
      rating: 4.7,
      reviews: 215,
      duration: 9,
      description: 'Immerse yourself in Japanese culture with traditional temples, serene gardens, and historic districts.',
      image: 'https://i.ibb.co/6cctdpSH/Kyoto.jpg',
      longDescription: `
        Kyoto, Japan's ancient imperial capital, is a living museum of Japanese culture, tradition, and aesthetics. With over 1,600 Buddhist temples, 400 Shinto shrines, and 17 UNESCO World Heritage sites, Kyoto offers an unparalleled journey into Japan's rich cultural heritage.
        
        Unlike Tokyo's modern skyline, Kyoto preserves Japan's traditional architecture, gardens, cuisine, and customs. The city changes beautifully with the seasons - from spring cherry blossoms to fall maple foliage, each visit offers a unique experience.
        
        Our comprehensive Kyoto experience includes:
        • 9 days/8 nights in a traditional ryokan with modern amenities
        • Daily traditional Japanese breakfast
        • Guided tours of major temples and shrines including Kinkaku-ji and Fushimi Inari
        • Private tea ceremony experience with a tea master
        • Culinary walking tour featuring Kyoto specialties
        • Day trip to Arashiyama Bamboo Grove and Monkey Park
        • Traditional kimono rental experience
        • Meditation session with Buddhist monks
        
        Whether you're drawn to spiritual experiences, traditional arts, exquisite cuisine, or simply the beauty of traditional Japanese aesthetics, Kyoto offers an immersive journey into the heart of Japanese culture.
      `,
      highlights: [
        'Visit the stunning golden pavilion of Kinkaku-ji',
        'Walk through thousands of vermilion torii gates at Fushimi Inari Shrine',
        'Experience traditional tea ceremonies and meditation',
        'Explore the historic Gion district and spot geisha',
        'Wander through the enchanting Arashiyama Bamboo Grove'
      ],
      activities: [
        'Participating in a traditional tea ceremony',
        'Trying Zen meditation at a Buddhist temple',
        'Taking a cooking class to learn Kyoto cuisine',
        'Renting a kimono for a day of sightseeing',
        'Visiting traditional crafts workshops'
      ]
    },
    {
      id: 4,
      name: 'amalfi',
      location: 'Amalfi Coast, Italy',
      price: '1,499',
      rating: 4.6,
      reviews: 178,
      duration: 8,
      description: "Stunning cliffs, pastel villages, and the sparkling sea await you on Italy's most romantic coastline.",
      image: 'https://i.ibb.co/CK8DybZr/Amalfi-Coast.jpg',
      initiallyHidden: true,
      longDescription: `
        The Amalfi Coast, a UNESCO World Heritage site, is one of Italy's most spectacular stretches of coastline. This 50-kilometer paradise along the Tyrrhenian Sea features vertiginous cliffs, pastel-colored fishing villages, terraced vineyards, and lemon groves cascading down to crystal-clear waters.
        
        Each town along the coast offers its own distinct charm: Positano with its chic boutiques and dramatic setting, Amalfi with its impressive cathedral and maritime history, and Ravello perched high above with its luxurious villas and gardens offering panoramic views.
        
        Our comprehensive Amalfi Coast package includes:
        • 8 days/7 nights in a sea-view hotel
        • Daily breakfast and selected dinners at authentic local restaurants
        • Private boat tour along the coastline with swimming stops
        • Guided walking tours of Positano, Amalfi, and Ravello
        • Limoncello tasting and demonstration
        • Day trip to the island of Capri with Blue Grotto visit (weather permitting)
        • Cooking class featuring regional specialties
        • Private transfers and transportation
        
        The Amalfi Coast embodies la dolce vita - the sweet life - with its perfect blend of natural beauty, culinary delights, and Mediterranean lifestyle that will leave you enchanted and refreshed.
      `,
      highlights: [
        'Take in panoramic views from the Path of the Gods hiking trail',
        'Explore the colorful cliffside village of Positano',
        'Visit the historic Cathedral of Saint Andrew in Amalfi town',
        'Tour the beautiful gardens of Villa Rufolo and Villa Cimbrone in Ravello',
        'Sample authentic limoncello made from local lemons'
      ],
      activities: [
        'Private boat tour along the dramatic coastline',
        'Day trip to the glamorous island of Capri',
        'Italian cooking classes featuring local cuisine',
        'Shopping for handmade ceramics and linen',
        'Swimming and sunbathing at hidden beaches'
      ]
    },
    {
      id: 5,
      name: 'machu',
      location: 'Machu Picchu, Peru',
      price: '2,199',
      rating: 5.0,
      reviews: 94,
      duration: 10,
      description: 'Journey through the Andes to the Lost City of the Incas with our guided, unforgettable adventure.',
      image: 'https://i.ibb.co/S46DGWWp/Machu-Picchu.jpg',
      initiallyHidden: true,
      longDescription: `
        Machu Picchu, the ancient Incan citadel set high in the Andes Mountains, is one of the world's most awe-inspiring archaeological sites. Built in the 15th century and later abandoned, this "Lost City of the Incas" remained unknown to the outside world until its rediscovery in 1911.
        
        The journey to Machu Picchu is as remarkable as the destination itself. Whether trekking the legendary Inca Trail, taking the scenic train journey through the Sacred Valley, or exploring alternative routes, the approach to this magnificent site offers breathtaking Andean landscapes and encounters with Peru's rich cultural heritage.
        
        Our comprehensive Machu Picchu adventure includes:
        • 10 days/9 nights in carefully selected accommodations
        • Two guided visits to Machu Picchu (afternoon and sunrise)
        • Optional Huayna Picchu climb (subject to availability)
        • Exploration of the Sacred Valley and its Incan sites
        • Guided tour of historic Cusco and nearby ruins
        • Traditional Pachamanca feast with local community
        • Acclimatization hikes and activities to adjust to the altitude
        • All transportation, including scenic train journey and transfers
        
        This journey offers the perfect blend of adventure, cultural immersion, and historical discovery, allowing you to connect with one of humanity's most impressive achievements while experiencing the living culture and breathtaking natural beauty of Peru.
      `,
      highlights: [
        'Explore the ancient stone structures of the lost Incan city',
        'Watch the sunrise over Machu Picchu from the Sun Gate',
        'Discover the rich history and architecture of Cusco',
        'Visit traditional Quechua communities in the Sacred Valley',
        'Marvel at the engineering genius of ancient Inca builders'
      ],
      activities: [
        'Hiking the classic Inca Trail (optional)',
        'Train journey through the beautiful Sacred Valley',
        'Climbing Huayna Picchu for a different perspective',
        'Exploring the markets of Pisac and Ollantaytambo',
        'Learning about traditional weaving techniques'
      ]
    },
  ];
  
  export default destinationsData;