import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainModuleRoutingModule } from './main-module-routing.module';
import { MainModuleComponent } from './main-module.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { HeaderComponent } from './main-component/header/header.component';
import { AboutComponent } from './main-component/about/about.component';
import { ContactComponent } from './main-component/contact/contact.component';
import { CheckOutComponent } from './main-component/check-out/check-out.component';
import { EditCartComponent } from './main-component/edit-cart/edit-cart.component';
import { PurchasedFailedComponent } from './main-component/purchased-failed/purchased-failed.component';
import { PurchasedSuccessfulComponent } from './main-component/purchased-successful/purchased-successful.component';
import { ProductComponent } from './main-component/product/product.component';
import { FooterComponent } from './main-component/footer/footer.component';
import { WildCartComponent } from './main-component/wild-cart/wild-cart.component';
import { ViewProductComponent } from './main-component/view-product/view-product.component';
import { HomeComponent } from './main-component/home/home.component';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    MainModuleComponent,
    MainComponentComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    CheckOutComponent,
    EditCartComponent,
    PurchasedFailedComponent,
    PurchasedSuccessfulComponent,
    ProductComponent,
    FooterComponent,
    WildCartComponent,
    ViewProductComponent,
   
  ],
  imports: [
    CommonModule,
    MainModuleRoutingModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class MainModuleModule { }
