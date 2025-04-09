import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./navbar";
import Footer from "./footer";
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
      <Navbar />

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
                   <a href="/contact"><strong style={{ color:"#004e70"}}>Apple Specialty Pharmacy</strong></a>
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
     <Footer />
    </div>
  );
}

export default PrivacyNotice;
