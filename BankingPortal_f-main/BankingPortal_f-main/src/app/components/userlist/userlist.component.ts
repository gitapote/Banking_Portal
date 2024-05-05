import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Account } from 'src/app/models/Account';
import { User } from 'src/app/models/User';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  // private delayTime = 3000; // Delay time in milliseconds
  userList: any[] = [];
//public user: Observable<Account[]> = of([]);
  
  constructor(private service: ApiService, private router: Router){ }

  ngOnInit(){
    this.getAll();

  }

  getAll(): void {
   
    this.service.getAllUser().subscribe(
      (data) => {
        this.userList = data; 
        console.log(this.userList);
     },
      (error) => {
        console.error('Error fetching User', error);
      }
    );
  }
 

}
