import { Component, OnInit } from '@angular/core';
import { User } from '../../../model/user.model';
import { UsersService } from '../../../service/users.service';


@Component({
  selector: 'app-profile-overview',
  templateUrl: './profile-overview.component.html',
  styleUrls: ['./profile-overview.component.css']
})
export class ProfileOverviewComponent implements OnInit {
    username ="";
    usertype = "";
    school = "";
    user: User;

  constructor(private userService: UsersService){ 

  }
  ngOnInit() {
    this.getUser();
  }
  getUser(): void {
    console.log("try get user info");
    this.userService.getUserInfo()
      .subscribe(user => {
        this.user = user;
        this.usertype=user.usertype;
        this.username=user.username;
        this.school=user.school;
        console.log("get response:", user)
          console.log("get username:", this.username)
        if(user["username"] != ""){
          console.log("get user detail, ", user)
        }else{
          window.alert("not valid session");
        }          
      });
  }
}
