// calculateDistancePoints.js
const calculateDistancePoints = (distance, hillSize, kPoint) => {
  let skiJumperPts;
  let Pts;


  if (isNaN(kPoint) || kPoint == null || kPoint == undefined) {
    throw new Error('Invalid 3rd argument');
  } else if (isNaN(distance) || distance == null || distance == undefined) {
    throw new Error('Invalid 1st argument');
  } else if (hillSize != "small" && hillSize != "medium" && hillSize != "large") {
    throw new Error('Invalid 2nd argument');
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