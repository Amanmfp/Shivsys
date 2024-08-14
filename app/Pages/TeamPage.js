import React, { useEffect } from 'react';
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is imported
import WOW from 'wowjs';

const TeamPage = () => {
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
        <nav className="bg-white py-3 px-4 lg:px-5 flex items-center justify-between">
          <a href="index.html" className="flex items-center">
            <h1 className="text-2xl font-bold"><img src="img/logo.png" alt="Logo" className="mr-2" /> Shivsys</h1>
          </a>
          <button className="lg:hidden text-2xl" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="fa fa-bars"></span>
          </button>
          <div className="lg:flex lg:items-center lg:w-auto hidden" id="navbarCollapse">
            <div className="flex space-x-4">
              <a href="index.html" className="nav-item">Home</a>
              <a href="about.html" className="nav-item">About</a>
              <a href="service.html" className="nav-item">Service</a>
              <a href="project.html" className="nav-item">Project</a>
              <div className="relative">
                <a href="#" className="nav-item dropdown-toggle" data-bs-toggle="dropdown">Communitys</a>
                <div className="absolute mt-2 bg-white shadow-lg">
                  <a href="team.html" className="block px-4 py-2 text-sm text-gray-700">Our Team</a>
                  <a href="testimonial.html" className="block px-4 py-2 text-sm text-gray-700">Testimonial</a>
                  <a href="team.html" className="block px-4 py-2 text-sm text-gray-700">Community</a>
                </div>
              </div>
              <a href="contact.html" className="nav-item">Contact</a>
            </div>
            <a href="https://www.linkedin.com/company/shivsys-incorporation/mycompany/" className="btn rounded-full py-2 px-4 hidden lg:block">Get Started</a>
          </div>
        </nav>
      </div>
      {/* Navbar & Hero End */}

      {/* Team Start */}
      <div className="py-5">
        <div className="container mx-auto px-4 lg:px-5">
          <div className="wow fadeInUp" data-wow-delay="0.1s">
            <div className="text-center">
              <h1 className="text-4xl font-bold">Welcome to Shivsys!</h1>
              <p className="text-lg mt-4 mb-8">We're a dynamic team blending fresh talent with seasoned expertise in web development. Our new talents bring innovation and creativity, while experienced developers offer refined skills and industry insight. Together, we craft exceptional digital experiences that drive results. Explore our site and join us on this exciting journey!</p>
              <h1 className="text-center text-3xl mb-5">Our Team Members</h1>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* Team Member 1 */}
            <div className="bg-light rounded-lg p-4 wow fadeInUp" data-wow-delay="0.1s">
              <div className="text-center border-b pb-4">
                <img className="w-24 h-24 rounded-full mx-auto mb-4" src="img/team-1.jpg" alt="Vivek Gupta" />
                <h5 className="text-xl font-semibold">Vivek Gupta</h5>
                <span className="text-gray-500">CEO & Founder</span>
              </div>
              <div className="flex justify-center space-x-2 mt-4">
                <a className="text-blue-600" href="#"><i className="fab fa-facebook-f"></i></a>
                <a className="text-blue-400" href="#"><i className="fab fa-twitter"></i></a>
                <a className="text-pink-500" href="#"><i className="fab fa-instagram"></i></a>
                <a className="text-blue-800" href="https://www.linkedin.com/in/vivek-gupta-12889115/"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            {/* Team Member 2 */}
            <div className="bg-light rounded-lg p-4 wow fadeInUp" data-wow-delay="0.3s">
              <div className="text-center border-b pb-4">
                <img className="w-24 h-24 rounded-full mx-auto mb-4" src="img/team-33.jpg" alt="Vivek Tiwari" />
                <h5 className="text-xl font-semibold">Vivek Tiwari</h5>
                <span className="text-gray-500">Digital Marketer & Software Consultant</span>
              </div>
              <div className="flex justify-center space-x-2 mt-4">
                <a className="text-blue-600" href="https://www.facebook.com/vivektiwarii11"><i className="fab fa-facebook-f"></i></a>
                <a className="text-blue-400" href="#"><i className="fab fa-twitter"></i></a>
                <a className="text-pink-500" href="https://www.instagram.com/thevivektiwari/"><i className="fab fa-instagram"></i></a>
                <a className="text-blue-800" href="https://www.linkedin.com/in/vivek-tiwari-b622241b7/"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            {/* Team Member 3 */}
            <div className="bg-light rounded-lg p-4 wow fadeInUp" data-wow-delay="0.5s">
              <div className="text-center border-b pb-4">
                <img className="w-24 h-24 rounded-full mx-auto mb-4" src="img/team-2.jpg" alt="Akash Singh" />
                <h5 className="text-xl font-semibold">Akash Singh</h5>
                <span className="text-gray-500">Tech Lead</span>
              </div>
              <div className="flex justify-center space-x-2 mt-4">
                <a className="text-blue-600" href="#"><i className="fab fa-facebook-f"></i></a>
                <a className="text-blue-400" href="#"><i className="fab fa-twitter"></i></a>
                <a className="text-pink-500" href="#"><i className="fab fa-instagram"></i></a>
                <a className="text-blue-800" href="https://www.linkedin.com/in/master-akash-kumar-singh/"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            {/* Team Member 4 */}
            <div className="bg-light rounded-lg p-4 wow fadeInUp" data-wow-delay="0.1s">
              <div className="text-center border-b pb-4">
                <img className="w-24 h-24 rounded-full mx-auto mb-4" src="img/team-4.jpg" alt="Sundram Mishra" />
                <h5 className="text-xl font-semibold">Sundram Mishra</h5>
                <span className="text-gray-500">Software Engineer</span>
              </div>
              <div className="flex justify-center space-x-2 mt-4">
                <a className="text-blue-600" href="#"><i className="fab fa-facebook-f"></i></a>
                <a className="text-blue-400" href="#"><i className="fab fa-twitter"></i></a>
                <a className="text-pink-500" href="#"><i className="fab fa-instagram"></i></a>
                <a className="text-blue-800" href="https://www.linkedin.com/in/sundrammishra/"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            {/* Team Member 5 */}
            <div className="bg-light rounded-lg p-4 wow fadeInUp" data-wow-delay="0.3s">
              <div className="text-center border-b pb-4">
                <img className="w-24 h-24 rounded-full mx-auto mb-4" src="img/team-5.jpg" alt="Pankaj Rana" />
                <h5 className="text-xl font-semibold">Pankaj Rana</h5>
                <span className="text-gray-500">Senior Technical Architect</span>
              </div>
              <div className="flex justify-center space-x-2 mt-4">
                <a className="text-blue-600" href="#"><i className="fab fa-facebook-f"></i></a>
                <a className="text-blue-400" href="#"><i className="fab fa-twitter"></i></a>
                <a className="text-pink-500" href="#"><i className="fab fa-instagram"></i></a>
                <a className="text-blue-800" href="#"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            {/* Team Member 6 */}
            <div className="bg-light rounded-lg p-4 wow fadeInUp" data-wow-delay="0.5s">
              <div className="text-center border-b pb-4">
                <img className="w-24 h-24 rounded-full mx-auto mb-4" src="img/team-6.jpg" alt="Vikash" />
                <h5 className="text-xl font-semibold">Vikash</h5>
                <span className="text-gray-500">Software Engineer</span>
              </div>
              <div className="flex justify-center space-x-2 mt-4">
                <a className="text-blue-600" href="#"><i className="fab fa-facebook-f"></i></a>
                <a className="text-blue-400" href="#"><i className="fab fa-twitter"></i></a>
                <a className="text-pink-500" href="#"><i className="fab fa-instagram"></i></a>
                <a className="text-blue-800" href="#"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team End */}

      {/* Footer Start */}
      <div className="bg-primary text-light py-5">
        <div className="container mx-auto px-4 lg:px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <p className="text-white text-lg mb-4">Sheridan, Wyoming, USA</p>
              <p><i className="fa fa-map-marker-alt mr-2"></i>Greater Noida, Uttar Pradesh, India</p>
              <p><i className="fa fa-map-marker-alt mr-2"></i>Sector 1, Noida, India</p>
              <p><i className="fa fa-phone-alt mr-2"></i>+12672183807</p>
              <p><i className="fa fa-envelope mr-2"></i>info@shivsys.com</p>
              <div className="flex space-x-2 mt-2">
                <a className="text-white" href="#"><i className="fab fa-twitter"></i></a>
                <a className="text-white" href="https://www.facebook.com/shivsys/"><i className="fab fa-facebook-f"></i></a>
                <a className="text-white" href="#"><i className="fab fa-instagram"></i></a>
                <a className="text-white" href="#"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            <div>
              <p className="text-white text-lg mb-4">Quick Link</p>
              <a className="block text-white hover:underline mb-2" href="index.html">About Us</a>
              <a className="block text-white hover:underline mb-2" href="contact.html">Contact Us</a>
              <a className="block text-white hover:underline mb-2" href="contact.html">Privacy Policy</a>
              <a className="block text-white hover:underline" href="careerpage.html">Career</a>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 lg:px-5 mt-4">
          <div className="flex justify-between items-center">
            <div>&copy; <a href="#" className="border-b border-white">ShivSys</a>, All Right Reserved. Designed By <a href="https://shivsys.com" className="border-b border-white">ShivSys</a></div>
          </div>
        </div>
      </div>
      {/* Footer End */}

      {/* Back to Top */}
      <a href="#" className="fixed bottom-5 right-5 bg-gray-800 text-white p-3 rounded-full">
        <i className="bi bi-arrow-up"></i>
      </a>
    </div>
  );
};

export default TeamPage;