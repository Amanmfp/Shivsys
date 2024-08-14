import React from 'react';
import Image from 'next/image'; // Assuming you're using Next.js
import comp1 from '../Assets/img/comp1.png';
import comp2 from '../Assets/img/comp2.png';
import comp3 from '../Assets/img/comp3.jpg';
import comp4 from '../Assets/img/comp4.jpg';
import comp5 from '../Assets/img/comp5.jpg';
import comp6 from '../Assets/img/comp6.jpg';
import ntdata from '../Assets/img/nttdata.jpg';

const ourclients = [
  { imgSrc: comp1, alt: "Avatar", text: "WitQualis Technologies Pvt Ltd" },
  { imgSrc: comp2, alt: "Avatar", text: "Rivian - Electric Adventure Vehicles" },
  { imgSrc: comp3, alt: "Avatar", text: "Magicbricks™ - India's No.1 Property Site" },
  { imgSrc: comp4, alt: "Avatar", text: "StrategicERP : India's no 1 ERP solution for construction developers" },
  { imgSrc: comp5, alt: "Avatar", text: "NSE - National Stock Exchange of India Ltd." },
  { imgSrc: comp6, alt: "Avatar", text: "Yokogawa Provides Remote Operation/Monitoring System and Video Monitoring Solution" },
  { imgSrc: ntdata, alt: "Avatar", text: "NTT Data- a part of NTT Group" }
];

const OurClientCards = () => {
  return (
    <section className="pb-5 pt-5">
      <div className="container mx-auto">
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold">OUR CLIENTS</h2>
        </div>
        <div className="flex flex-wrap -mx-3">
          {ourclients.map((client, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
              <div className="relative w-full h-72 perspective-1000">
                <div className="flip-card relative w-full h-full transition-transform duration-600 transform-style-preserve-3d hover:rotate-y-180">
                  <div className="flip-card-inner absolute w-full h-full">
                    <div className="flip-card-front absolute w-full h-full backface-hidden bg-white flex items-center justify-center">
                      <Image src={client.imgSrc} alt={client.alt} width={150} height={150} className="rounded-full" />
                    </div>
                    <div className="flip-card-back absolute w-full h-full backface-hidden bg-white flex items-center justify-center p-4">
                      <h1 className="text-lg font-semibold">{client.text}</h1>
                    </div>
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

export default OurClientCards;
