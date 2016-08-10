var mysql = require('mysql');

//database connections
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'the_shop'
});


//database
// connection.connect();
var sql = "INSERT INTO Categories (description) VALUES ?"
var values = [
    ['beverages'],
    ['canned'],
    ['soaps'],
    ['fruits'],
    ['gifts'],
    ['dairy'],
    ['albany'],
    ['mealies']
];

connection.query(sql, [values], function(err) {
    if (err) throw err;
});

connection.end();

