var assert = require('assert');
var categories = require('../mostProfitableCategory')
var cats = './csv/categories.csv'

describe('The most profitable categories', function() {
    it('return the categories with values', function() {
        var result = categories.categoriesMap(cats)
        assert.deepEqual({
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
        }, result)
    })
})