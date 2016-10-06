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

var folderName = fs.readFileSync('../csv/purchases.csv', 'utf-8')
var gsub = folderName.replace(/R/g, "").split('\n').splice([1])

var arr = []
for (i = 0; i < gsub.length - 1; i++) {
    arr.push(gsub[i].replace(/,/g, '.').split(";"))
}

var purchasesArrays = [];
var purchaseList = [];

arr.forEach(function(values) {
    purchasesArrays.push([values[0], values[1], values[2], Number(values[3], Number(values[4], Number(values[5])))])
    
    var sly = values[1]+ -2016
    var date = new Date(sly)
    var another = date.getFullYear()+'/' + (date.getMonth()+1) + '/'+date.getDate();
    console.log(date)

    purchaseList.push([
        Shop = values[0],
        Day = another,
        Item = values[2],
        Quantity = Number(values[3]),
        UnitCost = Number(values[4]),
        TotalCost = Number(values[5])
    ])
})

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
        for (stuff in purchaseList) {
            if (purchaseList[stuff][2] === storage[things][1]) {
                bulk.push([purchaseList[stuff][0], purchaseList[stuff][1], purchaseList[stuff][3], purchaseList[stuff][4], purchaseList[stuff][5], storage[things][0]])
            }
        }
    }

    var sql = "INSERT INTO purchases (shop, dates, quantity, unit_price, total_cost, products_id ) VALUES ?";

    connection.query(sql, [bulk], function(err) {
        if (err) throw err;
    });

    connection.end();
});