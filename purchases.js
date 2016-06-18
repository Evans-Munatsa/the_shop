var fs = require('fs');

exports.purchases = function(n) {
    var folderName = fs.readFileSync(n, 'utf-8')
    var gsub = folderName.replace(/R/g, "").split('\n').splice([1])

    var arr = []
    for (i = 0; i < gsub.length - 1; i++) {
        arr.push(gsub[i].replace(/,/g, '.').split(";"))
    }
    // console.log(arr)

    var arr2 = [];
    var arr3 = [];

    arr.forEach(function(x) {
        arr2.push([x[1], x[2], Number(x[3], Number(x[5]))])

        var result = {
            Date: x[1],
            Item: x[2],
            Quantity: x[3],
            TotalCost: x[5]
        }
        arr3.push(result)
    })
    return arr3
}

// exports.comparison = function(items) {
//     items.forEach(function(x) {
//         var week1 = new Date('07-Feb')
//         var week2 = new Date('14-Feb')
//         var week3 = new Date('21-Feb')
//         var week4 = new Date('01-Mar')

//         if (new Date(x.Date) < week1) {
//             console.log(x.Date);
//         } else if (new Date(x.Date) < week2) {
//             console.log(x.Date);
//         } else if (new Date(x.Date) < week3) {
//             console.log(x.Date);
//         } else if (new Date(x.Date) > week4) {
//             console.log(x.Date);
//         }
//     })
// }