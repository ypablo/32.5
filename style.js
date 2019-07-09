// calculateStylePoints.js
const calculateStylePoints = (styleNotes) => {
  styleNotes = [];
  let styleN = styleNotes.map((item) => {
    return (Math.round(item * 2) / 2).toFixed(1);
  });

  if (styleN.length != 5) {
    return;
  } else {
    let minNote = Math.min(...styleN);
    let maxNote = Math.max(...styleN);
    let sumNote = styleN.reduce((a, b) => a + b, 0);
    let finalNote = sumNote - minNote - maxNote;
  }

  return (Math.round(finalNote * 2) / 2).toFixed(1);
};

module.exports = calculateStylePoints;