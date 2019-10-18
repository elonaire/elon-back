"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const indexRouter = require('./api/routes/index');
const usersRouter = require('./api/routes/users');
const app = express_1.default();
let errorStatus;
let whitelist = ['http://localhost:4300'];
let corsOptions = {
    origin(origin, callback) {
        if (whitelist.indexOf(origin, callback) !== -1) {
            callback(null, true);
        }
        else {
            errorStatus = 403;
            callback(new Error('Access to elonaire is denied'));
        }
    }
};
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(cookie_parser_1.default());
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.use('/', cors_1.default(), indexRouter);
app.use('/users', cors_1.default(), usersRouter);
// error handler 
app.use((err, req, res, next) => {
    if (err && errorStatus === 403) {
        res.status(403).json({
            message: `${err}`
        });
    }
    else if (err && !errorStatus) {
        res.status(500).json({
            message: `Internal server error => ${err}`
        });
    }
    else {
        res.status(404).json({
            message: "Resource not found"
        });
    }
});
module.exports = app;
