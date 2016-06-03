var fs = require('fs');

var products = function(n) {

 var folderName = fs.readFileSync(n, 'utf-8');
    var gsub = folderName.replace(/R/g, " ").split('\n').splice([1])

    var arr = []
    for (i = 0; i < gsub.length - 1; i++) {
        arr.push(gsub[i].split(","))
    }

    var arr2 = []
    var arr3 = []

    arr.forEach(function(x) {
        arr2.push([x[2], Number(x[3], Number(x[4]))])

        var result = {
            productName: x[2],
            quantity: Number(x[3]),
            price: Number(x[4])
        }
        arr3.push(result);
    })
    // console.log(arr3)

    var obj = {};
    for (var i = 0; i < arr3.length; i++) {
        //check if the product name is not in my MAP/OBJECT
        if (!obj.hasOwnProperty(arr3[i].productName)) {
            //put the product name in the Object    
            obj[arr3[i].productName] = 0;
        }
        //we can safely assume that ALL product name will be in my object.
        obj[arr3[i].productName] = obj[arr3[i].productName] + arr3[i].quantity;

        // console.log(obj)
        //console.log("-----------------------------")

    }
    
console.log(obj)    
return obj

}

module.exports.products = products

