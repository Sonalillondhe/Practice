import { Component } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component {

  calculateAge()
  {  
    if (this.signUpForm.dateOfBirth) {
      var timeDiff = Math.abs(Date.now() - new Date(this.signUpForm.dateOfBirth).getTime());
      this.signUpForm.age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
      console.log(this.signUpForm.age);
    } 
  }
  
  signUpForm:SignUp = new SignUp();

  save(){
    console.log("form value",this.signUpForm);
  }
  reset() {
    this.signUpForm = new SignUp();
  }

  getData()
  {
    let obj = {
      "firstName":"Mike",
      "lastName":"H",
      "mobileNo":9090909907,
      "emailAddress":"test@gmail.com",
      "password":"welcome123",
      "dateOfBirth":"12/7/1997",
      "age":15,
      
    }
   this.signUpForm = obj;
  }
}

export class SignUp
{
  firstName!:string;
  lastName!:string;
  mobileNo!:number;
  emailAddress!:string;
  password!:string;
  dateOfBirth!:string ;
  age!:number
}