exports.showAdd = function(req, res) {
    res.render('sign_up');
}

exports.add = function(req, res, next) {
    req.getConnection(function(err, connection) {
        if (err) return next(err);
        var input = req.body;
        var data = {
            name: input.name,
            password: input.password,
        };

        connection.query('insert into Users set ?', data, function(err, results) {
            if (err) return next(err);
            req.flash("success", "User Added");
            res.redirect('/categories');

        });

    });
};