exports.show = function (req, res, next) {
	req.getConnection(function(err, connection){
		if (err) return next(err);
		connection.query('SELECT * from products', [], function(err, results) {
        	if (err) return next(err);
    		res.render( 'products/products', {
					no_products : results.length === 0,
					products : results,
					user : req.session.user

    		});
      	});
	});
};

exports.showAdd = function(req, res){
	req.getConnection(function(err, connection){
		if (err) return next(err);
		connection.query('SELECT * from Categories', [], function(err, categories) {
        	if (err) return next(err);
    		res.render( 'products/add', {
					categories : categories,
					user : req.session.user

    		});
      	});
	});
};

exports.add = function (req, res, next) {
	req.getConnection(function(err, connection){
		if (err) return next(err);
		var data = {
			category_id : Number(req.body.category_id),
      		description : req.body.description,
  		};

		connection.query('insert into products set ?', data, function(err, results) {
  			if (err) return next(err);
  			    req.flash("success", "Product Added")
				res.redirect('/products');
		});
	});
};

exports.get = function(req, res, next){
	var id = req.params.id;
	req.getConnection(function(err, connection){
		connection.query('SELECT * FROM Categories', [id], function(err, categories){
			if(err) return next(err);
			connection.query('SELECT * FROM products WHERE id = ?', [id], function(err,products){
				if(err) return next(err);
				var product = products[0];
				categories = categories.map(function(category){
					category.selected = category.id === product.category_id ? "selected" : "";
					return category;
				});
				res.render('products/edit', {
					categories : categories,
					data : product,
					user: req.session.user
				});
			});
		});
	});
};

exports.update = function(req, res, next){

	var data = {
		category_id : Number(req.body.category_id),
		description : req.body.description
	};
  	var id = req.params.id;
  	req.getConnection(function(err, connection){
		if (err) return next(err);
		connection.query('UPDATE products SET ? WHERE id = ?', [data, id], function(err, rows){
			if (err) return next(err);
			req.flash("success", "Product Updated")
      		res.redirect('/products');
		});
    });
};

exports.delete = function(req, res, next){
	var id = req.params.id;
	req.getConnection(function(err, connection){
		connection.query('DELETE FROM products WHERE id = ?', [id], function(err,rows){
			if(err) return next(err);
			req.flash("danger", "Product deleted")
			res.redirect('/products');
		});
	});
};