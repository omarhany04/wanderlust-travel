const travelTypesData = [
    {
      id: 1,
      slug: 'luxury-escapes',
      title: 'Luxury Escapes',
      subtitle: 'Indulge in extraordinary experiences and unparalleled comfort',
      description: 'Discover a world of opulence and refinement with our handpicked luxury escapes. From exclusive private island retreats to elegant city sanctuaries, we curate exceptional experiences for the discerning traveler.',
      heroImage: 'https://i.ibb.co/ymxCXtM7/Luxury-Escapes3.png',
      longDescription: `
        Our Luxury Escapes collection represents the pinnacle of travel experiences, designed for those who seek the extraordinary in every journey. We understand that true luxury lies not just in five-star accommodations and fine dining, but in the authenticity, exclusivity, and personalization of each moment.
        
        From the moment you begin planning until your return home, our dedicated luxury concierge team ensures every detail is meticulously arranged according to your preferences. Whether it's securing reservations at Michelin-starred restaurants, arranging private after-hours tours of world-renowned museums, or curating bespoke experiences that reflect your passions, we transform travel into an art form.
        
        Our portfolio includes iconic properties from the world's most prestigious hotel groups, private villas in breathtaking locations, luxury yacht charters, and exclusive-use estates. Each property in our collection has been personally vetted to ensure it meets our exacting standards for comfort, service, amenities, and unique character.
      `,
      features: [
        'Personal luxury travel concierge',
        'VIP airport services and private transfers',
        'Suite and villa accommodations',
        'Exclusive access to events and venues',
        'Bespoke experiences tailored to your interests'
      ],
      featuredDestinations: [
        {
            name: 'Wolgan Valley Resort, NSW',
            description: 'Unwind in your private luxury suite with double fireplaces, a world-class spa, and locally-sourced cuisine in the heart of New South Wales breathtaking wilderness.',
            image: 'https://i.ibb.co/zVJSGfHF/Wolgan.webp'
        },
        {
            name: 'Maldives Overwater Villa Retreat',
            description: 'Experience paradise from your private overwater villa with direct lagoon access and dedicated butler service.',
            image: 'https://i.ibb.co/RkZx3149/Maldives-Water-Villa.jpg'
        },
        {
          name: 'Porto Zante Villas & Spa, Greece',
          description: 'Experience European luxury at its finest with a private beachfront villa, infinity pool, and sunset views over the Ionian Sea.',
          image: 'https://i.ibb.co/1J9ZXYjX/Private-Beach.webp'
        }
      ]
    },
    {
      id: 2,
      slug: 'adventure-travel',
      title: 'Adventure Travel',
      subtitle: 'Push boundaries and create unforgettable memories',
      description: 'Embark on extraordinary journeys that challenge, inspire, and exhilarate. Our adventure travel experiences combine adrenaline-pumping activities with breathtaking destinations for those who seek more than the ordinary.',
      heroImage: 'https://i.ibb.co/DDGqgSfG/Adventure.jpg',
      longDescription: `
        Our Adventure Travel experiences are crafted for those who believe the greatest luxury in life is adventure. These journeys push boundaries, challenge perspectives, and create stories you'll tell for a lifetime.
        
        We believe that adventure travel isn't just about extreme sports or physical challenges—though we certainly offer those for thrill-seekers. True adventure can also be found in authentic cultural encounters, exploring remote wilderness with expert guides, or discovering destinations few travelers ever reach.
        
        All our adventure experiences are led by specialized guides with deep local knowledge and wilderness expertise. Safety is always our priority, with comprehensive risk assessments, quality equipment, and proper preparation ensuring you can focus on the experience while we handle the logistics.
        
        From scaling peaks in the Himalayas to tracking wildlife in the Amazon, diving with marine life in remote oceans to traversing desert landscapes by camel, our adventures span every continent and ecosystem. For families, we offer specially designed adventures that educate and inspire younger travelers while keeping activities appropriate for mixed ages and abilities.
      `,
      features: [
        'Expert local guides and expedition leaders',
        'Small group sizes (max 12 participants)',
        'High-quality equipment and safety protocols',
        'Combination of iconic highlights and off-the-beaten-path experiences',
        'Options for various fitness and experience levels'
      ],
      featuredDestinations: [
        {
          name: 'Patagonia Multi-Sport Adventure',
          description: 'Hike, kayak, and climb through some of Earth\'s most dramatic landscapes in Argentina and Chile.',
          image: 'https://i.ibb.co/cSqvnTdL/Patagonia.webp'
        },
        {
          name: 'Spirit of Antarctica',
          description: 'Embark on a polar voyage across the Drake Passage, exploring Antarctica’s icy wilderness with Zodiac cruises, wildlife encounters, and optional camping under pastel skies.',
          image: 'https://i.ibb.co/Y7c3v97L/Antarctica.jpg'
        },
        {
          name: 'Morocco Desert & Mountains',
          description: 'Trek the Atlas Mountains, camp under stars in the Sahara, and explore ancient medinas and kasbahs.',
          image: 'https://i.ibb.co/YB0c0ZPq/Morocco.jpg'
        }
      ]
    },
    {
      id: 3,
      slug: 'beach-getaways',
      title: 'Beach Getaways',
      subtitle: 'Relax and recharge on the world\'s most beautiful coastlines',
      description: 'Escape to paradise with our curated beach getaways. From secluded tropical islands to vibrant coastal towns, find your perfect place under the sun.',
      heroImage: 'https://i.ibb.co/1GCbfbBN/Beach-Banner1.jpg',
      longDescription: `
        Our Beach Getaways collection showcases the world's most beautiful coastlines, each offering its own unique blend of natural beauty, culture, and atmosphere. Whether you dream of overwater bungalows in crystal-clear lagoons, secluded coves accessible only by boat, or vibrant beach clubs with DJ sets at sunset, we have the perfect coastal escape for every style.
        
        We've searched the globe to find beach destinations that offer more than just sun and sand. Our selected properties provide authentic sense of place, exceptional service, and those special touches that transform a beach holiday into an unforgettable experience.
        
        For families, we feature properties with excellent kids' clubs, shallow swimming areas, and activities to keep all ages entertained. For couples seeking romance, we recommend adults-only havens with private dining experiences and spa treatments for two. For wellness enthusiasts, we highlight beaches with world-class yoga retreats, detox programs, and water-based fitness activities.
        
        Whether you seek absolute serenity or a social beach scene, barefoot luxury or authentic local charm, our beach collection spans six continents and countless breathtaking shorelines.
      `,
      features: [
        'Beachfront and ocean-view accommodations',
        'Water sports and marine activities',
        'Sunset cruises and beach dining experiences',
        'Spa treatments inspired by local traditions',
        'Options for both secluded and more social beach settings'
      ],
      featuredDestinations: [
        {
          name: 'Seychelles Island Hopping',
          description: 'Discover multiple islands with pristine beaches, unique wildlife, and luxurious boutique properties.',
          image: 'https://i.ibb.co/6cRb3gdV/Seychelles.jpg'
        },
        {
          name: 'Hanalei Bay, Hawaii',
          description: 'Discover the natural beauty of Kauai’s north shore with golden beaches, mountain backdrops, and the iconic Hanalei Pier.',
          image: 'https://i.ibb.co/8L5dRr39/Hawaii.webp'
        },
        {
          name: 'Baía do Sancho, Brazil',
          description: 'Venture to one of the world’s most pristine beaches, nestled in Fernando de Noronha, with turquoise waters and lush cliffs.',
          image: 'https://i.ibb.co/MXZPpCp/Brazil-Beach.webp'
        }
      ]
    },
    {
      id: 4,
      slug: 'cultural-experiences',
      title: 'Cultural Experiences',
      subtitle: 'Immerse yourself in the world\'s most fascinating traditions and heritage',
      description: 'Discover the soul of a destination through immersive cultural journeys. Connect with local traditions, art, history, and cuisine guided by expert local insiders.',
      heroImage: 'https://i.ibb.co/LdVyGJJR/Culture.jpg',
      longDescription: `
        Our Cultural Experiences go beyond typical sightseeing to provide genuine connection with the heart and soul of a destination. We believe that the most enriching travel experiences come through meaningful engagement with local communities, traditions, and heritage.
        
        Each cultural journey is crafted around opportunities for authentic exchange and learning. You might share a meal with a local family in their home, participate in traditional craft workshops with master artisans, or take part in important cultural festivals and ceremonies. Our expert cultural guides contextualize these experiences, helping you understand the historical significance and contemporary relevance of everything you encounter.
        
        We place special emphasis on supporting and preserving cultural heritage through sustainable tourism practices. Our partnerships with community organizations, museums, and preservation projects ensure that your visit contributes positively to cultural conservation while providing exceptional insider access.
        
        Whether you're exploring the temples of Kyoto, the souks of Marrakech, or the musical heritage of New Orleans, our cultural journeys provide depth, perspective, and connection that transforms how you see the world.
      `,
      features: [
        'Expert cultural guides and local insider access',
        'Small group sizes for personal interaction',
        'Private performances and demonstrations',
        'Culinary experiences highlighting local traditions',
        'Festival dates and special cultural events'
      ],
      featuredDestinations: [
        {
          name: 'Japan Cultural Immersion',
          description: 'Experience tea ceremonies, meditative gardens, traditional arts, and spiritual traditions across Japan.',
          image: 'https://i.ibb.co/LDpqyFwT/Japan.webp'
        },
        {
          name: 'Bhutan: Land of the Thunder Dragon',
          description: 'Explore ancient monasteries, hike to the Tiger’s Nest, and witness spiritual rituals in the Himalayan kingdom of Bhutan.',
          image: 'https://i.ibb.co/5xsJbdFN/Bhutan.webp'
        },
        {
          name: 'Petra & Wadi Rum, Jordan',
          description: 'Step back in time through the rose-red city of Petra and experience Bedouin culture under the desert stars of Wadi Rum.',
          image: 'https://i.ibb.co/KjzWgJhb/Petra.jpg'
        }
      ]
    },
    {
      id: 5,
      slug: 'honeymoon-packages',
      title: 'Honeymoon Packages',
      subtitle: 'Begin your journey together with unforgettable experiences',
      description: 'Celebrate your love with our thoughtfully designed honeymoon packages. Experience romantic settings, exclusive amenities, and moments designed for two.',
      heroImage: 'https://i.ibb.co/Xf931KXQ/Honeymoon-Banner.jpg',
      longDescription: `
        Your honeymoon deserves to be as unique as your love story. Our Honeymoon Packages are meticulously crafted to create the perfect beginning to your life together, with experiences that reflect your personalities and preferences as a couple.
        
        We understand that honeymoons aren't one-size-fits-all. Some couples dream of overwater bungalows and barefoot luxury on a private island. Others seek adventure and exploration, from African safaris to South American mountain treks. Many desire a blend of relaxation and cultural experiences, perhaps in the romantic settings of Italy or France. Whatever your vision, our honeymoon specialists ensure every detail aligns with your dream.
        
        All our honeymoon packages include special touches to celebrate your union—private dinners in unforgettable settings, couples spa treatments, room upgrades when available, and personalized surprises throughout your journey. We also offer honeymoon registry services, allowing your loved ones to contribute to your trip as a wedding gift.
        
        Whether you depart immediately after your wedding or plan a delayed honeymoon, we handle all logistics so you can focus on each other and the beginning of this new chapter together.
      `,
      features: [
        'Personalized honeymoon planning consultation',
        'VIP amenities and romantic surprises',
        'Private experiences designed for couples',
        'Honeymoon registry service available',
        'Combination of relaxation and special activities'
      ],
      featuredDestinations: [
        {
          name: 'Karma Kandara, Bali',
          description: 'Indulge in the ultimate tropical escape with cliffside views, private infinity pool, and serene sunset dining at a world-class resort.',
          image: 'https://i.ibb.co/5hsSzQXb/Karma-Kandara.webp'
        },
        {
          name: 'Italian Romance Journey',
          description: 'Romance weaves through spice-scented air, sun-kissed beaches, and timeless dhow cruises—where turquoise waters and heritage-rich streets create the perfect island escape.',
          image: 'https://i.ibb.co/pjMnnXyk/Zanizbar.jpg'
        },
        {
          name: 'Mauritius Honeymoon Escape',
          description: 'Romantic dreams come alive in Mauritius with white sand beaches, coral islands, turquoise waters, luxury escapes, and sunset beach bonfires.',
          image: 'https://i.ibb.co/MDgYnG5Z/Mauritius.jpg'
        }
      ]
    }
  ];
  
  export default travelTypesData;