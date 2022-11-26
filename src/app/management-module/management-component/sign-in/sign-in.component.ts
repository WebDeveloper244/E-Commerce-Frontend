import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginRegisterService } from 'src/app/shared-service/register-login-api/login-register.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  LoginForm:any|FormGroup
  hide:boolean=true

  constructor(private formBuilder:FormBuilder,
    private readonly toaster:ToastrService,
    private readonly loginApi:LoginRegisterService,
    private readonly router:Router
    ) { 
    this.Form()
  }

  ngOnInit(): void {
    
  }
  toogle(){
this.hide=!this.hide
  }

  Form(){
    this.LoginForm = this.formBuilder.group({
      email:new FormControl('',[Validators.required,Validators.email]) ,
      password:new FormControl('',[Validators.required]) ,
      // CPassword:['',[Validators.required]]
    })
  }
  SubmitLoginForm(){
let submitFormResult = this.LoginForm.value
this.loginApi.CreateLoginForm(submitFormResult).subscribe((res:any)=>{
  this.toaster.info(res.Message)

// ***************************** 🚗🚗🚗 ***************************//
  this.loginApi.saveLoginTokenToLocalStorage(res.Token);

  if(res.userPrivilage === 'Admin'){
  this.router.navigate(['/Admin-Module'])
  }else{
  }
  // ***************************** 🚗🚗🚗 ***************************//

  this.LoginForm.reset()
  this.LoginForm.password.length = 0
 
}) 
  }

}
