import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import TembaDeliveries from './components/TembaDeliveries';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        {/* Add global padding to account for the navbar */}
        <div className="pt-16">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Features />
                  <HowItWorks />
                  <TembaDeliveries />
                  <Testimonials />
                  <Footer />
                </>
              }
            />
            <Route path="/AboutUs" element={<AboutUs />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
