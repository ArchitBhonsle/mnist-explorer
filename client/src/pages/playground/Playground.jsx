import React, { useState, useEffect } from 'react';
import { loadModel } from '../../utils/loadModel';

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

  useEffect(() => {
    loadModel(modelInfo).then((model) => {
      setModel(model);
    });
  }, []);

  return (
    <div>
      <h1>Hello from Playground</h1>
    </div>
  );
};

export default Playground;
