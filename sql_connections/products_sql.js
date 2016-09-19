var mysql = require('mysql');

//database connections
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 3306,
    database: 'the_shop'
});

var cats = {
    'Gold Dish Vegetable Curry Can': 'canned',
    'Top Class Soy Mince': 'canned',
    'Fanta 500ml': 'beverages',
    'Coke 500ml': 'beverages',
    'Cream Soda 500ml': 'beverages',
    'Shampoo 1 litre': 'soaps',
    'Soap Bar': 'soaps',
    'Apples - loose': 'fruits',
    'Bananas - loose': 'fruits',
    'Mixed Sweets 5s': 'gifts',
    'Heart Chocolates': 'gifts',
    'Valentine Cards': 'gifts',
    'Rose(plastic)': 'gifts',
    'Milk 1l': 'dairy',
    'Bread': 'albany',
    'Iwisa Pap 5kg': 'mealies',
    'Imasi': 'mealies'
}


// get the category ids from the database!!!!!
connection.query("SELECT * FROM Categories", function(err, result) {
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
        for (stuff in cats) {
            if (cats[stuff] === storage[things][1]) {
                bulk.push([stuff, storage[things][0]])
            }
        }
    }

    var sql = "INSERT INTO products (description, category_id) VALUES ?";

    connection.query(sql, [bulk], function(err) {
        if (err) throw err;
    });

    connection.end();
});