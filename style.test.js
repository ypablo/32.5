const assert = require('assert');
const calculateStylePoints = require('./style');

describe('calculateStylePoints', () => {
    describe('finalNote', () => {
        it('should return style points', () => {
            const actual = [16, 17, 18, 18.5, 19];
        
            const expected = [16, 17, 18, 18.5, 19];

            assert.deepEqual(actual, expected);
        });
    });

});    