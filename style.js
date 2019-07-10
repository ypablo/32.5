// calculateStylePoints.js
const calculateStylePoints = (styleNotes) => {

  let notes=[16, 17, 18, 19, 20];

  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  if (notes.length != 5) {
    throw new Error('Invalid argument');
  } else {
    let minNote = Math.min(...notes);
    let maxNote = Math.max(...notes);
    let sumNote = notes.reduce(reducer);
    styleNotes = sumNote - minNote - maxNote;
  }

  return (Math.round(styleNotes * 2) / 2).toFixed(1);
};

module.exports = calculateStylePoints;