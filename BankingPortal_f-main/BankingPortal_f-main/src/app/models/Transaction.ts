
import { Account } from "./Account";

export class Transaction {
    id: number;
    amount: number;
    transaction_type: string;
    sourceAccount: Account;
    targetAccount: Account;
  
    constructor(){
      this.id = 0;
      this.amount = 0;
      this.transaction_type = " ";
      this.sourceAccount = {} as Account;
      this.targetAccount = {} as Account;	
    }
  }