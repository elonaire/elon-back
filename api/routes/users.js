const express = require('express');
const router = express.Router();

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
