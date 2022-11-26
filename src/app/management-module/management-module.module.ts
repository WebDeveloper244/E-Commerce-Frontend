import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementModuleRoutingModule } from './management-module-routing.module';
import { ManagementModuleComponent } from './management-module.component';
import { SignInComponent } from './management-component/sign-in/sign-in.component';
import { SignUpComponent } from './management-component/sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ManagementModuleComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    ManagementModuleRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ManagementModuleModule { }
