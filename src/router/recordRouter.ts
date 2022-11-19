import { Router } from 'express';
import { recordController } from '../controller';

const router: Router = Router();

router
.post('/', recordController.putRecord)
.get('/', recordController.getRecord)
.get('/report', recordController.getMyReport);


export default router;
