import express, { Router } from 'express';
import recordRouter from './recordRouter';
import supportRouter from './supportRouter';
import reportRouter from './reportRouter';

const router: Router = express.Router();

router.use('/record', recordRouter);
router.use('/support', supportRouter);
router.use('/report', reportRouter);

module.exports = router;
