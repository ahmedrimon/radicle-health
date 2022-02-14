import React from 'react';
import './Service.css';

import { Link } from 'react-router-dom';

const Service = ({ service }) => {
  const { name, image, description } = service;
  return (
    //     <div className="card">
    //       <img src={image} className="card-img-top" alt="allImages" />
    //       <div className="card-body">
    //         <h5 className="card-title">{name}</h5>
    //         <p className="card-text">{description}</p>
    //         <Link to="#" className="btn btn-outline-success">
    //           Learn More
    //         </Link>
    //       </div>
    //     </div>
    <div className="service">
      <img className="card-image" src={image} alt="allImages" />
      <div>
        <h5 className="title">{name}</h5>
        <p className="text">{description}</p>
        <Link to="#" className="btn btn-outline-success">
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default Service;
