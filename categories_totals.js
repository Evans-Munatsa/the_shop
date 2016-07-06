var fs = require('fs');

exports.categories_totals = function(category, products) {
	var obj = {};
    for (goods in category) {
        for (food in products) {
            // console.log(food)
            if (goods === food) {
                if (!obj.hasOwnProperty(category[goods])) {
                    obj[category[goods]] = 0
                }
                obj[category[goods]] += products[food]
            }
        }
    }
    return obj;
}