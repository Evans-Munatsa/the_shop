var assert = require('assert');
var purchases = require('../scripts/mostProfitableProduct');
var csv = './csv/purchases.csv';


describe('Finding the most profitable', function() {
    it('returns the purchases array of arrays', function() {
        assert.deepEqual(purchases.purchases_array_of_array(csv).length, 153);
    })

    it('returns the purchases as json with values', function() {
        var data = purchases.purchases_array_of_array(csv);
        assert.deepEqual(purchases.purchases_json(data).length, 153)
    })


    it('returns the grouped totalCost of products for each week based on dates', function() {
        var start = ('02-Feb-2016');
        var end = ('06-Feb-2016');

        var weekdates = [{
            Day: '23-Jan-2016',
            Item: 'Chakalaka Can',
            Quantity: 3,
            TotalCost: 21
        }, {
            Day: '02-Feb-2016',
            Item: 'Coke 500ml',
            Quantity: 3,
            TotalCost: 10.5
        }, {
            Day: '03-Feb-2016',
            Item: 'Fanta 500ml',
            Quantity: 3,
            TotalCost: 10.5
        }, {
            Day: '04-Feb-2016',
            Item: 'Coke 500ml',
            Quantity: 3,
            TotalCost: 21
        }, {
            Day: '06-Feb-2016',
            Item: 'Fanta 500ml',
            Quantity: 2,
            TotalCost: 14
        }, {
            Day: '08-Feb-2016',
            Item: 'Coke 500ml',
            Quantity: 3,
            TotalCost: 20
        }, {
            Day: '22-Feb-2016',
            Item: 'Fanta 500ml',
            Quantity: 2,
            TotalCost: 20
        }];

        var result = {
            'Coke 500ml': 31.5,
            'Fanta 500ml': 24.5
        };

        assert.deepEqual(result, purchases.groupedPurchase(weekdates, start, end));
    })

    it('calculates the profit of all products', function() {
        weekCosts = {
            'Coke 500ml': 31.5,
            'Fanta 500ml': 24.5
        }

        weekSales = {
            'Coke 500ml': 40,
            'Fanta 500ml': 30.5
        }

        assert.deepEqual(purchases.profit(weekCosts, weekSales), {
            'Coke 500ml': 8.5,
            'Fanta 500ml': 6
        })
    })

    it('returns the most profitable product', function() {
        profits = {
            'Coke 500ml': 8.5,
            'Fanta 500ml': 6
        }


        assert.deepEqual(purchases.profitableProduct(profits), {
            "item": "Coke 500ml",
            "profitCash": 8.5
        })
    })
})