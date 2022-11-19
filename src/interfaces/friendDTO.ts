export interface friendDTO {
  today: {
    userId: number;
    satisfy: boolean;
    color: number;
    strength: number;
    support_cnt: number;
    date: Date;
  }
}

export interface friendOnlyDTO{
    name: string;
    isSupported: boolean;
}
  