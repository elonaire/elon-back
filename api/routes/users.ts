export {};
const express = require('express');
const router = express.Router();

/* Login */
router.post('/login', (req: any, res: any, next) => {
  res.status(200).json({
    message: "Welcome to users"
  })
});

router.post('/register', (req: any, res: any, next) => {
  res.status(200).json({
    message: "Registration"
  })
})

module.exports = router;
