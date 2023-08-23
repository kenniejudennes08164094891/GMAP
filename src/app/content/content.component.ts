import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User, UserObject } from './components/models/user';
import { UserServiceService } from './components/services/user-service.service';
import { Subscription, debounceTime } from 'rxjs';
import { LoginAuthService } from '../login/services/login-auth.service';

//import { GoogleChartComponent } from 'angular-google-charts';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit, OnDestroy {

  //const navigate = useNavigate()

  user: User[] = []
  message: string = "Please enter your full name";
  inputValue: string = "";
  private userArray$!: Subscription;
  private userEmitter$!: Subscription;
  showParagraph1Info: boolean = false;
  showParagraph2Info: boolean = false;
  emptyArray: [] | any = ["a", "b", "c", "d"];
  isActive:boolean = false;
  userArray: []|any = [
    {
      id: 1,
      name: "Faruk",
      status: "Active"
    },
    {
      id: 2,
      name: "Justin",
      status: "Active"
    },
    {
      id: 3,
      name: "Faruk",
      status: "Pending"
    },
    {
      id: 4,
      name: "Justin",
      status: "Pending"
    },
    {
      id: 5,
      name: "Williams",
      status: "Active"
    },
    {
      id: 6,
      name: "Willaims",
      status: "Pending"
    },
    {
      id: 7,
      name: "Anonumous",
      status: "Rejected"
    }
  ]

  //Google pie-chart

  title = 'googlechart';
  type: any = 'PieChart';
  data = [
     ['Name1', 5.0],
     ['Name2', 36.8],
     ['Name3', 42.8],
     ['Name4', 18.5],
     ['Name5', 16.2]
  ];
 columnNames: any = ['Name', 'Percentage'];
 options = {   colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'], is3D: true};
  width = 700;
  height = 500;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: UserServiceService,
    private authService: LoginAuthService
  ){}


  editValues(item: UserObject){
  this.service.setUserProfile(item);
  this.router.navigate(["/content/editUser"],{relativeTo: this.route});
  }

  getUserDetails(){
   this.user = this.service.getUserArray();
  }


  toFormPage(){
    this.router.navigateByUrl("/content/form");
  }

  getUserEmitted(){
    this.userEmitter$ = this.service.emitUser$.subscribe({
      next: (res: any) => {
        this.user.push(res);
        console.log("user array>>", this.user);
      }
    })
  }


  showParagraph1(){
    this.showParagraph1Info = true;
    this.showParagraph2Info = false;
  }

  showParagraph2(){
    this.showParagraph1Info = false;
    this.showParagraph2Info = true;
  }



  getUserObservableArray(){
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

  getUserFromAPI(){
    this.service.getUserDetails().subscribe({
      next: (res: any) => {
        console.log("response from GET request>>", res);
        this.user = res;
      },
      error: (err: any) => {
        console.error("error from API>>", err)
      },
      complete: () => {
        console.info("Fetch API request!")
      }
    })
  }

  ngOnInit(): void {
  // this.getUserDetails();
   //this.getUserObservableArray();
   //this.getUserEmitted();
   this.getUserFromAPI();
  }

  ngOnDestroy(): void {
     // this.userArray$.unsubscribe();
  //   this.userEmitter$.unsubscribe();

  }

  paginate(){
    this.router.navigateByUrl("/content/pagination");
  }

  routeToProfile(item: UserObject, id: number){
    this.service.setUserProfile(item);
    this.router.navigate([`/content/profile/${id+1}`],{relativeTo: this.route});
   // this.router.navigateByUrl(`/content/profile/${id+1}`)
  }

  deleteValue(item: UserObject){
    // this.user.forEach((row: any, index: any) => {
    //   if(item === row){
    //     this.user.splice(index, 1);
    //   }
    // })
    this.service.deleteUser(item?.id).subscribe({
      next: (res: any) => {
      this.ngOnInit();
        console.log("delete response from API>>", res);
      },
      error: (err: any) => {
        console.error("error from delete API>>", err);
      },
      complete: () => {
      console.info("User Deleted!");
      }
    })
  }


  logout(){
    this.authService.logoutUser();
  }


  toggleButtonColor(){
this.isActive = !this.isActive;

  }




}
