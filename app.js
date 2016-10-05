var fs = require('fs'),
    express = require('express'),
    mysql = require('mysql'),
    Router = require('router'),
    path = require("path"),
    myConnection = require('express-myconnection'),
    bodyParser = require('body-parser'),
    exphbs = require('express-handlebars'),
    categories = require('./routes/categories'),
    products = require('./routes/products'),
    purchases = require('./routes/purchases'),
    sales = require('./routes/sales'),
    session = require('express-session'),
    flash = require('connect-flash'),


    weeklySales = require('./scripts/products'),
    category = require('./scripts/categories_totals'),
    profitProduct = require('./scripts/mostProfitableProduct'),
    profitCat = require('./scripts/mostProfitableCategory'),

    purchase = './csv/purchases.csv',
    categories1 = './csv/categories.csv',
    cat = category.categoriesMap(categories1),

    
    app = express();
    app.use(flash());



var connection = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 3306,
    database: 'the_shop'
};

app.use(session({
    secret: 'put your secret phrase here please',
    cookie: { maxAge: 60000 }
}));


app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, "public")));

//setup middleware
app.use(myConnection(mysql, connection, 'single'));
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json())

function errorHandler(err, req, res, next) {
    res.status(500);
    res.render('error', {
        error: err
    });
}



function sale(salasCSV) {
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

app.get('/sale/:week_name', function(req, res) {
    var weekName = req.params.week_name;
    var weeklyFile = "./csv/" + weekName + ".csv";
    var data = sale(weeklyFile, ".csv/purchases.csv");

    res.render('weeklyStatistics', data);
});


app.get('/', function(req, res) {
    res.render('home', {message: req.flash('info', 'Welcome') })
})

//routes
app.get('/categories', categories.show);
app.get('/categories/add', categories.showAdd);
app.get('/categories/edit/:id', categories.get);
app.post('/categories/update/:id', categories.update);
app.post('/categories/add', categories.add);
app.get('/categories/delete/:id', categories.delete);

app.get('/products', products.show);
app.get('/products/edit/:id', products.get);
app.post('/products/update/:id', products.update);
app.get('/products/add', products.showAdd);
app.post('/products/add', products.add)
app.get('/products/delete/:id', products.delete);

app.get('/purchases', purchases.show);
app.post('/purchases/update/:id', purchases.update);
app.get('/purchases/edit/:id', purchases.get);
app.get('/purchases/add', purchases.showAdd);
app.post('/purchases/add', purchases.add)
app.get('/purchases/delete/:id', purchases.delete);

app.get('/sales', sales.show)
app.get('/sales/add', sales.showAdd);
app.post('/sales/add', sales.add)
app.post('/sales/update/:id', sales.update);
app.get('/sales/edit/:id', sales.get);
app.get('/sales/delete/:id', sales.delete);



//set the port number to an existing environment variable PORT or default to 5000
app.set('port', (process.env.PORT || 3000));
//start the app like this:
app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});