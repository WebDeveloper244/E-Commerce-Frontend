import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginRegisterService {

  constructor(
    private readonly http:HttpClient
  ) { }
  CreateUserform(Payload:any){
    return this.http.post('http://localhost:5050/UsermanagementRouter/userRegister',Payload)
  }
  CreateLoginForm(Payload:any){
    return this.http.post('http://localhost:5050/UsermanagementRouter/userLogin',Payload)
  }
  saveLoginTokenToLocalStorage(Payload:any){
   return  localStorage.setItem('Access-Token',Payload)
  }
  ifUserLogin(){
    return localStorage.getItem('Access-Token') !== null;
  }
}
