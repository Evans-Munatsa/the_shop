var fs = require('fs');

exports.categoriesMap = function(categories_csv) {
    var categories = fs.readFileSync(categories_csv, 'utf-8');
    var splittingData = categories.split('\n');

    var categoriesObject = {}
    for (values = 0; values < splittingData.length; values++) {
        splittingData[values] = splittingData[values].split(",");
        categoriesObject[splittingData[values][0]] = splittingData[values][1];
    }
    return categoriesObject
}

exports.categories_total = function(category, products) {
    var obj = {};
    for (goods in category) {
        for (food in products) {
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