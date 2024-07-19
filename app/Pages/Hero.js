"use client";
import React from "react";
import Image from "next/image";
import heroImg from '../Assets/img/hero4.gif'

const Hero = () => {
  return (
    <div className="grid grid-cols-2 gap-4 text-red-500 mt-20 mx-24">
      <div className="flex flex-col justify-end">
        <h1
          style={{ color: "#04000B" }}
          className="text-black mb-4 text-4xl font-bold animated slideInLeft"
        >
          ShivSys Is A Digital Agency Of Intelligent & Creative People
        </h1>
        <p
          style={{ color: "#726D7B" }}
          className="text-black text-base pb-3 animated slideInLeft"
        >
          Shivsys is a leading SaaS (Software as a Service) company dedicated to
          providing innovative solutions for businesses of all sizes. We provide
          Web Development, App Development & Cloud Services{" "}
        </p>
        <div>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read More
          </button>

          <button
            type="button"
            className="ms-12 text-white bg-gray-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:focus:ring-blue-800"
          >
            Contact Us
          </button>
        </div>
      </div>
      <div class="">
        <Image
          className="img-fluid animated zoomIn"
          src={heroImg}
          alt="hero_image"
          width={588}
          height={437}
        />
      </div>
    </div>
  );
};

export default Hero;
