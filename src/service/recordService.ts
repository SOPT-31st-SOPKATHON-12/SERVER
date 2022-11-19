import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const getRecord = async (userId:number) => {
    const today = new Date().toDateString();
    const recordList = await prisma.Record.findMany({
        where: {
            user: userId,
        },
    });
    
    const data = recordList.reduce((acc,cur)=>{
        const date = cur.date.toDateString();
        
        if(date === today){
            return [...acc, cur];
        }
        
        return acc;
    },[]);

  return data;
};

const putRecord = async () => {};

const getMyReport = async () => {};

const recordService = {
    getRecord,
    putRecord,
    getMyReport,
};

export default recordService;
