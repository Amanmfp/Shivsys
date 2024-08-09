import React from 'react';
import './Styles.css'; // Ensure this CSS file is imported for custom animations
import Aboutimg from '../Assets/img/about1.gif'
import Image from 'next/image';

const About = () => {
  const skills = [
    { name: 'Digital Marketing', value: 85, color: 'bg-blue-500' },
    { name: 'Cloud Services', value: 90, color: 'bg-green-500' },
    { name: 'Design & Development', value: 95, color: 'bg-gray-800' },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6 lg:px-0">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8">
          {/* Left Column */}
          <div className="lg:w-1/2">
            <p className="text-secondary text-xl font-semibold mb-2">About Us</p>
            <h1 className="text-4xl font-bold mb-5">#1 Digital Solution with 10 Years of Experience</h1>
            <p className="mb-6 text-lg">We have a team of experienced professionals in the IT industry and innovative minds.</p>

            {skills.map((skill, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between mb-2">
                  <p className="text-lg font-medium">{skill.name}</p>
                  <p className="text-lg font-medium">{skill.value}%</p>
                </div>
                <div className="relative w-full h-2 bg-gray-200 rounded-full">
                  <div
                    className={`absolute top-0 left-0 h-full rounded-full ${skill.color}`}
                    style={{ width: `${skill.value}%` }}
                    role="progressbar"
                    aria-valuenow={skill.value}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            ))}

            <a
              href="#"
              className="py-3 px-6 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300 mt-4 inline-block"
            >
              Read More
            </a>
          </div>

          {/* Image */}
          
          <div className="lg:w-1/2 flex justify-center">
          <Image
          className="img-fluid animated zoomIn"
          src={Aboutimg}
          alt="hero_image"
          width={400}
          height={500}
        />
            {/* <img
              className="w-[300px] h-auto animate-zoomIn"
              src="/img/about1 - Copy.gif" // Path to the GIF in the public/img folder
              alt="About Us"
              style={{ visibility: 'visible', animationDelay: '0.5s' }}
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
