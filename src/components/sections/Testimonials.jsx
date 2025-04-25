import React, { useState, useEffect, useRef } from 'react';

const testimonialData = [
  {
    id: 1,
    name: 'Sarah Johnson',
    trip: 'Bali Retreat, February 2025',
    image: 'https://i.ibb.co/rG3K5Bwr/Sara-Johnson.jpg',
    rating: 5,
    text: 'Our trip to Bali was absolutely magical! The attention to detail from the Wanderlust team made all the difference. From the beautiful villa to the private tour guide who showed us hidden gems, everything exceeded our expectations. We\'re already planning our next adventure with them!'
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    trip: 'Japan Adventure, March 2025',
    image: 'https://i.ibb.co/BVdpBxc8/Michael-Rodriguez.jpg',
    rating: 5,
    text: 'Wanderlust made our Japan trip truly special. They arranged a perfect blend of cultural experiences and modern adventures. The itinerary was flexible enough that we could explore at our own pace. The local guides were knowledgeable and friendly. Can\'t recommend them enough!'
  },
  {
    id: 3,
    name: 'Emily and David',
    trip: 'Greece Honeymoon, April 2025',
    image: 'https://i.ibb.co/m5RLYgzS/Emily-And-David.jpg',
    rating: 5,
    text: 'Our honeymoon in Greece was a dream come true thanks to Wanderlust. The private sunset cruise in Santorini was the highlight of our trip. Every detail was taken care of, and we didn\'t have to worry about a thing. The perfect start to our marriage!'
  }
];

const TestimonialCard = ({ name, trip, image, rating, text }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm">
      <div className="flex items-center mb-6">
        <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="text-lg font-bold text-gray-800">{name}</h4>
          <p className="text-gray-600 text-sm">{trip}</p>
        </div>
        <div className="ml-auto text-yellow-400">
          {[...Array(rating)].map((_, index) => (
            <i key={index} className="fas fa-star"></i>
          ))}
        </div>
      </div>
      <p className="text-gray-700 mb-4">{text}</p>
    </div>
  );
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  const showTestimonial = (index) => {
    setCurrentIndex(index);
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${index * 100}%)`;
    }
  };

  const nextTestimonial = () => {
    const newIndex = (currentIndex + 1) % testimonialData.length;
    showTestimonial(newIndex);
  };

  const prevTestimonial = () => {
    const newIndex = (currentIndex - 1 + testimonialData.length) % testimonialData.length;
    showTestimonial(newIndex);
  };

  // Touch events for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left, go to next
      nextTestimonial();
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right, go to previous
      prevTestimonial();
    }
  };

  // Auto rotation
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentIndex]);

  // Pause auto rotation on hover
  const handleMouseEnter = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleMouseLeave = () => {
    intervalRef.current = setInterval(() => {
      nextTestimonial();
    }, 5000);
  };

  return (
    <section id="testimonials" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">What Our Travelers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real experiences from people who have explored the world with us
          </p>
        </div>
        
        <div 
          className="relative" 
          id="testimonial-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="flex transition-transform duration-500 ease-out" 
            id="testimonial-slider"
            ref={sliderRef}
          >
            {testimonialData.map(testimonial => (
              <div key={testimonial.id} className="min-w-full px-4">
                <TestimonialCard 
                  name={testimonial.name}
                  trip={testimonial.trip}
                  image={testimonial.image}
                  rating={testimonial.rating}
                  text={testimonial.text}
                />
              </div>
            ))}
          </div>
          
          {/* Controls */}
          <button 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md text-gray-800 hover:text-teal-600 focus:outline-none z-10"
            onClick={prevTestimonial}
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          
          <button 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md text-gray-800 hover:text-teal-600 focus:outline-none z-10"
            onClick={nextTestimonial}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
          
          {/* Indicators */}
          <div className="flex justify-center mt-8">
            {testimonialData.map((_, index) => (
              <button 
                key={index}
                className={`w-3 h-3 rounded-full mx-1 transition-colors ${
                  index === currentIndex ? 'bg-teal-600' : 'bg-gray-300'
                }`}
                onClick={() => showTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;