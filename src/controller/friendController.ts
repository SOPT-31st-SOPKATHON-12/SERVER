import { Request, Response } from 'express';
import { friendService } from '../service';


//* 친구 목록 조회
const getFriend = async (req: Request, res: Response) => {};

//* 친구 기록 조회
const getFriendRecord = async (req: Request, res: Response) => {};

//* 응원 생성
const supportFriend = async (req: Request, res: Response) => {};

const friendController = {
    getFriend,
    getFriendRecord,
    supportFriend
};

export default friendController;