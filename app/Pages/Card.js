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
      iconClass: 'fab fa-apple fa-2x',
      title: 'App Development',
      description: 'We provide Android & iOS App development using ReactNative and Flutter.',
    },
    {
      iconClass: 'fa fa-cloud fa-2x',
      title: 'Cloud Services',
      description: 'We provide comprehensive cloud services, cloud strategy, and migration.',
    },
    {
      iconClass: 'fas fa-cogs fa-2x',
      title: 'Test Automation',
      description: "Enhance testing speed and efficiency with ShivSys's test automation services.",
    },
    {
      iconClass: 'fas fa-bullhorn fa-2x',
      title: 'Digital Marketing Support',
      description: 'We provide every digital marketing support SEO, SEM, CRM.',
    },
    {
      iconClass: 'fas fa-link fa-2x',
      title: 'SEO and Backlinks',
      description: 'We do off-page SEO by creating high authority backlinks.',
    },
    {
      iconClass: 'fas fa-code fa-2x',
      title: 'Design and Development',
      description: 'We use Figma for design and do Development on latest technologies.',
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
