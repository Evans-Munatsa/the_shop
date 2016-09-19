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

