import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Choice from '../Choice/Choice';

import './ChooseModel.css';
import { getModelStatsPath } from '../../utils/modelUtils/getModelStatsPath';
import { getModelAccuracy } from '../../utils/modelUtils/getModelAccuracy';

const defaultModel = {
  modelType             : 'logistic',
  optimizer             : 'adam',
  learningRate          : '01',
  epochs                : '10',
  l_optimizer           : 'adam',
  l_learningRate        : '1',
  l_epochs              : '5',
  c_filtersInFirstLayer : '16',
  c_numberOfLayers      : '1',
  c_unitsInDenseLayer   : '16',
  d_unitsInDenseLayer   : '16',
  d_numberOfLayers      : '1'
};

const choices = {
  modelType             : [ 'logistic', 'dense', 'cnn' ],
  optimizer             : [ 'adam', 'rmsprop' ],
  learningRate          : [ '01', '001' ],
  epochs                : [ '10', '20' ],
  l_optimizer           : [ 'adam', 'rmsprop', 'sgd' ],
  l_learningRate        : [ '1', '01', '001' ],
  l_epochs              : [ '5', '10', '20' ],
  c_filtersInFirstLayer : [ '16', '64', '256' ],
  c_numberOfLayers      : [ '1', '3' ],
  c_unitsInDenseLayer   : [ '16', '64', '256' ],
  d_unitsInDenseLayer   : [ '16', '64', '256' ],
  d_numberOfLayers      : [ '1', '2', '4' ]
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
          ? [ model.d_unitsInDenseLayer, model.d_numberOfLayers ]
          : [
              model.c_filtersInFirstLayer,
              model.c_numberOfLayers,
              model.c_unitsInDenseLayer
            ],
      optimizer         :
        model.modelType === 'logistic' ? model.l_optimizer : model.optimizer,
      learningRate      :
        model.modelType === 'logistic'
          ? model.l_learningRate
          : model.learningRate,
      epochs            :
        model.modelType === 'logistic' ? model.l_epochs : model.epochs
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
        choices={choices.modelType}
        changeModel={changeModel}
        model={model}
      />
      {model.modelType === 'logistic' ? (
        <React.Fragment>
          <Choice
            displayName='Optimizer'
            name='l_optimizer'
            choices={choices.l_optimizer}
            changeModel={changeModel}
            model={model}
          />
          <Choice
            displayName='Learning Rate'
            name='l_learningRate'
            choices={choices.l_learningRate}
            changeModel={changeModel}
            model={model}
          />
          <Choice
            displayName='Epochs'
            name='l_epochs'
            choices={choices.l_epochs}
            changeModel={changeModel}
            model={model}
          />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Choice
            displayName='Optimizer'
            name='optimizer'
            choices={choices.optimizer}
            changeModel={changeModel}
            model={model}
          />
          <Choice
            displayName='Learning Rate'
            name='learningRate'
            choices={choices.learningRate}
            changeModel={changeModel}
            model={model}
          />
          <Choice
            displayName='Epochs'
            name='epochs'
            choices={choices.epochs}
            changeModel={changeModel}
            model={model}
          />
        </React.Fragment>
      )}
      {model.modelType === 'cnn' ? (
        <React.Fragment>
          <Choice
            displayName='Filters in first CNN layer'
            name='c_filtersInFirstLayer'
            choices={choices.c_filtersInFirstLayer}
            changeModel={changeModel}
            model={model}
          />
          <Choice
            displayName='Number of CNN layers'
            name='c_numberOfLayers'
            choices={choices.c_numberOfLayers}
            changeModel={changeModel}
            model={model}
          />
          <Choice
            displayName='Units in the dense layer'
            name='c_unitsInDenseLayer'
            choices={choices.c_unitsInDenseLayer}
            changeModel={changeModel}
            model={model}
          />
        </React.Fragment>
      ) : model.modelType === 'dense' ? (
        <React.Fragment>
          <Choice
            displayName='Units in dense layer'
            name='d_unitsInDenseLayer'
            choices={choices.d_unitsInDenseLayer}
            changeModel={changeModel}
            model={model}
          />
          <Choice
            displayName='Number of dense layers'
            name='d_numberOfLayers'
            choices={choices.d_numberOfLayers}
            changeModel={changeModel}
            model={model}
          />
        </React.Fragment>
      ) : (
        <React.Fragment />
      )}

      <div>
        <button className='refresh-graph' onClick={() => setAccuracyData([])}>
          <span>↺</span>
        </button>
        <button className='graph-it' onClick={loadModelStats}>
          <span>Graph It!</span>
        </button>
      </div>
    </motion.div>
  );
};

export default ChooseModel;
