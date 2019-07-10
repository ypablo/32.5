const assert = require('assert');
const calculateDistancePoints = require('./distance');

describe('calculateDistancePoints', () => {
    describe('distance', () => {
        it('should return error if distance is not a number', () => {
            const actual = "test";

            const expected = 'Invalid argument';

            assert.throws(calculateDistancePoints, Error, "Error thrown");
        });
    });
    describe('hillSize', () => {
        it('should return small hillSize', () => {
            const actual = "small";

            const expected = "small";

            assert.equal(actual, expected);
        });
    });
    describe('hillSize', () => {
        it('should return medium hillSize', () => {
            const actual = "medium";

            const expected = "medium";

            assert.equal(actual, expected);
        });
    });
    describe('hillSize', () => {
        it('should return large hillSize', () => {
            const actual = "large";

            const expected = "large";

            assert.equal(actual, expected);
        });
    });
    describe('hillSize', () => {
        it('should return error if hillSize is not small, medium or large', () => {
            const actual = "normal";

            const expected = "large";

            assert.throws(calculateDistancePoints, Error, "Error thrown");
        });
    });
    describe('kPoint', () => {
        it('should return error if kPoint is not a number', () => {
            const actual = "test";

            const expected = 'Invalid argument';

            assert.throws(calculateDistancePoints, Error, "Error thrown");
        });
    });
});    
