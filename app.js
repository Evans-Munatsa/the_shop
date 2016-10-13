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


app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use(cookieParser('secret'));
app.use(session({
    cookie: { maxAge: 60000 * 30},
    store: sessionStore,
    saveUninitialized: true,
    resave: 'true',
    secret: 'secret'
}));

app.use(flash());


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(upload.array());
app.use(cookieParser());

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

// USER router
var rolesMap = {
    "evans" : "admin",
    "gagamel" : "view"
}

app.get('/users/signup', users.userSignup);
app.post('/users/add', users.add);
app.post('/login', function(req, res){
    req.session.user = {
        name : req.body.name,
        password : req.body.password,
        is_admin : rolesMap[req.body.name] === "admin"
    }
    res.redirect("/home")
})

var checkUser = function(req, res, next){
    console.log("checkUser");
    if(req.session.user){
        return next();
    }

    res.redirect("/users/login");
}

app.get("/home", checkUser, function(req, res){
    res.render("home", {user : req.session.user});
});

app.get("/users/login", function(req, res){
    res.render("login", {});
});

app.get('/logout', function(req, res){
    delete req.session.user;
    res.redirect("/users/login");
})

app.get('/categories', checkUser, categories.show);
app.get('/categories/add', checkUser, categories.showAdd);
app.get('/categories/edit/:id', checkUser, categories.get);
app.post('/categories/update/:id', checkUser,  categories.update);
app.post('/categories/add', checkUser, categories.add);
app.get('/categories/delete/:id', checkUser, categories.delete);

app.get('/products', checkUser, products.show);
app.get('/products/edit/:id', checkUser, products.get);
app.post('/products/update/:id', checkUser, products.update);
app.get('/products/add', checkUser, products.showAdd);
app.post('/products/add', checkUser, products.add)
app.get('/products/delete/:id', checkUser, products.delete);

app.get('/purchases', checkUser, purchases.show);
app.post('/purchases/update/:id', checkUser, purchases.update);
app.get('/purchases/edit/:id', checkUser, purchases.get);
app.get('/purchases/add', checkUser, purchases.showAdd);
app.post('/purchases/add', checkUser, purchases.add)
app.get('/purchases/delete/:id', checkUser, purchases.delete);

app.get('/sales', checkUser, sales.show)
app.get('/sales/add', checkUser, sales.showAdd);
app.post('/sales/add', checkUser, sales.add)
app.post('/sales/update/:id', checkUser, sales.update);
app.get('/sales/edit/:id', checkUser, sales.get);
app.get('/sales/delete/:id', checkUser, sales.delete);

app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});