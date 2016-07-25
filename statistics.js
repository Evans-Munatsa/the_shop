// var fs = require('fs');
// var Handlebars = require('handlebars');

// var weeklySales = require('./scripts/products');
// var category = require('./scripts/categories_totals');
// var profits = require('./scripts/mostProfitableProduct')
// var profitCat = require('./scripts/mostProfitableCategory')

// var csv1 = './csv/week1.csv';
// var csv2 = './csv/week2.csv';
// var csv3 = './csv/week3.csv';
// var csv4 = './csv/week4.csv';
// var purchases = './csv/purchases.csv'
// var categories1 = './csv/categories.csv';
// var cat = category.categoriesMap(categories1)

// var weekDisplay = weeklySales.weeklyProducts(csv1);
//  var categoryWeekDisplay = category.categories_total(cat, weekDisplay);

//  var mostProfitableCat = profitCat.profitableCat(categoryWeekDisplay)
// console.log(mostProfitableProduct)


// // function sales(salesCSV, purchases) {
// //     var leastPopularProduct = require('./scripts/least');
// //     var mostPopularProduct = require('./scripts/most');
// //     var leastSoldCategory = require('./scripts/leastSoldCategory');
// //     var mostSoldCategory = require('./scripts/mostSoldCategory');
// //     var profits = require('./scripts/mostProfitableProduct')
// //     var mostProfitableCategory = require('./scripts/mostProfitableCategory');

// //     var weekDisplay = weeklySales.weeklyProducts(salesCSV);
// //     var categoryWeekDisplay = category.categories_total(cat, weekDisplay);
// //     var lowest = leastPopularProduct.least(weekDisplay);
// //     var mostPopular = mostPopularProduct.most(weekDisplay);
// //     var mostPopCat = mostSoldCategory.mostSoldCategory(categoryWeekDisplay);
// //     var leastPopCat = leastSoldCategory.leastSoldCategory(categoryWeekDisplay);
// //         var mostProfitableProduct = profits.profitableProduct(weekDisplay, purchases)
// //         console.log(salesCSV)

// //     var data = {
// //         "mostPop": [mostPopular],
// //         "leastPop": [lowest],
// //         "mostPopCat": [mostPopCat],
// //         "leastPopCat": [leastPopCat]
// //         "mostProfProd": [mostProfitableProduct]
// //     }
// //     return data;
// // }
// // sales();
// // var week1 = sales(csv1, categories1);
// // var week2 = sales(csv2, categories1);
// // var week3 = sales(csv3, categories1);
// // var week4 = sales(csv4, categories1);


// // var source = fs.readFileSync('views/index.handlebars', 'utf-8')

// // var template = Handlebars.compile(source);
// // var data1 = template(week1);
// // var data2 = template(week2);
// // var data3 = template(week3);
// // var data4 = template(week4);

// // fs.writeFile('views/week1.html', data1);
// // fs.writeFile('views/week2.html', data2);
// fs.writeFile('views/week3.html', data3);
// fs.writeFile('views/week4.html', data4);
