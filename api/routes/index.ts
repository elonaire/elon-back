import express, { Router,Request, Response, NextFunction } from 'express';
const router: Router = express.Router();

/* GET home page. */
router.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json("This is my home page")
});

module.exports = router;
