import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { AssignComponent } from './assign/assign.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormWithFormBuilderComponent } from './reactive-form-with-form-builder/reactive-form-with-form-builder.component';
import { CustomvalPracComponent } from './customval-prac/customval-prac.component';
import { ProductAssignComponent } from './product-assign/product-assign.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
    AssignComponent,
    ReactiveFormWithFormBuilderComponent,
    CustomvalPracComponent,
    ProductAssignComponent,
    HomeComponent,
    PagenotfoundComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
