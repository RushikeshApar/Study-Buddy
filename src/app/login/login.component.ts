import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray,Validators ,FormBuilder} from '@angular/forms';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
 
  alertWithSuccess(){
    Swal.fire("Thank You...",'You Submitted Successfully','success')
  }
 
 
  ngOnInit(): void { }
  
 
  loginForm = new FormGroup({
    FirstName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.pattern('[a-zA-Z].*'),
    ]),

    LastName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.pattern('[a-zA-Z].*'),
    ]),

    Email: new FormControl('', [Validators.required, Validators.email]),

    Mobile: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]*'),
      Validators.minLength(10),
      Validators.maxLength(10),
    ]),

    Collage: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.pattern('[a-zA-Z].*'),
    ]),

    Year: new FormControl('', [Validators.required, Validators.minLength(1)]),

    Branch: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.pattern('[a-zA-Z].*'),
    ]),

    Gender: new FormControl('', Validators.required),
  });
   
  constructor(private http: HttpClient) { 

  }


  onSubmit(field:{fn:string, ls:string, e:string, m:number, cl:string, y:number, b:string }) {

    console.log(field);

    this.http.post<{name:string}>('https://users-logins-default-rtdb.firebaseio.com/Users.json',field).subscribe((res)=>{

    console.log(res);
    
    });
    
    //alert("Submitted Successfully")
   
    console.log(this.loginForm.valid);
     console.log(this.loginForm.controls);
 
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    }
  }



  


  get FirstName(): FormControl {
    return this.loginForm.get('FirstName') as FormControl;
  }
  get LastName(): FormControl {
    return this.loginForm.get('LastName') as FormControl;
  }
  get Email(): FormControl {
    return this.loginForm.get('Email') as FormControl;
  }
  get Mobile(): FormControl {
    return this.loginForm.get('Mobile') as FormControl;
  }
  get Collage(): FormControl {
    return this.loginForm.get('Collage') as FormControl;
  }
  get Year(): FormControl {
    return this.loginForm.get('Year') as FormControl;
  }
  get Branch(): FormControl {
    return this.loginForm.get('Branch') as FormControl;
  }
  get Gender(): FormControl {
    return this.loginForm.get('Gender') as FormControl;
  }
}
