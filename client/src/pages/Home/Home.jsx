import React from 'react';
import Introduction from '../../components/Introduction/Introduction';
import Predict from '../../components/Predict/Predict';

import './Home.css';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      className='home'
      exit={{ y: '100vh', transition: { type: 'tween', ease: 'easeInOut' } }}
    >
      <div className='home-element'>
        <Introduction />
      </div>
      <div className='home-element centred'>
        <Predict />
      </div>
    </motion.div>
  );
};

export default Home;
