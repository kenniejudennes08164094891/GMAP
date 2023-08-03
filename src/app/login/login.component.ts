import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Credentials } from './models/credentials';
import { LoginAuthService } from './services/login-auth.service';
import { loginSecurityGuard } from './guards/login-security.guard';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: Credentials = {
    email: "",
    password: ""
  }
  loginForm!: FormGroup
  constructor(
    private router: Router,
    private route: ActivatedRoute,
     private loginAuth: LoginAuthService,
     private loginGuard: loginSecurityGuard,
     private fb: FormBuilder
  ){}

  loginFormSubmit(){
    // this.loginForm = this.fb.group({
    //   email: ['', Validators.required],
    //   password: ['', Validators.required]
    // })

    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required])
    })
  }


  loginUser(){
    console.log("user credentials>>", this.loginForm.value);
    this.user = this.loginForm.value;
    this.loginAuth.userIsLoggedInDB(this.user).subscribe({
      next: (userCredentials: any) => {
        this.loginAuth.setUserToken(userCredentials.email);
        this.router.navigateByUrl("/content/dashboard");
      },
      error: (err: any) => {
        console.error("error from login>>", err);
        confirm(err);
      },
      complete: () => {
        console.info("login Impl!")
      }
    })

  }

  userLogoutBeforeLogin(){
    if(this.loginAuth.userIsLoggedIn() && !this.loginGuard.canActivate == false){
      this.router.navigate(['/content/dashboard'],{relativeTo: this.route});
    }
  }

  ngOnInit(): void {
      this.userLogoutBeforeLogin();
      this.loginFormSubmit();
  }

}
