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
    return purchaseList;
}

exports.groupedPurchase = function(purchaseInput) {
    var groupedPurchases = {};
    for (var values = 0; values < purchaseInput.length; values++) {
        if (!groupedPurchases.hasOwnProperty(purchaseInput[values].Item)) {
            groupedPurchases[purchaseInput[values].Item] = 0;
        }
        groupedPurchases[purchaseInput[values].Item] = groupedPurchases[purchaseInput[values].Item] + purchaseInput[values].TotalCost;
    }
    return groupedPurchases;
}