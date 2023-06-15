import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {

//to check all input values in console

  save(form:any)
  {
    console.log("Forms values",form);
  }

// //to check which validation is getting failed.

// f1(input:NgModel)
// {
//    console.log(input);
// }


}
