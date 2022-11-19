import express, { Router } from 'express';
import recordRouter from './recordRouter';
import friendRouter from './friendRouter';

const router: Router = express.Router();

router.use('/record', recordRouter);
router.use('/friend', friendRouter);

module.exports = router;
