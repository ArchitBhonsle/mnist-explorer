import { loadGraphModel } from '@tensorflow/tfjs';

export const loadModel = () => {
  const modelPath = '/models/best/model.json';
  const modelPromise = loadGraphModel(modelPath);

  return modelPromise;
};
