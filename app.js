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
    cookieParser = require('cookie-parser'),
    flash = require('express-flash'),


    weeklySales = require('./scripts/products'),
    category = require('./scripts/categories_totals'),
    profitProduct = require('./scripts/mostProfitableProduct'),
    profitCat = require('./scripts/mostProfitableCategory'),

    purchase = './csv/purchases.csv',
    categories1 = './csv/categories.csv',
    cat = category.categoriesMap(categories1),

    
    app = express();
    sessionStore = new session.MemoryStore;



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

app.use(cookieParser('secret'));
app.use(session({
    cookie: { maxAge: 60000 },
    store: sessionStore,
    saveUninitialized: true,
    resave: 'true',
    secret: 'secret'
}));

app.use(flash());

// app.use(function(req, res, next){
//     // if there's a flash message in the session request, make it available in the response, then delete it
//     res.locals.sessionFlash = req.session.sessionFlash;
//     delete req.session.sessionFlash;
//     next();
// });


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


// Route that creates a flash message using the express-flash module
// app.all('/express-flash', function( req, res ) {
//     req.flash('success', 'This is a flash message using the express-flash module.');
//     res.redirect(301, '/');
// });

// // Route that creates a flash message using custom middleware
// app.all('/session-flash', function( req, res ) {
//     req.session.sessionFlash = {
//         type: 'success',
//         message: 'This is a flash message using custom middleware and express-session.'
//     }
//     res.redirect(301, '/');
// });
app.get('/', function(req, res) {
    req.flash("warning", "Ok")
    res.render('home');
})

// app.get('/', function( req, res ) {
//     res.render('home', { expressFlash: req.flash('success', 'hello world, are you well'), sessionFlash: res.locals.sessionFlash });
// });

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