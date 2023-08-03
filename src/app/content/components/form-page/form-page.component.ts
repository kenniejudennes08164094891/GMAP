import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User, UserObject } from '../models/user';
import { UserServiceService } from '../services/user-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent implements OnInit {

  userObject!: UserObject;
  userForm!: FormGroup;


constructor(private router: Router, private route: ActivatedRoute, private service: UserServiceService){}


  SubmitUser(){
    //Validators.pattern('[a-zA-Z0-9]*#+-')
    this.userForm = new FormGroup({
      name: new FormControl("", [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      account: new FormControl("", [Validators.required, Validators.pattern("[0-9]*"), Validators.minLength(10), Validators.maxLength(10)]),
     // age: new FormControl("", [Validators.required, Validators.max(19), Validators.min(13)]),
      gender: new FormControl("")
    })
  }

  submit(){
   if(this.userForm.valid){
    // const newObject = {
    //   firstName: this.userForm.get('name')?.value,
    //   accountNumber: this.userForm.get('account')?.value,
    // }

    this.userObject = this.userForm.value;
    this.service.setUserArray(this.userObject);
   //this.service.setUerObservable(this.userObject);
     this.router.navigate(['/content/dashboard'],{relativeTo: this.route});
   }

  }

  ngOnInit(): void {
      this.userObject = this.service.getUserProfile();
      this.SubmitUser();
      this.userForm.patchValue(this.service.getUserProfile());  //to auto-populate the form on edits
  }


}
