import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PassValidator } from '../custom-validator/password-validator';
import { EmailValidator } from '../custom-validator/Email-Validator';

@Component({
  selector: 'app-assign',
  templateUrl: './assign.component.html',
  styleUrls: ['./assign.component.css']
})
export class AssignComponent implements OnInit{

  LoginForm!:FormGroup;
  
    constructor(private fb:FormBuilder){}
  
    ngOnInit(): void {
      this.FormStucture();
    }
  
    FormStucture(){

  this.LoginForm=this.fb.group({
  
    "FirstName":['',[Validators.required,Validators.pattern("[a-zA-Z]{3,8}"),Validators.minLength(3),Validators.maxLength(8)]],
    "LastName":['',[Validators.required,Validators.pattern("[a-zA-Z]{3,8}"),Validators.minLength(3),Validators.maxLength(8)]],
    "Email":['',[Validators.required,EmailValidator]],
    "checkgmail":['',[Validators.required,EmailValidator]],
  
  })
  
    }
  
  save()
  {
   console.log(this.LoginForm.value);
  }
  
  get Email(){ 
    return this.LoginForm.controls['Email'];
  }
  
  get checkgmail(){ 
    return this.LoginForm.controls['checkgmail'];
  }
  
  }
  {

}
