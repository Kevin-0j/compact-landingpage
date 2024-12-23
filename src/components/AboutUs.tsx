import React from 'react';
import { Building2,Users, Target } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.1&auto=format&fit=crop&w=2000&q=80"
            alt="Fresh produce market"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#01217A] bg-opacity-75"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Save more with GO!
          </h1>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <p className="text-xl text-gray-600">
            We give you the lowest prices on all your grocery needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Mission Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-[#01217A] text-white">
                <Building2 className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-[#01217A]">Our Mission</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To digitize Africa's on-demand grocery SMEs, fostering profitability across the continent. 
              By empowering local retailers with consistent customer demand and access to working capital, 
              we strive to transform their businesses and drive economic growth.
            </p>
          </div>

          {/* Goal Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-[#01217A] text-white">
                <Target className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-[#01217A]">Our Goal</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To collaborate closely with over 4.4 million grocery retailers across Africa. 
              We aim to equip them with comprehensive customer data and efficient point-of-sale solutions, 
              empowering them to achieve profitability. Additionally, we aspire to develop robust inventory 
              management tools that enhance accountability for their sales.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}