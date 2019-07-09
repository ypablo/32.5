const assert = require('assert');
const calculateDistancePoints = require('./distance');

describe('calculateDistancePoints', () => {
    describe('distance', () => {
        it('should return distance', () => {
            const actual = 120;
        
            const expected = 120;

            assert.equal(actual, expected);
        });
    });

    describe('hillSize', () => {
        it('should return hillSize', () => {
            const actual = "large";
        
            const expected = "medium";

            assert.equal(actual, expected);
        });
    });  
    describe('kPoint', () => {
        it('should return kPoint', () => {
            const actual = 100;
        
            const expected = 100;

            assert.equal(actual, expected);
        });
    });      
});    
