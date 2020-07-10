import { tensor, argMax } from '@tensorflow/tfjs';

export const makePrediction = (model, grid) => {
  const input = tensor(grid).reshape([ 1, 28, 28, 1 ]);
  const probabilities = model.predict(input);
  const prediction = argMax(probabilities, 1).dataSync();

  return prediction;
};
