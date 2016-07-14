var assert = require('assert');
var totals = require('../scripts/categories_totals');
var cats = './csv/categories.csv'

describe('creates categories', function() {
    it('return categories and their product maps', function() {
        var result = totals.categoriesMap(cats)
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
})

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

describe('sum up categories for each week', function() {
    it('returns for week1', function() {

        var first = {
            albany: 45,
            beverages: 109,
            canned: 39,
            dairy: 39,
            fruits: 83,
            mealies: 47,
            soaps: 15,
            gifts: 49
        }

        assert.deepEqual(first, totals.categories_total(category, week1))
    })

    it('returns for week2', function() {

        var second = {
            albany: 28,
            beverages: 87,
            canned: 48,
            dairy: 28,
            fruits: 49,
            mealies: 46,
            soaps: 11,
            gifts: 102
        }
        assert.deepEqual(second, totals.categories_total(category, week2))
    })

    it('returns for week3', function() {
        var third = {
            albany: 24,
            beverages: 44,
            canned: 20,
            dairy: 28,
            fruits: 42,
            mealies: 29,
            soaps: 12,
            gifts: 29
        }
        assert.deepEqual(third, totals.categories_total(category, week3))
    })

    it('returns for week4', function() {
        var fourth = {
            albany: 33,
            beverages: 88,
            canned: 77,
            dairy: 43,
            fruits: 54,
            mealies: 50,
            soaps: 38,
            gifts: 40
        }
        assert.deepEqual(fourth, totals.categories_total(category, week4))
    })
})