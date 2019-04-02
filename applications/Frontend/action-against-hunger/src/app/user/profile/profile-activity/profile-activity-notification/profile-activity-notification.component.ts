import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/service/notification.service';
import { CommentsService } from 'src/app/service/comments.service';
import { UsersService } from 'src/app/service/users.service';
import {Comment} from '../../../../model/comment.model';
import {Notification} from '../../../../model/notification.model';
import { Router } from "@angular/router";

@Component({
  selector: 'app-profile-activity-notification',
  templateUrl: './profile-activity-notification.component.html',
  styleUrls: ['./profile-activity-notification.component.css']
})
export class ProfileActivityNotificationComponent implements OnInit {
  comments:Comment[] = [];
  notificationIdList:string[] = [];
  notificationViewList:boolean[]=[];
  private notification:Notification;
  constructor(public notificationServiceL: NotificationService, private usersService: UsersService,
     private commentService:CommentsService, private router:Router) { 
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
            for (var i = 0; i < notifications.length;i++){
              console.log("!!!",notifications[i]);
              this.notificationIdList.push(notifications[i].notifId);
              this.notificationViewList.push(notifications[i].newNotif);
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

  checkAndRedirect(postId:string, index:number){
    console.log("QQQ>>>Q",this.notificationIdList);
    console.log("checkandredirect",postId, index,this.notificationIdList[index]);

    this.notificationServiceL.updateNotification(this.notificationIdList[index]).subscribe(
      req => {
          if(req["result"] == "success"){
            this.router.navigate(["/homepage/postdetail/"+ postId])
          }
        },
        err => {
          console.log("Error from update notification"+ err)
        }

    );
  }
}


