import { User } from "./User";

export class Account{
    id: number;
    accountNumber: string;
    balance: number;
    account_type: string;
    branch: string;
    IFSC_code: string;
    Pin: string;
    accountstatus: string;
    user: User;
  
    constructor(){
      this.id = 0;
      this.accountNumber = " ";
      this.balance = 0;
      this.account_type = " ";
      this.branch = " ";
      this.IFSC_code = " ";
      this.Pin = " ";
      this.accountstatus = " ";
      this.user = {} as User;
    } 

}