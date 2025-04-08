import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Initialize AOS (if not already initialized in your app entry)
AOS.init({ once: true });

function PrivacyNotice() {
  // Define state for dropdown sections
  const [isCollectOpen, setIsCollectOpen] = useState(false);
  const [isUseOpen, setIsUseOpen] = useState(false);
  const [isRightsOpen, setIsRightsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f5f0e6]">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="/toollogo.png" // Replace with your logo path
              alt="Apple Specialty Pharmacy Logo"
              className="w-[150px] h-[90px] object-contain"
            />
          </div>
          <div className="hidden md:flex space-x-8">
      <a href="/" className="text-gray-600 hover:text-blue-600 transition-colors">Home</a>
      <a href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">About Us</a>
      <a href="/services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</a>
      <a href="/prescriber-portal" className="text-gray-600 hover:text-blue-600 transition-colors">Prescriber Portal</a>
      <a href="/patient" className="text-gray-600 hover:text-blue-600 transition-colors">Patient Resources</a>
      <a href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact Us</a>
      <a href="/privacy-notice" className="text-gray-600 hover:text-blue-600 transition-colors">Privacy Notice</a>
    </div>
          <div className="flex items-center">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
Sign Up
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Header */}
      <header className="py-16 bg-gradient-to-r from-[white] to-[#efe9dd]">
        <div className="container mx-auto px-6 text-center">
          <h1
            className="text-4xl md:text-5xl font-bold text-gray-900"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            Privacy Notice
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div
            className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            {/* Introduction */}
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Notice</h1>
            <p className="text-gray-700 text-lg">
              At Apple Specialty Pharmacy, we are committed to protecting your health information.
              This Privacy Notice describes how medical information about you may be used and disclosed,
              and how you can get access to this information.
            </p>

            {/* Dropdown Section: Information We Collect */}
            <div className="mt-8 border-t border-gray-200">
              <button
                onClick={() => setIsCollectOpen(!isCollectOpen)}
                className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
              >
                <span className="text-2xl font-bold text-gray-900">
                  Information We Collect
                </span>
                <i
                  className={`fa-solid ${isCollectOpen ? "fa-chevron-up" : "fa-chevron-down"} text-blue-600 text-2xl`}
                ></i>
              </button>
              {isCollectOpen && (
                <div className="pb-4 text-gray-700">
                  <ul className="list-disc list-inside space-y-2 text-lg">
                    <li>Personal information (name, address, DOB, etc.)</li>
                    <li>Health information provided by you, your physician, or healthcare provider</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Dropdown Section: How We Use Your Information */}
            <div className="mt-8 border-t border-gray-200">
              <button
                onClick={() => setIsUseOpen(!isUseOpen)}
                className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
              >
                <span className="text-2xl font-bold text-gray-900">
                  How We Use Your Information
                </span>
                <i
                  className={`fa-solid ${isUseOpen ? "fa-chevron-up" : "fa-chevron-down"} text-blue-600 text-2xl`}
                ></i>
              </button>
              {isUseOpen && (
                <div className="pb-4 text-gray-700">
                  <p className="text-lg">
                    We use your information to provide medication services, communicate with your providers, and meet legal and regulatory requirements.
                  </p>
                </div>
              )}
            </div>

            {/* Dropdown Section: Your Rights */}
            <div className="mt-8 border-t border-gray-200">
              <button
                onClick={() => setIsRightsOpen(!isRightsOpen)}
                className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
              >
                <span className="text-2xl font-bold text-gray-900">
                  Your Rights
                </span>
                <i
                  className={`fa-solid ${isRightsOpen ? "fa-chevron-up" : "fa-chevron-down"} text-blue-600 text-2xl`}
                ></i>
              </button>
              {isRightsOpen && (
                <div className="pb-4 text-gray-700">
                  <ul className="list-disc list-inside space-y-2 text-lg">
                    <li>Right to access your records</li>
                    <li>Right to request corrections</li>
                    <li>Right to request how and with whom we share information</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Dropdown Section: How to Contact Us */}
            <div className="mt-8 border-t border-gray-200">
              <button
                onClick={() => setIsContactOpen(!isContactOpen)}
                className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
              >
                <span className="text-2xl font-bold text-gray-900">
                  How to Contact Us
                </span>
                <i
                  className={`fa-solid ${isContactOpen ? "fa-chevron-up" : "fa-chevron-down"} text-blue-600 text-2xl`}
                ></i>
              </button>
              {isContactOpen && (
                <div className="pb-4 text-gray-700">
                  <p className="text-lg">
                    If you have any questions about this notice or our privacy practices, contact us at: <br />
                   <a href="/contact"><strong style={{ color:"blue"}}>Apple Specialty Pharmacy</strong></a>
                    <br />
                    [Address]
                    <br />
                    [Phone Number]
                    <br />
                    [Email Address]
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#efe9dd] py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center">
                <i className="fa-solid fa-heart text-blue-600 h-8 w-8"></i>
                <span className="ml-2 text-xl font-semibold text-gray-800">
                  Apple Specialty Pharmacy
                </span>
              </div>
              <p className="mt-4 text-gray-600">
                Providing quality pharmacy services since 2025
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Contact</h3>
              <div className="mt-4 space-y-4">
                <div className="flex items-center text-gray-600">
                  <i className="fa-solid fa-phone h-5 w-5 mr-2"></i>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <i className="fa-solid fa-location-dot h-5 w-5 mr-2"></i>
                  <span>123 Medical Center Dr, City, State</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Quick Links</h3>
              <div className="mt-4 space-y-2">
                <a href="/about" className="block text-gray-600 hover:text-blue-600">
                  About Us
                </a>
                <a href="/services" className="block text-gray-600 hover:text-blue-600">
                  Services
                </a>
                <a href="/team" className="block text-gray-600 hover:text-blue-600">
                  Team
                </a>
                <a href="/contact" className="block text-gray-600 hover:text-blue-600">
                  Contact
                </a>
              </div>
            </div>
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
            <p>&copy; 2025 Apple Specialty Pharmacy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default PrivacyNotice;
