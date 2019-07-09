import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Cards from '../components/Cards';
import Health from '../components/Health';
import GlobalContext from '../components/context';


const Home = (
  props
) => (
  
    <GlobalContext.Provider value={props} >
    <Header />
    <div className="container">
      <Hero />
      <Cards />
      <Health />
    </div>
  </GlobalContext.Provider>
);

Home.getInitialProps = ({
  req,
}) => req.client;

export default Home;
