const assert = require('assert');
const calculateStylePoints = require('./style');

describe('calculateStylePoints', () => {
    describe('styleNotes', () => {
        it('should return exact number of style points', () => {
            const actual = calculateStylePoints(54);

            const expected = 54;

            assert.equal(actual, expected);
        });
    });
});    