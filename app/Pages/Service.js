import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const ServiceCard = ({ iconClass, title, description }) => (
  <div className="wow fadeInUp bg-blue-200 text-black hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out rounded-lg shadow-md p-6 flex flex-col items-center">
    <div className="flex-shrink-0 mb-4">
      <i className={iconClass}></i>
    </div>
    <h5 className="mb-3 text-xl font-bold">{title}</h5>
    <p className="text-center">{description}</p>
    <a href="#" className="mt-4 p-2 bg-blue-600 text-white rounded-full">
      <i className="fa fa-arrow-right"></i>
    </a>
  </div>
);

const Card = () => {
  const items = [
    {
      iconClass: 'fab fa-search fa-2x',
      title: 'SEO optimization',
      description: 'We provide on page and off page SEO and rank your website on first page in Google.',
    },
    {
      iconClass: 'fa fa-laptop-code fa-2x',
      title: 'Web Design',
      description: 'We use latest technologies to make websites like Reactjs,Expressjs,Nodejs,MongoDb.',
    },
    {
      iconClass: 'fas fa-facebook-f fa-2x',
      title: 'Social Media Marketing',
      description: "We use SEM to do Social Media Marketing Google Ads,Meta Ads.",
    },
    {
      iconClass: 'fas fa-mail-bulk fa-2x',
      title: 'E-mail Marketing',
      description: 'We do email marketing through Automation in Mailchimp.',
    },
    {
      iconClass: 'fas fa-clouds fa-2x',
      title: 'Cloud Services',
      description: 'We provide cloud services like AWS,Salesforce.',
    },
    {
      iconClass: 'fas fa-code fa-2x',
      title: 'App Development',
      description: 'We provide Android &IOs app Development through ReactNative & Flutter.',
    },
  ];

  return (
    <div className="m-20 text-center">
      <div className="container-xxl py-5">
        <div className="container py-9 px-lg-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((item, index) => (
              <ServiceCard
                key={index}
                iconClass={item.iconClass}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
