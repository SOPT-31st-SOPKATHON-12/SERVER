import { Request, Response } from 'express';
import { recordService } from '../service';

//* 기록 생성
const putRecord = async (req: Request, res: Response) => {};

//* 기록 조회
const getRecord = async (req: Request, res: Response) => {};

const getFriendRecord = async (req: Request, res: Response) => {};


const recordController = {
    getRecord,
    putRecord,
    getFriendRecord,
};

export default recordController;
