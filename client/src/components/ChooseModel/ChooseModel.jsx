import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Choice from '../Choice/Choice';

import './ChooseModel.css';
import { getModelStatsPath } from '../../utils/modelUtils/getModelStatsPath';
import { getModelAccuracy } from '../../utils/modelUtils/getModelAccuracy';

const defaultModel = {
  modelType              : 'dense',
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
  modelTypes              : [ 'logistic', 'dense', 'cnn' ],
  filtersInFirstLayers    : [ '16', '32', '64', '128' ],
  numberOfCnnss           : [ '1', '3' ],
  unitsInDenseLayerCnns   : [ '64', '128', '256' ],
  unitsInDenseLayerDenses : [ '16', '32', '64', '128', '256' ],
  numberOfDenseLayerss    : [ '1', '2', '4' ],
  optimizers              : [ 'adam', 'rmsprop', 'sgd' ],
  learningRates           : [ '1', '01', '001' ],
  epochss                 : [ '5', '10', '20' ]
};

const ChooseModel = ({ accuracyData, setAccuracyData }) => {
  const [ model, setModel ] = useState(defaultModel);

  const changeModel = (name, choice) => {
    setModel({ ...model, [name]: choice });
  };

  const loadModelStats = async () => {
    const correctedModel = {
      modelType         : model.modelType,
      typeVariationInfo :
        model.modelType === 'dense'
          ? [ model.unitsInDenseLayerDense, model.numberOfDenseLayers ]
          : [
              model.filtersInFirstLayer,
              model.numberOfCnns,
              model.unitsInDenseLayerCnn
            ],
      optimizer         : model.optimizer,
      learningRate      : model.learningRate,
      epochs            : model.epochs
    };
    const [ modelName, modelUrl ] = getModelStatsPath(correctedModel);
    try {
      const accuracy = (await getModelAccuracy(modelUrl)).map(
        (acc) => acc.toPrecision(5) * 100
      );
      setAccuracyData((data) => {
        const present = data.findIndex((ele) => ele[0] === modelName);
        if (present !== -1) {
          return [ ...data ];
        } else {
          return [ ...data, [ modelName, accuracy ] ];
        }
      });
    } catch (err) {
      console.log(err);
      console.log(modelUrl);
    }
  };

  return (
    <motion.div
      className='choose-model'
      initial={{ x: '-100vw' }}
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
      ) : model.modelType === 'dense' ? (
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
      ) : (
        <React.Fragment />
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
        <button
          className='graph-it'
          onClick={loadModelStats}
          onDoubleClick={() => setAccuracyData([])}
        >
          <span>Graph It!</span>
        </button>
      </div>
    </motion.div>
  );
};

export default ChooseModel;
