import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import { friendListDTO } from '../interfaces/friendListDTO';
import { friendOnlyDTO } from '../interfaces/friendDTO';

const getFriend = async (userId: number) => {
    const friendList = await prisma.friend.findMany({
        where: {
            OR: [
                {fir_user: userId,},
                {sec_user: userId,},
            ],
        },
    });
    
    // let returnList: friendOnlyDTO[] = [];

    const returnList = friendList.map(async (friend) => {
        let tempFriend : friendOnlyDTO = {
            name: false,
            isSupported: true
        };
        const first_name = await getName(friend.fir_user);
        const second_name = await getName(friend.sec_user);
        console.log(first_name, second_name)

        if (friend.fir_user == userId ){
            tempFriend.name = second_name;
            if (!getSupport(userId, friend.sec_user)){
                tempFriend.isSupported = false;
            }
        } 
        if (friend.sec_user == userId ) {
            tempFriend.name = first_name;
            if (!getSupport(userId, friend.fir_user)){
                tempFriend.isSupported = false;
            }
        }
        console.log(tempFriend)
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

    return support;
};

const supportService = {
    getFriend,
    getFriendRecord,
    supportFriend,
};

export default supportService;
