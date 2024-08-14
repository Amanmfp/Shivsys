import React from 'react';
import { FaMailBulk, FaSearch, FaLaptopCode } from 'react-icons/fa';

const features = [
  {
    icon: FaMailBulk,
    title: "Infrastructure Technology",
    description: "Empowering businesses with innovative digital marketing strategies for impactful online growth.",
    delay: "0.1s"
  },
  {
    icon: FaSearch,
    title: "SEO & Backlinks",
    description: "Enhancing website visibility through strategic SEO optimization and high-quality backlink acquisition.",
    delay: "0.3s"
  },
  {
    icon: FaLaptopCode,
    title: "Design & Development",
    description: "Transforming visions into stunning digital experiences through meticulous design and expert development craftsmanship.",
    delay: "0.5s"
  }
];

const Features = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-lg text-center p-6 transition-transform duration-500 transform hover:scale-105"
            style={{ animationDelay: feature.delay }}
          >
            <feature.icon className="text-primary text-4xl mb-4 mx-auto" />
            <h5 className="text-xl font-semibold mb-3">{feature.title}</h5>
            <p className="text-lg">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
