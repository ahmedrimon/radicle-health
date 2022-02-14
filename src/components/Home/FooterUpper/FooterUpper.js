import React from 'react';
import './FooterUpper.css';

const FooterUpper = () => {
  return (
    <div className="footerupper-container mt-5 text-center mb-5">
      <div className="container">
        <div className="row">
          <h2>Interested in learning more</h2>
          <h2>about Foothold?</h2>
          <div className="text-center">
            <button
              type="button"
              className="btn btn-outline-success text-center footer-btn"
            >
              Check Out Foothold's Website
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterUpper;
