import React, { useState } from 'react';
import { ShoppingCart, X } from 'lucide-react';

const PrivacyPolicy = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-y-auto">
      <div className="min-h-screen px-4 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
          <div className="sticky top-0 bg-white p-6 border-b flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900">Privacy Policy</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="p-6 space-y-6 text-gray-600">
            <div className="space-y-4">
              <p className="text-sm text-gray-500">Effective Date: November 25, 2024</p>
              <p className="text-sm text-gray-500">Last Updated: November 25, 2024</p>
              
              <p>
                Temba Deliveries ("we," "us," or "our") values your privacy and is committed to protecting 
                your personal information. This Privacy Policy explains how we collect, use, disclose, 
                and safeguard your information when you use our platform.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6">Summary</h3>
              <p>
                We collect certain data to make our app work smoothly, like your name, delivery address, 
                and location for accurate deliveries. This Privacy Policy explains what we collect, why 
                we collect it, how we use it, and your rights.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6">Information We Collect</h3>
              <div className="space-y-4 ml-4">
                <div>
                  <h4 className="font-semibold text-gray-900">Personal Information</h4>
                  <p>Name, email address, phone number, and delivery address when you create an account or place an order.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900">Device Information</h4>
                  <p>Device type, operating system, IP address, browser type, app usage data, and unique device identifiers.</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">Location Data</h4>
                  <p>Precise or approximate location data, if permission is granted, for enabling search functionality, 
                  matching you with nearby stores and riders, and facilitating deliveries.</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">Payment Information</h4>
                  <p>Details of payments made through M-Pesa to our Pay Bill.</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mt-6">Contact Us</h3>
              <p>
                If you have any questions or concerns about this Privacy Policy, please contact us:<br />
                Email: somil@gettemba.io<br />
                URL: https://gettemba.io/privacy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactForm = ({ onClose }: { onClose: () => void }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-y-auto">
      <div className="min-h-screen px-4 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
          <div className="sticky top-0 bg-white p-6 border-b flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

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
              <li><a href="#" className="text-white/80 hover:text-white">About Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-white">Help Center</a></li>
              <li>
                <button 
                  onClick={() => setShowContactForm(true)} 
                  className="text-white/80 hover:text-white"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setShowPrivacyPolicy(true)} 
                  className="text-white/80 hover:text-white"
                >
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {showPrivacyPolicy && (
        <PrivacyPolicy onClose={() => setShowPrivacyPolicy(false)} />
      )}
      {showContactForm && (
        <ContactForm onClose={() => setShowContactForm(false)} />
      )}
    </footer>
  );
};

export default Footer;
