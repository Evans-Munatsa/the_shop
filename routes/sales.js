exports.show = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err) return next(err);
        connection.query('select sales.id, description, sales.number_sold, sales.total_sales from sales INNER JOIN products ON sales.products_id=products.id', [], function(err, results) {
            if (err) return next(err);
            res.render( 'sales', {
                    no_sales : results.length === 0,
                    sales : results,
            });
        });
    });
};


exports.showAdd = function(req, res) {
    req.getConnection(function(err, connection) {
        if (err) return next(err);
        connection.query('SELECT * from products', [], function(err, products) {
            if (err) return next(err);
            res.render('add', {
                products: products,
            });
        });
    });
};


exports.add = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err) return next(err);
        var data = {
            products_id : Number(req.body.products_id),
            number_sold : Number(req.body.number_sold),
            total_sales : Number(req.body.total_sales)
        };

        connection.query('insert into sales set ?', data, function(err, results) {
            if (err) return next(err);
                res.redirect('/sales');
        });
    });
};

exports.get = function(req, res, next){
    var id = req.params.id;
    req.getConnection(function(err, connection){
        connection.query('SELECT * FROM products', [id], function(err, products){
            if(err) return next(err);
            connection.query('SELECT * FROM sales WHERE id = ?', [id], function(err,sales){
                if(err) return next(err);
                var product = sales[0];
                products = products.map(function(products){
                    products.selected = products.id === product.products_id ? "selected" : "";
                    return products;
                });
                res.render('edit', {
                    products : products,
                    data : product
                });
            });
        });
    });
};

exports.update = function(req, res, next){

     var data = {
            products_id : Number(req.body.products_id),
            number_sold : Number(req.body.number_sold),
            total_sales : Number(req.body.total_sales)
        };

    var id = req.params.id;
    req.getConnection(function(err, connection){
        if (err) return next(err);
        connection.query('UPDATE sales SET ? WHERE id = ?', [data, id], function(err, rows){
            if (err) return next(err);
            res.redirect('/sales');
        });
    });
};

exports.delete = function(req, res, next){
    var id = req.params.id;
    req.getConnection(function(err, connection){
        connection.query('DELETE FROM sales WHERE id = ?', [id], function(err,rows){
            if(err) return next(err);
            res.redirect('/sales');
        });
    });
};
