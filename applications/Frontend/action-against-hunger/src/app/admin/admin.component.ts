import { Component, OnInit } from '@angular/core';
import { EmailService } from '../service/email.service';
import { UsersService } from '../service/users.service';
import { User } from '../model/user.model';
import { Router } from "@angular/router";


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  email = "";
  usertype = "teacher";


user: User;

constructor(private emailService: EmailService, private userService: UsersService,  private router: Router) { }

ngOnInit() {
  this.getUser();
}

getUser(): void {
  console.log("try get user info");
  this.userService.getUserInfo()
    .subscribe(user => {
      console.log("get response:", user)
      if(user["username"] != ""){
        this.user = user;
        console.log("get user detail, ", user)
      }else{
        this.router.navigate(["/"]).then( (e) => {
          if (e) {
            console.log("Navigation to login is successful!");
          } else {
            console.log("Navigation to login has failed!");
          }
        });
      }          
    });
}

  sendInvitation(): void {
    if(!this.email){
      window.alert("missing email")
    }else{
      console.log("email is:", this.email);
      this.emailService.sendInivationEmail(this.email, this.usertype)
      .subscribe((res: string) => {
        console.log("sending invitation email result:", res)
        if(res["result"] == "success"){
          window.alert("success");
        }else{
          window.alert("something wrong, please try again");
        }
      });
    }
}
}
