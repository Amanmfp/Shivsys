import React from 'react';

const Footer = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 text-gray-800">
      
      <div className="absolute inset-0 bg-fixed bg-cover bg-center opacity-30" style={{ backgroundImage: 'url(/path-to-your-image.jpg)' }}></div>
      
      <div className="relative container py-10 px-lg-5">
        <div className="row g-5">
          <div className="col-md-6 col-lg-3">
            <p className="text-gray-900 text-2xl font-bold mb-6 animate-fadeInUp">Address</p>
            <p className="text-lg text-gray-700 transition-transform transform hover:scale-110 hover:text-blue-600 duration-300">
              <i className="fa fa-map-marker-alt me-3"></i>Sheridan, Wyoming, USA
            </p>
            <p className="text-lg text-gray-700 transition-transform transform hover:scale-110 hover:text-blue-600 duration-300">
              <i className="fa fa-map-marker-alt me-3"></i>Greater Noida, Uttar Pradesh, India
            </p>
            <p className="text-lg text-gray-700 transition-transform transform hover:scale-110 hover:text-blue-600 duration-300">
              <i className="fa fa-phone-alt me-3"></i>+12672183807
            </p>
            <p className="text-lg text-gray-700 transition-transform transform hover:scale-110 hover:text-blue-600 duration-300">
              <i className="fa fa-envelope me-3"></i>info@shivsys.com
            </p>
            <div className="d-flex pt-4">
              <a className="btn btn-outline-blue-500 btn-social text-sm font-semibold transition-transform transform hover:scale-125 hover:bg-blue-500 hover:text-white hover:shadow-lg duration-300 mx-1" href="">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="btn btn-outline-blue-500 btn-social text-sm font-semibold transition-transform transform hover:scale-125 hover:bg-blue-500 hover:text-white hover:shadow-lg duration-300 mx-1" href="https://www.facebook.com/shivsys/">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="btn btn-outline-blue-500 btn-social text-sm font-semibold transition-transform transform hover:scale-125 hover:bg-blue-500 hover:text-white hover:shadow-lg duration-300 mx-1" href="https://www.instagram.com/shivsysincorporation">
                <i className="fab fa-instagram"></i>
              </a>
              <a className="btn btn-outline-blue-500 btn-social text-sm font-semibold transition-transform transform hover:scale-125 hover:bg-blue-500 hover:text-white hover:shadow-lg duration-300 mx-1" href="https://www.linkedin.com/company/shivsys-incorporation/mycompany/">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <p className="text-gray-900 text-2xl font-bold mb-6 animate-fadeInUp">Quick Links</p>
            <a className="btn btn-link text-lg text-gray-700 transition-transform transform hover:scale-110 hover:text-blue-600 duration-300 hover:translate-x-2" href="about.html">About Us</a>
            <a className="btn btn-link text-lg text-gray-700 transition-transform transform hover:scale-110 hover:text-blue-600 duration-300 hover:translate-x-2" href="contact.html">Contact Us</a>
            <a className="btn btn-link text-lg text-gray-700 transition-transform transform hover:scale-110 hover:text-blue-600 duration-300 hover:translate-x-2" href="about.html">Privacy Policy</a>
            <a className="btn btn-link text-lg text-gray-700 transition-transform transform hover:scale-110 hover:text-blue-600 duration-300 hover:translate-x-2" href="careerpage.html">Career</a>
          </div>
        </div>
      </div>

      <div className="relative container px-lg-5 py-4">
        <div className="border-t border-gray-300 py-4">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0 animate-fadeInUp">
              <span className="text-md font-light">
                &copy; <a className="border-b-2 border-blue-600 text-gradient bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 hover:text-blue-700 transition-colors duration-300" href="https://shivsys.com">ShivSys</a>, All Rights Reserved. 
                Designed By <a className="border-b-2 border-blue-600 text-gradient bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 hover:text-blue-700 transition-colors duration-300" href="https://www.shivsys.com">shivsys.com</a>
              </span>
            </div>
            <div className="col-md-6 text-center text-md-end">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
