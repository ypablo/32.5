// calculateDistancePoints.js
const calculateDistancePoints = (distance, hillSize, kPoint) => {

  let skiJumperPts;
  let Pts;

  if (isNaN(kPoint) || kPoint === null || kPoint === undefined) {
    //throw new Error('Invalid argument')
    throw new Error('Invalid argument')
    //return false;
  } else if (hillSize != "small" || hillSize != "medium" || hillSize != "large") {
    return false;
  } else if (hillSize == "small") {
    Pts = (Math.round(distance * 2) / 2 - kPoint) * 2;
    skiJumperPts = 60 + Pts;
  } else if (hillSize == "medium") {
    Pts = (Math.round(distance * 2) / 2 - kPoint) * 1.8;
    skiJumperPts = 60 + Pts;
  } else if (hillSize == "large") {
    Pts = (Math.round(distance * 2) / 2 - kPoint) * 1.2;
    skiJumperPts = 120 + Pts;
  }

  return (Math.round(skiJumperPts * 2) / 2).toFixed(1);

};

module.exports = calculateDistancePoints;