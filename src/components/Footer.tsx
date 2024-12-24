// Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

const Footer = () => {
  const handlePrivacyPolicy = () => {
    window.open('https://gettemba.io/privacy', '_blank');
  };

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <ShoppingCart className="h-8 w-8 text-white" />
              <span className="ml-2 text-xl font-bold">Temba</span>
            </div>
            <p className="mt-4 text-white/80">
              Making grocery shopping accessible and affordable for everyone.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/AboutUs" className="text-white/80 hover:text-white">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/ContactPage" className="text-white/80 hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <button 
                  onClick={handlePrivacyPolicy} 
                  className="text-white/80 hover:text-white"
                >
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;