import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Fixed navbar with backdrop and shadow
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
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
          <Link to="/" className="text-gray-600 hover:text-[#003f63] transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-[#003f63] transition-colors">
            About Us
          </Link>
      
          <Link to="/prescriber-portal" className="text-gray-600 hover:text-[#003f63] transition-colors">
            Prescriber Portal
          </Link>
          <Link to="/patient" className="text-gray-600 hover:text-[#003f63] transition-colors">
            Patient Resources
          </Link>
          <Link to="/contact" className="text-gray-600 hover:text-[#003f63] transition-colors">
            Contact Us
          </Link>
          <Link to="/privacy-notice" className="text-gray-600 hover:text-[#003f63] transition-colors">
            Privacy Notice
          </Link>
        </div>
        {/* Desktop Sign In Button */}
        <div className="hidden md:flex items-center">
          <button className="bg-gradient-to-r from-[#004e70] to-[#003f63] text-white px-6 py-2 rounded-full hover:opacity-90 transition-colors flex items-center">
            Sign In <ChevronRight className="ml-2 h-5 w-5" />
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
        <div className="md:hidden bg-white/90 backdrop-blur-md">
          <div className="px-6 py-4 flex flex-col space-y-4">
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
            <button className="bg-gradient-to-r from-[#004e70] to-[#003f63] text-white px-6 py-2 rounded-full hover:opacity-90 transition-colors flex items-center">
            Sign In <ChevronRight className="ml-2 h-5 w-5" />
          </button>
          </div>
         
        </div>
      )}
    </nav>
  );
};

export default Navbar;
