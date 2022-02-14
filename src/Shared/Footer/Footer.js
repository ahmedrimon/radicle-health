import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="container">
        <div className="row">
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
            <Link to="/" className="mx-5">
              About
            </Link>
          </div>
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
            <Link to="/" className="mx-5">
              Blog
            </Link>
          </div>
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
            <Link to="/" className="mx-5 ">
              Contact
            </Link>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <h5 className="footer-last">
              © 2022 Radicle Health -- All Rights Reserved --
              <span style={{ color: '#65a78a', marginLeft: '5px' }}>
                Privacy Notice
              </span>
              <span style={{ color: '#65a78a', marginLeft: '5px' }}>
                Terms of Use
              </span>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
