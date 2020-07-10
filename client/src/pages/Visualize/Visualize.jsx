import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ChooseModel from '../../components/ChooseModel/ChooseModel';
import Graph from '../../components/Graph/Graph';

import './Visualize.css';

const Visualize = () => {
  const [ accuracyData, setAccuracyData ] = useState([]);

  return (
    <motion.div
      className='visualize'
      exit={{ y: '100vh', transition: { type: 'tween', ease: 'easeInOut' } }}
    >
      <ChooseModel
        accuracyData={accuracyData}
        setAccuracyData={setAccuracyData}
      />
      <Graph accuracyData={accuracyData} />
    </motion.div>
  );
};

export default Visualize;
