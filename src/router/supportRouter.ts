import { Router } from 'express';
import { supportController } from '../controller';

const router: Router = Router();

//* 응원 생성 ( POST /support )
//* 응원 조회 ( GET /support )

router
.post('/', supportController.putSupport)
.get('/', supportController.getSupport);


export default router;