"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
/* Login */
router.post('/login', (req, res, next) => {
    res.status(200).json({
        message: "Welcome to users"
    });
});
router.post('/register', (req, res, next) => {
    res.status(200).json({
        message: "Registration"
    });
});
module.exports = router;
