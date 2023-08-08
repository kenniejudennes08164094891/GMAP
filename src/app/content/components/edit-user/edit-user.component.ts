import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User, UserObject } from '../models/user';
import { UserServiceService } from '../services/user-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  userObject!: UserObject;
  userForm!: FormGroup;
  id: number = 0;


constructor(private router: Router, private route: ActivatedRoute, private service: UserServiceService){}


SubmitUser(){
  //Validators.pattern('[a-zA-Z0-9]*#+-')
  this.userForm = new FormGroup({
    id: new FormControl(0),
    name: new FormControl("", [Validators.required, Validators.pattern('[a-zA-Z]*')]),
    account: new FormControl("", [Validators.required, Validators.pattern("[0-9]*"), Validators.minLength(10), Validators.maxLength(10)]),
   // age: new FormControl("", [Validators.required, Validators.max(19), Validators.min(13)]),
    gender: new FormControl("")
  })
}

submit(){
  this.userObject = this.userForm.value;
  const newObj = {
    id: this.userForm.get('id')?.value,
    name: this.userForm.get('name')?.value,
    account: this.userForm.get('account')?.value,
    gender: this.userForm.get('gender')?.value
  }
  console.log("new value>>", newObj);
  this.service.editUserDetails(this.userObject).subscribe({
    next: (res: any) => {
      console.log("response from edits>>", res);
      this.router.navigate(['/content/dashboard'],{relativeTo: this.route})
    },
    error: (err: any) => {
      console.error("error from API>>", err);
    },
    complete: () => {
      console.info("Edit User details!")
    }
  })
}

ngOnInit(): void {
  this.userObject = this.service.getUserProfile();
    this.SubmitUser();
    this.userForm.patchValue(this.service.getUserProfile());  //to auto-populate the form on edits
}
}
