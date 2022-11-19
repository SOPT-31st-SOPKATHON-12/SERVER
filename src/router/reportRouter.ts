import { Router } from 'express';
import { reportController } from '../controller';

const router: Router = Router();

//* 주간 레포트 조회 ( GET /report/:userId )

router
.get('/:userId', reportController.getReport);

export default router;
