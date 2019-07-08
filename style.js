// calculateStylePoints.js
const calculateStylePoints = (styleNotes) => {
  let styleNotes = [];

  if (styleNotes.length != 5) {
    alert("Incorrect number of notes. Please try again.");
    break;
  } else {
    let minNote = Math.min(...styleNotes);
    let maxNote = Math.max(...styleNotes);
    let sumNote = styleNotes.reduce((a, b) => a + b, 0);
    let finalNote = sumNote - minNote - maxNote;

  }

};

module.exports = calculateStylePoints;