import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {

  constructor(private router: Router, private route: ActivatedRoute) { }

  public setUserToken(token: string){
    localStorage.setItem('token', token);
  }

  public getUserToken(): string | null{
    return localStorage.getItem('token');
  }

   public userIsLoggedIn(){
    return this.getUserToken() !== null;
  }

  public userIsLoggedInDB({email, password}: any): Observable<any>{
    if(email === 'user@ubagroup.com' && password === 'password'){
      this.setUserToken('token');
      return of(
        {
          name: 'user',
          email: 'user@ubagroup.com',
          message: 'User is loggedIn succesfully!'
        }
      )
    }
    return throwError(new Error ('Invalid user credentials!'));
  }

  public logoutUser(){
    localStorage.clear();
    this.router.navigate(['/login/loginAuthentication'],{relativeTo: this.route});
  }

}


