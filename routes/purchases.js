exports.show = function (req, res, next) {
	req.getConnection(function(err, connection){
		if (err) return next(err);
		connection.query('SELECT * from purchases', [], function(err, results) {
        	if (err) return next(err);
    		res.render( 'purchases', {
					no_purchases : results.length === 0,
					purchases : results,
    		});
      	});
	});
};



// exports.showAdd = function(req, res){
// 	req.getConnection(function(err, connection){
// 		if (err) return next(err);
// 		connection.query('SELECT * from products', [], function(err, products) {
//         	if (err) return next(err);
//     		res.render( 'purchases/add', {
// 					products : products,
//     		});
//       	});
// 	});
// };

// exports.add = function (req, res, next) {
// 	req.getConnection(function(err, connection){
// 		if (err) return next(err);
// 		var data = {
// 			products_id : Number(req.body.products_id),
//       		description : req.body.description,
// 			// price : Number(req.body.price)
//   		};

// 		connection.query('insert into purchases set ?', data, function(err, results) {
//   			if (err) return next(err);
// 				res.redirect('/purchases');
// 		});
// 	});
// };

// exports.get = function(req, res, next){
// 	var id = req.params.id;
// 	req.getConnection(function(err, connection){
// 		connection.query('SELECT * FROM products', [id], function(err, products){
// 			if(err) return next(err);
// 			connection.query('SELECT * FROM purchases WHERE id = ?', [id], function(err,purchases){
// 				if(err) return next(err);
// 				var product = purchases[0];
// 				products = products.map(function(products){
// 					products.selected = products.id === product.products_id ? "selected" : "";
// 					return products;
// 				});
// 				res.render('purchases/edit', {
// 					products : products,
// 					data : product
// 				});
// 			});
// 		});
// 	});
// };

// exports.update = function(req, res, next){

// 	var data = {
// 		products_id : Number(req.body.products_id),
// 		description : req.body.description,
// 		price : Number(req.body.price)
// 	};
//   	var id = req.params.id;
//   	req.getConnection(function(err, connection){
// 		if (err) return next(err);
// 		connection.query('UPDATE purchases SET ? WHERE id = ?', [data, id], function(err, rows){
// 			if (err) return next(err);
//       		res.redirect('/purchases');
// 		});
//     });
// };

// exports.delete = function(req, res, next){
// 	var id = req.params.id;
// 	req.getConnection(function(err, connection){
// 		connection.query('DELETE FROM purchases WHERE id = ?', [id], function(err,rows){
// 			if(err) return next(err);
// 			res.redirect('/purchases');
// 		});
// 	});
// };