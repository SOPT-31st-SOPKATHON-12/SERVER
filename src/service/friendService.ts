import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const getFriend = async () => {};

const getFriendRecord = async () => {};

const supportFriend = async () => {};


const supportService = {
    getFriend,
    getFriendRecord,
    supportFriend,
};

export default supportService;
