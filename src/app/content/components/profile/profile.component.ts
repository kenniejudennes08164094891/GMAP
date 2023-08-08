import { Component, OnInit} from '@angular/core';
import { UserObject } from '../models/user';
import { UserServiceService } from '../services/user-service.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: UserObject = {
    id: 0,
    name: "",
    account: "",
    gender: ""
  }
  id: any;

  constructor(private service: UserServiceService, private router: Router, private route: ActivatedRoute){}


  getParams(){
    this.id = this.route?.snapshot?.paramMap.get('id');
   // var params =this.route?.snapshot?.params?.['id']
   }

  getUserByID(){
    this.service.getUserByID(this.id).subscribe({
      next: (res: any) => {
        console.log("res from fetchByID>>", res);
        this.user = res;
      },
      error: (err: any) => {
        console.error("error from fetchByID API>>", err);
      },
      complete: () => {
        console.info("Get By ID Implementation!")
      }
    })
  }



  ngOnInit(): void {
    console.log("routes>>", this.route);
    this.getParams();
    this.getUserByID()
   // this.user = this.service.getUserProfile();
  //  console.log("user>>", this.user)
  }

  routeBack(){
    this.router.navigate(["/content/dashboard"]);
  }




}
