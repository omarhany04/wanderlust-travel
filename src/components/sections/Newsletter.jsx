import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple email validation
    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid email address');
      return;
    }
    
    // Reset error if any
    setError('');

    console.log('Subscribing email:', email);
    
    // Show success message
    setSubscribed(true);
    
    // Clear the input
    setEmail('');
    
    // Reset success message after a few seconds
    setTimeout(() => {
      setSubscribed(false);
    }, 5000);
  };

  return (
    <section id="subscribe" className="py-20 px-4 bg-teal-600">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-3">
          Get Inspired for Your Next Journey
        </h2>
        <p className="text-teal-100 max-w-2xl mx-auto mb-8">
          Sign up for our newsletter to receive exclusive deals, travel tips, and destination inspiration
        </p>
        
        <form 
          id="subscribe-form" 
          className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto"
          onSubmit={handleSubmit}
        >
          <input 
            id="subscribe-email"
            type="email"
            placeholder="Your email address"
            className="flex-1 px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button 
            type="submit"
            className="bg-white text-teal-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition font-medium"
          >
            Subscribe Now
          </button>
        </form>
        
        <div className="max-w-2xl mx-auto w-full mt-4">
          {error && (
            <div className="bg-red-500 text-white p-4 rounded-lg w-full">
              <strong>{error}</strong>
            </div>
          )}
          
          {subscribed && (
            <div className="text-white p-4 rounded-lg w-full">
              <strong>🎉 Thank you for subscribing! You'll hear from us soon. 🎉</strong>
            </div>
          )}
        </div>
        
        <p className="text-teal-100 text-sm mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;