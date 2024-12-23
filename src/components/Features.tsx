import React, { useEffect } from 'react';
import { Store, ShoppingCart, Bike, BadgeDollarSign } from 'lucide-react';

const features = [
  {
    icon: Store,
    title: 'For Merchants',
    description: 'Manage inventory, fulfill orders, and access AI-powered financing based on your business performance'
  },
  {
    icon: ShoppingCart,
    title: 'For Consumers',
    description: 'Order groceries easily from local merchants with convenient delivery options'
  },
  {
    icon: Bike,
    title: 'For Riders',
    description: 'Earn money by fulfilling delivery orders with flexible scheduling'
  },
  {
    icon: BadgeDollarSign,
    title: 'Smart Financing',
    description: 'AI-driven credit scoring and instant loans for qualifying merchants'
  }
];

export default function Features() {
  useEffect(() => {
    // Smooth scroll functionality
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <div id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center opacity-0 animate-fade-in">
          <h2 className="text-3xl font-bold text-primary">One Platform, Three Ways to Grow</h2>
          <p className="mt-4 text-xl text-gray-600">
            Connecting merchants, consumers, and riders while providing smart financial solutions
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm 
                        hover:shadow-md transition-all duration-300 ease-in-out border border-gray-100
                        opacity-0 animate-slide-up hover:scale-105"
              style={{
                animationDelay: `${index * 200}ms`,
                animationFillMode: 'forwards'
              }}
            >
              <div className="relative">
                <feature.icon 
                  className="h-12 w-12 text-primary transition-transform duration-300 ease-in-out
                            hover:scale-110 animate-bounce-subtle" 
                  style={{
                    animationDelay: `${index * 200}ms`,
                    animationDuration: '2s',
                    animationIterationCount: 'infinite'
                  }}
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-primary">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
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

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes bounceSoft {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
  }

  .animate-fade-in {
    animation: fadeIn 1s ease-out forwards;
  }

  .animate-slide-up {
    animation: slideUp 0.8s ease-out forwards;
  }

  .animate-bounce-subtle {
    animation: bounceSoft 2s ease-in-out infinite;
  }
`;

// Add this style tag to your component
const styleTag = document.createElement('style');
styleTag.textContent = styles;
document.head.appendChild(styleTag);