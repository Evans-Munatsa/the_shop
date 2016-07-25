var fs = require('fs');
var fs = require('fs');
var express = require('express');
var path = require("path");
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars')

var app = express();


app.use(express.static(path.resolve(__dirname, "public")));
app.set("views", path.resolve(__dirname, "views"));
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');


app.get('/', function(req, res) {
    var weeklySales = require('./scripts/products');
    var category = require('./scripts/categories_totals');
    var profitProduct = require('./scripts/mostProfitableProduct');
    var profitCat = require('./scripts/mostProfitableCategory');

    var csv1 = './csv/week1.csv';
    var csv2 = './csv/week2.csv';
    var csv3 = './csv/week3.csv';
    var csv4 = './csv/week4.csv';
    var purchases = './csv/purchases.csv'
    var categories1 = './csv/categories.csv';
    var cat = category.categoriesMap(categories1)

    function sales(salasCSV) {
        var leastPopularProduct = require('./scripts/least');
        var mostPopularProduct = require('./scripts/most');
        var leastSoldCategory = require('./scripts/leastSoldCategory');
        var mostSoldCategory = require('./scripts/mostSoldCategory');
        var profitProduct = require('./scripts/mostProfitableProduct')
        var profitCat = require('./scripts/mostProfitableCategory')

        var weekDisplay = weeklySales.weeklyProducts(salasCSV);
        var categoryWeekDisplay = category.categories_total(cat, weekDisplay)
        var lowest = leastPopularProduct.least(weekDisplay)
        var mostPopular = mostPopularProduct.most(weekDisplay);
        var mostPopCat = mostSoldCategory.mostSoldCategory(categoryWeekDisplay)
        var leastPopCat = leastSoldCategory.leastSoldCategory(categoryWeekDisplay)
        var leastPopCat = leastSoldCategory.leastSoldCategory(categoryWeekDisplay);
        var mostProfitableProduct = profitProduct.profitableProduct(weekDisplay, purchases)
        var mostProfitableCat = profitCat.profitableCat(categoryWeekDisplay)

        var data = {
            "mostPop": [mostPopular],
            "leastPop": [lowest],
            "mostPopCat": [mostPopCat],
            "leastPopCat": [leastPopCat],
            "mostProfProd": [mostProfitableProduct],
            "mostProfCat": [mostProfitableCat]
        }
        return data;
    }
    var week1 = sales(csv1, categories1);
    var week2 = sales(csv2, categories1);
    var week3 = sales(csv3, categories1);
    var week4 = sales(csv4, categories1);
    res.send(week1);
})

var server = app.listen(3000, function() {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);

});