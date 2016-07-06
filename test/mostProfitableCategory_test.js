var assert = require('assert');
var categories = require('../mostProfitableCategory')
var cats = './csv/categories.csv'

describe('creates categories', function() {
    it('return categories and their product maps', function() {
        var result = categories.categoriesMap(cats)
        assert.deepEqual({
            'Heart Chocolates': 'gifts',
            'Gold Dish Vegetable Curry Can': 'canned',
            'Top Class Soy Mince': 'canned',
            'Fanta 500ml': 'beverages',
            'Coke 500ml': 'beverages',
            'Cream Soda 500ml': 'beverages',
            'Shampoo 1 litre': 'soaps',
            'Soap Bar': 'soaps',
            'Apples - loose': 'fruits',
            'Bananas - loose': 'fruits',
            'Valentine Cards': 'gifts',
            'Milk 1l': 'dairy',
            'Bread': 'albany',
            'Iwisa Pap 5kg': 'mealies',
            'Imasi': 'mealies',
            'Mixed Sweets 5s': 'gifts',
            'Rose (plastic)': 'gifts'
        }, result)
    })

    it('returns for week 1', function() {
        var category = {
            'Heart Chocolates': 'gifts',
            'Gold Dish Vegetable Curry Can': 'canned',
            'Top Class Soy Mince': 'canned',
            'Fanta 500ml': 'beverages',
            'Coke 500ml': 'beverages',
            'Cream Soda 500ml': 'beverages',
            'Shampoo 1 litre': 'soaps',
            'Soap Bar': 'soaps',
            'Apples - loose': 'fruits',
            'Bananas - loose': 'fruits',
            'Valentine Cards': 'gifts',
            'Milk 1l': 'dairy',
            'Bread': 'albany',
            'Iwisa Pap 5kg': 'mealies',
            'Imasi': 'mealies',
            'Mixed Sweets 5s': 'gifts',
            'Rose (plastic)': 'gifts'
        }

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

        var result = {
            "albany": 45,
            "beverages": 109,
            "canned": 39,
            "dairy": 39,
            "fruits": 83,
            "mealies": 47,
            "soaps": 15,
            "gifts": 49
        }
        assert.deepEqual(result, categories.categoriesValues(category, week1))
    })
})