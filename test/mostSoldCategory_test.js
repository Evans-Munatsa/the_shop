var assert = require('assert');
var most = require('../scripts/mostSoldCategory');

var week1 = {
    canned: 62,
    beverages: 109,
    soaps: 15,
    fruits: 83,
    sweets: 49,
    dairy: 39,
    albany: 45,
    mealies: 47,
    valentine: 0,
    plastics: 0
}

var week2 = {
    albany: 28,
    beverages: 87,
    canned: 69,
    dairy: 28,
    fruits: 49,
    mealies: 46,
    plastics: 14,
    soaps: 11,
    sweets: 74,
    valentine: 14
}

var week3 = {
    albany: 24,
    beverages: 44,
    canned: 37,
    dairy: 28,
    fruits: 42,
    mealies: 29,
    plastics: 0,
    soaps: 12,
    sweets: 29,
    valentine: 0
}

var week4 = {
    albany: 33,
    beverages: 88,
    canned: 110,
    dairy: 43,
    fruits: 54,
    mealies: 50,
    plastics: 0,
    soaps: 38,
    sweets: 40,
    valentine: 0
}

describe('returns the most popular category for each week', function() {
    it('returns for the first week', function() {
        var result = most.mostSoldCategory(week1)
        assert.deepEqual(result, {
            amount: 109,
            category: "beverages"
        });
    })

    it('returns for the second week', function() {
        var result = most.mostSoldCategory(week2)
        assert.deepEqual(result, {
            amount: 87,
            category: "beverages"
        });
    })

    it('returns for the third week', function() {
        var result = most.mostSoldCategory(week3)
        assert.deepEqual(result, {
            amount: 44,
            category: "beverages"
        });
    })

    it('returns for the fourth week', function() {
        var result = most.mostSoldCategory(week4)
        assert.deepEqual(result, {
            amount: 110,
            category: "canned"
        });
    })
})