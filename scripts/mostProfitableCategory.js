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

exports.categoriesValues = function(category, products) {
    var results = {}

    for (productName in category) {
        var categoryName = category[productName];
        if (results[categoryName] === undefined) {
            results[categoryName] = 0
        }

        var price = products[productName];

        if (price === undefined) {
            price = 0;
        }

        results[categoryName] += price;
    }
    return results;
}

exports.categoriesProfits = function(purchasesCat, salesCat) {
    var profit = {};

    for (x in purchasesCat) {
        for (i in salesCat) {
            if (x === i) {
                profit[x] = salesCat[i] - purchasesCat[x]
            }
        }

    }
    return profit
}

exports.profitableCat = function(profits) {
    var max = 0;
    var mostProfitableCategory = {};

    for (var cat in profits) {
        if (profits[cat] > max) {
            max = profits[cat];

            mostProfitableCategory = {
                profitCash: max,
                category: cat
            };
        }
    }
    // console.log(mostProfitableCategory)
    return mostProfitableCategory;
}