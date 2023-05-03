import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { StudyMaterialService } from '../Services/study-material.service';
import { map } from 'rxjs/operators';
import { User } from '../model/users';

@Component({
  selector: 'app-study-material',
  templateUrl: './study-material.component.html',
  styleUrls: ['./study-material.component.css'],
})
export class StudyMaterialComponent implements OnInit {
  data: any;
  allUsers: User[] = [];
  constructor(private http: HttpClient) {}

  private fetchUsers() {
    this.http
      .get<{ [key: string]: User }>(
        'https://angular-1a465-default-rtdb.firebaseio.com/Users.json'
      )

      // .pipe(
      //   map((res) => {
      //     const users = [];
      //     for (const key in res) {
      //       if (res.hasOwnProperty(key)) {
      //         users.push({ ...res[key], id: key });
      //       }
      //     }
       //   return users;
      //  })
      //)
      .subscribe((users) => {
        console.log(users);
      //  this.allUsers = users;  
      });
  }

  ngOnInit(): void {
    this.fetchUsers();
  }

  onUsersFetch() {
    this.fetchUsers();
  }
}
