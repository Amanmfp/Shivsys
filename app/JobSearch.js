import React from 'react';
import './App.css';

const JobPortal = () => {
  return (
    <div className="container-full bg-white p-0">
      {/* Spinner Start */}
      <div id="spinner" className="show bg-white fixed inset-0 flex items-center justify-center">
        <div className="spinner-grow text-primary w-12 h-12" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
      {/* Spinner End */}

      {/* Navbar & Hero Start */}
      <div className="container-full relative p-0">
        <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
          <a href="index.html" className="navbar-brand p-0">
            <h1><img src="img/logo.png" alt="Logo" /> Shivsys</h1>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="fa fa-bars"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav mx-auto py-0">
              <a href="index.html" className="nav-item nav-link">Home</a>
              <a href="about.html" className="nav-item nav-link">About</a>
              <a href="service.html" className="nav-item nav-link">Service</a>
              <a href="project.html" className="nav-item nav-link">Project</a>
              <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle active" data-bs-toggle="dropdown">Community</a>
                <div className="dropdown-menu m-0">
                  <a href="team.html" className="dropdown-item">Our Team</a>
                  <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                  <a href="careerpage.html" className="dropdown-item active">Career Page</a>
                </div>
              </div>
              <a href="contact.html" className="nav-item nav-link">Contact</a>
            </div>
            <a href="https://www.linkedin.com/company/shivsys-incorporation/mycompany/" className="btn rounded-pill py-2 px-4 ms-3 hidden lg:block">Get Started</a>
          </div>
        </nav>
      </div>
      {/* Navbar & Hero End */}

      {/* 404 Start */}
      <div className="container-xl py-5 text-center">
        <div className="row justify-center">
          <div className="col-lg-6">
            <h5 className="text-5xl">Shivsys Softwares</h5>
            <h1 className="mb-4 text-4xl">This Page is on Development Phase</h1>
            <a className="btn btn-primary rounded-pill py-3 px-5" href="https://www.linkedin.com/company/shivsyssoftwaresprivatelimited/">Go To LinkedIn</a>
          </div>
        </div>
      </div>
      {/* 404 End */}

      {/* Job Listing */}
      <div className="wrapper">
        <div className="search-menu p-4">
          <div className="search-bar flex items-center mb-4">
            <input type="text" className="search-box w-full p-2 border rounded" placeholder="Search" autoFocus />
            <div className="search-item">
              Product Designer
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </div>
            <div className="search-item">
              UI Designer
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </div>
          </div>
          <div className="search-location flex items-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-map-pin mr-2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Londontowne, MD
          </div>
          <div className="search-job flex items-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-briefcase mr-2">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
              <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
            </svg>
            <input type="text" placeholder="Job Type" className="w-full p-2 border rounded" />
          </div>
          <div className="search-salary flex items-center mb-4">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="currentColor" strokeWidth=".4" className="mr-2">
              <path d="M12.6 18H9.8a.8.8 0 010-1.5h2.8a.9.9 0 000-1.8h-1.2a2.4 2.4 0 010-4.7h2.8a.8.8 0 010 1.5h-2.8a.9.9 0 000 1.8h1.2a2.4 2.4 0 010 4.7z" />
              <path d="M12 20a.8.8 0 01-.8-.8v-2a.8.8 0 011.6 0v2c0 .5-.4.8-.8.8zM12 11.5a.8.8 0 01-.8-.8v-2a.8.8 0 011.6 0v2c0 .5-.4.8-.8.8z" />
              <path d="M21.3 23H2.6A2.8 2.8 0 010 20.2V3.9C0 2.1 1.2 1 2.8 1h18.4C22.9 1 24 2.2 24 3.8v16.4c0 1.6-1.2 2.8-2.8 2.8zM2.6 2.5c-.6 0-1.2.6-1.2 1.3v16.3c0 .7.6 1.2 1.2 1.2h18.4c.6 0 1.2-.5 1.2-1.2V3.8c0-.7-.6-1.2-1.2-1.2H2.6z" />
            </svg>
            <input type="text" placeholder="Salary" className="w-full p-2 border rounded" />
          </div>
        </div>
      </div>

    </div>
  );
};

const JobCard = ({ title, subtitle, bgColor, svgPath, details }) => (
  <div className="job-card">
    <div className="job-card-header">
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="#fff"
        style={{ backgroundColor: bgColor }}
      >
        <path d={svgPath} />
      </svg>
      <div className="menu-dot"></div>
    </div>
    <div className="job-card-title">{title}</div>
    <div className="job-card-subtitle">{subtitle}</div>
    <div className="job-detail-buttons">
      {details.map((detail, index) => (
        <button key={index} className="search-buttons detail-button">{detail}</button>
      ))}
    </div>
    <div className="job-card-buttons">
      <button className="search-buttons card-buttons">Apply Now</button>
      <button className="search-buttons card-buttons-msg">Messages</button>
    </div>
  </div>
);

