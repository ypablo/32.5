const assert = require('assert');
const calculateStylePoints = require('./style');

describe('calculateStylePoints', () => {
    describe('styleNotes', () => {
        it('should return final value of style points', () => {
            const actual = calculateStylePoints([16, 17, 18, 19, 20]);;

            const expected = 54;

            assert.equal(actual, expected);
        });
    });

    describe('styleNotes', () => {
        it('should return error if there are not exactly 5 style points (digits)', () => {

            assert.throws(() => calculateStylePoints([18, 19, 20]), /^Error: Invalid argument - wrong length of notes$/);
        });
    });

    describe('styleNotes', () => {
        it('should return error if any style point is not a number', () => {

            assert.throws(() => calculateStylePoints([16, "kodilla", 18, 19, 20]), /^Error: Invalid argument - NaN$/);
        });
    });
});    