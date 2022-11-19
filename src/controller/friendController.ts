import { Request, Response } from 'express';
import { friendService } from '../service';


//* 친구 목록 조회
const getFriend = async (req: Request, res: Response) => {
    const data = await friendService.getFriend(1);

    if (!data){
        return res.status(400).json({ status: 400, message: "친구 목록 조회에 실패하였습니다."});
    }

    return res.status(200).json({ status: 200, message: "친구 목록 조회 성공", data });
};

//* 친구 기록 조회
const getFriendRecord = async (req: Request, res: Response) => {
    const {friendId} = req.params
    const data = await friendService.getFriendRecord(+friendId);

    if (!data){
        return res.status(400).json({ status: 400, message: "친구 기록 조회에 실패하였습니다."});
    }

    return res.status(200).json({ status: 200, message: "친구 기록 조회 성공", data });
};

//* 응원 생성
const supportFriend = async (req: Request, res: Response) => {
    const userId = 1;
    const {friendId} = req.body;
    const data = await friendService.supportFriend(userId, friendId);

    if (!data){
        return res.status(400).json({ status: 400, message: "친구 응원에 실패하였습니다."});
    }

    return res.status(200).json({ status: 200, message: "친구 응원 성공", data });
};

const friendController = {
    getFriend,
    getFriendRecord,
    supportFriend
};

export default friendController;