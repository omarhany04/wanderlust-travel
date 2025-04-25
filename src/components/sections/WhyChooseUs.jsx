import React from 'react';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-sm text-center scale-up">
      <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <i className={`fas ${icon} text-2xl text-teal-600`}></i>
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      icon: 'fa-globe',
      title: 'Handpicked Destinations',
      description: 'Our travel experts personally visit and vet every destination to ensure exceptional quality and unique experiences.'
    },
    {
      id: 2,
      icon: 'fa-dollar-sign',
      title: 'Best Price Guarantee',
      description: "We promise the best rates for your trip. Found a lower price elsewhere? We'll match it and give you an extra 10% off."
    },
    {
      id: 3,
      icon: 'fa-headset',
      title: '24/7 Support',
      description: 'Our dedicated customer support team is available around the clock to assist you before, during, and after your journey.'
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Why Choose Wanderlust</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're committed to making your travel experiences unforgettable for all the right reasons
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map(feature => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;