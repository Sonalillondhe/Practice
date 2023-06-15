import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PassValidator, ageValidator } from '../custom-validator/password-validator';

@Component({
  selector: 'app-customval-prac',
  templateUrl: './customval-prac.component.html',
  styleUrls: ['./customval-prac.component.css']
})
export class CustomvalPracComponent  implements OnInit{

LoginForm!:FormGroup;

  constructor(private fb:FormBuilder){}

  ngOnInit(): void {
    this.FormStucture();
    
// on password change recalcuate the confirm password validations

this.LoginForm.get('Password')?.valueChanges.subscribe((el:any)=>
{
  this.LoginForm.get('Cpassword')?.updateValueAndValidity();
})
  }

  FormStucture(){

this.LoginForm=this.fb.group({

  "FirstName":['',[Validators.required,Validators.pattern("[a-zA-Z]{5,8}"),Validators.minLength(5),Validators.maxLength(8)]],
  "LastName":['',[Validators.required,Validators.pattern("[a-zA-Z]{5,8}"),Validators.minLength(5),Validators.maxLength(8)]],
  "Password":['',[Validators.required]],
  "Cpassword":['',[Validators.required,PassValidator]],
  "Age":['',[Validators.required,ageValidator]]

})

  }

save()
{
 console.log(this.LoginForm.value);
}
get Age(){ 
  return this.LoginForm.controls['Age'];
}
get Password(){ 
  return this.LoginForm.controls['Password'];
}

get Cpassword(){ 
  return this.LoginForm.controls['Cpassword'];
}

}
