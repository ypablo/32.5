// calculateDistancePoints.js
const calculateDistancePoints = (distance, hillSize, kPoint) => {
  let distance;
  let hillSize;
  let kPoint;
  let skiJumperPts;
  let Pts;

  if (hillSize == "normal") {
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