import React from 'react';
import dynamic from 'next/dynamic';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Cards from '../components/Cards';
// import Health from '../components/Health';
import GlobalContext from '../components/context';
import InView from '../components/InView'

const Health = dynamic(import(/* webpackChunkName: "lodash" */'../components/Health'))

const Home = (
  props
) => (
  
    <GlobalContext.Provider value={props} >
    <Header />
    <div className="container">
      <Hero />
      <Cards />
      <InView>
        <Health />
      </InView>
    </div>
  </GlobalContext.Provider>
);

Home.getInitialProps = ({
  req,
}) => req.client;

export default Home;
