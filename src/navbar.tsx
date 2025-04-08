import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="container mx-auto px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src="/toollogo.png"  // Replace with your logo path
              alt="Apple Specialty Pharmacy Logo"
              style={{ width: '150px', height: '90px' }}
              className="w-[150px] h-[90px] object-contain"
            />
          </Link>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">Home</Link>
          <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors">About Us</Link>
          <Link to="/services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</Link>
          <Link to="/prescriber-portal" className="text-gray-600 hover:text-blue-600 transition-colors">Prescriber Portal</Link>
          <Link to="/patient" className="text-gray-600 hover:text-blue-600 transition-colors">Patient Resources</Link>
          <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact Us</Link>
          <Link to="/privacy-notice" className="text-gray-600 hover:text-blue-600 transition-colors">Privacy Notice</Link>
        </div>
        {/* Desktop Sign Up Button */}
        <div className="hidden md:flex items-center">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
            Sign Up
          </button>
        </div>
        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 hover:text-blue-600 focus:outline-none"
          >
            {isOpen ? (
              // Close icon (X)
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4">
          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              About Us
            </Link>
            <Link
              to="/services"
              onClick={() => setIsOpen(false)}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Services
            </Link>
            <Link
              to="/prescriber-portal"
              onClick={() => setIsOpen(false)}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Prescriber Portal
            </Link>
            <Link
              to="/patient"
              onClick={() => setIsOpen(false)}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Patient Resources
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              to="/privacy-notice"
              onClick={() => setIsOpen(false)}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Privacy Notice
            </Link>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
