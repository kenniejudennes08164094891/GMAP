import { Injectable } from '@angular/core';
import { User, UserObject } from '../models/user';
// Observables
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private $user = new Subject<any>();     //Observables
  user: User[] | any = [];
  userObj!: UserObject
  constructor() { }

  //Observables
  public setUerObservable(user: UserObject){
    this.user.push(user);
    console.log("user observable>>", this.user);
    this.$user.next(this.user);
  }

  public getUserObservable(): Observable<any>{
    return this.$user.asObservable();
  }



  // Angular Js services
  public setUserArray(user: UserObject){
   this.user.push(user);
  }

  public getUserArray(){
    return this.user;
  }

  public setUserProfile(item: UserObject){
    this.userObj = item;
  }

  public getUserProfile(){
    return this.userObj;
  }
}
