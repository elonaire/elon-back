export {};
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.status(200).json("This is my home page")
});

module.exports = router;
