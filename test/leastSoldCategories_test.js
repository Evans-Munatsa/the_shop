var assert = require('assert');
var least = require('../scripts/leastSoldCategory');

var week1 = {
    canned: 62,
    beverages: 109,
    soaps: 15,
    fruits: 83,
    gifts: 49,
    dairy: 39,
    albany: 45,
    mealies: 47
}

var week2 = {
    albany: 28,
    beverages: 87,
    canned: 69,
    dairy: 28,
    fruits: 49,
    mealies: 46,
    soaps: 11,
    gifts: 102
}

var week3 = {
    albany: 24,
    beverages: 44,
    canned: 37,
    dairy: 28,
    fruits: 42,
    mealies: 29,
    soaps: 12,
    gifts: 29,
}

var week4 = {
    albany: 33,
    beverages: 88,
    canned: 110,
    dairy: 43,
    fruits: 54,
    mealies: 50,
    soaps: 38,
    gifts: 40
}

describe('returns the the least popular category for each week', function() {
    it('returns for the first week', function() {
        var result = least.leastSoldCategory(week1)
        assert.deepEqual(result, {
            amount: 15,
            category: "soaps"
        });
    })

    it('returns for the first week', function() {
        var result = least.leastSoldCategory(week2)
        assert.deepEqual(result, {
            amount: 11,
            category: "soaps"
        });
    })

    it('returns for the first week', function() {
        var result = least.leastSoldCategory(week3)
        assert.deepEqual(result, {
            amount: 12,
            category: "soaps"
        });
    })


    it('returns for the first week', function() {
        var result = least.leastSoldCategory(week4)
        assert.deepEqual(result, {
            amount: 33,
            category: "albany"
        });
    })
})