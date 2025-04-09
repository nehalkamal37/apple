// ContactUs.jsx
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./navbar";
import Footer from "./footer";

// Optionally using Font Awesome; if using Lucide, import icons accordingly
// For demonstration, we'll use Font Awesome classes

// Initialize AOS
AOS.init({ once: true });

function ContactUs() {
  return (
    <div className="min-h-screen bg-[#f5f0e6]">
      {/* Navigation */}
      <Navbar />

      {/* Hero Header */}
      <header className="py-16 bg-gradient-to-r from-[white] to-[#efe9dd]">
        <div className="container mx-auto px-6">
          <h1
            className="text-4xl md:text-5xl font-bold text-center text-gray-900"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            Contact Us
          </h1>
          <p
            className="mt-4 text-xl text-center text-gray-600 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            Get in touch with us. Whether you have questions or need to schedule a consultation, we’re here to help.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div data-aos="fade-right" data-aos-duration="600">
              <div className="bg-white p-8 rounded-xl shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Send Us a Message</h3>
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700">First Name</label>
                      <input
                        type="text"
                        placeholder="Your first name"
                        className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-[#004e70]"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700">Last Name</label>
                      <input
                        type="text"
                        placeholder="Your last name"
                        className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-[#004e70]"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-gray-700">Email</label>
                      <input
                        type="email"
                        placeholder="Your email address"
                        className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-[#004e70]"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-gray-700">Message</label>
                      <textarea
                        rows={5}
                        placeholder="Your message"
                        className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-[#004e70]"
                      ></textarea>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Your data is protected by HIPAA-compliant encryption.
                  </p>
                  <button
                    type="submit"
                    className="mt-4 bg-[#004e70] text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info, Hours & Map */}
            <div data-aos="fade-left" data-aos-duration="600">
              <div className="space-y-8">
                {/* Contact Information */}
                <div className="bg-white p-8 rounded-xl shadow-xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h3>
                  <p className="flex items-center text-gray-700">
                    <i className="fa-solid fa-phone mr-2"></i> +1 (555) 123-4567
                  </p>
                  <p className="flex items-center text-gray-700 mt-2">
                    <i className="fa-solid fa-fax mr-2"></i> Fax: +1 (555) 987-6543
                  </p>
                  <p className="flex items-center text-gray-700 mt-2">
                    <i className="fa-solid fa-envelope mr-2"></i> pharmacy@example.com
                  </p>
                </div>

                {/* Hours of Operation */}
                <div className="bg-white p-8 rounded-xl shadow-xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Hours of Operation</h3>
                  <ul className="text-gray-700">
                    <li>Monday - Friday: 8:00 AM - 8:00 PM</li>
                    <li>Saturday: 9:00 AM - 5:00 PM</li>
                    <li>Sunday: Closed</li>
                  </ul>
                </div>

                {/* Google Maps Location */}
                <div className="bg-white p-6 rounded-xl shadow-xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Location</h3>
                  <div className="w-full h-64">
                    <iframe
                      title="Google Map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.087987033748!2d-122.40137068468181!3d37.79361717975674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064a5c242b5%3A0x4c5b4b2d146e4654!2sSalesforce%20Tower!5e0!3m2!1sen!2sus!4v1616612207621!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      aria-hidden="false"
                      tabIndex="0"
                      className="rounded-xl shadow-lg"
                    ></iframe>
                  </div>
                </div>
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

export default ContactUs;
