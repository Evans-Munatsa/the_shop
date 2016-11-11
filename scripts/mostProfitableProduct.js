var fs = require('fs');

exports.purchases_array_of_array = function(n) {
    var folderName = fs.readFileSync(n, 'utf-8')
    var gsub = folderName.replace(/R/g, "").split('\n').splice([1])

    var arr = []
    for (i = 0; i < gsub.length - 1; i++) {
        arr.push(gsub[i].replace(/,/g, '.').split(";"))
    }
    return arr
}

exports.purchases_json = function(array) {
    var purchasesArrays = [];
    var purchaseList = [];

    array.forEach(function(values) {
        purchasesArrays.push([values[1], values[2], Number(values[3], Number(values[5]))])
        

        var result = {
            Day: values[1] + '-2016',
            Item: values[2],
            Quantity: Number(values[3]),
            TotalCost: Number(values[5])
        }
        purchaseList.push(result);
    })
    // console.log(purchaseList)
    return purchaseList;
}

exports.groupedPurchase = function(purchasesList, initialDate, lastDate) {
// console.log(purchasesList);
    var getWeek = {};

    var startDate = new Date(initialDate);
    var endDate = new Date(lastDate);

    for (var i = 0; i < purchasesList.length; i++) {
        var date = new Date(purchasesList[i].Day);

        if (date >= startDate && date <= endDate) {
            if (!getWeek.hasOwnProperty(purchasesList[i].Item)) {
                getWeek[purchasesList[i].Item] = 0;
            }
            getWeek[purchasesList[i].Item] += purchasesList[i].TotalCost;
            console.log(getWeek[purchasesList[i].Item])
        }
    }
    // console.log(getWeek)
    return getWeek;
}

exports.profit = function(weekCosts, weekSales) {
    var profit = {};

    for (x in weekCosts) {
        for (i in weekSales) {
            if (x === i) {
                profit[x] = weekSales[i] - weekCosts[x]
            }
        }

    }
    return profit
}

exports.profitableProduct = function(profits){
    var max = 0;
    var mostProfitableProduct = {};

    for (var stock in profits) {
        if (profits[stock] > max) {
            max = profits[stock];

            mostProfitableProduct = {
                profitCash: max,
                item: stock
            };
        }
    }
    // console.log(mostProfitableProduct)
    return mostProfitableProduct;
}