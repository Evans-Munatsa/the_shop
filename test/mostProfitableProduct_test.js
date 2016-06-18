var assert = require('assert');
var product = require('../mostProfitableProduct');
var csv = '../csv/week1.csv';
var csv = '../csv/week2.csv';
var csv = '../csv/week3.csv';
var csv = '../csv/week4.csv';
var purchases = '../csv/purchases.csv';

describe('it groups the data and get the grouped prices', function() {
    it('get the grouped data for week 1', function() {
        var result = product.products('./csv/week1.csv');
        assert.deepEqual(result, {
            'Milk 1l': 70,
            'Imasi': 175,
            'Bread': 84,
            'Chakalaka Can': 70,
            'Gold Dish Vegetable Curry Can': 63,
            'Fanta 500ml': 45.5,
            'Coke 500ml': 45.5,
            'Cream Soda 500ml': 52.5,
            'Iwisa Pap 5kg': 210,
            'Top Class Soy Mince': 84,
            'Shampoo 1 litre': 210,
            'Soap Bar': 42,
            'Bananas - loose': 14,
            'Apples - loose': 14,
            'Mixed Sweets 5s': 19
        })
    })

    it('get the grouped data for week 2', function() {
        var result = product.products('./csv/week2.csv');
        assert.deepEqual(result, {
            " ose (plastic)": 75,
            "Apples - loose": 14,
            "Bananas - loose": 14,
            "Bread": 84,
            "Chakalaka Can": 70,
            "Coke 500ml": 45.5,
            "Cream Soda 500ml": 52.5,
            "Fanta 500ml": 45.5,
            "Gold Dish Vegetable Curry Can": 63,
            "Heart Chocolates": 175,
            "Imasi": 175,
            "Iwisa Pap 5kg": 210,
            "Milk 1l": 60,
            "Mixed Sweets 5s": 19,
            "Shampoo 1 litre": 210,
            "Soap Bar": 42,
            "Top Class Soy Mince": 84,
            "Valentine Cards": 12
        })
    })

    it('get the grouped data for week 3', function() {
        var result = product.products('./csv/week3.csv');
        assert.deepEqual(result, {
            "Apples - loose": 14,
            "Bananas - loose": 14,
            "Bread": 84,
            "Chakalaka Can": 70,
            "Coke 500ml": 45.5,
            "Cream Soda 500ml": 52.5,
            "Fanta 500ml": 45.5,
            "Gold Dish Vegetable Curry Can": 63,
            "Imasi": 175,
            "Iwisa Pap 5kg": 210,
            "Milk 1l": 60,
            "Mixed Sweets 5s": 19,
            "Shampoo 1 litre": 210,
            "Soap Bar": 42,
            "Top Class Soy Mince": 84
        })
    })


    it('get the grouped data for week 4', function() {
        var result = product.products('./csv/week4.csv');
        assert.deepEqual(result, {
            "Apples - loose": 16,
            "Bananas - loose": 16,
            "Bread": 96,
            "Chakalaka Can": 80,
            "Coke 500ml": 52,
            "Cream Soda 500ml": 60,
            "Fanta 500ml": 52,
            "Gold Dish Vegetable Curry Can": 72,
            "Imasi": 200,
            "Iwisa Pap 5kg": 240,
            "Milk 1l": 70,
            "Mixed Sweets 5s": 22,
            "Shampoo 1 litre": 240,
            "Soap Bar": 48,
            "Top Class Soy Mince": 96
        })
    })
})