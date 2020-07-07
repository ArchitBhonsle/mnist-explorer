const getCnnVariation = (
  filtersInFirstLayer,
  numberOfCnns,
  unitsInDenseLayer
) => `${filtersInFirstLayer}x${numberOfCnns}x${unitsInDenseLayer}`;

const getDenseVariation = (unitsInDenseLayer, numberOfDenseLayers) =>
  `${unitsInDenseLayer}x${numberOfDenseLayers}`;

export const getModelPath = (modelInfo) => {
  const {
    modelType,
    typeVariationInfo,
    optimizer,
    learningRate,
    epochs
  } = modelInfo;

  let typeVariation;
  if (modelType === 'dense') {
    typeVariation = getDenseVariation(...typeVariationInfo);
  } else if (modelType === 'cnn') {
    typeVariation = getCnnVariation(...typeVariationInfo);
  }

  return `/models/${modelType}/${typeVariation}/${optimizer}/${learningRate}/${epochs}/model.json`;
};

export const getModelStatsPath = (modelInfo) => {
  const {
    modelType,
    typeVariationInfo,
    optimizer,
    learningRate,
    epochs
  } = modelInfo;

  let typeVariation;
  if (modelType === 'dense') {
    typeVariation = getDenseVariation(...typeVariationInfo);
  } else if (modelType === 'cnn') {
    typeVariation = getCnnVariation(...typeVariationInfo);
  }

  return `/stats/${modelType}/${typeVariation}/${optimizer}/${learningRate}/${epochs}`;
};
