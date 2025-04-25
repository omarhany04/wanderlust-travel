import React from 'react';

const DestinationCard = ({ 
  name, 
  location, 
  price, 
  rating, 
  reviews, 
  duration, 
  description,
  image,
  isHidden = false 
}) => {
  return (
    <div 
      className={`destination-card rounded-xl overflow-hidden shadow-lg group scale-up ${isHidden ? 'hidden' : ''}`} 
      data-name={name.toLowerCase()}
    >
      <div className="relative h-64">
        <img 
          src={image} 
          alt={`${location}`} 
          className="w-full h-full object-cover"
        />
        <div className="destination-overlay absolute inset-0 flex flex-col justify-end p-6">
          <h3 className="text-white text-xl font-bold">{location}</h3>
          <p className="text-gray-200 text-sm">Starting from ${price}</p>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <div className="text-yellow-400 flex">
              {[...Array(Math.floor(rating))].map((_, i) => (
                <i key={i} className="fas fa-star"></i>
              ))}
              {rating % 1 !== 0 && <i className="fas fa-star-half-alt"></i>}
            </div>
            <span className="ml-1 text-gray-600 text-sm">{rating} ({reviews})</span>
          </div>
          <span className="text-gray-600 text-sm">{duration} days</span>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <span className="inline-flex items-center text-teal-600 font-medium">
          <i className="fas fa-map-marked-alt mr-1"></i> Top Pick
        </span>
      </div>
    </div>
  );
};

export default DestinationCard;