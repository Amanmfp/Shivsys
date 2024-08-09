import React from 'react';
import Image from "next/image";
import testimonial1 from "../Assets/img/testimonial-1.png";
import testimonial2 from "../Assets/img/testimonial-2.png";
import testimonial3 from "../Assets/img/testimonial-3.jpg";
import 'animate.css';

const testimonials = [
  {
    quote: "My fashion brand gets 200% growth I was not thinking that much, but I am thankful to all the team of Shivsys and have business with them for a long time.",
    imgSrc: testimonial1,
    name: "Rajani Sinha",
    title: "Founder",
  },
  {
    quote: "ShivSys did such amazing work and I am really thankful to have such innovative partners to grow my Startup.",
    imgSrc: testimonial2,
    name: "RJ Scaringe",
    title: "Rivian CEO",
  },
  {
    quote: "ShivSys helped me build my business presence across all social media platforms, developed my website, and did SEO to rank it on Google.",
    imgSrc: testimonial3,
    name: "Aman Sinha",
    title: "Marketer",
  },
];

const Testimonial = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-blue-500 to-indigo-500">
      <div className="container mx-auto px-4 lg:px-8">
        <h1 className="text-center text-4xl font-bold text-white mb-10 animate__animated animate__fadeInDown">What Our Clients Say!</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-blue-100 animate__animated animate__fadeInUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <p className="text-lg text-gray-700 mb-6">
                <i className="fa fa-quote-left text-indigo-500 text-3xl mr-3"></i>
                {testimonial.quote}
              </p>
              <div className="flex items-center">
                <Image
                  className="w-16 h-16 rounded-full border-2 border-indigo-500"
                  src={testimonial.imgSrc}
                  alt={testimonial.name}
                  width={64}
                  height={64}
                />
                <div className="ml-4">
                  <h5 className="text-xl font-semibold">{testimonial.name}</h5>
                  <span className="text-gray-500">{testimonial.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
