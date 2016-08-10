var mysql = require('mysql');

//database connections
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 3306,
    database: 'the_shop'
});



//database
connection.connect();
var sql = "INSERT INTO Products (description, category_id) VALUES ?";
var values = [
    ['Bread', '7'],
    ['Gold Dish Vegetable Curry Can', '2'],
    ['Fanta 500ml', '1'],
    ['Coke 500ml', '1'],
    ['Cream Soda 500ml', '1'],
    ['Imasi', '8'],
    ['Iwisa Pap 5kg', '8'],
    ['Top Class Soy Mince', '2'],
    ['Shampoo 1 litre', '3'],
    ['Soap Bar', '3'],
    ['Bananas - loose', '4'],
    ['Apples - loose', '4'],
    ['Mixed Sweets 5s', '5'],
    ['Milk 1l', '6'],
    ['Heart Chocolates', '5'],
    ['Rose (plastic)', '5'],
    ['Valentine Cards', '5'],
    ['Chakalaka Can', '2']
];

connection.query(sql, [values], function(err) {
    if (err) throw err;
});

connection.end();