import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Choice from '../Choice/Choice';

import './ChooseModel.css';

const defaultModel = {
  modelType              : 'cnn',
  filtersInFirstLayer    : '128',
  numberOfCnns           : '3',
  unitsInDenseLayerCnn   : '128',
  unitsInDenseLayerDense : '16',
  numberOfDenseLayers    : '1',
  optimizer              : 'adam',
  learningRate           : '001',
  epochs                 : '10'
};

const choices = {
  modelTypes              : [ 'dense', 'cnn' ],
  filtersInFirstLayers    : [ '16', '32', '64', '128' ],
  numberOfCnnss           : [ '1', '3' ],
  unitsInDenseLayerCnns   : [ '64', '128', '256' ],
  unitsInDenseLayerDenses : [ '16', '32', '64', '128', '256' ],
  numberOfDenseLayerss    : [ '1', '2', '4' ],
  optimizers              : [ 'adam', 'rmsprop', 'sgd' ],
  learningRates           : [ '1', '01', '001' ],
  epochss                 : [ '10', '20' ]
};

const ChooseModel = ({ modelStatsPath, nextColor }) => {
  const [ model, setModel ] = useState(defaultModel);
  useEffect(
    () => {
      console.log(model);
    },
    [ model ]
  );

  const changeModel = (name, choice) => {
    setModel({ ...model, [name]: choice });
  };

  return (
    <motion.div
      initial={{ x: '-50vw' }}
      animate={{
        x          : 0,
        transition : { type: 'tween', duration: 1, ease: 'easeOut' }
      }}
    >
      <Choice
        displayName='Model Type'
        name='modelType'
        choices={choices['modelTypes']}
        changeModel={changeModel}
        model={model}
      />
      {model.modelType === 'cnn' ? (
        <React.Fragment>
          <Choice
            displayName='Filters in first layer'
            name='filtersInFirstLayer'
            choices={choices['filtersInFirstLayers']}
            changeModel={changeModel}
            model={model}
          />
          <Choice
            displayName='Number of CNN layers'
            name='numberOfCnns'
            choices={choices['numberOfCnnss']}
            changeModel={changeModel}
            model={model}
          />
          <Choice
            displayName='Units in the dense layer'
            name='unitsInDenseLayerCnn'
            choices={choices['unitsInDenseLayerCnns']}
            changeModel={changeModel}
            model={model}
          />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Choice
            displayName='Units in dense layer'
            name='unitsInDenseLayerDense'
            choices={choices['unitsInDenseLayerDenses']}
            changeModel={changeModel}
            model={model}
          />
          <Choice
            displayName='Number of dense layers'
            name='numberOfDenseLayers'
            choices={choices['numberOfDenseLayerss']}
            changeModel={changeModel}
            model={model}
          />
        </React.Fragment>
      )}
      <Choice
        displayName='Optimizer'
        name='optimizer'
        choices={choices['optimizers']}
        changeModel={changeModel}
        model={model}
      />
      <Choice
        displayName='Learning Rate'
        name='learningRate'
        choices={choices['learningRates']}
        changeModel={changeModel}
        model={model}
      />
      <Choice
        displayName='Epochs'
        name='epochs'
        choices={choices['epochss']}
        changeModel={changeModel}
        model={model}
      />

      <div>
        <a className='graph-it'>
          <span>Graph It!</span>
        </a>
      </div>
    </motion.div>
  );
};

export default ChooseModel;
