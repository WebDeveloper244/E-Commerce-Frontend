import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './main-component/about/about.component';
import { ContactComponent } from './main-component/contact/contact.component';
import { HomeComponent } from './main-component/home/home.component';
import { ProductComponent } from './main-component/product/product.component';
import { ViewProductComponent } from './main-component/view-product/view-product.component';
import { MainModuleComponent } from './main-module.component';

const routes: Routes = [
  { path: '', component: MainModuleComponent ,children:[
    {
    path:"",
    component:HomeComponent
  },
   { path:"home",
    component:HomeComponent
  },
  {
    path:"about",
    component:AboutComponent
  },
  {
    path:"product",
    component:ProductComponent
  },
  {
    path:"View-Product/:Id",
    component:ViewProductComponent
  },
  {
    path:"contact",
    component:ContactComponent
  },
  
  ] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainModuleRoutingModule { }
