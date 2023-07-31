import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(
    private router: Router, private route: ActivatedRoute
  ){}
  message: string = "login works okay!"


  routeToDashboard(){
    // this.router.navigate(['/content/dashboard'], {relativeTo: this.route});
    this.router.navigateByUrl("/content/dashboard")
  }
}
