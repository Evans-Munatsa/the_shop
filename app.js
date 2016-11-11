var fs = require('fs'),
    express = require('express'),
    mysql = require('mysql'),
    router = express.Router(),
    path = require("path"),
    myConnection = require('express-myconnection'),
    bodyParser = require('body-parser'),
    exphbs = require('express-handlebars'),
    categories = require('./routes/categories'),
    products = require('./routes/products'),
    purchases = require('./routes/purchases'),
    sales = require('./routes/sales'),
    users = require('./routes/users'),
    session = require('express-session'),
    cookieParser = require('cookie-parser'),
    flash = require('express-flash'),
    multer = require('multer'),
    upload = multer(),
    bcrypt = require('bcrypt');
const saltRounds = 10;

weeklySales = require('./scripts/products'),
    category = require('./scripts/categories_totals'),
    profitProduct = require('./scripts/mostProfitableProduct'),
    profitCat = require('./scripts/mostProfitableCategory'),

    purchase = './csv/purchases.csv',
    categories1 = './csv/categories.csv',
    cat = category.categoriesMap(categories1),

    app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
sessionStore = new session.MemoryStore;

var connection = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 3306,
    database: 'the_shop'
};


app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use(cookieParser('secret'));
app.use(session({
    cookie: {
        maxAge: 60000 * 30
    },
    store: sessionStore,
    saveUninitialized: true,
    resave: 'true',
    secret: 'secret'
}));

app.use(flash());

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
    res.render('home');
})


app.get("categories/categories", users.checkUser, function(req, res) {
    res.render("categories", {
        user: req.session.user
    });
});

app.get('/users/signup', users.userSignup);
app.post('/users/register', users.register);
app.get('/users/login', users.login)
app.post('/users/login', users.login)
app.get('/logout', function(req, res) {
    delete req.session.user;
    res.redirect("/");
})

app.get('/categories', users.checkUser, categories.show);
app.get('/categories/add', users.checkUser, categories.showAdd);
app.get('/categories/edit/:id', users.checkUser, categories.get);
app.post('/categories/update/:id', users.checkUser, categories.update);
app.post('/categories/add', users.checkUser, categories.add);
app.get('/categories/delete/:id', users.checkUser, categories.delete);

app.get('/products', users.checkUser, products.show);
app.get('/products/edit/:id', users.checkUser, products.get);
app.post('/products/update/:id', users.checkUser, products.update);
app.get('/products/add', users.checkUser, products.showAdd);
app.post('/products/add', users.checkUser, products.add)
app.get('/products/delete/:id', users.checkUser, products.delete);

app.get('/purchases', users.checkUser, purchases.show);
app.post('/purchases/update/:id', users.checkUser, purchases.update);
app.get('/purchases/edit/:id', users.checkUser, purchases.get);
app.get('/purchases/add', users.checkUser, purchases.showAdd);
app.post('/purchases/add', users.checkUser, purchases.add)
app.get('/purchases/delete/:id', users.checkUser, purchases.delete);

app.get('/sales', users.checkUser, sales.show)
app.get('/sales/add', users.checkUser, sales.showAdd);
app.post('/sales/add', users.checkUser, sales.add)
app.post('/sales/update/:id', users.checkUser, sales.update);
app.get('/sales/edit/:id', users.checkUser, sales.get);
app.get('/sales/delete/:id', users.checkUser, sales.delete);

app.get('/users', users.checkUser, users.show);
app.get('/users/delete/:id', users.checkUser, users.delete);
app.use(errorHandler);

app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});