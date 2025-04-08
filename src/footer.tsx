import React from 'react';
import { Heart, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#efe9dd] py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center">
            <div className="flex items-center">
                <img
                  src="/toollogo.png"
                  alt="Apple Specialty Pharmacy Logo"
                  className="w-[150px] h-[190px] object-contain"
                />
              </div>
            </div>
            <p className="mt-4 text-gray-600">
              Providing quality healthcare services since 2025
            </p>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Contact</h3>
            <div className="mt-4 space-y-4">
              <div className="flex items-center text-gray-600">
                <Phone className="h-5 w-5 mr-2" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin className="h-5 w-5 mr-2" />
                <span>123 Medical Center Dr, City, State</span>
              </div>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Quick Links</h3>
            <div className="mt-4 space-y-2">
              <a href="/about" className="block text-gray-600 hover:text-blue-600">
                About Us
              </a>
              <a href="/services" className="block text-gray-600 hover:text-blue-600">
                Services
              </a>
              <a href="/doctors" className="block text-gray-600 hover:text-blue-600">
                Doctors
              </a>
              <a href="/contact" className="block text-gray-600 hover:text-blue-600">
                Contact
              </a>
            </div>
          </div>
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Newsletter</h3>
            <p className="mt-4 text-gray-600">
              Subscribe to our newsletter for health tips and updates.
            </p>
            <div className="mt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-full border border-gray-300 bg-[#f8f4ea] text-gray-900 focus:outline-none focus:border-blue-600"
              />
              <button className="mt-2 w-full bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-600">
          <p>&copy; 2025 MediCare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
