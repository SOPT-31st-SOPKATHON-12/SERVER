export interface getRecordDTO{
  today: Record;
  recent: Record;
}

interface Record {
  userId : number;
  satisfy: boolean;
  color: number;
  strength: number;
  support_cnt: number;
  date: Date;
}