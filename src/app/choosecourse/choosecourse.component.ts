import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-choosecourse',
  templateUrl: './choosecourse.component.html',
  styleUrls: ['./choosecourse.component.css'],
})
export class ChoosecourseComponent implements OnInit {

  constructor(private http:HttpClient) {}

    private field(){
    this.http.get('https://angular-1a465-default-rtdb.firebaseio.com/Users.json')
    .subscribe((res)=>{
      console.log(res);
      
    })
}



  ngOnInit():any  {
    this.field();
  }

  onFetchProduct(){

  }
}
 