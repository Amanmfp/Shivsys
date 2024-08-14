import React from 'react';
import Image from "next/image";
import team1 from "../Assets/img/team1.jpg";
import team2 from "../Assets/img/team2.jpg";
import team3 from "../Assets/img/team3.jpg";

const teamMembers = [
  {
    name: "Vivek Gupta",
    position: "CEO & Founder",
    imgSrc: team1,
    delay: "0.1s",
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "Vivek Tiwari",
    position: "Digital Marketer",
    imgSrc: team3,
    delay: "0.3s",
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "Akash Singh",
    position: "SEO Expert",
    imgSrc: team2,
    delay: "0.5s",
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
];

const Team = () => {
  return (
    <div className="container mx-auto py-16">
      <div className="text-center mb-10">
        <p className="text-secondary text-xl mb-2">
          <span className="block w-24 h-1 bg-secondary mx-auto mb-2 animate__animated animate__fadeInLeft"></span>
          Our Team
          <span className="block w-24 h-1 bg-secondary mx-auto mt-2 animate__animated animate__fadeInRight"></span>
        </p>
        <h1 className="text-4xl font-bold animate__animated animate__zoomIn">Our Team Members</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`bg-white rounded-lg shadow-lg transform transition duration-500 hover:scale-105 animate__animated animate__fadeInUp`}
            style={{ animationDelay: member.delay }}
          >
            <div className="text-center border-b p-6 animate__animated animate__fadeIn">
              <Image
                className="w-32 h-32 rounded-full mx-auto mb-4 animate__animated animate__zoomIn"
                src={member.imgSrc}
                alt={member.name}
                width={128}  // Adjusted width
                height={128} // Adjusted height
              />
              <h5 className="text-xl font-semibold animate__animated animate__fadeInUp">{member.name}</h5>
              <span className="text-gray-500 animate__animated animate__fadeInUp">{member.position}</span>
            </div>
            <div className="flex justify-center p-4">
              {Object.keys(member.social).map((platform, i) => (
                <a
                  key={i}
                  className={`btn btn-square mx-1 transition-all duration-300 transform hover:scale-125 animate__animated animate__bounceIn`}
                  href={member.social[platform]}
                  style={{ animationDelay: `${0.2 * (i + 1)}s` }}
                >
                  <i className={`fab fa-${platform}`}></i>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
