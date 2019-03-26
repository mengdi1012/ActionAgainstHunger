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
  }

  login(): void {
    console.log("try login", this.username);
    this.authService.login(this.username, this.password)
        .subscribe((res: string) => {
          console.log("get authenticate result:", res)
          if(res["result"] == "success"){
            this.gotoPost();
          }else{
            window.alert("wrong username or password");
          }
        });
  }

  gotoPost() {
    const url = "profile";
    this.router.navigate([url]).then( (e) => {
      if (e) {
        console.log("Navigation is successful!");
      } else {
        console.log("Navigation has failed!");
      }
    });
}
}
