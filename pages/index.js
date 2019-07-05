import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Cards from '../components/Cards';

const Home = () => (
  <>
    <Header />
    <div className="container">
      <Hero />
      <Cards />
    </div>
  </>
);

export default Home;
