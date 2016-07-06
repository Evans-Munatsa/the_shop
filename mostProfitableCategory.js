var fs = require('fs');

exports.categoriesMap = function(category) {
    var category = fs.readFileSync(category, 'utf-8');
    var cuts = category.split('\n');

    var arr = {}
    for (i = 0; i < cuts.length; i++) {
        cuts[i] = cuts[i].split(",");
        arr[cuts[i][0]] = cuts[i][1];
    }
    return arr
}

exports.categoriesValues = function(category, products) {
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