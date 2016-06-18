var assert = require('assert');
var purchases = require('../purchases');
var csv = '../csv/purchases.csv';


describe('creating a Json from purchases purchases.csv', function() {
    it('returns the data from the purchases.csv as a Json', function() {
        var result = purchases.purchases('csv/purchases.csv');
        assert.deepEqual(result.length, 153)
    })
})