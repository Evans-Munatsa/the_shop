exports.show = function(req, res, next) {
    req.getConnection(function(err, connection) {
        if (err) return next(err);
        connection.query('SELECT * FROM Categories', [], function(err, results) {
            if (err) return next(err);
            res.render('categories/categories', {
                no_products: results.length === 0,
                categories: results,
            });
        });
    });
};

exports.showAdd = function(req, res) {
    res.render('categories/add_category');
}

exports.add = function(req, res, next) {
    req.getConnection(function(err, connection) {
        if (err) return next(err);
        var input = req.body;
        var data = {
            description: input.description,
        };

        connection.query('insert into categories set ?', data, function(err, results) {
            if (err) return next(err);
            req.flash("success", "Category Added");
            res.redirect('/categories');

        });

    });
};

exports.get = function(req, res, next) {
    var id = req.params.id;
    req.getConnection(function(err, connection) {
        connection.query('SELECT * FROM categories WHERE id = ?', [id], function(err, rows) {
            if (err) return next(err);
            res.render('categories/edit_category', {
                page_title: "Edit Customers - Node.js",
                data: rows[0]
            });
        });
    });
};

exports.update = function(req, res, next) {
     
    var data = req.body;
    var id = req.params.id;
    req.getConnection(function(err, connection) {
        connection.query('UPDATE categories SET ? WHERE id = ?', [data, id], function(err, rows) {
            if (err) next(err);
            req.flash("success", "Category Updated")
            res.redirect('/categories');
        });

    });
};

exports.delete = function(req, res, next) {
    var id = req.params.id;
    req.getConnection(function(err, connection) {
        connection.query('DELETE FROM categories WHERE id = ?', [id], function(err, rows) {
            if (err) return next(err);
            req.flash("danger", "Category deleted")
            res.redirect('/categories');
        });
    });
};