exports.show = function(req, res, next) {
    req.getConnection(function(err, connection) {
        if (err) return next(err);
        connection.query('SELECT * from sales', [], function(err, results) {
            if (err) return next(err);
            res.render('sales', {
                no_sales: results.length === 0,
                sales: results,
            });
        });
    });
};

exports.showAdd = function(req, res) {
    req.getConnection(function(err, connection) {
        if (err) return next(err);
        connection.query('SELECT * from products', [], function(err, categories) {
            if (err) return next(err);
            res.render('add', {
                products: products,
            });
        });
    });
};

exports.add = function(req, res, next) {
    req.getConnection(function(err, connection) {
        if (err) return next(err);
        var data = {
            products_id: Number(req.body.products_id),
            price: Number(req.body.price)
            quantity: Number(req.body.quantity)
        };

        connection.query('insert into products set ?', data, function(err, results) {
            if (err) return next(err);
            res.redirect('/products');
        });
    });
};