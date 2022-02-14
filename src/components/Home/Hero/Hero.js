import React from 'react';
import './Hero.css';

import hero from '../../../images/hero-image.gif';

const Hero = () => {
  return (
    <section className="hero-container">
      <article className="container">
        <article className="row">
          <article className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div className="first-part-container">
              <h1 className="hero-text">Our Radicle Approach</h1>
              <article className="hero-para">
                <div>
                  <strong>Radicle</strong>
                  <br />
                  <span>(noun) — The foundation of a strong root system</span>
                </div>
                <div>
                  <strong>Radicle</strong>
                  <br />
                  <span>
                    (adjective) — A departure from tradition, unorthodox
                  </span>
                </div>
              </article>
            </div>
          </article>
          <article className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div className="second-part-container">
              <img className="hero-image" src={hero} alt="heroImage" />
            </div>
          </article>
        </article>
      </article>
    </section>
  );
};

export default Hero;
