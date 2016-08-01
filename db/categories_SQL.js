var mysql = require('mysql');

//database connections
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'the_shop'
});


//database
connection.connect();
var sql = "INSERT INTO Categories (id, title) VALUES ?";
var values = [
    ['1', 'beverages'],
    ['2', 'canned'],
    ['3', 'soaps'],
    ['4', 'fruits'],
    ['5', 'gifts'],
    ['6', 'dairy'],
    ['7', 'albany'],
    ['8', 'mealies']
];

connection.query(sql, [values], function(err) {
    if (err) throw err;
});

connection.end();