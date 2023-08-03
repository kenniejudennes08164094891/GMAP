import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User, UserObject } from './components/models/user';
import { UserServiceService } from './components/services/user-service.service';
import { Subscription, debounceTime } from 'rxjs';
import { LoginAuthService } from '../login/services/login-auth.service';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {


  user: User[] = []
  message: string = "Please enter your full name";
  inputValue: string = "";
  private userArray$!: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: UserServiceService,
    private authService: LoginAuthService
  ){}


  editValues(item: UserObject){
    this.service.setUserProfile(item);
    this.router.navigate(["/content/form"],{relativeTo: this.route});
  }

  getUserDetails(){
   this.user = this.service.getUserArray();
  }

  toFormPage(){
    this.router.navigateByUrl("/content/form");
  }

  getUserObservableArray(){
    //

    this.userArray$ = this.service.getUserObservable().pipe(debounceTime(2)).subscribe({
      next: (elem: any) => {
        this.user = elem;
        console.log("values User Array from observable>>", this.user);
      },
      error: (err: any) => {
        console.error("error from Observable>>", err);
      },
      complete: () => {
        console.info("Angular Observable Implementation");
      }
    })
  }

  ngOnInit(): void {
   this.getUserDetails();
   //this.getUserObservableArray();
  }

  routeToProfile(item: UserObject){
    this.service.setUserProfile(item);
    this.router.navigate(["/content/profile"],{relativeTo: this.route});
  }

  deleteValue(item: UserObject){
    this.user.forEach((row: any, index: any) => {
      if(item === row){
        this.user.splice(index, 1);
      }
    })
  }


  logout(){
    this.authService.logoutUser();
  }

}
