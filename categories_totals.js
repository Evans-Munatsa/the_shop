var fs = require('fs');
var category = require('./category')

exports.categories_totals = function(products) {
	var category = { 
                'canned': 0, 
                'beverages': 0, 
                'soaps': 0, 
                'fruits': 0, 
                'gifts': 0, 
                'dairy': 0, 
                'albany': 0, 
                'mealies': 0,
               };

    for (i in products) {
        if (i === 'Chakalaka Can' || i === 'Gold Dish Vegetable Curry Can' || i === 'Top Class Soy Mince') {
            category.canned += products[i];
        }

        if (i === 'Milk 1l') {
            category.dairy += products[i];
        }

        if (i === 'Fanta 500ml' || i === 'Coke 500ml' || i === 'Cream Soda 500ml') {
            category.beverages += products[i];
        }

        if (i === 'Bananas - loose' || i === 'Apples - loose') {
            category.fruits += products[i]
        }

        if (i === 'Soap Bar' || i === 'Shampoo 1 litre') {
            category.soaps += products[i]
        }

        if (i === 'Mixed Sweets 5s' || i === 'Heart Chocolates' || i === 'Valentine Cards' || i === 'Rose (plastic)') {
            category.gifts += products[i]
        }

        if (i === 'Iwisa Pap 5kg' || i === 'Imasi') {
            category.mealies += products[i]
        }

        if (i === 'Bread') {
            category.albany += products[i]
        }
    }
    // console.log(category);
    return category;
}