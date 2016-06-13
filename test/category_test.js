var assert = require('assert');
var categories = require('../category')

var cat = {
    'Gold Dish Vegetable Curry Can': 'canned',
    'Top Class Soy Mince': 'canned',
    'Fanta 500ml': 'beverages',
    'Coke 500ml': 'beverages',
    'Cream Soda 500ml': 'beverages',
    'Shampoo 1 litre': 'soaps',
    'Soap Bar': 'soaps',
    'Apples - loose': 'fruits',
    'Bananas - loose': 'fruits',
    'Mixed Sweets 5s': 'sweets',
    'Milk 1l': 'dairy',
    'Bread': 'albany',
    'Iwisa Pap 5kg': 'mealies',
    'Imasi': 'mealies'
};

describe('works with categories', function() {
    it('groups the categories', function() {
        var result = categories.category(cat)
        assert.deepEqual(result, {
            albany: 0,
            beverages: 0,
            canned: 0,
            dairy: 0,
            fruits: 0,
            mealies: 0,
            soaps: 0,
            sweets: 0
        })
    })
})