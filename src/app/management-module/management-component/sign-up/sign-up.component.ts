import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LoginRegisterService } from 'src/app/shared-service/register-login-api/login-register.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  public userRegisterForm:FormGroup|any
  public hide:boolean=true
  

 constructor(private readonly formBuilder:FormBuilder,
    private readonly registerApi:LoginRegisterService ,
    private readonly toaster:ToastrService
   ) { 
   
 }

 ngOnInit(): void {
   this.buildForm()
 }
 toogle(){
   this.hide=!this.hide
 }

 buildForm(){
   this.userRegisterForm = this.formBuilder.group({
     firstName: new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(35),Validators.pattern(/^[A-Za-z\s]*$/)]),
     lastName:new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(35),Validators.pattern(/^[A-Za-z\s]*$/)]),
     email:new FormControl('',[Validators.required,Validators.email]),
     // number:['',[Validators.required,Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
     password:new FormControl('',[Validators.required]),
     // CPassword:['',[Validators.required]]
   })
 }
 SubmitRegisterUserForm(){
   
   let resultOfForm = this.userRegisterForm.value
   // console.log(resultOfForm);
   

this.registerApi.CreateUserform(resultOfForm).subscribe((res:any)=>{
 this.toaster.info(res.Message)
this.userRegisterForm.reset()
// this.userRegisterForm.password.length = 0
})
 }

}
