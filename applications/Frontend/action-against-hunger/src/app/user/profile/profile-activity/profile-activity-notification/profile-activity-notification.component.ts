import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/service/notification.service';
import { CommentsService } from 'src/app/service/comments.service';
import { UsersService } from 'src/app/service/users.service';
import {Comment} from '../../../../model/comment.model';
import {Notification} from '../../../../model/notification.model';
@Component({
  selector: 'app-profile-activity-notification',
  templateUrl: './profile-activity-notification.component.html',
  styleUrls: ['./profile-activity-notification.component.css']
})
export class ProfileActivityNotificationComponent implements OnInit {
  comments:Comment[] = [];
  private notification:Notification;
  constructor(public notificationServiceL: NotificationService, private usersService: UsersService,
     private commentService:CommentsService) { 
    console.log("Notification page");
  }

  ngOnInit() {
    console.log("Getting notifications (Component)")
    this.usersService.getUserInfo().subscribe(
      user => { 
        // console.log("the username is !!!!!!!!", user.username);
        let userId = user.username;
        this.notificationServiceL.getNotification(userId).subscribe(
          
          notifications => {
            console.log("Get notification successfully");
            console.log("what noti",notifications[0]);
            for (var i = 0; i < notifications.length;i++){
              this.notification = notifications[0];

              this.commentService.getComment(notifications[i].commentId).subscribe(
                comment => {
                  console.log("comment is",comment);
                  this.comments.push(comment);
                },
                err => {
                  console.log("Error from get command",err);
                }

              )
            }
            
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

