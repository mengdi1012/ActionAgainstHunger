import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from "@angular/router";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = "";
  password = "";

  constructor(private authService: AuthService, private router: Router){
    console.log("Creating Login Component");
  }
  ngOnInit() {
    this.logout();
  }

  login(): void {
  console.log("try login", this.username);
  this.authService.login(this.username, this.password)
    .subscribe((res: string) => {
      console.log("get authenticate result:", res)
      if(res["result"] == "success"){
        if(res["usertype"] == "admin"){
          this.gotoAdmin();
        }else{
          this.gotoPost();
        }
      }else{
        window.alert("wrong username or password");
      }
    });
  }

  gotoAdmin() {
    const url = "admin";
    this.router.navigate([url]).then( (e) => {
      if (e) {
        console.log("Navigation to admin is successful!");
      } else {
        console.log("Navigation to admin has failed!");
      }
    });
}

  gotoPost() {
    const url = "profile";
    this.router.navigate([url]).then( (e) => {
      if (e) {
        console.log("Navigation to post is successful!");
      } else {
        console.log("Navigation to posthas failed!");
      }
    });
  }

  logout(): void {
    console.log("try clean session");
    this.authService.logout()
      .subscribe((res: string) => {
        console.log("clean session result:", res)
      });
    }
}
