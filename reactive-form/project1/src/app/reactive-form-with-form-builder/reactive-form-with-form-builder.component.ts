import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-with-form-builder',
  templateUrl: './reactive-form-with-form-builder.component.html',
  styleUrls: ['./reactive-form-with-form-builder.component.css']
})
export class ReactiveFormWithFormBuilderComponent implements OnInit {

  registrationForm!: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.createFormStructure();
  }

  createFormStructure() {

    this.registrationForm = this.fb.group({

      "firstName": ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10), 
        Validators.pattern("[a-zA-Z]{2,10}")]],
      "lastName": ['', [Validators.minLength(2)]],
      "mobileNo": ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      "gender": ['', []],
      "email": ['', []],

      //nested form 
      "address": this.fb.group({
        "line1": ['', []],
        "line2": ['', []],
        "city": ['', []],
        "state": ['', []]
      })

  })

  }

  save() {
    console.log(this.registrationForm.value);
  }
  setMobileNo(){
    this.registrationForm.get("mobileNo")?.setValue(9099090909);
  }
  get firstName() {
    return this.registrationForm.controls['firstName'];
  }

  get lastName() {
    return this.registrationForm.controls['lastName'];
  }
  get mobileNo() {
    return this.registrationForm.controls['mobileNo'];
  }


  getData(){
    let responseObj = {
       "firstName":"Sam",
       "lastName":"Karan",
       "gender":"male",
       "mobileNo":9090909090,
       "email":"test@gmail.com",
       "address":{
        "line1":"Line 1 ",
        "line2": "Line 2 ",
        "city":"Pune",
        "state":"MH"
       }
    }

    this.registrationForm.setValue(responseObj);

  }

  resetData(){
    this.registrationForm.reset();
   }

  patchData(){
    let responseObj = {
      "firstName":"Sam",
      "lastName":"Karan",
   }

   this.registrationForm.patchValue(responseObj);
  
  }
  
 


}
