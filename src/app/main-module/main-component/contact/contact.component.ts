import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, FormControl, Validators } from '@angular/forms';
import {  ToastrService } from 'ngx-toastr';
import { ProductApiService } from 'src/app/shared-service/product-api/product-api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public emailForm: FormGroup | any;

  constructor(
    private readonly FormBuilder:FormBuilder,
    private readonly emailService:ProductApiService,
    private readonly toaster:ToastrService
  ) { 
    this.emailFormInitialization()
  }

  emailFormInitialization(){
    this.emailForm  =  this.FormBuilder.group({
      firstName: new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(35),Validators.pattern(/^[A-Za-z\s]*$/)]),
      email: new FormControl('',[Validators.required,Validators.email]),
      message: new FormControl('',[Validators.required])
    })
  }

  ngOnInit(): void {
  }

  sendForm(){
    const formvalue = this.emailForm.value;
    console.log(formvalue);

    this.emailService.sendEmail(formvalue).subscribe((data:any)=>{
     let result = data.message
     this.toaster.success(result);
     this.emailForm.reset();
    })
    
  }

}



