import { Router } from 'express';
import { recordController } from '../controller';

const router: Router = Router();

router
.post('/:userId', recordController.putRecord)
.get('/:userId', recordController.getRecord)
.get('/report', recordController.getMyReport);


export default router;
