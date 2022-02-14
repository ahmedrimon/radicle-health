import React, { useEffect, useState } from 'react';
import Service from '../Service/Service.js';
import './Services.css';

// import old from '../../../images/old.png';
// import boy from '../../../images/boy.png';
// import app from '../../../images/app.png';
// import earth from '../../../images/earth.png';
// import food from '../../../images/food.png';
// import billing from '../../../images/billing.png';

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('/services.json')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    //     <section className="service-container">
    //       <h1 className="service-header-text">Services</h1>
    //       <section className="card-group-container">
    //         <article className="card-group ">
    //           {services.map((service) => (
    //             <Service key={service.id} service={service} />
    //           ))}
    //         </article>
    //       </section>
    //     </section>
    <div className="service-wrapper">
      {/* <h1 className="service-header-text">Services</h1> */}
      {services.map((service) => (
        <Service key={service.id} service={service} />
      ))}
    </div>
  );
};

export default Services;
