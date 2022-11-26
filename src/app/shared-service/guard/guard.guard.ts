import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginRegisterService } from '../register-login-api/login-register.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  constructor(
    private readonly Router:Router,
    private readonly loginsService:LoginRegisterService
  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.loginsService.ifUserLogin()){
        return true
      }else{
        this.Router.navigate(['/Management-Module/sign-in'])
        return false
      }
  }
  
}
