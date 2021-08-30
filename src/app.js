const path = require('path');
const express = require('express');
const morgan = require('morgan');
const app = express();

//import routes
require('./routes/index')

//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'ejs');

//midleware
app.use(morgan('dev'));

//routes

//starting server
app.listen(app.get('port'), () => {
	console.log(`Server on port: ${app.get('port')}`);
});
