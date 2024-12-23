import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'David Okonkwo',
    role: 'Store Owner',
    content: 'The AI-powered financing has helped me expand my inventory and grow my business. The platform makes it easy to manage orders and track performance.',
    image: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&w=150&q=80'
  },
  {
    name: 'Sarah Mensah',
    role: 'Customer',
    content: 'I love being able to order groceries from local stores and have them delivered right to my doorstep. The service is reliable and convenient.',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=150&q=80'
  },
  {
    name: 'John Kamau',
    role: 'Delivery Rider',
    content: 'The platform provides me with a steady stream of delivery opportunities. The instant payments and flexible schedule work perfectly for me.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndex((current) => (current + 1) % testimonials.length);
        setIsAnimating(false);
      }, 500); // Half of transition duration
    }, 5000); // Rotate every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center opacity-0 animate-fade-in">
          <h2 className="text-3xl font-bold text-primary">Success Stories</h2>
          <p className="mt-4 text-xl text-gray-600">
            See how our platform is transforming businesses and lives across Africa
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-6 shadow-sm border border-gray-100 
                         transform transition-all duration-1000 ease-in-out
                         ${index === activeIndex ? 'opacity-100 scale-105 shadow-md' : 'opacity-50 scale-95 blur-sm'}
                         hover:shadow-lg`}
            >
              <div className="flex items-center space-x-1 text-primary">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 fill-current transform transition-transform 
                              ${index === activeIndex ? 'animate-pulse' : ''}`} 
                  />
                ))}
              </div>
              <p className={`mt-4 text-gray-600 transition-all duration-500
                           ${isAnimating ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'}`}>
                {testimonial.content}
              </p>
              <div className="mt-6 flex items-center">
                <div className="relative">
                  <div className={`absolute inset-0 bg-primary/20 rounded-full blur-md transform transition-all duration-500
                                 ${index === activeIndex ? 'opacity-100 scale-110' : 'opacity-0 scale-100'}`}></div>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="relative h-12 w-12 rounded-full object-cover transform transition-transform duration-500
                             hover:scale-110"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-primary">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 
                         ${index === activeIndex ? 'bg-primary scale-125' : 'bg-gray-300 hover:bg-gray-400'}`}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// Add these custom animations to your global CSS or Tailwind config
const styles = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  .animate-fade-in {
    animation: fadeIn 1s ease-out forwards;
  }
`;

// Add this style tag to your component
const styleTag = document.createElement('style');
styleTag.textContent = styles;
document.head.appendChild(styleTag);