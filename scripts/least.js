var fs = require('fs');

exports.least = function(products) {
    var min = 54;
    var leastPopularProduct = {};

    for (var stock in products) {
        if (products[stock] < min) {
            min = products[stock];

            leastPopularProduct = {

                amount: min,
                item: stock
            };
        }
    }
    return leastPopularProduct
}