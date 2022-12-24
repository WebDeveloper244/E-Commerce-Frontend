import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }
  saveDataToLocalStorage(data:any){
    localStorage.setItem('cart',JSON.stringify(data))
  }
  getDataToLocalStorage(){
    return JSON.parse(localStorage.getItem('cart')||'null')
  }
}
