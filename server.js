var express = require('express'),
bodyParser = require('body-parser')
app = express();

app.get('/', function(req, res){
	res.render('index.hbs', {
		title: "hello express & handlebars"
	});
}).listen(3000);

// app.listen(3000, function(){
// 	console.log('listening on port 3000')
// })



//express verbs
  //GET - Read
  //POST - Create
  //PUT - Update
  //DELETE - Delete

   // var names = [];

   // app.get('/', function(req, res){
   // 	res.render('index.hbs', { names: names})
   // })