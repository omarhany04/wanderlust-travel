import React, { useState, useEffect } from 'react';
import Button from './Button';

const ReservationModal = ({ 
  isOpen, 
  onClose, 
  destinationName, 
  price, 
  duration, 
  departureDate 
}) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    travelers: '1',
    specialRequests: ''
  });
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Handle outside click to close modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (step < 2) {
      setStep(step + 1);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset form after success
      setTimeout(() => {
        setIsSuccess(false);
        setStep(1);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          travelers: '1',
          specialRequests: ''
        });
        onClose();
      }, 3000);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-60 backdrop-blur-sm">
      <div 
        className="relative bg-white w-full max-w-lg rounded-xl shadow-xl animate-fadeIn overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Progress bar */}
        <div className="w-full bg-gray-100">
          <div 
            className="h-1 bg-teal-600 transition-all duration-300 ease-out"
            style={{ width: `${(step / 2) * 100}%` }}
          ></div>
        </div>
        
        {/* Header */}
        <div className="relative p-6 border-b">
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <h3 className="text-xl font-bold text-gray-800">
            {isSuccess ? 'Reservation Confirmed!' : 'Reserve Your Trip'}
          </h3>
          <p className="text-gray-600">
            {isSuccess 
              ? 'Your booking has been successfully submitted.' 
              : `${step === 1 ? 'Enter your contact details' : 'Confirm your booking'}`
            }
          </p>
        </div>
        
        {/* Content */}
        <div className="p-6">
          {isSuccess ? (
            <div className="text-center py-8">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
                <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Booking Complete!</h3>
              <p className="text-gray-600 mb-6">
                We've sent a confirmation email to your inbox with all the details.
              </p>
              <p className="text-teal-600 font-medium">
                Thank you for booking with Wanderlust Travel!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {step === 1 ? (
                /* Step 1: Contact Information */
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Number of Travelers</label>
                    <select
                      name="travelers"
                      value={formData.travelers}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                    >
                      <option value="1">1 Adult</option>
                      <option value="2">2 Adults</option>
                      <option value="3">3 Adults</option>
                      <option value="4">4 Adults</option>
                      <option value="2,1">2 Adults, 1 Child</option>
                      <option value="2,2">2 Adults, 2 Children</option>
                    </select>
                  </div>
                </div>
              ) : (
                /* Step 2: Booking Summary */
                <div>
                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <h4 className="text-lg font-medium text-gray-800 mb-3">Trip Summary</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Destination:</span>
                        <span className="font-medium">{destinationName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Duration:</span>
                        <span className="font-medium">{duration} days</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Departure Date:</span>
                        <span className="font-medium">{departureDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Travelers:</span>
                        <span className="font-medium">{formData.travelers.includes(',') 
                          ? formData.travelers.replace(',', ' Adults, ') + ' Child' + (formData.travelers.split(',')[1] > 1 ? 'ren' : '')
                          : formData.travelers + ' ' + (formData.travelers > 1 ? 'Adults' : 'Adult')}
                        </span>
                      </div>
                      <div className="border-t border-gray-200 pt-2 mt-2">
                        <div className="flex justify-between font-bold">
                          <span>Total Price:</span>
                          <span>${Number(price.replace(/,/g, '')) * (formData.travelers.includes(',') 
                            ? Number(formData.travelers.split(',')[0]) + (Number(formData.travelers.split(',')[1]) * 0.7)
                            : Number(formData.travelers))}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Special Requests (Optional)</label>
                    <textarea
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleChange}
                      rows="3"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                    ></textarea>
                  </div>
                  
                  <div className="mt-4 text-gray-600 text-sm">
                    <p>By completing this booking you agree to our <a href="#" className="text-teal-600 hover:underline">Terms and Conditions</a> and <a href="#" className="text-teal-600 hover:underline">Privacy Policy</a>.</p>
                  </div>
                </div>
              )}
              
              <div className="mt-6 flex justify-between">
                {step > 1 && (
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={() => setStep(step - 1)}
                  >
                    Back
                  </Button>
                )}
                <Button 
                  type="submit" 
                  variant="primary"
                  className={`${step === 1 ? 'ml-auto' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : step === 1 ? 'Continue' : 'Complete Reservation'}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReservationModal;