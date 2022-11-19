import { Router } from 'express';
import { friendController } from '../controller';

const router: Router = Router();

//* 친구 목록 조회 ( GET /friend )

router.get('/', friendController.getFriend);

//* 친구 기록 조회 ( GET /friend/:friendId )

router.get('/:friendId', friendController.getFriendRecord);

//* 응원 생성 ( POST /friend/support )

router.post('/support', friendController.supportFriend);

export default router;