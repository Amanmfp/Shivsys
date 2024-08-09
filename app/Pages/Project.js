import React from 'react';
import 'tailwindcss/tailwind.css';
import 'animate.css';
import Image from "next/image";
import port5 from "../Assets/img/port5.gif";
import port6 from "../Assets/img/port6.gif";
import port4 from "../Assets/img/port4.gif";
import port3 from "../Assets/img/port3.gif";
import port2 from "../Assets/img/port2.jpg";
import port1 from "../Assets/img/port1.gif";

// Define your projects data
const projects = [
  {
    imgSrc: port5,
    title: "We provide cloud-based Services AWS & Salesforce",
    category: "first",
    link: "#",
  },
  {
    imgSrc: port6,
    title: "ShivSys provide Digital Marketing Services to Grow businesses",
    category: "second",
    link: "#",
  },
  {
    imgSrc: port4,
    title: "Travel App Design And Development Using New technologies Reactnative",
    category: "first",
    link: "#",
  },
  {
    imgSrc: port3,
    title: "Food Website Design And Development",
    category: "second",
    link: "#",
  },
  {
    imgSrc: port2,
    title: "Recently Worked With Rivian an USA Based EV Company",
    category: "first",
    link: "#",
  },
  {
    imgSrc: port1,
    title: "Digital portfolio Website Design And Development",
    category: "second",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-8 animate__animated animate__fadeInUp" data-wow-delay="0.1s">
          <h1 className="text-4xl font-bold mb-3">Recently Completed Projects</h1>
          <p className="text-lg text-gray-600">A showcase of our recent work.</p>
        </div>
        <div className="text-center mb-8 animate__animated animate__fadeInUp" data-wow-delay="0.3s">
          <ul className="flex justify-center space-x-4 mb-6">
            <li className="cursor-pointer text-blue-500 hover:text-blue-700 transition-colors duration-300" data-filter="*">All</li>
            <li className="cursor-pointer text-blue-500 hover:text-blue-700 transition-colors duration-300" data-filter=".first">Web Design</li>
            <li className="cursor-pointer text-blue-500 hover:text-blue-700 transition-colors duration-300" data-filter=".second">Graphic Design</li>
          </ul>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`relative rounded-lg overflow-hidden bg-white shadow-lg border border-gray-200 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl ${project.category} animate__animated animate__fadeInUp`}
              data-wow-delay={`${0.1 * (index + 1)}s`}
            >
              <div className="relative overflow-hidden">
                <Image
                  className="w-full h-64 object-cover transition-transform duration-300 transform hover:scale-110"
                  src={project.imgSrc}
                  alt={project.title}
                />
                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <a
                    className="text-white mx-2 p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-300"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-eye"></i>
                  </a>
                  <a
                    className="text-white mx-2 p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-300"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-link"></i>
                  </a>
                </div>
              </div>
              <div className="p-4">
                <p className="text-blue-600 font-medium mb-2">UI / UX Design</p>
                <h5 className="text-xl font-semibold mb-0">{project.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
