import React, { useEffect } from 'react';
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is imported
import WOW from 'wowjs';

const TestimonialPage = () => {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  return (
    <div className="bg-white p-0">
      {/* Spinner Start */}
      <div id="spinner" className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <div className="animate-spin rounded-full border-t-4 border-primary w-12 h-12" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
      {/* Spinner End */}

      {/* Navbar & Hero Start */}
      <div className="relative p-0">
        <nav className="bg-white px-4 py-3 lg:px-5 lg:py-0 flex items-center justify-between">
          <a href="index.html" className="flex items-center">
            <h1 className="text-2xl font-bold">
              <img src="img/logo.png" alt="Logo" className="mr-2" />
              Shivsys
            </h1>
          </a>
          <button className="text-2xl lg:hidden" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="fa fa-bars"></span>
          </button>
          <div className="lg:flex lg:items-center lg:w-auto hidden" id="navbarCollapse">
            <div className="flex space-x-4">
              <a href="index.html" className="text-gray-700 hover:text-primary">Home</a>
              <a href="about.html" className="text-gray-700 hover:text-primary">About</a>
              <a href="service.html" className="text-gray-700 hover:text-primary">Service</a>
              <a href="project.html" className="text-gray-700 hover:text-primary">Project</a>
              <div className="relative">
                <a href="#" className="text-gray-700 hover:text-primary" data-bs-toggle="dropdown">Community</a>
                <div className="absolute mt-2 bg-white shadow-lg">
                  <a href="team.html" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Our Team</a>
                  <a href="testimonial.html" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Testimonial</a>
                  <a href="careerpage.html" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Career</a>
                </div>
              </div>
              <a href="contact.html" className="text-gray-700 hover:text-primary">Contact</a>
            </div>
            <a href="https://www.linkedin.com/company/shivsys-incorporation/mycompany/" className="hidden lg:block ml-3 px-4 py-2 bg-primary text-white rounded-full">Get Started</a>
          </div>
        </nav>
      </div>
      {/* Navbar & Hero End */}

      {/* Testimonial Start */}
      <div className="py-5">
        <div className="container mx-auto px-4 lg:px-5">
          <p className="text-secondary text-lg text-center mb-4">Testimonial</p>
          <h1 className="text-3xl text-center mb-5">What Say Our Clients!</h1>
          <div className="owl-carousel">
            <div className="bg-light rounded-lg p-4 my-4">
              <p className="text-lg">
                <i className="fa fa-quote-left text-primary text-4xl mr-3"></i>
                "Working with Shivsys has been an absolute pleasure. Their team consistently delivers exceptional service, going above and beyond to meet our needs. We've seen a significant improvement in our operations since partnering with them."
              </p>
              <div className="flex items-center mt-4">
                <img className="w-16 h-16 rounded-full" src="img/testimonial-1.png" alt="Rajani Sinha" />
                <div className="ml-4">
                  <h5 className="text-xl font-semibold mb-1">Rajani Sinha</h5>
                  <span>Founder</span>
                </div>
              </div>
            </div>
            <div className="bg-light rounded-lg p-4 my-4">
              <p className="text-lg">
                <i className="fa fa-quote-left text-primary text-4xl mr-3"></i>
                "Shivsys stands out for their innovative solutions and proactive approach. They have a deep understanding of our industry and have provided us with cutting-edge technologies that have helped streamline our processes and drive business growth."
              </p>
              <div className="flex items-center mt-4">
                <img className="w-16 h-16 rounded-full" src="img/testimonial-2.png" alt="Salman" />
                <div className="ml-4">
                  <h5 className="text-xl font-semibold mb-1">Salman</h5>
                  <span>SEO Rivian</span>
                </div>
              </div>
            </div>
            <div className="bg-light rounded-lg p-4 my-4">
              <p className="text-lg">
                <i className="fa fa-quote-left text-primary text-4xl mr-3"></i>
                "Shivsys' support team is outstanding. Whenever we encounter any issues or need assistance, they are quick to respond and resolve the problem effectively. Their dedication to customer satisfaction sets them apart."
              </p>
              <div className="flex items-center mt-4">
                <img className="w-16 h-16 rounded-full" src="img/testimonial-3.jpg" alt="Aman Raj" />
                <div className="ml-4">
                  <h5 className="text-xl font-semibold mb-1">Aman Raj</h5>
                  <span>Marketer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial End */}

      {/* Footer Start */}
      <div className="bg-primary text-light py-5">
        <div className="container mx-auto px-4 lg:px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <p className="text-white text-lg mb-4">Address</p>
              <p><i className="fa fa-map-marker-alt mr-2"></i>Sheridan, Wyoming, USA</p>
              <p><i className="fa fa-map-marker-alt mr-2"></i>Greater Noida, Uttar Pradesh, India</p>
              <p><i className="fa fa-phone-alt mr-2"></i>+12672183807</p>
              <p><i className="fa fa-envelope mr-2"></i>info@shivsys.com</p>
              <div className="flex space-x-2 mt-2">
                <a className="text-white" href="#"><i className="fab fa-twitter"></i></a>
                <a className="text-white" href="https://www.facebook.com/shivsys/"><i className="fab fa-facebook-f"></i></a>
                <a className="text-white" href="https://www.instagram.com/shivsysincorporation"><i className="fab fa-instagram"></i></a>
                <a className="text-white" href="https://www.linkedin.com/company/shivsys-incorporation/mycompany/"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            <div>
              <p className="text-white text-lg mb-4">Quick Link</p>
              <a className="block text-white hover:underline" href="about.html">About Us</a>
              <a className="block text-white hover:underline" href="contact.html">Contact Us</a>
              <a className="block text-white hover:underline" href="about.html">Privacy Policy</a>
              <a className="block text-white hover:underline" href="careerpage.html">Career</a>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 lg:px-5 mt-4">
          <div className="flex justify-between items-center">
            <div className="text-center text-md-start mb-3 mb-md-0">
              &copy; <a href="shivsys.com" className="border-b border-white">ShivSys</a>, All Right Reserved.
              Designed By <a href="https://www.shivsys.com" className="border-b border-white">shivsys.com</a>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}

      {/* Back to Top */}
      <a href="#" className="fixed bottom-5 right-5 bg-secondary text-white p-3 rounded-full">
        <i className="bi bi-arrow-up"></i>
      </a>
    </div>
  );
};

export default TestimonialPage;