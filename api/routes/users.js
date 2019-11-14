const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/users')

/* Login */
router.post('/login', usersControllers.authenticateUser);

router.post('/register', (req, res, next) => {
  res.status(200).json({
    message: "Registration"
  });
});

module.exports = router;
