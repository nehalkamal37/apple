import React, { useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./navbar";
import Footer from "./footer";
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
      <Navbar />

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
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#003f63]"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#003f63]"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#004e70] text-white px-4 py-2 rounded-full hover:bg-[#003f63] transition-colors"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#003f63]"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#004e70] text-white px-4 py-2 rounded-full hover:bg-[#003f63] transition-colors"
              >
                Submit Referral
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
     <Footer />
    </div>
  );
};

export default PrescriberPortal;
