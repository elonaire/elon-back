const jwt = require('jsonwebtoken');
const uuidv4 = require('uuid/v4');
const hat = require('hat');
const rack = hat.rack();

exports.authenticateUser = (req, res, next) => {
    let username = req.body.username;
    let password = req.body.password;
    let secret = process.env.SECRET;
    let accessToken = rack();
    let refreshToken = rack() + rack();

    if (username && password) {
        const JWTAUTH = jwt.sign(
            {
                username
            },
            secret,
            {
                expiresIn: '1h'
            }
        );

        res.status(200).json({
            JWTAUTH,
            accessToken,
            refreshToken
        });
        
    } else {
        res.status(401).json({
            message: 'You must provide a valid username and password'
        });
    }
}