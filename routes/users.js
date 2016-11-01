var bcrypt = require('bcrypt');
const saltRounds = 10;

exports.show = function(req, res, next) {
    req.getConnection(function(err, connection) {
        if (err) return next(err);
        connection.query('SELECT * from Users', [], function(err, results) {
            if (err) return next(err);
            res.render('users/users', {
                no_users: results.length === 0,
                users: results,
            });
        });
    });
};


exports.userSignup = function(req, res) {
    res.render('signup');
};

exports.register = function(req, res, next) {
    req.getConnection(function(err, connection) {
        if (req.body.name && req.body.email && req.body.password) {
            // if user puts correct info the get save to database
            var newUser = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                confirm_password: req.body.confirm_password
            };

            if (req.body.password === req.body.confirm_password) {
                // using bycrypt to store hashed passwords
                var passwordStore = bcrypt.hash(newUser.password, saltRounds, function(err, hash) {
                    newUser.password = hash
                    newUser.confirm_password = hash
                    connection.query('insert into Users set ?', newUser, function(err, results) {
                        if (err) return next(err);
                        req.flash("success", 'Welcome', newUser.name);
                        req.session.user = newUser;
                        res.redirect('/categories');
                    });
                });
            }

        } else {
            var err = new Error('All fields must be filled. ')
            req.flash("danger", "All fields must be filled")
            err.status = 400;
            return next(err)
        }
    })
}

// exports.login = function(req, res) {
//     res.render('login')
// }

// exports.signIn = function(req, res, next) {
//     req.getConnection(function(err, connection) {
//         connection.query('SELECT name, email, password from Users', function(err, rows, fields) {
//             req.session.user = {
//                 name: req.body.name,
//                 password: req.body.password,
//                 is_admin: rolesMap[req.body.name] === "admin"
//             }
//             res.redirect("/categories")
//         })
//     })
// }