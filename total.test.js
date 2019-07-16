const assert = require('assert');
const calculateTotalPoints = require('./total');

describe('calculateTotalPoints', () => {
    it('should return total points', () => {
        const actual = calculateTotalPoints(120, "small", 100, [16, 17, 18, 19, 20], 10, 10);

        const expected = 174;

        assert.equal(actual, expected);
    });
});

describe('calculateTotalPoints', () => {
    it('should return error if gateFactor is null', () => {

        assert.throws(() => calculateTotalPoints(120, "small", 100, [16, 17, 18, 19, 20], 10, null), /^Error: Invalid argument$/);

    });
});

describe('calculateTotalPoints', () => {
    it('should return error if number of arguments is different than 6', () => {

        assert.throws(() => calculateTotalPoints(120, "small", 100, [16, 17, 18, 19, 20], 10), /^Error: Invalid argument$/);

    });
});   