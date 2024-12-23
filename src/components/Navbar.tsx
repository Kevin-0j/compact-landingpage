import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <ShoppingCart className="h-8 w-8 text-primary" />
            <Link to="/" className="ml-2 text-xl font-bold text-primary">
              Temba
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {/* Replace section links with routing */}
            <Link to="/" className="text-gray-600 hover:text-primary">
              Features
            </Link>
            <Link to="/" className="text-gray-600 hover:text-primary">
              How it Works
            </Link>
            <Link to="/" className="text-gray-600 hover:text-primary">
              Testimonials
            </Link>
            <Link to="/AboutUs" className="text-gray-600 hover:text-primary">
              About Us
            </Link>
            <button
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-light transition-colors"
              onClick={() => window.open('https://quickcartafrica.com', '_blank', 'noopener,noreferrer')}
            >
              Temba Deliveries
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
