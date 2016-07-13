var fs = require('fs');
var handlebars = require('handlebars');
var leastPopularProduct = require('./least');
var mostPopularProduct = require('./most');
var leastSoldCategory = require('./leastSoldCategory');
var mostSoldCategory = require('./mostSoldCategory');
var mostProfitableProduct = require('./mostProfitableProduct');
var mostProfitableCategory = require('./mostProfitableCategory');
var weeklySales = require('./products');
var category = require('./categories_totals');

var csv1 = './csv/week1.csv';
var csv2 = './csv/week2.csv';
var csv3 = './csv/week3.csv';
var csv4 = './csv/week4.csv';
var categories1 = './csv/categories.csv';
var cat = category.categoriesMap(categories1)

//gets files from csv and process everything into an object of week one
var weekDisplay1 = weeklySales.weeklyProducts(csv1);
var categoryWeekDisplay1 = category.categories_total(cat, weekDisplay1)
var lowest1 = leastPopularProduct.least(weekDisplay1)
var mostPopular1 = mostPopularProduct.most(weekDisplay1);
var mostPopCat = mostSoldCategory.mostSoldCategory(categoryWeekDisplay1)
console.log(mostPopCat)

//gets files from csv and process everything into an object of week two
var weekDisplay2 = weeklySales.weeklyProducts(csv2);
var lowest2 = leastPopularProduct.least(weekDisplay2)
var mostPopular2 = mostPopularProduct.most(weekDisplay2);

//gets files from csv and process everything into an object of week three
var weekDisplay3 = weeklySales.weeklyProducts(csv3);
var lowest3 = leastPopularProduct.least(weekDisplay3)
var mostPopular3 = mostPopularProduct.most(weekDisplay3);

//gets files from csv and process everything into an object of week four
var weekDisplay4 = weeklySales.weeklyProducts(csv4);
var lowest4 = leastPopularProduct.least(weekDisplay4)
var mostPopular4 = mostPopularProduct.most(weekDisplay4);





