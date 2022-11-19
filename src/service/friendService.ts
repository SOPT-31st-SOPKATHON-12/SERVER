import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import { friendOnlyDTO } from '../interfaces/friendDTO';

const getFriend = async (userId: number) => {
    const friendList = await prisma.friend.findMany({
        where: {
            OR: [
            {fir_user: userId,},
            {sec_user: userId,},            
            ]
       },
       include: {
        User: {
            select: {
                name: true
            }
        }
       }
    });


    const returnList = friendList.map((friend) => {
        let tempFriend : friendOnlyDTO = {
            name: false,
            isSupported: true
        };
        tempFriend.name = friend.User.name;
        if (!getSupport(userId, friend.sec_user)){
            tempFriend.isSupported = false;
        }

        return tempFriend;
    })

    return returnList;
};

const getFriendRecord = async (friendId: number) => {
    
    const friendRecord = await prisma.record.findFirst({
        where: {
            user: friendId,
        },
    });

    return friendRecord;
    // if (friendRecord?.date)
};


const getName = async (friendId: number) => {
    const user = await prisma.user.findUnique({
        where:{
            userId: friendId
        },
    });
    if (!user) return false;
    return user.name

}

const getSupport = async (userId: number, friendId: number) => {
    const support = await prisma.support.findFirst({
        where: {
            supporter: userId,
            supported: friendId,
        },
    });
    return support
};

const supportFriend = async (userId: number, friendId: number, recordId:number) => {
    const support = await prisma.support.create({
        data: {
            supporter: userId,
            supported: friendId,
            recordId: recordId,
        },
    });
    const liked = await prisma.support.findMany({
        where: {
            recordId: recordId,
        }
    });

    const liked_cnt = liked.length

    const support_cnt = await prisma.record.update({
        where: {
            recordId: recordId,
        },
        data: {
            support_cnt: liked_cnt,
        }
    })
    
    return support;
};

const supportService = {
    getFriend,
    getFriendRecord,
    supportFriend,
};

export default supportService;