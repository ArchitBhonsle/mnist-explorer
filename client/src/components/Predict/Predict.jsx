import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Button from '../Button/Button';
import { browser } from '@tensorflow/tfjs/';

import { startPainting, stopPainting, sketch, erase } from './drawingControl';
import { makePrediction } from '../../utils/modelUtils/makePrediction';
import { loadModel } from '../../utils/modelUtils/loadModel';

import './Predict.css';

const getPixels = (image) => browser.fromPixels(image, 1);

const predict = (setPrediction, model, pixels) => {
  if (model !== undefined) {
    setPrediction(makePrediction(model, pixels));
  }
};

const Predict = () => {
  const [ model, setModel ] = useState();
  const [ prediction, setPrediction ] = useState(-1);
  const imageRef = useRef();
  const canvasRef = useRef();

  useEffect(() => {
    loadModel().then((model) => {
      setModel(model);
    });
  }, []);

  const clearGridAndPrediction = () => {
    setPrediction(-1);
    erase(canvasRef.current, imageRef.current);
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
      <div>
        <canvas
          ref={canvasRef}
          className='canvas'
          height='392'
          width='392'
          onMouseDown={(e) => startPainting(e)}
          onMouseUp={(e) => stopPainting(e)}
          onMouseMove={(e) => sketch(e, canvasRef.current, imageRef.current)}
        />
        <img ref={imageRef} id='canvasImage' alt='canvas data' />
      </div>
      <div className='predict-buttons '>
        <Button
          onClick={(e) => {
            e.preventDefault();
            predict(setPrediction, model, getPixels(imageRef.current));
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
