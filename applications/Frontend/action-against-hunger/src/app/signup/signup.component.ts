import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  nickname = ""
  school = ""
  profession = ""
  username = ""
  usertype = "teacher"
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  createUsername(): void {
    console.log("generate username");
    this.username = this.nickname + '_' + this.school;
  }

  signup(form): void {
    console.log("try login", form.value);
    var email = form.value['email']
    var password = form.value['password'];
    var school = form.value['school'];
    var profession = form.value['profession'];
    if (!email || !password || !this.username){
        window.alert("value missing, remember click create my unique username before signup!")
    }else{
      this.authService.signup(email, password, this.username, school,profession)
        .subscribe((res: string) => {
          console.log("get authenticate result:", res)
          if(res["result"] == "success"){
            this.router.navigate(['/']);
          }else{
            window.alert("wrong username or password");
          }
        });
      }
    }

}
