import React from 'react';
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is properly imported
import { FaSearch, FaLaptopCode, FaMailBulk, FaTools, FaCheck, FaCloud, FaQuoteLeft } from 'react-icons/fa';
import { FaFacebookF, FaApple, FaSearchengin } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

const services = [
  { icon: FaSearch, title: 'SEO Optimization', description: 'We provide SEO help to business to increase the visibility of website in search results' },
  { icon: FaLaptopCode, title: 'Web Design', description: 'We provide Ecommerce, Enterprise, ERP development' },
  { icon: FaFacebookF, title: 'Social Media Marketing', description: 'We advertise on multiple social media accounts and increase sales revenue' },
  { icon: FaMailBulk, title: 'Email Marketing', description: 'We use email automation to enhance customer engagement and sales leads' },
  { icon: FaTools, title: 'DevOps', description: 'Unlocking the full potential of your software development lifecycle with our expert DevOps solutions.' },
  { icon: FaApple, title: 'App Development', description: 'We provide Android & IOS App development using ReactNative and Flutter.' },
  { icon: FaCheck, title: 'Software Testing', description: 'Ensure software quality and reliability with ShivSys\'s testing services.' },
  { icon: FaCloud, title: 'Cloud Services', description: 'Unlock the power of comprehensive cloud services.' },
  { icon: FaSearchengin, title: 'SAP Talent Sourcing', description: 'We specialize in identifying and recruiting top-tier talent for various niche SAP modules.' }
];

const testimonials = [
  { img: 'img/testimonial-1.png', name: 'Rajani Sinha', role: 'Developer', text: 'Working with Shivsys has been an absolute pleasure...' },
  { img: 'img/testimonial-2.png', name: 'Salman', role: 'CEO Agela', text: 'Shivsys stands out for their innovative solutions...' },
  { img: 'img/testimonial-3.jpg', name: 'Aman Raj', role: 'Marketer', text: 'Shivsys\'s support team is outstanding...' }
];

const ServicePage = () => {
  return (
    <div className="bg-white">
      {/* Spinner Start */}
      <div id="spinner" className="fixed inset-0 flex items-center justify-center bg-white w-full h-full z-50">
        <div className="animate-spin rounded-full border-t-2 border-primary w-12 h-12" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
      {/* Spinner End */}

      {/* Navbar Start */}
      <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
        <a href="index.html" className="navbar-brand p-0 flex items-center">
          <img src="img/logo.png" alt="Logo" className="mr-2" />
          <h1 className="text-xl font-bold">Shivsys</h1>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="fa fa-bars"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav mx-auto py-0 flex space-x-4">
            <a href="index.html" className="nav-item nav-link">Home</a>
            <a href="about.html" className="nav-item nav-link">About</a>
            <a href="service.html" className="nav-item nav-link active">Service</a>
            <a href="project.html" className="nav-item nav-link">Project</a>
            <div className="nav-item dropdown relative">
              <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Community</a>
              <div className="dropdown-menu absolute top-full left-0 mt-2 bg-white shadow-lg">
                <a href="team.html" className="dropdown-item">Our Team</a>
                <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                <a href="404.html" className="dropdown-item">Career Page</a>
              </div>
            </div>
            <a href="contact.html" className="nav-item nav-link">Contact</a>
          </div>
          <a href="https://www.linkedin.com/company/shivsys-incorporation/mycompany/" className="btn rounded-full py-2 px-4 ms-3 hidden lg:block bg-primary text-white hover:bg-primary-dark">Get Started</a>
        </div>
      </nav>
      {/* Navbar End */}

      {/* Service Start */}
      <div className="py-5">
        <div className="container py-5 px-lg-5">
          <div className="text-center mb-5">
            <h1 className="text-3xl font-bold">What Solutions We Provide</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Service Items */}
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg border p-6 text-center shadow-lg transition-transform duration-500 transform hover:scale-105">
                <service.icon className="text-primary text-4xl mb-4" />
                <h5 className="text-xl font-semibold mb-3">{service.title}</h5>
                <p className="mb-3">{service.description}</p>
                <a className="btn btn-primary" href="#"><i className="fa fa-arrow-right" /></a>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Service End */}

      {/* Testimonial Start */}
      <div className="py-5">
        <div className="container py-5 px-lg-5">
          <p className="text-secondary text-center mb-5"><span>Clients</span></p>
          <h1 className="text-center mb-5 text-3xl font-bold">What Our Clients Say!</h1>
          <Carousel showThumbs={false} autoPlay infiniteLoop>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-light rounded-lg p-6 shadow-lg">
                <p className="text-lg">
                  <FaQuoteLeft className="text-primary text-3xl mr-2 inline" />
                  {testimonial.text}
                </p>
                <div className="flex items-center mt-4">
                  <img className="w-16 h-16 rounded-full mr-4" src={testimonial.img} alt={testimonial.name} />
                  <div>
                    <h5 className="text-xl font-semibold">{testimonial.name}</h5>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      {/* Testimonial End */}
    </div>
  );
};

export default ServicePage;
