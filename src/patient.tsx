// PatientResources.jsx
import React from "react";
import { ChevronRight, ArrowRight } from "lucide-react"; // For the arrow in links if needed
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./navbar";
import Footer from "./footer";
// Initialize AOS animations once (you may also place this in your main entry file)
AOS.init({ once: true });

function PatientResources() {
  return (
    <div className="min-h-screen bg-[#f5f0e6]">
      {/* Navigation */}
     <Navbar />

      {/* Page Header */}
      <header className="py-16 bg-gradient-to-r from-[white] to-[#efe9dd]">
        <div className="container mx-auto px-6">
          <h1
            className="text-4xl md:text-5xl font-bold text-center text-gray-900 "
            data-aos="fade-up"
            data-aos-duration="800"
          >
            Patient Resources
          </h1>
          <p
            className="mt-4 text-xl text-center text-gray-600 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            Explore essential tools and information to help you manage your healthcare journey.
          </p>
        </div>
      </header>

      {/* Resources Section */}
      {/* Enhanced Resources Section - Professional Hover Scaling Without Color Shift */}
<section
  id="patient-resources"
  className="py-24 bg-gray-50"
  data-aos="fade-up"
  data-aos-duration="800"
>
  <div className="container mx-auto px-6">
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* FAQs */}
      <div
        className="group relative p-10 bg-white rounded-3xl shadow-md transition-all duration-300 hover:scale-105 hover:shadow-2xl"
        data-aos="zoom-in"
        data-aos-duration="600"
        data-aos-delay="100"
      >
        <div className="relative flex flex-col items-center">
          <i className="fa-solid fa-question-circle text-blue-600 text-4xl"></i>
          <h3 className="mt-6 text-2xl font-bold text-gray-900">FAQs</h3>
          <p className="mt-4 text-gray-600 text-center">
            Find answers to common questions about our pharmacy services.
          </p>
          <a
            href="/financial-assistance"
            className="mt-6 inline-flex items-center text-[#003f63] font-medium hover:underline"
          >
            Learn more <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Insurance Coverage Info */}
      <div
        className="group relative p-10 bg-white rounded-3xl shadow-md transition-all duration-300 hover:scale-105 hover:shadow-2xl"
        data-aos="zoom-in"
        data-aos-duration="600"
        data-aos-delay="200"
      >
        <div className="relative flex flex-col items-center">
          <i className="fa-solid fa-file-contract text-blue-600 text-4xl"></i>
          <h3 className="mt-6 text-2xl font-bold text-gray-900">
            Insurance Coverage
          </h3>
          <p className="mt-4 text-gray-600 text-center">
            Learn details on accepted plans and coverage options.
          </p>
          <a
            href="/financial-assistance"
            className="mt-6 inline-flex items-center text-[#003f63] font-medium hover:underline"
          >
            Learn more <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Financial Assistance Programs */}
      <div
        className="group relative p-10 bg-white rounded-3xl shadow-md transition-all duration-300 hover:scale-105 hover:shadow-2xl"
        data-aos="zoom-in"
        data-aos-duration="600"
        data-aos-delay="300"
      >
        <div className="relative flex flex-col items-center">
          <i className="fa-solid fa-hand-holding-usd text-blue-600 text-4xl"></i>
          <h3 className="mt-6 text-2xl font-bold text-gray-900">
            Financial Assistance
          </h3>
          <p className="mt-4 text-gray-600 text-center">
            Discover support programs to help manage your medication costs.
          </p>
          <a
            href="/financial-assistance"
            className="mt-6 inline-flex items-center text-[#003f63] font-medium hover:underline"
          >
            Learn more <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Educational Materials */}
      <div
        className="group relative p-10 bg-white rounded-3xl shadow-md transition-all duration-300 hover:scale-105 hover:shadow-2xl"
        data-aos="zoom-in"
        data-aos-duration="600"
        data-aos-delay="400"
      >
        <div className="relative flex flex-col items-center">
          <i className="fa-solid fa-book-open text-blue-600 text-4xl"></i>
          <h3 className="mt-6 text-2xl font-bold text-gray-900">
            Educational Materials
          </h3>
          <p className="mt-4 text-gray-600 text-center">
            Access trusted guides, resources, and information about health and medications.
          </p>
          <a
            href="/financial-assistance"
            className="mt-6 inline-flex items-center text-[#003f63] font-medium hover:underline"
          >
            Learn more <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

  




      {/* Footer */}
      <Footer />
     
    </div>
  );
}

export default PatientResources;
