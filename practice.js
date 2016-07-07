var cat = {
    'Heart Chocolates': 'Sweets',
    'Gold Dish Vegetable Curry Can': 'canned',
    'Top Class Soy Mince': 'canned',
    'Fanta 500ml': 'beverages',
    'Coke 500ml': 'beverages',
    'Cream Soda 500ml': 'beverages',
    'Shampoo 1 litre': 'soaps',
    'Soap Bar': 'soaps',
    'Apples - loose': 'fruits',
    'Bananas - loose': 'fruits',
    'Valentine Cards': 'Valentine',
    'Milk 1l': 'dairy',
    'Bread': 'albany',
    'Iwisa Pap 5kg': 'mealies',
    'Imasi': 'mealies',
    'Mixed Sweets 5s': 'Sweets',
    'Rose (plastic)': 'Valentine'
}

var product = {
    'Milk 1l': 39,
    'Imasi': 30,
    'Bread': 45,
    'Chakalaka Can': 23,
    'Gold Dish Vegetable Curry Can': 17,
    'Fanta 500ml': 33,
    'Coke 500ml': 54,
    'Cream Soda 500ml': 22,
    'Iwisa Pap 5kg': 17,
    'Top Class Soy Mince': 22,
    'Shampoo 1 litre': 3,
    'Soap Bar': 12,
    'Bananas - loose': 47,
    'Apples - loose': 36,
    'Mixed Sweets 5s': 49,
    'Rose (plastic)': 10,
    // 'Valentine Cards': 5
}

var results = {}

for (productName in cat) {
    var categoryName = cat[productName];
    if (results[categoryName] === undefined) {
        results[categoryName] = 0
    }

    var qty = product[productName];

    if (qty === undefined) {
        qty = 0;
    }

    results[categoryName] += qty;
}

console.log(results);