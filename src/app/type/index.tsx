export interface IProfile {
    GAME_ALIAS: string;
    HP_NO: string;
    MEM_ID: string;
    MEM_LID: string;
  }
  export interface IDepositProps {
    amount: number;
    deposit_name: string;
    username: string;
    game_id: string;
    comment?: string;
  }
  
  export interface GameRunProps {
    username: string;
    brand_id: number;
    game_id: string;
    mobile: string;
  }
  