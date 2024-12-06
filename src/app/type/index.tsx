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

  export interface IChangePhoneProps {
    current_mobile: string;
    mobile: string;
  }

  export interface IChangePasswordProps {
    brand_id: number,
    username: string,
    current_password:string,
    password: string;
  }

  export interface IGetInfo {
    username: string,
    brand_id: number,
  }

  