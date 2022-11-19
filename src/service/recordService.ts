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

const putRecord = async (userId:number, satisfy:number, color:number, strength:number) => {
    const record = await prisma.Record.create({
        data:{
            user: userId,
            satisfy,
            color,
            strength,
            support_cnt:0,
            date: new Date(),
        }
    });

    return record;
};

const getMyReport = async (userId: number) => {
    const today = new Date();

    const recordList = await prisma.Record.findMany({
        where: {
            user: userId,
        },
    });

    const recentRecord = recordList.reduce((acc,cur)=>{
        const date = cur.date;
        
        if((today.getDate() - date.getDate()) < 7){
            return [...acc, cur];
        }
        
        return acc;
    },[]);

    const satisfy = [0,0];
    const strength = [0,0,0];
    const color = [0,0,0,0,0];

    recentRecord.forEach((el)=>{
        el.satisfy ? satisfy[0] += 1 : satisfy[1] += 1;
        strength[el.strength-1] += 1;
        color[el.color-1] += 1;
    })

    const data = {
        recordCnt: recentRecord.length,
        satisfy,
        strength,
        color
    }
    return data; 
};

const recordService =  {
    getRecord,
    putRecord,
    getMyReport,
};

export default recordService;
