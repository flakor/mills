const express = require('express');
const path = require('path');
const cors = require('cors');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const config = require('./config');
const passport = require('passport');
const app = express();
//carga la BD Users
require('./api/models/db');
//carga passport
require('./api/config/passport');
const routesApi = require('./api/routes/index');

// settings
// app.set('views', path.join(__dirname, 'views'));
// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'ejs');

app.set('port', process.env.PORT || config.serverport);

// middlewares

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(cors());
// Enable CORS from client-side
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});

app.use(passport.initialize());
// routes
// app.use('/', indexRoutes);
app.use('/api', routesApi);

// static files
app.use(express.static(path.join(__dirname, './client/dist')));

// start the server
app.listen(app.get('port'), () => {
    console.log('server on port 3000');
});
