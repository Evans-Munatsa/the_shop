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
            // if user puts correct info the get save to database
            var newUser = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            };

            if (req.body.password) {
                // using bycrypt to store hashed passwords
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
            var err = new Error('All fields must be filled. ')
            req.flash("danger", "All fields must be filled")
            err.status = 400;
            return next(err)
        }
    })
}

exports.checkUser = function(req, res, next) {
    console.log("checkUser");
    if (req.session && req.session.DB) {
        return next();
    }
    res.redirect("/users/logIn");
};

var rolesMap = {
    "evans": "admin"
}

exports.logIn = function(req, res, next) {
    req.getConnection(function(err, connection) {
        if (err) return next(err)
        var data = {
            email: req.body.email,
            password: req.body.password,
            is_admin: rolesMap[req.body.name] === "admin"
        }

        connection.query('SELECT * from Users WHERE email = ?', data.email, function(err, results) {
            if (err) return next(err)
            var DB = results[0];
            console.log(DB)

            if (DB === undefined) {
                return res.redirect("/users/logIn")

            } else {
                bcrypt.compare(data.password, DB.password, function(err, pass) {
                    console.log(pass)
                    console.log("first:" + data.password, "second:" + DB.password);
                    if (pass) {
                        req.session.DB = data.email;
                        return res.redirect('/categories');
                    } else {
                        console.log('incorrect')
                        return res.redirect('/users/logIn');

                        // return next(err)
                    }

                });

            }
        })
    })
}