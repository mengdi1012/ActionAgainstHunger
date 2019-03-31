import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from "@angular/router";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  missing_value = false
  constructor(private authService: AuthService, private router: Router){
    console.log("Creating Login Component");
  }
  ngOnInit() {
    this.logout();
  }

  login(form): void {
  console.log("try login", form.value);
  var username = form.value['username'];
  var password = form.value['password'];
  if (!username || !password){
      this.missing_value = true
  }else{
    this.missing_value = false
    this.authService.login(username, password)
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
    const url = "globalpost";
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
