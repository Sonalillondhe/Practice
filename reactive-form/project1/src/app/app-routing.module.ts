import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormWithFormBuilderComponent } from './reactive-form-with-form-builder/reactive-form-with-form-builder.component';
import { ProductAssignComponent } from './product-assign/product-assign.component';
import { CustomvalPracComponent } from './customval-prac/customval-prac.component';
import { AssignComponent } from './assign/assign.component';
import { Comp1Component } from './comp1/comp1.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:"home",component:HomeComponent },
  {path:"formwithformbuilder",component:ReactiveFormWithFormBuilderComponent },
  {path:"productAssign",component:ProductAssignComponent},
  {path:"customvAssignment",component: CustomvalPracComponent  },
  {path:"EmailAssignment",component:AssignComponent },
  {path:"ReactiveForm",component: Comp1Component},

  {path:"",redirectTo:"/home",pathMatch:"full"}, // default route
  {path:"**",component:PagenotfoundComponent }, //wildcard-route  HomeComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
