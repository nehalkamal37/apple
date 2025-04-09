import React from 'react';
import { Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#efe9dd] py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Company Info */}
          <div>
            <div className="flex items-center">
              <img
                src="/toollogo.png"
                alt="Apple Specialty Pharmacy Logo"
                className="w-[100px] h-[130px] object-contain"
              />
            </div>
            <p className="mt-2 text-gray-600 text-sm">
              Providing quality healthcare services since 2025
            </p>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-base font-semibold text-gray-900">Contact</h3>
            <div className="mt-2 space-y-2">
              <div className="flex items-center text-gray-600 text-sm">
                <Phone className="h-4 w-4 mr-1" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-600 text-sm">
                <MapPin className="h-4 w-4 mr-1" />
                <span>123 Medical Center Dr, City, State</span>
              </div>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold text-gray-900">Quick Links</h3>
            <div className="mt-2 space-y-1">
              <a href="/about" className="block text-gray-600 hover:text-blue-600 text-sm">
                About Us
              </a>
              <a href="/services" className="block text-gray-600 hover:text-blue-600 text-sm">
                Services
              </a>
              <a href="/doctors" className="block text-gray-600 hover:text-blue-600 text-sm">
                Doctors
              </a>
              <a href="/contact" className="block text-gray-600 hover:text-blue-600 text-sm">
                Contact
              </a>
            </div>
          </div>
          {/* Placeholder for Additional Content or Newsletter */}
          <div>
            {/* You can add additional content here or leave it empty for a cleaner look */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
