var object = {
    'Gold Dish Vegetable Curry Can': 'canned',
    'Top Class Soy Mince': 'canned',
    'Fanta 500ml': 'beverages',
    'Coke 500ml': 'beverages',
    'Cream Soda 500ml': 'beverages',
    'Shampoo 1 litre': 'soaps',
    'Soap Bar': 'soaps',
    'Apples - loose': 'fruits',
    'Bananas - loose': 'fruits',
    'Mixed Sweets 5s': 'sweets',
    'Milk 1l': 'dairy',
    'Bread': 'albany',
    'Iwisa Pap 5kg': 'mealies',
    'Imasi': 'mealies'
};

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
    'Mixed Sweets 5s': 49
}

results = {}

for (x in object) {
    var category = object[x]

    if (results[category] === undefined) {
        results[category] = 0
    }
    results[category] = results[category] + product[x]
}


console.log(results);