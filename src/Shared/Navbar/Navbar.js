import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { debounce } from '../Helpers.js';

import logo from '../../images/logo.svg';

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  const navbarStyles = {
    position: 'fixed',
    height: '70px',
    width: '100%',
    backgroundColor: 'grey',
    textAlign: 'center',
    transition: 'top 0.7s',
  };
  return (
    <section style={{ ...navbarStyles, top: visible ? '0' : '-81px' }}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img style={{ width: '20%' }} src={logo} alt="logo" />
            <span style={{ fontSize: '1.5em' }} className="mx-2">
              Radical Health
            </span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="#"
                  className="nav-link active mt-1"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="#"
                  className="nav-link active mt-1"
                  aria-current="page"
                >
                  Companies
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="#"
                  className="nav-link active mt-1"
                  aria-current="page"
                >
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link active" aria-current="page">
                  <button className="btn btn-outline-success">Login</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
