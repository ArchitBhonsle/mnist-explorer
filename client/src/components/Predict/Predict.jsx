import React, { useState, useEffect } from 'react';
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
    <div className='centered'>
      <div
        className={`prediction ${prediction !== -1 ? 'prediction-blue' : ''}`}
      >
        {prediction === -1 ? 'Draw here' : `It's a ${prediction} !`}
      </div>
      <Grid grid={grid} setGrid={setGrid} />
      <div className='predict-buttons '>
        <Button onClick={predict}>Predict</Button>
        <Button onClick={clearGridAndPrediction} light>
          Clear
        </Button>
      </div>
    </div>
  );
};

export default Predict;
