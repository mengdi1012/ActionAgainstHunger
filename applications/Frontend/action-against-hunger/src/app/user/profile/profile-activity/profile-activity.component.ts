import {Component, OnInit} from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { User } from '../../../model/user.model';
import {Router} from '@angular/router';
import { UsersService } from '../../../service/users.service';
import { NotificationService } from 'src/app/service/notification.service';


@Component({
  selector: 'app-profile-activity',
  templateUrl: './profile-activity.component.html',
  styleUrls: ['./profile-activity.component.css']
})
export class ProfileActivityComponent implements OnInit {
  isTeacher = false;
  user: User;
  private userName:string;
  notifNum = 0 ;

  constructor(private authService: AuthService, private router: Router, 
    private userService: UsersService, private notificationServiceL:NotificationService) {
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
        this.userName=user.username;
        this.getNotificationNum(this.userName);
        if(user["username"] != ""){
          console.log("get user detail, ", user)
          this.isTeacher = this.user.usertype == "teacher";
        }else{
          window.alert("not valid session");
        }          
      
      });
  }
  getNotificationNum(userName:string):void{
    console.log("try get notification number");
    this.notificationServiceL.getNotification(userName).subscribe(
      
      notifications => {
        console.log("try get notification",notifications);
        for (var i = 0; i < notifications.length;i++){
          console.log("enter in for");
          if (notifications[i].newNotif){
            this.notifNum = this.notifNum +1;
          }
        }
        console.log("#####:",this.notifNum);
        
      },
      err => {
        console.log("Error from get notification", err);
      }
    )

  }
}