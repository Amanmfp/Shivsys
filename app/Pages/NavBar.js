"use client"; // Ensure this is appropriate for your setup, especially if you're using Next.js

import React, { useState } from 'react';
import Link from 'next/link'; // Import the Link component

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleNavbar = () => setIsNavOpen(!isNavOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <div className="relative">
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="container mx-auto flex justify-between items-center py-3 px-4 lg:px-5">
          <Link href="/" className="flex items-center">
            <img src="/img/logo.png" alt="Logo" className="mr-2" />
            <h1 className="text-xl font-bold">Shivsys</h1>
          </Link>
          <button
            className="lg:hidden text-gray-700"
            onClick={toggleNavbar}
            aria-controls="navbarCollapse"
            aria-expanded={isNavOpen}
          >
            <span className="fa fa-bars"></span>
          </button>
          <div
            className={`lg:flex flex-grow items-center justify-center space-x-4 ${isNavOpen ? 'block' : 'hidden'}`}
            id="navbarCollapse"
          >
            <Link href="/" className="text-gray-700 hover:text-blue-500">Home</Link>
            <Link href="/about-us" className="text-gray-700 hover:text-blue-500">About</Link>
            <Link href="/service" className="text-gray-700 hover:text-blue-500">Service</Link>
            <Link href="/project" className="text-gray-700 hover:text-blue-500">Project</Link>
            <div className="relative">
              <button
                className="text-gray-700 hover:text-blue-500"
                onClick={toggleDropdown}
              >
                Community
              </button>
              <div className={`absolute bg-white shadow-lg mt-2 ${isDropdownOpen ? 'block' : 'hidden'}`}>
                <Link href="/team" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Our Team</Link>
                <Link href="/testimonial" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Testimonial</Link>
                <Link href="/careerpage" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Career Page</Link>
              </div>
            </div>
            <a
            href="https://www.linkedin.com/company/shivsyssoftwaresprivatelimited"
            className="rounded-full py-2 px-4 bg-blue-500 text-white hover:bg-blue-600 lg:absolute lg:right-4 lg:top-1/2 lg:transform lg:-translate-y-1/2"
            target="_blank" rel="noopener noreferrer"
          >
            Get Started
          </a>
          </div>
        </div>
      </nav>
      <div className="pt-20"> {/* Adjust padding-top to avoid overlap */}
        {/* Main content will go here */}
      </div>
    </div>
  );
};

export default Navbar;
