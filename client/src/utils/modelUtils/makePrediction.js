import { argMax, image } from '@tensorflow/tfjs';

export const makePrediction = (model, raw) => {
  const resized = image.resizeBilinear(raw, [ 28, 28 ]);
  const input = resized.expandDims(0);
  const probabilities = model.predict(input);
  const prediction = argMax(probabilities, 1).dataSync();

  return prediction;
};
