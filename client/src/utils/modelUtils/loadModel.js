import { loadGraphModel } from '@tensorflow/tfjs';
import { getModelPath } from './modelPathUtils';

export const loadModel = (modelInfo) => {
  const modelPath = getModelPath(modelInfo);
  const modelPromise = loadGraphModel(modelPath);

  return modelPromise;
};
