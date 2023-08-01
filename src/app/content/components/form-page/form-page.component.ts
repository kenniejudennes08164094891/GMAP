import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User, UserObject } from '../models/user';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent implements OnInit {

  name: string = "";
  accountNum: string = "";
  gender: string = "";
  userObject!: UserObject;



constructor(private router: Router, private route: ActivatedRoute, private service: UserServiceService){}

  submit(){
      const userObject = {
        name: this.name,
        account: this.accountNum,
        gender: this.gender,
      }
      this.userObject = userObject;
     // this.service.setUserArray(this.userObject);
     this.service.setUerObservable(this.userObject);
      this.router.navigate(['/content/dashboard'],{relativeTo: this.route});

  }

  ngOnInit(): void {
      this.userObject = this.service.getUserProfile();
      console.log("user profile is Gotten>>", this.userObject);
      this.name = this.userObject.name;
      this.accountNum = this.userObject.account;
  }


}
