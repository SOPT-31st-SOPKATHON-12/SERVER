import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const getFriend = async (userId: number) => {
    const friendList = await prisma.friend.findMany({
        where: {
            OR: [
                {fir_user: userId,},
                {sec_user: userId,},
            ],
        },
    });

    return friendList;
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

const supportFriend = async (userId: number, friendId: number) => {
    const support = await prisma.support.create({
        data: {
            supporter: userId,
            supported: friendId,
        },
    });
    return support;
};

const supportService = {
    getFriend,
    getFriendRecord,
    supportFriend,
};

export default supportService;
