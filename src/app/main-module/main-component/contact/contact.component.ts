import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, FormControl } from '@angular/forms';
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
    private readonly emailService:ProductApiService
  ) { 
    this.emailFormInitialization()
  }

  emailFormInitialization(){
    this.emailForm  =  this.FormBuilder.group({
      firstName:new FormControl(''),
      email: new FormControl(''),
      message: new FormControl('')
    })
  }

  ngOnInit(): void {
  }

  sendForm(){
    const formvalue = this.emailForm.value;
    console.log(formvalue);

    this.emailService.sendEmail(formvalue).subscribe((data:any)=>{
     let result = data.message
     console.log(result);
     
      
    })
    
  }

}



