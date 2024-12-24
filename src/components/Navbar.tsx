import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo Section */}
          <div className="flex items-center">
            <ShoppingCart className="h-8 w-8 text-primary" aria-label="Temba Logo" />
            <Link to="/" className="ml-2 text-xl font-bold text-primary">
              Temba
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('features')}
              className="text-gray-600 hover:text-primary font-medium"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-gray-600 hover:text-primary font-medium"
            >
              How it Works
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-600 hover:text-primary font-medium"
            >
              Testimonials
            </button>
            <NavLink
              to="/AboutUs"
              className={({ isActive }) =>
                isActive ? 'text-primary font-medium' : 'text-gray-600 hover:text-primary'
              }
            >
              About Us
            </NavLink>
            <button
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-light transition-colors"
              onClick={() => window.open('https://quickcartafrica.com', '_blank', 'noopener,noreferrer')}
            >
              Temba Deliveries
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-gray-600 hover:text-primary focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Links */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="space-y-4 py-4 px-6">
            <button
              onClick={() => scrollToSection('features')}
              className="text-gray-600 hover:text-primary font-medium block"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-gray-600 hover:text-primary font-medium block"
            >
              How it Works
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-600 hover:text-primary font-medium block"
            >
              Testimonials
            </button>
            <NavLink
              to="/AboutUs"
              className={({ isActive }) =>
                isActive ? 'text-primary font-medium block' : 'text-gray-600 hover:text-primary block'
              }
            >
              About Us
            </NavLink>
            <button
              className="w-full bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-light transition-colors"
              onClick={() => {
                toggleMobileMenu();
                window.open('https://quickcartafrica.com', '_blank', 'noopener,noreferrer');
              }}
            >
              Temba Deliveries
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
