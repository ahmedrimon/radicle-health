import React from 'react';
import Footer from '../../../Shared/Footer/Footer.js';
import Navbar from '../../../Shared/Navbar/Navbar.js';
import FooterUpper from '../FooterUpper/FooterUpper.js';
import Hero from '../Hero/Hero.js';
import Services from '../Services/Services.js';

const Home = () => {
  return (
    <section>
      <Navbar />
      <Hero />
      <Services />
      <FooterUpper />
      <Footer />
    </section>
  );
};

export default Home;