const JobOverviewCard = ({ title, subtitle, svgPath, bgColor }) => (
  <div className="job-card overview-card">
    <div className="overview-wrapper">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ backgroundColor: bgColor }}>
        <path d={svgPath} />
      </svg>
      <div className="overview-detail">
        <div className="job-card-title">{title}</div>
        <div className="job-card-subtitle">{subtitle}</div>
      </div>
      <svg className="heart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.8 4.6a5.5 5.5 0 00-7.7 0l-1.1 1-1-1a5.5 5.5 0 00-7.8 7.8l1 1 7.8 7.8 7.8-7.7 1-1.1a5.5 5.5 0 000-7.8z" />
      </svg>
    </div>
    <div className="job-overview-buttons">
      <div className="search-buttons time-button">Full Time</div>
      <div className="search-buttons level-button">Senior Level</div>
      <div className="job-stat">New</div>
      <div className="job-day">4d</div>
    </div>
  </div>
);

// Footer.js
import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-primary text-light">
      <div className="container py-5 px-lg-5">
        <div className="row g-5">
          <div className="col-md-6 col-lg-3">
            <p className="text-white text-2xl font-semibold mb-4">Address</p>
            <p><FaMapMarkerAlt className="inline mr-2" /> Sheridan, Wyoming, USA</p>
            <p><FaMapMarkerAlt className="inline mr-2" /> Greater Noida, Uttar Pradesh, India</p>
            <p><FaPhoneAlt className="inline mr-2" /> +12672183807</p>
            <p><FaEnvelope className="inline mr-2" /> info@shivsys.com</p>
            <div className="flex space-x-2 pt-2">
              <a className="btn btn-outline-light btn-social" href="#"><FaTwitter /></a>
              <a className="btn btn-outline-light btn-social" href="#"><FaFacebookF /></a>
              <a className="btn btn-outline-light btn-social" href="#"><FaInstagram /></a>
              <a className="btn btn-outline-light btn-social" href="#"><FaLinkedinIn /></a>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <p className="text-white text-2xl font-semibold mb-4">Quick Link</p>
            <a className="text-light hover:underline" href="#">About Us</a>
            <a className="text-light hover:underline" href="#">Contact Us</a>
            <a className="text-light hover:underline" href="#">Career</a>
          </div>
        </div>
      </div>
      <div className="container px-lg-5">
        <div className="border-t border-gray-700 pt-5 text-center text-light">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              &copy; <a className="border-b border-light" href="index.html">Shivsys</a>, All Right Reserved. Designed By <a className="border-b border-light" href="https://shivsys.com">Shivsys</a>
            </div>
            <div>
              {/* Additional content can be added here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <header className="bg-white shadow-lg p-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <img
              src="path/to/profile.jpg"
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="absolute right-0 top-0 w-2 h-2 rounded-full bg-blue-500 border-2 border-white"></div>
          </div>
          <div className="text-lg font-medium">User Settings</div>
        </div>
      </header>
  
      <div className="flex flex-grow p-6">
        <aside className="w-72 bg-white p-4 rounded-lg shadow-md flex-shrink-0">
          <h2 className="text-xl font-semibold mb-4">Search Type</h2>
          {/* Other sidebar content */}
        </aside>
  
        <main className="flex-grow p-6">
          <div className="flex items-center bg-white rounded-lg shadow-md p-4 mb-6">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search"
                className="w-full h-12 px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <button className="ml-4 bg-blue-500 text-white py-2 px-4 rounded-lg">Search</button>
          </div>
  
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <JobCard
              title="Product Designer"
              subtitle="The User Experience Designer position exists to create compelling and digital user experience through excellent design..."
              bgColor="#1e1f26"
              svgPath="M24 7.6c0-.3 0-.5-.4-.6C12.2.2 12.4-.3 11.6 0 3 5.5.6 6.7.2 7.1c-.3.3-.2.8-.2 8.3 0 .9 7.7 5.5 11.5 8.4.4.3.8.2 1 0 11.2-8 11.5-7.6 11.5-8.4V7.6zm-1.5 6.5l-3.9-2.4L22.5 9zm-5.3-3.2l-4.5-2.7V2L22 7.6zM12 14.5l-3.9-2.7L12 9.5l3.9 2.3zm-.8-12.4v6L6.8 11 2.1 7.6zm-5.8 9.6l-3.9 2.4V9zm1.3 1l4.5 3.1v6l-9-6.3zm6 9.1v-6l4.6-3.1 4.6 2.8z"
              details={["Full Time", "Min. 1 Year", "Senior Level"]}
            />
            {/* Repeat <JobCard /> for other job cards with different props */}
  
            <JobOverviewCard
              title="UI / UX Designer"
              subtitle="2972 Westheimer Rd. Santa Ana."
              svgPath="M256 92.5l127.7 91.6L512 92 383.7 0 256 91.5 128.3 0 0 92l128.3 92zm0 0M256 275.9l-127.7-91.5L0 276.4l128.3 92L256 277l127.7 91.5 128.3-92-128.3-92zm0 0"
              bgColor="#2e2882"
            />
            {/* Repeat <JobOverviewCard /> for other job overview cards with different props */}
          </div>
        </main>
      </div>
  
      <Footer />
    </div>
  );
  
  export default App;

