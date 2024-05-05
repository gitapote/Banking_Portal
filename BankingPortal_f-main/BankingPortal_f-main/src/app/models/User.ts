import { Account } from "./Account";

export class User {
    id: number;
    name: string;
    password: string;
    email: string;
    address: string;
    phone_number: string;
    otpRetryCount: number;
    accountlist: Account[];
  
    constructor(){
      this.id = 0;
      this.name = " ";
      this.password = " ";
      this.email = " ";
      this.address = " ";
      this.phone_number = " ";
      this.otpRetryCount = 0;
      this.accountlist = [];
    }
  }