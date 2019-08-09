const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
const cors = require('cors')

const indexRouter = require('./api/routes/index');
const usersRouter = require('./api/routes/users');

const app = express();
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  res.status(404).json({
    message: "Resource not found"
  })
});

// error handler
app.use((err, req, res, next) => {
  res.status(500).json({
    message: `Internal server error => ${err}`
  })
});

module.exports = app;
