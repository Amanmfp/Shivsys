import React from 'react';
import ClientCard from './ClientCard'; // Adjust the path based on your file structure
import comp1 from '../Assets/img/comp1.png';
import comp2 from '../Assets/img/comp2.png';
import comp3 from '../Assets/img/comp3.jpg';
import comp4 from '../Assets/img/comp4.jpg';
import comp5 from '../Assets/img/comp5.jpg';
import comp6 from '../Assets/img/comp6.jpg';

const clientData = [
  { image: comp1, title: 'WitQualis Technologies Pvt Ltd' },
  { image: comp2, title: 'Rivian - Electric Adventure Vehicles' },
  { image: comp3, title: "Magicbricks™ - India's No.1 Property Site" },
  { image: comp4, title: 'StrategicERP : India\'s no 1 ERP solution for construction developers' },
  { image: comp5, title: 'NSE - National Stock Exchange of India Ltd.' },
  { image: comp6, title: 'Yokogawa Provides Remote Operation/Monitoring System and Video Monitoring Solution' },
];

const ClientSection = () => (
  <section className="service-grid pb-5 pt-5">
    <div className="container mx-auto">
      <div className="row">
        <div className="col-xl-12 text-center mb-4">
          <div className="service-title">
            <h2><strong>OUR CLIENTS</strong></h2><br />
          </div>
        </div>
      </div>
      <div className="row">
        {clientData.map((client, index) => (
          <div key={index} className="col-lg-4 col-md-6 text-center mb-3">
            <ClientCard
              image={client.image}
              title={client.title}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ClientSection;
