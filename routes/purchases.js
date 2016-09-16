exports.show = function (req, res, next) {
	req.getConnection(function(err, connection){
		if (err) return next(err);
		connection.query('select purchases.id, purchases.shop, purchases.dates, description, purchases.quantity, purchases.unit_price, purchases.total_cost from purchases INNER JOIN products ON purchases.products_id=products.id', [], function(err, results) {
        	if (err) return next(err);
    		res.render( 'purchases/purchases', {
					no_purchases : results.length === 0,
					purchases : results,
    		});
      	});
	});
};



exports.showAdd = function(req, res){
	req.getConnection(function(err, connection){
		if (err) return next(err);
		connection.query('SELECT * from products', [], function(err, products) {
        	if (err) return next(err);
    		res.render( 'purchases/add', {
					products : products,
    		});
      	});
	});
};

exports.add = function (req, res, next) {
	req.getConnection(function(err, connection){
		if (err) return next(err);
		var data = {
			products_id : Number(req.body.products_id),
      		shop : req.body.shop,
      		dates : req.body.dates,
      		quantity : Number(req.body.quantity),
      		unit_price : Number(req.body.unit_price),
      		total_cost : Number(req.body.total_cost)
  		};

		connection.query('insert into purchases set ?', data, function(err, results) {
  			if (err) return next(err);
				res.redirect('purchases/purchases');
		});
	});
};

exports.get = function(req, res, next){
	var id = req.params.id;
	req.getConnection(function(err, connection){
		connection.query('SELECT * FROM products', [id], function(err, products){
			if(err) return next(err);
			connection.query('SELECT * FROM purchases WHERE id = ?', [id], function(err,purchases){
				if(err) return next(err);
				var product = purchases[0];
				products = products.map(function(products){
					products.selected = products.id === product.products_id ? "selected" : "";
					return products;
				});
				res.render('purchases/edit', {
					products : products,
					data : product
				});
			});
		});
	});
};

exports.update = function(req, res, next){

	var data = {
			products_id : Number(req.body.products_id),
      		shop : req.body.shop,
      		dates : req.body.dates,
      		quantity : Number(req.body.quantity),
      		unit_price : Number(req.body.unit_price),
      		total_cost : Number(req.body.total_cost)
  		};

  	var id = req.params.id;
  	req.getConnection(function(err, connection){
		if (err) return next(err);
		connection.query('UPDATE purchases SET ? WHERE id = ?', [data, id], function(err, rows){
			if (err) return next(err);
      		res.redirect('purchases/purchases');
		});
    });
};

exports.delete = function(req, res, next){
	var id = req.params.id;
	req.getConnection(function(err, connection){
		connection.query('DELETE FROM purchases WHERE id = ?', [id], function(err,rows){
			if(err) return next(err);
			res.redirect('purchases/purchases');
		});
	});
};