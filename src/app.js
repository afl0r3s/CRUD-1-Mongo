const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

//connecting to db
mongoose.connect('mongodb://localhost:27017/crud-mongo')
    .then(db => console.log('Db connected'))
    .catch(error => console.log(error));

//import routes
const indexRoutes = require('./routes/index');

//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, '/views'));
//app.set('views', __dirname + '/views');
app.set('view engine', 'ejs'); 

//midleware
app.use(morgan('dev'));

//routes
app.use('/', indexRoutes);
app.use(express.urlencoded({ extended: false }));
/* 
app.get('/', function(req, res) {
    res.render('index.ejs');
});
 */
//starting server
app.listen(app.get('port'), () => {
	console.log(`Server on port: ${app.get('port')}`);
});
