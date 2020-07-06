import { loadGraphModel } from '@tensorflow/tfjs';
import { getModelPath } from './getModelPath';

export const loadModel = (modelInfo) => {
  const modelPath = getModelPath(modelInfo);
  const modelPromise = loadGraphModel(modelPath);

  return modelPromise;
};
