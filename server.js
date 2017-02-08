//Set up the server to use mySQL locally & Jaws once deployed
// var Sequelize = require('sequelize'),
//   connection;
// if (process.env.JAWSDB_URL){
//   connection = new Sequelize(process.env.JAWSDB_URL);
// } else{
//   connection = new Sequelize('tomcariello', 'root', 'password', {
//     host: 'localhost',
//     dialect: 'mysql',
//     port:'3306'
//   })
// }

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
	extended: false
}));

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/route_controller.js');
app.use('/', routes);

var PORT = 3000;
app.listen(process.env.PORT || PORT);
