import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginAuthService } from 'src/app/login/services/login-auth.service';

@Injectable({
  providedIn: 'root'
})

export class familyGuard implements CanActivate {
  constructor( private auth: LoginAuthService){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
    if(!this.auth.userIsLoggedIn()){
      this.auth.logoutUser();
      console.info(route, state);
      return false;
    }
    return true;
  }

}
