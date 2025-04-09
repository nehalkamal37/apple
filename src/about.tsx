import {
  Heart,
  Phone,
  MapPin,
  ChevronRight,
  Calendar,
} from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './footer';
// Initialize AOS for scroll animations.
AOS.init({ once: true });

function AboutUs() {
  return (
    <div className="min-h-screen bg-[#f5f0e6]">
      {/* Navigation */}

      {/* About Us Hero Section */}
      <header className="bg-gradient-to-r from-[white] to-[#efe9dd]">
        <div className="container mx-auto px-6 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center">
            {/* Text Content */}
            <div className="md:w-1/2" data-aos="fade-right" data-aos-duration="800">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                About Us
              </h1>
              <p className="mt-4 text-xl text-gray-600">
                At MediCare, we are dedicated to empowering your health through personalized pharmacy care. Our mission is to provide innovative medication management, expert guidance, and compassionate support tailored to each individual.
              </p>
              <p className="mt-4 text-gray-600">
                We combine modern technology with a commitment to excellence. We believe every patient deserves accessible, reliable, and personalized care that makes a meaningful difference.
              </p>
              <div className="mt-8 flex space-x-4">
              <a href="#vision">
  <button className="bg-gradient-to-r from-[#004e70] to-[#003f63] text-white px-6 py-4 rounded-full hover:opacity-90 transition-colors flex items-center">
    Learn More <ChevronRight className="ml-2 h-5 w-5" />
  </button>
</a>

   
            <a href="#team">   
            <button className="bg-[#e8e2d5] text-[#004e70] border border-[#e8e2d5] px-8 py-4 rounded-full hover:bg-[#efe9dd] transition-colors">
            Our team
                </button>
                </a>
              </div>
            </div>
            {/* Image */}
            <div className="md:w-1/2 mt-12 md:mt-0" data-aos="fade-left" data-aos-duration="800">
              <img
                src="/aboutteam.jpg" // Replace with an actual image path.
                alt="Our Team"
                style={{ maxWidth: '100%' , height: 333 }}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Mission & Vision Section */}
      {/* Enhanced Mission & Vision Section with Additional Height and Styling */}
<section id="vision" className="py-24 bg-gray-50">
  <div className="container mx-auto px-6">
    <h2
      className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      Our Mission & Vision
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Our Mission */}
      <div
        className="group p-10 bg-gradient-to-r from-white to-gray-100 rounded-2xl shadow-xl transform transition ease-out duration-300 hover:scale-105"
        data-aos="zoom-in"
        data-aos-duration="600"
        data-aos-delay="100"
      >
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">Our Mission</h3>
        <p className="mt-4 text-gray-700 leading-relaxed transform transition-all duration-300 group-hover:scale-110">
          To empower our community by providing accessible, innovative, and personalized pharmacy care that fosters health and wellness.
        </p>
      </div>
      {/* Our Vision */}
      <div
        className="group p-10 bg-gradient-to-r from-white to-gray-100 rounded-2xl shadow-xl transform transition ease-out duration-300 hover:scale-105"
        data-aos="zoom-in"
        data-aos-duration="600"
        data-aos-delay="200"
      >
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">Our Vision</h3>
        <p className="mt-4 text-gray-700 leading-relaxed transform transition-all duration-300 group-hover:scale-110">
          To be the leading pharmacy in transforming healthcare delivery through excellence, innovation, and compassionate service.
        </p>
      </div>
    </div>
  </div>
</section>

   

{/* Enhanced Mission & Vision Section 
<section className="py-16">
  <div className="container mx-auto px-6">
    <h2
      className="text-4xl font-bold text-center text-gray-900 mb-12"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      Our Mission & Vision
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div
        className="p-8 bg-gradient-to-r from-white to-gray-100 rounded-2xl shadow-2xl transform transition ease-out duration-300 hover:scale-105"
        data-aos="zoom-in"
        data-aos-duration="600"
        data-aos-delay="100"
      >
        <h3 className="text-2xl font-semibold text-gray-900">Our Mission</h3>
        <p className="mt-4 text-gray-700 leading-relaxed">
          To empower our community by providing accessible, innovative, and personalized pharmacy care that fosters health and wellness.
        </p>
      </div>
      <div
        className="p-8 bg-gradient-to-r from-white to-gray-100 rounded-2xl shadow-2xl transform transition ease-out duration-300 hover:scale-105"
        data-aos="zoom-in"
        data-aos-duration="600"
        data-aos-delay="200"
      >
        <h3 className="text-2xl font-semibold text-gray-900">Our Vision</h3>
        <p className="mt-4 text-gray-700 leading-relaxed">
          To be the leading pharmacy in transforming healthcare delivery through excellence, innovation, and compassionate service.
        </p>
      </div>
    </div>
  </div>
</section>

*/}

      {/* Our Team Section (Optional) */}
      <section id='team' className="py-16 bg-[#f8f4ea]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8" data-aos="fade-up">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center" data-aos="zoom-in" data-aos-duration="600">
              <img
                src="/t2.jpg" // Replace with actual image paths.
                alt="Team Member"
                className="w-40 h-40 rounded-full shadow-lg"
              />
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Dr. Sarah Alex, PharmD</h3>
              <p className="mt-2 text-gray-600 text-center">
                A clinical pharmacist dedicated to delivering expert medication management and personalized patient care.
              </p>
            </div>
            <div className="flex flex-col items-center" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="100">
              <img
                src="/t1.jpg"
                alt="Team Member"
                className="w-40 h-40 rounded-full shadow-lg"
              />
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Dr. Sam Nick</h3>
              <p className="mt-2 text-gray-600 text-center">
                Specialist in telepharmacy consultations and prescription management ensuring optimal patient safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      
      <Footer />

     
    </div>
  );
}

export default AboutUs;
