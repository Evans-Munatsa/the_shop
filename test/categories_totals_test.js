var assert = require('assert');
var totals = require('../categories_totals');

var week1 = {
    'Milk 1l': 39,
    'Imasi': 30,
    'Bread': 45,
    'Chakalaka Can': 23,
    'Gold Dish Vegetable Curry Can': 17,
    'Fanta 500ml': 33,
    'Coke 500ml': 54,
    'Cream Soda 500ml': 22,
    'Iwisa Pap 5kg': 17,
    'Top Class Soy Mince': 22,
    'Shampoo 1 litre': 3,
    'Soap Bar': 12,
    'Bananas - loose': 47,
    'Apples - loose': 36,
    'Mixed Sweets 5s': 49
}

var week2 = {
    'Imasi': 36,
    'Bread': 28,
    'Chakalaka Can': 21,
    'Gold Dish Vegetable Curry Can': 27,
    'Fanta 500ml': 23,
    'Coke 500ml': 42,
    'Cream Soda 500ml': 22,
    'Iwisa Pap 5kg': 10,
    'Top Class Soy Mince': 21,
    'Shampoo 1 litre': 6,
    'Soap Bar': 5,
    'Bananas - loose': 28,
    'Apples - loose': 21,
    'Mixed Sweets 5s': 54,
    'Milk 1l': 28,
    'Heart Chocolates': 20,
    'Rose (plastic)': 14,
    'Valentine Cards': 14
}

var week3 = {
    'Imasi': 25,
    'Bread': 24,
    'Chakalaka Can': 17,
    'Gold Dish Vegetable Curry Can': 8,
    'Fanta 500ml': 14,
    'Coke 500ml': 18,
    'Cream Soda 500ml': 12,
    'Iwisa Pap 5kg': 4,
    'Top Class Soy Mince': 12,
    'Shampoo 1 litre': 4,
    'Soap Bar': 8,
    'Bananas - loose': 17,
    'Apples - loose': 25,
    'Mixed Sweets 5s': 29,
    'Milk 1l': 28
}

var week4 = {
    'Imasi': 34,
    'Bread': 33,
    'Chakalaka Can': 33,
    'Gold Dish Vegetable Curry Can': 34,
    'Fanta 500ml': 24,
    'Coke 500ml': 45,
    'Cream Soda 500ml': 19,
    'Iwisa Pap 5kg': 16,
    'Top Class Soy Mince': 43,
    'Shampoo 1 litre': 13,
    'Soap Bar': 25,
    'Bananas - loose': 22,
    'Apples - loose': 32,
    'Mixed Sweets 5s': 40,
    'Milk 1l': 43
}

describe('sum up categories', function() {
    it('returns for week1', function() {
        var result = totals.categories_totals(week1);
        assert.deepEqual(result, {
            albany: 45,
            beverages: 109,
            canned: 62,
            dairy: 39,
            fruits: 83,
            mealies: 47,
            soaps: 15,
            gifts: 49
        })
    })

    it('returns for week2', function() {
        var result = totals.categories_totals(week2);
        assert.deepEqual(result, {
            albany: 28,
            beverages: 87,
            canned: 69,
            dairy: 28,
            fruits: 49,
            mealies: 46,
            soaps: 11,
            gifts: 102
        })
    })

    it('returns for week3', function() {
        var result = totals.categories_totals(week3);
        assert.deepEqual(result, {
            albany: 24,
            beverages: 44,
            canned: 37,
            dairy: 28,
            fruits: 42,
            mealies: 29,
            soaps: 12,
            gifts: 29
        })
    })

    it('returns for week4', function() {
        var result = totals.categories_totals(week4);
        assert.deepEqual(result, {
            albany: 33,
            beverages: 88,
            canned: 110,
            dairy: 43,
            fruits: 54,
            mealies: 50,
            soaps: 38,
            gifts: 40
        })
    })
})