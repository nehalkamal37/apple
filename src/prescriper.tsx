import React, { useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Initialize AOS (can also be done in your main entry file)
AOS.init({ once: true });

const PrescriberPortal = () => {
  // Login form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Referral form file state
  const [selectedFile, setSelectedFile] = useState(null);
  const [referralNotes, setReferralNotes] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Add secure login logic here (e.g., API call)
    alert(`Logging in with email: ${email}`);
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleReferralSubmit = (e) => {
    e.preventDefault();
    // Handle file upload and referral details submission
    alert(`Referral submitted: ${selectedFile ? selectedFile.name : "No file"} - ${referralNotes}`);
  };

  return (
    <div className="min-h-screen bg-[#f5f0e6]">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/">
              <img
                src="/toollogo.png" // Replace with your actual logo path
                alt="Apple Specialty Pharmacy Logo"
                className="w-[150px] h-[90px] object-contain"
              />
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
              About Us
            </Link>
            <Link to="/services" className="text-gray-600 hover:text-blue-600 transition-colors">
              Services
            </Link>
            <Link
              to="/prescriber-portal"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Prescriber Portal
            </Link>
            <Link
              to="/patient-resources"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Patient Resources
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
              Contact Us
            </Link>
            <Link
              to="/privacy-notice"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Privacy Notice
            </Link>
          </div>
          <div className="flex items-center">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
              Book Appointment
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
            Prescriber Portal
          </h1>
          <p
            className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            Secure login and referral form uploads designed for prescribers.
          </p>
        </div>
      </header>

      {/* Secure Login Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div
            className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-xl"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Prescriber Login</h2>
            <form onSubmit={handleLoginSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-lg font-medium mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-lg font-medium mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Referral Form Upload Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div
            className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-xl"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Referral Form Upload</h2>
            <p className="text-gray-700 mb-4">
              Please upload your referral form (PDF format) or complete the online form below.
            </p>
            <form onSubmit={handleReferralSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-lg font-medium mb-2" htmlFor="referralFile">
                  Upload PDF
                </label>
                <input
                  type="file"
                  id="referralFile"
                  accept=".pdf"
                  onChange={handleFileChange}
                  className="w-full text-gray-700"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-lg font-medium mb-2" htmlFor="referralNotes">
                  Referral Details
                </label>
                <textarea
                  id="referralNotes"
                  rows="4"
                  placeholder="Enter referral details..."
                  value={referralNotes}
                  onChange={(e) => setReferralNotes(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
              >
                Submit Referral
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#efe9dd] py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center">
                <img
                  src="/toollogo.png"
                  alt="Apple Specialty Pharmacy Logo"
                  className="w-[150px] h-[90px] object-contain"
                />
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
                <Link to="/about" className="block text-gray-600 hover:text-blue-600">
                  About Us
                </Link>
                <Link to="/services" className="block text-gray-600 hover:text-blue-600">
                  Services
                </Link>
                <Link to="/team" className="block text-gray-600 hover:text-blue-600">
                  Team
                </Link>
                <Link to="/contact" className="block text-gray-600 hover:text-blue-600">
                  Contact
                </Link>
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
};

export default PrescriberPortal;
