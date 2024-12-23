import React, { useState, useEffect } from 'react';

const userTypes = [
  {
    title: 'Merchants',
    steps: [
      'Register your store and upload inventory',
      'Receive and fulfill orders',
      'Access AI-powered financing',
      'Grow your business'
    ]
  },
  {
    title: 'Consumers',
    steps: [
      'Browse local stores',
      'Place your order',
      'Track delivery',
      'Receive groceries'
    ]
  },
  {
    title: 'Riders',
    steps: [
      'Sign up as a rider',
      'Accept delivery requests',
      'Complete deliveries',
      'Get paid instantly'
    ]
  }
];

export default function HowItWorks() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('how-it-works');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div id="how-it-works" className="py-24 bg-primary/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={`text-center transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-3xl font-bold text-primary">How It Works</h2>
          <p className="mt-4 text-xl text-gray-600">
            Simple steps for each user type to get started
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {userTypes.map((type, typeIndex) => (
            <div 
              key={typeIndex}
              className={`bg-white rounded-xl p-6 shadow-md transform 
                transition-all duration-500 group
                hover:scale-105 hover:shadow-xl hover:-translate-y-2
                cursor-pointer
                ${
                  isVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-10 opacity-0'
                }
                delay-${typeIndex * 200}`}
            >
              <h3 className="text-2xl font-bold text-primary mb-6 transition-colors duration-300 group-hover:text-primary/80">
                {type.title}
              </h3>
              <div className="space-y-6">
                {type.steps.map((step, stepIndex) => (
                  <div 
                    key={stepIndex}
                    className={`flex items-start transform transition-all
                      duration-500 group-hover:translate-x-1
                      delay-${(typeIndex * 4 + stepIndex) * 100}
                      ${
                        isVisible 
                          ? 'translate-x-0 opacity-100' 
                          : 'translate-x-10 opacity-0'
                      }`}
                  >
                    <span className="flex-shrink-0 w-8 h-8 bg-primary/10 text-primary 
                      rounded-full flex items-center justify-center font-bold 
                      transition-all duration-300
                      group-hover:bg-primary/20 group-hover:scale-110">
                      {stepIndex + 1}
                    </span>
                    <p className="ml-4 text-gray-600 transition-colors duration-300 
                      group-hover:text-gray-900">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}