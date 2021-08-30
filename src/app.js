const express = require('express');
const app = express();

//import routes

//settings
app.set('port', process.env.PORT || 3000)

//midleware

//starting server
app.listen(app.get('port'), ()=> {
    console.log('Server on port 3000')
})