var fs = require('fs');

exports.mostSoldCategory = function(category) {
	var max = 0;
    var mostSoldByCategory = {};

    for (var products in category) {
        if (category[products] > max) {
            max = category[products];

            mostSoldByCategory = {
                amount: max,
                category: products
            };
        }
    }
    console.log(mostSoldByCategory);
    return mostSoldByCategory;
}