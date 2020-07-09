import React from 'react';
import { motion } from 'framer-motion';
import ChooseModel from '../../components/ChooseModel/ChooseModel';
import Graph from '../../components/Graph/Graph';

import './Visualize.css';

const Visualize = () => {
  return (
    <motion.div
      className='visualize'
      exit={{ y: '100vh', transition: { type: 'tween', ease: 'easeInOut' } }}
    >
      <ChooseModel />
      {/* <Graph /> */}
    </motion.div>
  );
};

export default Visualize;
