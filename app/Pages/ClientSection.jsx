import React from 'react';
import ClientCard from './ClientCard'; // Ensure the correct path
import Image from "next/image";
import comp1 from '../Assets/img/comp1.png';
import comp2 from '../Assets/img/comp2.png';

const clientData = [
  { image: 'img/comp1.png', title: 'WitQualis Technologies Pvt Ltd' },
  { image: 'img/comp2.png', title: 'Rivian - Electric Adventure Vehicles' },
  { image: 'img/comp3.jpg', title: "Magicbricks™ - India's No.1 Property Site" },
  { image: 'img/comp4.jpg', title: 'StrategicERP : India\'s no 1 ERP solution for construction developers' },
  { image: 'img/comp5.jpg', title: 'NSE - National Stock Exchange of India Ltd.' },
  { image: 'img/comp6.jpg', title: 'Yokogawa Provides Remote Operation/Monitoring System and Video Monitoring Solution' },
  { image: 'img/nttdata.jpg', title: 'NTT Data- a part of NTT Group' },
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
             <Image
          className="img-fluid animated zoomIn"
          src={comp1}
          alt="comp_1"
          width={300}
          height={300}
        />
        <Image
          className="img-fluid animated zoomIn"
          src={comp2}
          alt="comp_2"
          width={300}
          height={300}
        />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ClientSection;
