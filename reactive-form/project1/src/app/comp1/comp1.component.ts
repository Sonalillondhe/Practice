import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  signUpForm !: FormGroup
  constructor() {
  }

  ngOnInit(): void {
    this.createRegistrationForm();
  }

  createRegistrationForm() {

    this.signUpForm = new FormGroup({
      
      "firstName": new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(6), Validators.pattern("[a-zA-Z]{2,6}")]),
      "lastName": new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(6), Validators.pattern("[a-zA-Z]{2,6}")]),
      "mobileNo": new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      "email": new FormControl('', []),
      "gender": new FormControl('', []),

       //nested form 
       "address":new FormGroup({
        "line1":new FormControl('',[Validators.required]),
        "line2":new FormControl('',[]),
        "city":new FormControl('',[]),
        "state":new FormControl('',[]),
      })
    })
  }

  save() {
    console.log("form data", this.signUpForm.value);
  }

  get firstName() {
    return this.signUpForm.controls['firstName'];
  }

  get lastName() {
    return this.signUpForm.controls['lastName'];
  }
  get mobileNo() {
    return this.signUpForm.controls['mobileNo'];
  }
}
