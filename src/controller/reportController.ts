import { Request, Response } from 'express';
import { reportService } from '../service';

//* 기록 생성
const putReport = async (req: Request, res: Response) => {};

//* 기록 조회
const getReport = async (req: Request, res: Response) => {};

const reportController = {
    getReport,
    putReport,
};

export default reportController;