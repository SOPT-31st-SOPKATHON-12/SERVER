import { Request, Response } from 'express';
import { supportService } from '../service';

//* 기록 생성
const putSupport = async (req: Request, res: Response) => {};

//* 기록 조회
const getSupport = async (req: Request, res: Response) => {};

const supportController = {
    getSupport,
    putSupport,
};

export default supportController;