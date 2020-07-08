import React from 'react';
import Introduction from '../../components/Introduction/Introduction';
import Predict from '../../components/Predict/Predict';

import './Home.css';

const Home = () => {
  return (
    <div className='home'>
      <div className='home-element'>
        <Introduction />
      </div>
      <div className='home-element centred'>
        <Predict />
      </div>
    </div>
  );
};

export default Home;
