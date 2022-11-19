import { Request, Response } from 'express';
import { recordService } from '../service';

//* 기록 생성
const putRecord = async (req: Request, res: Response) => {};

//* 기록 조회
const getRecord = async (req: Request, res: Response) => {
  const { userId } = req.params;
  
  if (!userId) {
    return res.status(404).json({ status: 400, message: "NOT_FOUND" });
  }

  const data = await recordService.getRecord(+userId);

  return res.status(200).json({ status: 200, message: "기록 조회 성공", data });
};

//* 주간 레포트 조회
const getMyReport = async (req: Request, res: Response) => {};


const recordController = {
    getRecord,
    putRecord,
    getMyReport,
};

export default recordController;
