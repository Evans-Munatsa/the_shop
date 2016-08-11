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

    var categories_storage = [];
    result.forEach(function(item) {
        categories_storage.push({
            id: item.id,
            description: item.description
        })
    })
    

    for(things in categories_storage){
      for(stuff in cats){
        if (cats[stuff] === categories_storage[things]) {
            console.log(categories_storage)
        };
      }
    }
});



//map the product name to the category id!!!!

//database
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