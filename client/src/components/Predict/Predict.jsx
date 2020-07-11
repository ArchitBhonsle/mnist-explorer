import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Grid from '../Grid/Grid';
import Button from '../Button/Button';

import { makePrediction } from '../../utils/modelUtils/makePrediction';
import { loadModel } from '../../utils/modelUtils/loadModel';

import './Predict.css';

const Predict = () => {
  const [ model, setModel ] = useState();
  const [ prediction, setPrediction ] = useState(-1);

  const [ grid, setGrid ] = useState(new Array(28 * 28).fill(0));

  useEffect(() => {
    loadModel().then((model) => {
      setModel(model);
    });
  }, []);

  const predict = () => {
    if (model !== undefined) {
      setPrediction(makePrediction(model, grid));
    }
  };

  const clearGridAndPrediction = () => {
    setPrediction(-1);
    setGrid(new Array(28 * 28).fill(0));
  };

  return (
    <motion.div
      className='centered'
      initial={{ x: '100vw' }}
      animate={{
        x          : 0,
        transition : { type: 'tween', duration: 1, ease: 'easeOut' }
      }}
    >
      <div
        className={`prediction ${prediction !== -1 ? 'prediction-blue' : ''}`}
      >
        {prediction === -1 ? 'Draw here' : `It's a ${prediction} !`}
      </div>
      <Grid grid={grid} setGrid={setGrid} />
      <div className='predict-buttons '>
        <Button
          onClick={(e) => {
            e.preventDefault();
            predict();
          }}
        >
          Predict
        </Button>
        <Button
          onClick={(e) => {
            e.preventDefault();
            clearGridAndPrediction();
          }}
          light
        >
          Clear
        </Button>
      </div>
    </motion.div>
  );
};

export default Predict;
