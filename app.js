const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');

const indexRouter = require('./api/routes/index');
const usersRouter = require('./api/routes/users');
const blogRouter = require('./api/routes/blog');
const portfolioRouter = require('./api/routes/portfolio');

const app = express();
let errorStatus = null;

let whitelist = ['http://localhost:4300'];
let corsOptions = {
  origin(origin, callback) {
    if (whitelist.indexOf(origin, callback) !== -1) {
      callback(null, true);
    } else {
      errorStatus = 401;
      callback(new Error('Access to elonaire is denied'));
    }
  }
};

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', cors(), indexRouter);
app.use('/users', cors(), usersRouter);
app.use('/blog', cors(), blogRouter);
app.use('/portfolio', cors(), portfolioRouter);

// error handler 
app.use((err, req, res, next) => {
  if (err && errorStatus === 403) {
    res.status(403).json({
      message: `${err}`
    });
  } else if (err && errorStatus === 401) {
    res.status(401).json({
      message: 'Unauthorized'
    });
  } else if (err && !errorStatus) {
    res.status(500).json({
      message: `Internal server error => ${err}`
    });
  }else {
    res.status(404).json({
      message: 'Resource not found'
    });
  }
});

module.exports = app;
