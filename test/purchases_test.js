var assert = require('assert');
var purchases = require('../purchases');
var csv = './csv/purchases.csv';


describe('create a json for all the the purchases', function() {
    it('returns the purchases array of arrays', function() {
        assert.deepEqual(purchases.purchases_array_of_array(csv).length, 153);
    })

    it('returns the purchases as json with values', function() {
        var data = purchases.purchases_array_of_array(csv);
        assert.deepEqual(purchases.purchases_json(data).length, 153)
    })

    it('returns the grouped totalCost', function() {
        salesWeek1 = [{
            Day: '23-Jan-2016',
            Item: 'Chakalaka Can',
            Quantity: 3,
            TotalCost: 21
        }, {
            Day: '23-Jan-2016',
            Item: 'Coke 500ml',
            Quantity: 3,
            TotalCost: 10.5
        }, {
            Day: '28-Jan-2016',
            Item: 'Chakalaka Can',
            Quantity: 3,
            TotalCost: 21
        }, {
            Day: '25-Jan-2016',
            Item: 'Coke 500ml',
            Quantity: 3,
            TotalCost: 20
        }, {
            Day: '25-Jan-2016',
            Item: 'Fanta 500ml',
            Quantity: 2,
            TotalCost: 14
        }]

        assert.deepEqual(purchases.groupedPurchase(salesWeek1), {
            'Chakalaka Can': 42,
            'Coke 500ml': 30.5,
            'Fanta 500ml': 14
        });
    })

    it('returns the profitable product for each week', function(){
        weekdates = [{
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
            Day: '04-Feb-2016',
            Item: 'Chakalaka Can',
            Quantity: 3,
            TotalCost: 21
        }, {
            Day: '8-Feb-2016',
            Item: 'Coke 500ml',
            Quantity: 3,
            TotalCost: 20
        }, {
            Day: '22-Feb-2016',
            Item: 'Fanta 500ml',
            Quantity: 2,
            TotalCost: 14
        }]
    })
})