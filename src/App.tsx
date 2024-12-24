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
import ContactPage from './components/ContactPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
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
            <Route path="/ContactPage" element={<ContactPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
