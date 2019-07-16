// calculateTotalPoints.js
const calculateDistancePoints = require('./distance');
const calculateStylePoints = require('./style');

const calculateTotalPoints = (distance, hillSize, kPoint, styleNotes, windFactor, gateFactor) => {

  if (calculateTotalPoints.length != 6) {
    throw new Error('Invalid argument');
  } else if (isNaN(windFactor) || windFactor == null || windFactor == undefined) {
    throw new Error('Invalid argument');
  } else if (isNaN(gateFactor) || gateFactor == null || gateFactor == undefined) {
    throw new Error('Invalid argument');
  }

  const distancePoints = calculateDistancePoints(distance, hillSize, kPoint);
  const stylePoints = calculateStylePoints(styleNotes);

  return (Math.round(distancePoints * 2) / 2) + (Math.round(stylePoints * 2) / 2) + windFactor + gateFactor;
}

module.exports = calculateTotalPoints;