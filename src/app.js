
const express = require('express');
const app = express();
const path = require('path');

const morgan = require('morgan');
const bodyP = require('body-parser');
const indexRoutes = require('./routes/index');

app.use(bodyP.urlencoded({extended: true}));

//settings

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'ejs');

app.listen(app.get('port'), () => {
  console.log('server on port ', app.get('port'));
});

//routes
app.use('/', indexRoutes);

//middlewares

app.use(morgan('dev'));
