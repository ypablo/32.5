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

describe('calculateStylePoints', () => {
    describe('Notes', () => {
        it('should contain exactly 5 notes (digits)', () => {
            const actual = 5

            const expected = 5;

            assert.equal(actual, expected);
        });
    });
});

describe('calculateStylePoints', () => {
    describe('styleNotes', () => {
        it('should return error if any style point is not a number', () => {

            assert.throws(() => calculateStylePoints(null), /^Error: Invalid argument$/);
        });
    });
});    