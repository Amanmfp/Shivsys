"use client"; // Add this directive at the top

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Define the ClientCard component
const ClientCard = ({ clients = [] }) => { // Default to an empty array if no clients prop is provided
  const [flipped, setFlipped] = useState(Array(clients.length).fill(false));

  const handleFlip = (index) => {
    const newFlipped = [...flipped];
    newFlipped[index] = !newFlipped[index];
    setFlipped(newFlipped);
  };

  return (
    <section className="service-grid pb-5 pt-5">
      <div className="container mx-auto">
        <div className="text-center mb-4">
          <div className="service-title">
            <br />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {clients.map((client, index) => (
            <div key={index} className="text-center mb-3">
              <div
                className="bg-transparent w-64 h-64 perspective-1000 mx-auto cursor-pointer"
                onClick={() => handleFlip(index)}
              >
                <div
                  className={`relative w-full h-full text-center transition-transform duration-700 transform-style-preserve-3d shadow-md ${
                    flipped[index] ? 'rotate-y-180' : ''
                  }`}
                >
                  <div className="absolute w-full h-full backface-hidden bg-white flex items-center justify-center">
                    <img src={client.imgSrc} alt={client.title} className="w-24 h-24" />
                  </div>
                  <div className="absolute w-full h-full backface-hidden bg-white flex items-center justify-center transform rotate-y-180 p-4">
                    <h1 className="text-black">{client.title}</h1>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Define prop types for validation
ClientCard.propTypes = {
  clients: PropTypes.arrayOf(
    PropTypes.shape({
      imgSrc: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ClientCard;