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
var sql = "INSERT INTO Products (id, description, price, category_id) VALUES ?";
var values = [
    ['1', 'Bread', '12.00', '7'],
    ['2', 'Gold Dish Vegetable Curry Can', '9.00', '2'],
    ['3', 'Fanta 500ml', '6.50', '1'],
    ['4', 'Coke 500ml', '6.50', '1'],
    ['5', 'Cream Soda 500ml', '7.50', '1'],
    ['6', 'Imasi', '25.00', '8'],
    ['7', 'Iwisa Pap 5kg', '30.00', '8'],
    ['8', 'Top Class Soy Mince', '12.00', '2'],
    ['9', 'Shampoo 1 litre', '30.00', '3'],
    ['10', 'Soap Bar', '6.00', '3'],
    ['11', 'Bananas - loose', '2.00', '4'],
    ['12', 'Apples - loose', '2.00', '4'],
    ['13', 'Mixed Sweets 5s', '3.00', '5'],
    ['14', 'Milk 1l', '10.00', '6'],
    ['15', 'Heart Chocolates', '35.00', '5'],
    ['16', 'Rose (plastic)', '15.00', '5'],
    ['17', 'Valentine Cards', '4.00', '5'],
    ['18', 'Chakalaka Can', '10.00', '2']
];

connection.query(sql, [values], function(err) {
    if (err) throw err;
});

connection.end();