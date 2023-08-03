//import { loginSecurityGuard } from './login-security.guard';
import { Injectable } from '@angular/core';
import {  CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute, Router, UrlTree } from '@angular/router';
import { LoginAuthService } from '../services/login-auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class loginSecurityGuard implements CanActivate {
  constructor(private auth: LoginAuthService, private router: Router, private route: ActivatedRoute){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
    if(!this.auth.userIsLoggedIn()){
      this.router.navigate(["/login/loginAuthentication"],{relativeTo: this.route});
      this.auth.logoutUser();
      return false
    }
    console.info(route,state);
    return this.auth.userIsLoggedIn();
  }
}
