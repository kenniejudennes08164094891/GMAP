import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {

  message: string = "Please enter your full name";
  inputValue: string = "";
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ){}


  routeToFormPage(){
    console.log("ngmodel value2>>", this.inputValue);
    this.router.navigate(["/content/form"],{relativeTo: this.route});
  }

  routeToProfile(){
    this.router.navigate(["/content/profile"],{relativeTo: this.route});
  }

  
  logout(){
    this.router.navigate(["/content/dashboard"],{relativeTo: this.route});
  }

}
