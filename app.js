var fs = require('fs');
var express = require('express');
var path = require("path");
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars')

var weeklySales = require('./scripts/products');
var category = require('./scripts/categories_totals');
var profitProduct = require('./scripts/mostProfitableProduct');
var profitCat = require('./scripts/mostProfitableCategory');

var purchases = './csv/purchases.csv'
var categories1 = './csv/categories.csv';
var cat = category.categoriesMap(categories1)

var app = express();


app.use(express.static(path.resolve(__dirname, "public")));

// app.set("views", path.resolve(__dirname, "views"));

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');


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


app.get('/sales/:week_name', function(req, res) {
    var weekName = req.params.week_name;
    var weeklyFile = "./csv/" + weekName + ".csv";
    var data = sales(weeklyFile, ".csv/purchases.csv");

    res.render('weeklyStatistics', data);
});


var server = app.listen(3000, function() {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);

});