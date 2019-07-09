const assert = require('assert');
const calculateDistancePoints = require('./distance');

describe('calculateDistancePoints', () => {
    describe('distance', () => {
        it('should return distance', () => {
            const actual = null;
        
            const expected = false;

            assert.equal(actual, expected);
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
        it('should return hillSize', () => {
            const actual = "";
        
            const expected = "large";

            assert.equal(actual, expected);
        });
    });         
    describe('kPoint', () => {
        it('should return kPoint', () => {
            const actual = "ghjgh";
        
            const expected = false;

            assert.equal(actual, expected);
        });
    });      
});    
