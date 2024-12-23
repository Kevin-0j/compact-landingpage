import React, { useState, useEffect } from 'react';
import { ArrowRight, Globe, Users, ShoppingBag, Users2 } from 'lucide-react';
 
const stats = [
  {
    icon: Globe,
    value: '4.8/5',
    label: 'App Rating'
  },
  {
    icon: Users,
    value: '+100',
    label: 'Vendors'
  },
  {
    icon: ShoppingBag,
    value: '+100K',
    label: 'Orders'
  },
  {
    icon: Users2,
    value: '+2,000',
    label: 'Customers'
  }
];
 
export default function TembaDeliveries() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('temba-section');
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
    <div id="temba-section" className="py-24 bg-gradient-to-br from-primary/5 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`flex flex-col items-center text-center p-4 
                  transform transition-all duration-700
                  hover:scale-105 hover:shadow-lg rounded-xl
                  ${isVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-10 opacity-0'}
                  delay-${index * 100}`}
              >
                <div className="bg-primary/10 p-3 rounded-full mb-3 transform transition-transform duration-300 hover:rotate-12 hover:bg-primary/20">
                  <stat.icon className="h-6 w-6 text-primary transition-colors duration-300 hover:text-primary/80" />
                </div>
                <div className="text-3xl font-bold text-primary transition-all duration-300 hover:scale-110">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 mt-1 transition-colors duration-300 hover:text-primary">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          <div 
            className={`transform transition-all duration-700 hover:translate-x-2
              ${isVisible 
                ? 'translate-x-0 opacity-100' 
                : 'translate-x-10 opacity-0'}
              delay-500`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight transition-colors duration-300 hover:text-primary/80">
              Order Groceries Through Temba Deliveries
            </h2>
            <p className="mt-6 text-xl text-gray-600 transition-opacity duration-300 hover:opacity-80">
              Experience seamless grocery shopping with Temba Deliveries. Order your favorite products from local merchants and get them delivered to your doorstep.
            </p>
            <a
              href="https://quickcartafrica.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`group mt-8 inline-flex items-center bg-primary text-white px-8 py-3 rounded-lg 
                transition-all duration-500 hover:bg-primary/90 hover:shadow-lg hover:scale-105
                ${isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'}
                delay-700`}
            >
              Order Now
              <ArrowRight className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}