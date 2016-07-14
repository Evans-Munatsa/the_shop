var fs = require('fs')

exports.most = function(products) {
    var max = 0;
    var mostPopularProduct = {};

    for (var stock in products) {
        if (products[stock] > max) {
            max = products[stock];

            mostPopularProduct = {
                amount: max,
                item: stock
            };
        }
    }
    return mostPopularProduct;
}