// calculateStylePoints.js
const calculateStylePoints = (styleNotes) => {
  styleNotes = [16, 17, 18, 19, 20];
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  styleNotes.map(function (item) {
    if (isNaN(item)) {
      styleNotes === NaN;
      throw new Error('Invalid argument - NaN');
    } else if (item === null) {
      styleNotes === null;
      throw new Error('Invalid argument - null');
    } else if (item === undefined) {
      styleNotes === undefined;
      throw new Error('Invalid argument - undefined');
    }
  })



  if (styleNotes.length != 5) {
    throw new Error('Invalid argument');
  } else {
    let minNote = Math.min(...styleNotes);
    let maxNote = Math.max(...styleNotes);
    let sumNote = styleNotes.reduce(reducer);
    Notes = sumNote - minNote - maxNote;
  }

  return (Math.round(Notes * 2) / 2).toFixed(1);
};

module.exports = calculateStylePoints;