import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import './Introduction.css';

const Introduction = () => {
  return (
    <motion.div
      className='introduction'
      initial={{ x: '-100vw' }}
      animate={{
        x          : 0,
        transition : { type: 'tween', duration: 1, ease: 'easeOut' }
      }}
    >
      <h1 className='whats-mnist'>What's MNIST?</h1>
      <div className='description'>
        The MNIST database (Modified National Institute of Standards and
        Technology database) is a large database of handwritten digits that is
        commonly used for training various image processing systems. The
        database is also widely used for training and testing in the field of
        machine learning.
      </div>
      <div>
        <Link className='go-visualize' to='/visualize'>
          <span>Gimme graphs!</span>
        </Link>
      </div>
    </motion.div>
  );
};

export default Introduction;
