require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');

// setting
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'pug');

// static file
app.use(express.static(path.join(__dirname, 'public')))

// Routes
app.use(require('./routes'));

// listening on server
app.listen(app.get('port'), () => {
    console.log('Server en puerto', app.get('port'));
    
});