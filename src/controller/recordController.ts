import { Request, Response } from 'express';
import { recordService } from '../service';

//* 기록 생성
const putRecord = async (req: Request, res: Response) => {
    const { userId, satisfy, color, strength } = req.body;
    
    if(!userId){
        return res.status(404).json({ status: 404, message: "NOT_FOUND" });
    }

    const data = await recordService.putRecord(userId, satisfy, color, strength);

    if(!data){
        return res.status(404).json({ status: 400, message: "기록 생성 실패" });
    }

  return res.status(200).json({ status: 200, message: "기록 생성 성공", data });
};

//* 기록 조회
const getRecord = async (req: Request, res: Response) => {
  const userId = 1;

  const data = await recordService.getRecord(userId);

  return res.status(200).json({ status: 200, message: "기록 조회 성공", data });
};

//* 주간 레포트 조회
const getMyReport = async (req: Request, res: Response) => {
  const userId = 1;

  const data = await recordService.getMyReport(userId);

  if(!data) {
    return res.status(404).json({ status: 404, message: "NOT_FOUND" });
  }

  return res.status(200).json({ status: 200, message: "레포트 조회 성공", data });
};


const recordController = {
    getRecord,
    putRecord,
    getMyReport,
};

export default recordController;
