import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-assign',
  templateUrl: './product-assign.component.html',
  styleUrls: ['./product-assign.component.css']
})
export class ProductAssignComponent implements OnInit{

  productForm!:FormGroup;

  ProductCategory:string[]=[];
  PNameArr:string[]=["please select"];
  TPrice!: number;

  constructor(private fb:FormBuilder){

  }
  ngOnInit(): void {
    this.FormStructure();

    this.productForm.get('PQuantity')?.valueChanges.subscribe(()=>{
      
        // console.log("product Quantity",this.productForm.get('PQuantity')?.value); 
        this.TPrice=(this.productForm.get('Pprice')?.value * this.productForm.get('PQuantity')?.value);
        
    })
    
    this.productForm.get('Pprice')?.valueChanges.subscribe(()=>{
      console.log("product Price",this.productForm.get('Pprice')?.value);

      this.TPrice=(this.productForm.get('Pprice')?.value * this.productForm.get('PQuantity')?.value);
    
   })


  }

  FormStructure(){
    this.productForm= this.fb.group({

      "PCategory":[''],
      "PName":['',[Validators.minLength(5),Validators.maxLength(8),Validators.required,Validators.pattern("[A-ZA-z]{5,8}")]],
      "PQuantity":['',[Validators.pattern("[0-9]")]],
      "Pprice":['',[Validators.pattern("[0-9]")]],
      "TPrice":['',[Validators.pattern("[0-9]")],],
      
    })

  }
  ProuctObj:any = {
    "Electonics":["Mobile","Laptop","charger"],
    "Sports":["Cricket bat","Ball"]
  }
  save(){
    console.log(this.productForm.value);
  }
  reset(){
    this.productForm.reset();
  }
  getData(){

    let obj={
      PCategory: "Electical",
      PName: "laptop",
      PQuantity: 4,
      Pprice: 50000,
      TPrice: 200000
    }
    this.productForm.setValue(obj);
  }

}
