const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const routes = require('./routes');
const bodyParser = require('body-parser');
const path = require('path');

mongoose.Promise = global.Promise;

let mongo_uri;
if (process.env.NODE_ENV === 'DEVELOPMENT') {
	mongo_uri = 'mongodb://localhost:27017/lostnfound';
} else {
	mongo_uri = `mongodb://mmoderwell.com:27018/lostnfound`;
}
//connect to database
mongoose.connect('mongodb://mmoderwell.com:27018/lostnfound').then(() => console.log('Connected to lostnfound database.'))
	.catch((e) => {
		console.error('Connection to mongodb failed.');
	});

//the database connection is disconnected
mongoose.connection.on('disconnected', function () {
	console.log('Connection to mongodb is disconnected.');
});

app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../client/build")));
routes(app);

// catch 404 and forward to error handler
app.use((req, res, next) => {
	let err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handlers
app.get('*', function (req, res, next) {
	//let err = new Error(`${req.ip} tried to reach ${req.originalUrl}`); // Tells us which IP tried to reach a particular URL
	let err = new Error('Page not found.');
	err.statusCode = 404;
	err.shouldRedirect = true; //New property on err so that our middleware will redirect
	next(err);
});

app.use((err, req, res, next) => {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'DEVELOPMENT' ? err : {};

	// render the error page
	res.status(err.status || 500);
	//res.render('error.ejs', { err, });
});

module.exports = app;

app.listen(8080, () => {
	console.log('Listening on port 8080');
});