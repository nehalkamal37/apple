import React from 'react';
import { Heart, Clock, Phone, MapPin, ChevronRight, Stethoscope, Users, Calendar, ArrowRight } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
<React.Fragment>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
</React.Fragment>
import Navbar from './navbar';
import Footer from './footer';

AOS.init();

function Home() {
  return (

    <div className="min-h-screen bg-[#f5f0e6]">
      {/* Hero Section            <header className="bg-gradient-to-r from-[#f8f4ea] to-[#efe9dd]">
*/}

<header className="bg-gradient-to-r from-white to-[#efe9dd]">
  <div className="container mx-auto px-6 py-16 md:py-24">
    <div className="flex flex-col md:flex-row items-center">
      <div className="md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Empowering Health Through Personalized Pharmacy Care
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          At our pharmacy, our mission is to improve lives by providing innovative medication management, expert guidance, and unwavering patient support. We believe in accessible healthcare that empowers every individual on their journey to optimal well-being.
        </p>
        <div className="mt-8 flex space-x-4">
      <a href='about'><button className="bg-gradient-to-r from-[#004e70] to-[#003f63] text-white px-8 py-3 rounded-full hover:opacity-90 transition-colors flex items-center">
        Learn More <ChevronRight className="ml-2 h-5 w-5" />
        </button>
</a>
  
  <a href='contact'><button className="bg-[#e8e2d5] text-[#004e70] border border-[#e8e2d5] px-8 py-3 rounded-full hover:bg-[#efe9dd] transition-colors">
    Contact Us
  </button></a>
</div>
{/*
        <div className="mt-8 flex space-x-4">
          <button className="bg-[#e8e2d5] text-blue-600 border border-[#e8e2d5] px-8 py-3 rounded-full hover:bg-[#efe9dd] transition-colors flex items-center">
            Learn More <ChevronRight className="ml-2 h-5 w-5" />
          </button>
          <button className="bg-[#e8e2d5] text-blue-600 border border-[#e8e2d5] px-8 py-3 rounded-full hover:bg-[#efe9dd] transition-colors">
            Contact Us
          </button>
        </div>
        */}
      </div>
      <div className="md:w-1/2 mt-12 md:mt-0">
        <img 
          src="/medical-17.jpg" 
          alt="Medical professionals"
          style={{ maxWidth: '90%', height: 288 }}
          className="rounded-2xl shadow-xl"
        />
      </div>
    </div>
  </div>
</header>


{/*
      <header className="bg-gradient-to-r from-[white] to-[#efe9dd]">
        
        <div className="container mx-auto px-6 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
    Empowering Health Through Personalized Pharmacy Care
  </h1>
  <p className="mt-4 text-xl text-gray-600">
    At our pharmacy, our mission is to improve lives by providing innovative medication management, expert guidance, and unwavering patient support. We believe in accessible healthcare that empowers every individual on their journey to optimal well-being.
  </p>
  <div className="mt-8 flex space-x-4">
    <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors flex items-center">
      Learn More <ChevronRight className="ml-2 h-5 w-5" />
    </button>
    <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-[#e8e2d5] transition-colors">
      Contact Us
    </button>
  </div>
</div>

            <div className="md:w-1/2 mt-12 md:mt-0">
              <img 
            //  src="car.png"
                src="/medical-17.jpg"
             // src="https://wallpapercrafter.com/desktop/289320-medic-hospital-laboratory-medical-health-doctor.jpg"
               // src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80"
                alt="Medical professionals"
                style={{ maxWidth: '90%', height: 288 }}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </header>
*/}
      {/* Features Section */}
      <section className="py-16 bg-[#f5f0e6]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/*  <div className="p-6 bg-[#f8f4ea] rounded-xl">  */}
          <div className="p-6 bg-[#fbf8f1] rounded-xl">
          <Clock className="h-12 w-12 text-[#004e70]" />

              <i className="fa-solid fa-sync-alt h-12 w-12 text-blue-600"></i>

              <h3 className="mt-4 text-xl font-semibold text-gray-900"> Refill process</h3>
              <p className="mt-2 text-gray-600"> Streamlined, convenient, and secure prescription refills.
              </p>
            </div>
            <div className="p-6 bg-[#fbf8f1] rounded-xl">
              <Stethoscope className="h-12 w-12 text-[#004e70]" />
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Specialty medications offered</h3>
              <p className="mt-2 text-gray-600"> For Dermatology, Rheumatology, GI and more tailored specialty pharmacy services.
              </p>
            </div>
            <div className="p-6 bg-[#fbf8f1] rounded-xl">
              <Users className="h-12 w-12 text-[#004e70]" />
              <h3 className="mt-4 text-xl font-semibold text-gray-900"> Patient support services</h3>
              <p className="mt-2 text-gray-600">Personalized assistance from our expert pharmacy team for all your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-[#efe9dd]">
  <div className="container mx-auto px-6">
    <h2 className="text-3xl font-bold text-center text-gray-900">Our Services</h2>
    <p className="mt-4 text-xl text-center text-gray-600 max-w-2xl mx-auto">
      Comprehensive pharmacy services designed for your convenience and well-being.
    </p>
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: "Specialty Medications",
          description:
            "Expert handling and management of specialized medications for chronic conditions.",
          icon: "fa-solid fa-pills",
        },
        {
          title: "Prescription Refills",
          description:
            "Efficient and secure refill process ensuring you never run out of necessary medications.",
          icon: "fa-solid fa-sync-alt",
        },
        {
          title: "Shipping & Delivery",
          description:
            "Fast, discreet, and reliable delivery services straight to your doorstep.",
          icon: "fa-solid fa-truck",
        },
        {
          title: "Patient Support",
          description:
            "Dedicated support for medication guidance, managing side effects, and inquiries.",
          icon: "fa-solid fa-headset",
        },
        {
          title: "Insurance Coordination",
          description:
            "Assistance with insurance claims and financial aid options to manage your costs.",
          icon: "fa-solid fa-file-medical",
        },
        {
          title: "Medication Therapy Management",
          description:
            "Comprehensive reviews to optimize your medication regimen for maximum efficacy.",
          icon: "fa-solid fa-user-md",
        },
      
      ].map((service, index) => (
        <div
          key={index}
          className="bg-[#f8f4ea] p-6 rounded-xl shadow-sm hover:shadow-lg transition transform hover:scale-105"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay={index * 100}
        >
          <div className="flex items-center justify-center">
            <i className={`${service.icon} text-blue-600 text-3xl`}></i>
          </div>
          <h3 className="mt-4 text-xl font-semibold text-gray-900 text-center">
            {service.title}
          </h3>
          <p className="mt-2 text-gray-600 text-center">{service.description}</p>
          <a href="#"
             className="mt-4 inline-block text-[#004e70] flex items-center justify-center hover:underline">
                                Learn more <ArrowRight className="ml-2 h-4 w-4" />

          </a>
        </div>
      ))}
    </div>
  </div>
</section>


{/*
      <section id="services" className="py-16 bg-[#efe9dd]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900">Our Services</h2>
          <p className="mt-4 text-xl text-center text-gray-600 max-w-2xl mx-auto">
            Comprehensive healthcare services tailored to your needs
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Primary Care',
              'Specialized Treatment',
              'Emergency Care',
              'Laboratory Services',
              'Preventive Care',
              'Telemedicine'
            ].map((service, index) => (
              <div key={index} className="bg-[#f8f4ea] p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900">{service}</h3>
                <p className="mt-2 text-gray-600">Professional healthcare services with modern equipment and facilities</p>
                <a href="#" className="mt-4 text-blue-600 flex items-center">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
*/}
      {/* Appointment Section */}
      <section className="py-16 bg-[#f5f0e6]">
        <div className="container mx-auto px-6">
        <div className="bg-gradient-to-r from-[#004e70] to-[#00344f] rounded-2xl p-8 md:p-12">
    {/* Your content here */}

            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold text-white">Ready to Get Started?</h2>
                <p className="mt-4 text-xl text-blue-100">
                  Schedule your appointment today and take the first step towards better health
                </p>
              </div>
              <div className="mt-8 md:mt-0">
                <button className="bg-[#f8f4ea] text-blue-600 px-8 py-3 rounded-full hover:bg-[#e8e2d5] transition-colors flex items-center">
                  Book Appointment <Calendar className="ml-2 h-5 w-5" />
                </button>
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

export default Home;