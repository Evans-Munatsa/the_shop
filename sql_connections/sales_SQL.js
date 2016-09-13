var mysql = require('mysql');
var fs = require('fs')

//database connections
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 3306,
    database: 'the_shop'
});

 var folderName = fs.readFileSync('../csv/week1.csv', 'utf-8')
    var gsub = folderName.replace(/R/g, " ").split('\n').splice([1])

    var arr = []
    for (i = 0; i < gsub.length - 1; i++) {
        arr.push(gsub[i].split(","))
    }

    var arr2 = []
    var arr3 = []

    arr.forEach(function(x) {
        arr2.push([x[0], x[1], x[2], Number(x[3], Number(x[4]))])

        arr3.push([
            day = x[0],
            date = x[1],
            productName = x[2],
            quantity = Number(x[3]),
            price = Number(x[4])
            ])
    })

    // console.log(arr3)

connection.query("SELECT * FROM products", function(err, result) {
    if (err) throw err;

    var storage = [];
    result.forEach(function(item) {
        storage.push([
            id = item.id,
            description = item.description
        ])
    })

    var bulk = []
    for (var things in storage) {
        for (stuff in arr3) {
            if (arr3[stuff][2] === storage[things][1]) {
                bulk.push([arr3[stuff][2], arr3[stuff][3], arr3[stuff][4], storage[things][0]])
            }
        }
    }

// console.log(bulk)
    var sql = "INSERT INTO sales (description, number_sold, total_sales, products_id) VALUES ?";

    connection.query(sql, [bulk], function(err) {
        if (err) throw err;
    });

    connection.end();
});