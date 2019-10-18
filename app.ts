export {};
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');

const indexRouter = require('./api/routes/index');
const usersRouter = require('./api/routes/users');

const app = express();
let errorStatus: number;

let whitelist: string[] = ['http://localhost:4300'];
let corsOptions: object = {
  origin(origin, callback) {
    if (whitelist.indexOf(origin, callback) !== -1) {
      callback(null, true);
    } else {
      errorStatus = 403;
      callback(new Error('Access to elonaire is denied'));
    }
  }
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', cors(), indexRouter);
app.use('/users', cors(), usersRouter);

// error handler 
app.use((err, req: any, res: any, next) => {
  if (err && errorStatus === 403) {
    res.status(403).json({
      message: `${err}`
    });
  } else if (err && !errorStatus) {
    res.status(500).json({
      message: `Internal server error => ${err}`
    });
  }else {
    res.status(404).json({
      message: "Resource not found"
    });
  }
});

module.exports = app;
