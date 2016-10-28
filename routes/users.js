var bcrypt = require('bcrypt');
const saltRounds = 10;

exports.userSignup = function(req, res) {
    res.render('signup');
};


exports.register = function(req, res, next) {
    req.getConnection(function(err, connection) {
        //        connection.query('SELECT * FROM Users', function(err, rows, fields)   
        // {  
        //   if (err) throw err;  

        //   console.log(rows[0]);  
        // });  

        // console.log(req.body.email)
        if (req.body.name && req.body.email && req.body.password) {
            // if user puts non matching passwords
            // if (req.body.password !== req.body.confirmPassword) {
            //     var err = new Error('passwords do not match ')
            //     err.status = 400;
            //     return next(err)
            // }

            // if user puts correct info the get save to database
            var newUser = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
            };


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


        } else {
            var err = new Error('All fields must be filled. ')
                // req.flash("danger", "All fields must be filled")
            err.status = 400;
            return next(err)
        }
    })
}