import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent {

  Product: Productdata = new Productdata();

  TotalPrice() {
    this.Product.TPrice = (this.Product.PQuantity) * (this.Product.Pprice);
    console.log(this.Product.TPrice);
  }


  save(){
    console.log("form value",this.Product);
  }
  reset() {
    this.Product = new Productdata();
  }
  getData() {
    let obj =
    {
      PCategory: "Electical",
      PName: "laptop",
      PQuantity: 4,
      Pprice: 50000,
      TPrice: 200000,
    }
    this.Product = obj;
  }

}

export class Productdata {
  PCategory!: string;
  PName!: string;
  PQuantity!: number;
  Pprice!: number;
  TPrice!: number;
}