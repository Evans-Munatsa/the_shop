var session = require('express-session');
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
            var newUser = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            };

            if (req.body.password) {
                var passwordStore = bcrypt.hash(newUser.password, saltRounds, function(err, hash) {
                    newUser.password = hash
                    connection.query('insert into Users set ?', newUser, function(err, results) {
                        if (err) return next(err);
                        req.flash("success", 'Welcome', newUser.name);
                        req.session.user = newUser;
                        res.redirect('/categories');
                    });
                });
            }

        } else {
            if (err) return next(err)
            req.flash("danger", "All fields must be filled")
            res.redirect("/users/signup");
        }
    })
}

exports.checkUser = function(req, res, next) {
    if (req.session && req.session.user) {
        return next();
    }
    res.redirect("/");
};


var rolesMap = {
    "gagamel.em@gmail.com": "admin",
    "evansmunatsa7@gmail.com": "user"
}

exports.login = function(req, res, next) {
    req.getConnection(function(err, connection) {
        if (err) return next(err)
        var data = {
            email: req.body.email,
            password: req.body.password
        }

        connection.query('SELECT * from Users WHERE email = ?', data.email, function(err, results) {
            if (err) return next(err)
            var user = results[0];

            if (user === undefined) {
                res.redirect("/")

            } else {
                bcrypt.compare(data.password, user.password, function(err, pass) {
                    if (pass) {
                        req.session.user = {
                            email: data.email,
                            is_admin : rolesMap[req.body.email] === "admin",
                            user : rolesMap[req.body.email] === "user"
                        }
                        res.redirect('/categories');
                    } else {
                        if (err) return next(err)
            req.flash("danger", "All fields must be filled")
            res.redirect("/users/signup");
                    }
                });
            }
        })
    })
}