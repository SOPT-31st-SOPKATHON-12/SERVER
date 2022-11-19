import { Router } from 'express';
import { friendController } from '../controller';

const router: Router = Router();

//* 응원 생성 ( POST /friend )
//* 응원 조회 ( GET /friend )

router.get('/', friendController.getFriend);
router.get('/:userId', friendController.getFriendRecord);
router.post('/support', friendController.supportFriend);

export default router;