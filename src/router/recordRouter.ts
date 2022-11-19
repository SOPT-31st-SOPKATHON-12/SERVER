import { Router } from 'express';
import { recordController } from '../controller';

const router: Router = Router();

//* 기록 생성 ( POST /record/:userId )
//* 기록 조회 ( GET /record/:userId )

router
.post('/:userId', recordController.putRecord)
.get('/:userId', recordController.getRecord);

//* 친구 기록 조회 ( GET /record/friend ) - view 보고 확실히 결정

router.get('/report', recordController.getMyReport);


export default router;
