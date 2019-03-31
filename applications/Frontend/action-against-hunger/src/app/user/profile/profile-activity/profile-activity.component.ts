import {Component, OnInit} from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { User } from '../../../model/user.model';
import {Router} from '@angular/router';
import { UsersService } from '../../../service/users.service';


@Component({
  selector: 'app-profile-activity',
  templateUrl: './profile-activity.component.html',
  styleUrls: ['./profile-activity.component.css']
})
export class ProfileActivityComponent implements OnInit {
  isTeacher = false;
  user: User;


  constructor(private authService: AuthService, private router: Router, private userService: UsersService) {
    console.log('Creating activity Component');
  }
  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    console.log("try get user info");
    this.userService.getUserInfo()
      .subscribe(user => {
        this.user = user
        console.log("get response:", user)
        if(user["username"] != ""){
          console.log("get user detail, ", user)
          this.isTeacher = this.user.usertype == "teacher";
        }else{
          window.alert("not valid session");
        }          
      
      });
  }
  goReset() {
    console.log("go to reset")
    const url = '/update_pw';
    console.log(url)
    this.router.navigate([url]).then((e) => {
      if (e) {
        console.log('Navigation is successful!');
      } else {
        console.log('Navigation has failed!');
      }
    });
  }
}