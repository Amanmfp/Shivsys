import React from 'react';
import { useState } from 'react';
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is imported
import { FaBars, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

// Footer Component
const Footer = () => (
  <footer className="bg-primary text-light py-5">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap gap-8">
        <div className="w-full md:w-1/2 lg:w-1/4">
          <p className="text-white text-lg font-semibold mb-4">Address</p>
          <p><FaMapMarkerAlt className="inline mr-2"/>Sheridan, Wyoming, USA</p>
          <p><FaMapMarkerAlt className="inline mr-2"/>Greater Noida, Uttar Pradesh, India</p>
          <p><FaPhoneAlt className="inline mr-2"/>+12672183807</p>
          <p><FaEnvelope className="inline mr-2"/>info@shivsys.com</p>
          <div className="flex gap-2 mt-2">
            <a href="#" className="text-light border border-light p-2 rounded-full"><FaTwitter /></a>
            <a href="#" className="text-light border border-light p-2 rounded-full"><FaFacebookF /></a>
            <a href="#" className="text-light border border-light p-2 rounded-full"><FaInstagram /></a>
            <a href="#" className="text-light border border-light p-2 rounded-full"><FaLinkedinIn /></a>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4">
          <p className="text-white text-lg font-semibold mb-4">Quick Link</p>
          <a href="about.html" className="block text-light hover:underline">About Us</a>
          <a href="contact.html" className="block text-light hover:underline">Contact Us</a>
          <a href="contact.html" className="block text-light hover:underline">Privacy Policy</a>
          <a href="careerpage.html" className="block text-light hover:underline">Career</a>
        </div>
      </div>
      <div className="text-center text-light mt-6">
        <p>&copy; <a href="#" className="border-b border-light">Shivsys</a>, All Rights Reserved.</p>
        <p>Designed By <a href="https://www.shivsys.com" className="border-b border-light">ShivSys</a></p>
      </div>
    </div>
  </footer>
);

// Main App Component
const App = () => {
  const [loading, setLoading] = useState(true);

  // Simulate loading state
  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const showSuccessMessage = () => {
    alert('Form submitted successfully!');
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Spinner */}
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
          <div className="spinner-grow text-primary w-12 h-12" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}

      {/* Navbar */}
      <nav className="bg-white shadow-lg p-4 fixed w-full top-0 z-40">
        <div className="container mx-auto flex items-center justify-between">
          <a href="index.html" className="text-2xl font-bold flex items-center">
            <img src="img/logo.png" alt="Logo" className="w-8 h-8 mr-2" />
            Shivsys
          </a>
          <button className="lg:hidden text-2xl">
            <FaBars />
          </button>
          <div className="hidden lg:flex space-x-6">
            <a href="index.html" className="hover:text-blue-500">Home</a>
            <a href="about.html" className="hover:text-blue-500">About</a>
            <a href="service.html" className="hover:text-blue-500">Service</a>
            <a href="project.html" className="hover:text-blue-500">Project</a>
            <div className="relative">
              <button className="hover:text-blue-500">Community</button>
              <div className="absolute mt-2 right-0 bg-white shadow-lg rounded">
                <a href="team.html" className="block px-4 py-2 hover:bg-gray-100">Our Team</a>
                <a href="testimonial.html" className="block px-4 py-2 hover:bg-gray-100">Testimonial</a>
                <a href="careerpage.html" className="block px-4 py-2 hover:bg-gray-100">Career Page</a>
              </div>
            </div>
            <a href="contact.html" className="hover:text-blue-500">Contact</a>
          </div>
          <a href="https://www.linkedin.com/company/shivsys-incorporation/mycompany/" className="hidden lg:inline-block bg-blue-500 text-white py-2 px-4 rounded-full">Get Started</a>
        </div>
      </nav>

      {/* Contact Section */}
      <div className="flex-grow pt-20">
        <div className="container mx-auto py-5 px-4">
          <div className="text-center mb-5">
            <p className="text-secondary text-lg">Contact Us</p>
            <h1 className="text-3xl font-bold">Contact For Any Query</h1>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-lg">
              <p className="text-center mb-4">Write Here Details</p>
              <form action="https://formspree.io/f/mdoqvwyy" method="POST">
                <div className="space-y-4">
                  <div className="flex space-x-4">
                    <div className="w-1/2">
                      <div className="relative">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Your Name"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        />
                        <label htmlFor="name" className="absolute top-0 left-0 mt-2 ml-2 text-gray-500">Your Name</label>
                      </div>
                    </div>
                    <div className="w-1/2">
                      <div className="relative">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Your Email"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        />
                        <label htmlFor="email" className="absolute top-0 left-0 mt-2 ml-2 text-gray-500">Your Email</label>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="relative">
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        placeholder="Subject"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      />
                      <label htmlFor="subject" className="absolute top-0 left-0 mt-2 ml-2 text-gray-500">Subject</label>
                    </div>
                  </div>
                  <div>
                    <div className="relative">
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Leave a message here"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        style={{ height: '150px' }}
                      />
                      <label htmlFor="message" className="absolute top-0 left-0 mt-2 ml-2 text-gray-500">Message</label>
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full py-3 bg-blue-500 text-white rounded-lg"
                      onClick={showSuccessMessage}
                    >
                      Submit Form
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
