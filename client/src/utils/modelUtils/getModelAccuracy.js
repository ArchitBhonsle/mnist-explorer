export const getModelAccuracy = async (modelUrl) => {
  return fetch(`${modelUrl}/history.json`)
    .then((response) => response.json())
    .then((history) => history['accuracy']);
};
