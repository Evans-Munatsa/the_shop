var fs = require('fs');
var Handlebars = require('handlebars');
var leastPopularProduct = require('./scripts/least');
var mostPopularProduct = require('./scripts/most');
var leastSoldCategory = require('./scripts/leastSoldCategory');
var mostSoldCategory = require('./scripts/mostSoldCategory');
var mostProfitableProduct = require('./scripts/mostProfitableProduct');
var mostProfitableCategory = require('./scripts/mostProfitableCategory');
var weeklySales = require('./scripts/products');
var category = require('./scripts/categories_totals');

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
var mostPopCat1 = mostSoldCategory.mostSoldCategory(categoryWeekDisplay1)


//gets files from csv and process everything into an object of week two
var weekDisplay2 = weeklySales.weeklyProducts(csv2);
var categoryWeekDisplay2 = category.categories_total(cat, weekDisplay2)
var lowest2 = leastPopularProduct.least(weekDisplay2)
var mostPopular2 = mostPopularProduct.most(weekDisplay2);
var mostPopCat2 = mostSoldCategory.mostSoldCategory(categoryWeekDisplay2)

//gets files from csv and process everything into an object of week three
var weekDisplay3 = weeklySales.weeklyProducts(csv3);
var categoryWeekDisplay3 = category.categories_total(cat, weekDisplay3)
var lowest3 = leastPopularProduct.least(weekDisplay3)
var mostPopular3 = mostPopularProduct.most(weekDisplay3);
var mostPopCat3 = mostSoldCategory.mostSoldCategory(categoryWeekDisplay3)

//gets files from csv and process everything into an object of week four
var weekDisplay4 = weeklySales.weeklyProducts(csv4);
var categoryWeekDisplay4 = category.categories_total(cat, weekDisplay4)
var lowest4 = leastPopularProduct.least(weekDisplay4)
var mostPopular4 = mostPopularProduct.most(weekDisplay4);
var mostPopCat4 = mostSoldCategory.mostSoldCategory(categoryWeekDisplay4)

	var data = {
	"productsProp":[ mostPopular1 , lowest1]}

var source = fs.readFileSync('week1.handlebars', 'utf-8')
		
	var template = Handlebars.compile(source);
	var data = template(data);


 fs.writeFile('views/week1Statitics.html', data);