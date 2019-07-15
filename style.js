// calculateStylePoints.js
const calculateStylePoints = (styleNotes) => {

  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  styleNotes.map(function (item) {
    if (isNaN(item)) {
      throw new Error('Invalid argument - NaN');
    } else if (item === null) {
      throw new Error('Invalid argument - null');
    } else if (item === undefined) {
      throw new Error('Invalid argument - undefined');
    }
  });

  if (styleNotes.length != 5) {
    throw new Error('Invalid argument - wrong length of notes');
  }

  let minNote = Math.min(...styleNotes);
  let maxNote = Math.max(...styleNotes);
  let sumNote = styleNotes.reduce(reducer);
  styleNotes = sumNote - minNote - maxNote;

  return (Math.round(styleNotes * 2) / 2)
};

module.exports = calculateStylePoints;
