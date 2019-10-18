import express, { Router,Request, Response, NextFunction } from 'express';
const router: Router = express.Router();

/* Login */
router.post('/login', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    message: "Welcome to users"
  })
});

router.post('/register', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    message: "Registration"
  })
})

module.exports = router;
