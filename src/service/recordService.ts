import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const getRecord = async () => {};

const putRecord = async () => {};

const getFriendRecord = async () => {};

const recordService = {
    getRecord,
    putRecord,
    getFriendRecord,
};

export default recordService;
