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
            const actual = calculateDistancePoints(120, "small", 100);

            const expected = 100;

            assert.equal(actual, expected);
        });
    });
    describe('hillSize', () => {
        it('should return medium hillSize', () => {
            const actual = calculateDistancePoints(96.5, "medium", 110);

            const expected = 35.5;

            assert.equal(actual, expected);
        });
    });
    describe('hillSize', () => {
        it('should return large hillSize', () => {
            const actual = calculateDistancePoints(110.5, "large", 125);

            const expected = 102.5;

            assert.equal(actual, expected);
        });
    });
    describe('hillSize', () => {
        it('should return error if hillSize is not small, medium or large', () => {
            const actual = calculateDistancePoints(110.5, "normal", 125);

            const expected = 102.5;

           // expect(calculateDistancePoints).to.throw(new Error, ('Error thrown'));
           // assert.throws(calculateDistancePoints, Error, "Error thrown");
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
