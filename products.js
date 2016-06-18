var fs = require('fs');

exports.products = function(n) {
    var folderName = fs.readFileSync(n, 'utf-8');
    var gsub = folderName.replace(/R/g, " ").split('\n').splice([1])

    var arr = []
    for (i = 0; i < gsub.length - 1; i++) {
        arr.push(gsub[i].split(","))
    }

    var arr2 = []
    var arr3 = []

    arr.forEach(function(x) {
        arr2.push([x[0], x[1], x[2], Number(x[3], Number(x[4]))])

        var result = {
            day: x[0],
            date: x[1],
            productName: x[2],
            quantity: Number(x[3]),
            price: Number(x[4])
        }
        arr3.push(result);
    })
    // Day,Date,stock item,No sold,Sales Price

    var obj = {};
    for (var i = 0; i < arr3.length; i++) {
        //check if the product name is not in my MAP/OBJECT
        if (!obj.hasOwnProperty(arr3[i].productName)) {
            //put the product name in the Object    
            obj[arr3[i].productName] = 0;
        }
        //we can safely assume that ALL product name will be in my object.
        obj[arr3[i].productName] = obj[arr3[i].productName] + arr3[i].quantity;
    }
    return obj;
}