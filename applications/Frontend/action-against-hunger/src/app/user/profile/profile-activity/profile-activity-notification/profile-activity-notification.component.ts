import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/service/notification.service';
import { UsersService } from 'src/app/service/users.service';
import {Comment} from '../../../../model/comment.model';
@Component({
  selector: 'app-profile-activity-notification',
  templateUrl: './profile-activity-notification.component.html',
  styleUrls: ['./profile-activity-notification.component.css']
})
export class ProfileActivityNotificationComponent implements OnInit {
  comments:Comment[];
  constructor(public notificationServiceL: NotificationService, private usersService: UsersService) { 
    console.log("Notification page");
  }

  ngOnInit() {
    console.log("Getting notifications (Component)")
    this.usersService.getUserInfo().subscribe(
      user => { 
        let userId = user.username;
        this.notificationServiceL.getNotification(userId).subscribe(
          
          comments => {
            console.log("Get notification successfully");
            this.comments = comments;
          },
          err => {
            console.log("Error from get notification", err);
          }
        )
      },
      err => {
        console.log("Error from get userservice"+ err)
      }
    ); 
    
  }

}

