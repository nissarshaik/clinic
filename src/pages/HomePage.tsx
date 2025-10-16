import React from 'react';
import Hero from '../components/home/Hero';
import Welcome from '../components/home/Welcome';
import Services from '../components/home/Services';
import Testimonials from '../components/home/Testimonials';
import Cta from '../components/home/Cta';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Welcome />
      <Services />
      <Testimonials />
      <Cta />
    </>
  );
};

export default HomePage;