var fs = require('fs');

exports.leastSoldCategory = function(category){
	var min = 54;
    var leastSoldByCategory = {};

    for (var products in category) {
        if (category[products] < min) {
            min = category[products];

            leastSoldByCategory = {

                amount: min,
                category: products
            };
        }
    }
    console.log(leastSoldByCategory)
    return leastSoldByCategory
}