const getCnnVariation = (
  filtersInFirstLayer,
  numberOfCnns,
  unitsInDenseLayer
) => `${filtersInFirstLayer}x${numberOfCnns}x${unitsInDenseLayer}`;

const getDenseVariation = (unitsInDenseLayer, numberOfDenseLayers) =>
  `${unitsInDenseLayer}x${numberOfDenseLayers}`;

const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

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
  } else {
    return [
      `${capitalize(modelType)} ${capitalize(
        optimizer
      )} 0.${learningRate} ${epochs}`,
      `/stats/dense/0x0/${optimizer}/${learningRate}/${epochs}`
    ];
  }

  return [
    `${capitalize(modelType)} ${typeVariation} ${capitalize(
      optimizer
    )} 0.${learningRate} ${epochs}`,
    `/stats/${modelType}/${typeVariation}/${optimizer}/${learningRate}/${epochs}`
  ];
};
