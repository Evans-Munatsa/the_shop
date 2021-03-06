exports.show = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err) return next(err);
        connection.query("select DATE_FORMAT(sales.dates,'%Y-%m-%d') as dates, sales.id, description, sales.number_sold, sales.total_sales from sales INNER JOIN products ON sales.products_id=products.id ORDER BY sales.dates DESC", [], function(err, results) {
            if (err) return next(err);
            res.render( 'sales/sales', {
                    no_sales : results.length === 0,
                    sales : results,
                    user : req.session.user

            });
        });
    });
};


exports.showAdd = function(req, res) {
    req.getConnection(function(err, connection) {
        if (err) return next(err);
        connection.query('SELECT * from products', [], function(err, products) {
            if (err) return next(err);
            res.render('sales/add', {
                products: products,
                user : req.session.user

            });
        });
    });
};


exports.add = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err) return next(err);
        var data = {
            products_id : Number(req.body.products_id),
            dates : req.body.dates,
            number_sold : Number(req.body.number_sold),
            total_sales : Number(req.body.total_sales)
        };

        connection.query('insert into sales set ?', data, function(err, results) {
            if (err) return next(err);
                req.flash("success", "Sale Added")
                res.redirect('/sales');
        });
    });
};

exports.get = function(req, res, next){
    var id = req.params.id;
    req.getConnection(function(err, connection){
        connection.query('SELECT * FROM products', [id], function(err, products){
            if(err) return next(err);
            connection.query("SELECT sales.id, sales.number_sold, sales.total_sales, DATE_FORMAT(sales.dates, '%Y-%m-%d') as dates FROM sales WHERE id = ?", [id], function(err,sales){
                if(err) return next(err);
                var product = sales[0];
                products = products.map(function(products){
                    products.selected = products.id === product.products_id ? "selected" : "";
                    return products;
                });
                res.render('sales/edit', {
                    products : products,
                    data : product,
                    user: req.session.user
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
            req.flash("success", "Sale Updated")
            res.redirect('/sales');
        });
    });
};

exports.delete = function(req, res, next){
    var id = req.params.id;
    req.getConnection(function(err, connection){
        connection.query('DELETE FROM sales WHERE id = ?', [id], function(err,rows){
            if(err) return next(err);
            req.flash("danger", "Sale deleted")
            res.redirect('/sales');
        });
    });
};
