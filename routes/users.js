exports.userSignup = function(req, res) {
    res.render('signup');
};


exports.register = function(req, res, next) {
    req.getConnection(function(err, connection) {
        if (req.body.name || req.body.email && req.body.password && req.body.confirmPassword) {

            // if user puts non matching passwords
            if (req.body.password !== req.body.confirmPassword) {
                var err = new Error('passwords do not match ')
                err.status = 400;
                return next(err)
            } 
           // if user do not put name and email on registration
            if (!req.body.name || req.body.email) {
                var err = new Error('Both name and email need to be inputed');
                err.status = 400;
                return next(err)
            }

           // if user puts correct info the get save to database
            var newUser = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                confirmPassword: req.body.confirmPassword
            };

            connection.query('insert into Users set ?', newUser, function(err, results) {
                if (err) return next(err);
                req.flash("success", "User Added");
                req.session.user = newUser;
                res.redirect('/categories');
            });

        } else {
            var err = new Error('All fields must be filled. ')
            err.status = 400;
            return next(err)
        }
    })
}


// exports.login = function(req, res){
//     req.session.user = {
//         name : req.body.name,
//         password : req.body.password
//     }
//     res.redirect("/home")
// }