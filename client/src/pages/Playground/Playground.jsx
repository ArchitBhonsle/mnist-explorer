import React, { useState, useEffect } from 'react';
import Grid from '../../components/Grid/Grid';
import { loadModel } from '../../utils/modelUtils/loadModel';

import './Playground.css';

const bestPerformingModel = {
  modelType         : 'cnn',
  typeVariationInfo : [ '128', '3', '128' ],
  optimizer         : 'adam',
  learningRate      : '001',
  epochs            : '20'
};

const Playground = () => {
  const [ modelInfo, setModelInfo ] = useState(bestPerformingModel);
  const [ model, setModel ] = useState();
  const [ width ] = useState(window.innerWidth / 2);
  const [ input, setInput ] = useState(
    new Array(28).fill(0).map(() => new Array(28).fill(0))
  );

  useEffect(
    () => {
      loadModel(modelInfo).then((model) => {
        setModel(model);
      });
    },
    [ modelInfo ]
  );

  return (
    <div>
      <div className='split left'>
        <div className='centered'>
          <h1>Options</h1>
        </div>
      </div>
      <div className='split right'>
        <div className='centered'>
          <Grid setInput={setInput} width={width} />
        </div>
      </div>
    </div>
  );
};

export default Playground;
