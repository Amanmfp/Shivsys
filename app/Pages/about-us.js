import React from 'react';
import Navbar from './NavBar';

const Aboutus = () => {
  return (
    <div className="container-xl py-6 bg-white hero-header w-full">
      <div className="flex flex-wrap justify-center bg-cover bg-no-repeat bg-center p-10"
        style={{ backgroundImage: 'url("https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/bb29.png")' }}>
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <p className="text-black text-4xl font-extrabold mb-6">About Us</p>
          <p className="text-black text-lg mb-12">
            <strong>At Shivsys, we develop, design and maintain enterprise software solutions for our clients to automate their production execution with industrial machine integration. Shivsys also develop and design mobile application for almost every kind of industries, sectors & ideas.</strong>
          </p>
        </div>
      </div>
    </div>
  );
};


const Mission = () => {
  return (
    <div className="bg-white py-10 text-center">
      <h1 className="text-red-500 text-3xl mb-4">Our Mission</h1>
      <img src="https://s3.ap-south-1.amazonaws.com/s3.studytonight.com/tutorials/uploads/pictures/1628677506-101156.png" alt="Mission Image" className="mx-auto mb-4" />
      <p className="text-lg mb-4">ShivSys's mission is to provide the best services to <strong>businesses</strong> across the globe.</p>
      <p className="text-lg mb-4">We are a trusted partner for organizations leveraging technology to drive growth and efficiency. Our solutions address challenges and deliver results.</p>
      <p className="text-lg mb-4">We specialize in <strong>application development, Web Development, cloud computing, AI, and data analytics,</strong> offering cutting-edge solutions for success.</p>
      <p className="text-lg mb-4">We are a leading technology solutions company dedicated to empowering businesses with innovative and transformative digital solutions. With a team of highly skilled professionals and a customer-centric approach, we strive to deliver exceptional value to our clients across various industries.</p>
    </div>
  );
};


const Feature = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container py-5 px-lg-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-light rounded text-center p-4 shadow-md transition-transform transform hover:scale-105">
            <i className="fa fa-3x fa-mail-bulk text-primary mb-4"></i>
            <h5 className="mb-3">Infrastructure Technology</h5>
            <p className="m-0">Empowering businesses with innovative digital marketing strategies for impactful online growth.</p>
          </div>
          <div className="bg-light rounded text-center p-4 shadow-md transition-transform transform hover:scale-105">
            <i className="fa fa-3x fa-search text-primary mb-4"></i>
            <h5 className="mb-3">SEO & Backlinks</h5>
            <p className="m-0">Enhancing website visibility through strategic SEO optimization and high-quality backlink acquisition.</p>
          </div>
          <div className="bg-light rounded text-center p-4 shadow-md transition-transform transform hover:scale-105">
            <i className="fa fa-3x fa-laptop-code text-primary mb-4"></i>
            <h5 className="mb-3">Design & Development</h5>
            <p className="m-0">Transforming visions into stunning digital experiences through meticulous design and expert development craftsmanship.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const App=() => {
    return(
        <div>
            <Navbar/>
            <AboutUs/>
            <Mission/>
            <Feature/>
            <Team/>
        </div>
    );
};

export default App;

