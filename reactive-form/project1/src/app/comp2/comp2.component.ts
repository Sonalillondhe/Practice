import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit{

SignupForm!:FormGroup;

  constructor(private fb:FormBuilder){
  }

  ngOnInit(): void {
    this.FormStructure();
  }

  FormStructure(){
this.SignupForm=this.fb.group({

"FirstName":['',[Validators.required,Validators.minLength(5),Validators.maxLength(8)]],
"LastName":['',[Validators.required,Validators.minLength(5),Validators.maxLength(8)]],
"mobNo":['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
"email":['',[Validators.required]],
"password":['',[Validators.minLength(5),Validators.maxLength(8)]],
"age":[''],

})

  }
 setdata(){
    let obj={
"FirstName": "sonali",
"LastName": "londhe",
"mobNo":9975549883,
"email":"test@gmail.com",
"password" :"sonali@1234",
"age":25,

    }

this.SignupForm.setValue(obj);

  }
  resetdata(){
    this.SignupForm.reset();
  }
  patchData(){
    let resobj={
      "FirstName": "komal",
       "LastName": "londhe",
       "age":23,
    }
this.SignupForm.patchValue(resobj);
  }

  save(){
    console.log(this.SignupForm.value);
  }
  get FirstName(){
    return this.SignupForm.controls['FirstName']; 
   }

  get LastName(){
    return this.SignupForm.controls['LastName'];;
  }
  get mobileNo(){
    return this.SignupForm.controls['mobNo'];;
  }
  

  }

