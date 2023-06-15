import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-template-drivenwith-model',
  templateUrl: './template-drivenwith-model.component.html',
  styleUrls: ['./template-drivenwith-model.component.css']
})
export class TemplateDrivenwithModelComponent implements OnInit {
  
  States:string[] = [];
  cities:string[] = ["Please Select"] ;

  ngOnInit(): void {
    this.States = Object.keys(this.stateObj);
  }

  signUpForm:SignUp = new SignUp();

  stateObj:any = {
    "Maharashtra":["Pune","Mumbai","Nashik"],
    "Mp":["Indore","Bhopal"],
    "Up":["Agra","Ayodya"]
  }
  getCities(){
    console.log(this.signUpForm.state);
    this.cities = this.stateObj[this.signUpForm.state];
  }
  

  save(){
    console.log("form value",this.signUpForm);
  }

  getData(){
    let obj = {
      "firstName":"Mike",
      "lastName":"H",
      "mobileNo":9090909907,
      "emailAddress":"test@gmail.com",
      "password":"welcome123"
    }

   // this.signUpForm = obj;
  }
  
}

export class SignUp{
  firstName!:string;
  lastName!:string;
  mobileNo!:number;
  emailAddress!:string;
  password!:string;
  state!:string;
  city!:string
}
