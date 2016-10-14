exports.userSignup = function(req, res) {
    res.render('signup');
};

exports.add = function(req, res, next) {
    req.getConnection(function(err, connection) {
        if (!req.body.name || !req.body.password) {
            res.status("400");
            res.send("Invalid details!");
        }

        var newUser = {
            name: req.body.name,
            password: req.body.password
        };
        connection.query('insert into Users set ?', newUser, function(err, results) {
            if (err) return next(err);
            req.flash("success", "User Added");
            req.session.user = newUser;
            res.redirect('/home');
        });
    })
};


// exports.login = function(req, res){
//     req.session.user = {
//         name : req.body.name,
//         password : req.body.password
//     }
//     res.redirect("/home")
// }

