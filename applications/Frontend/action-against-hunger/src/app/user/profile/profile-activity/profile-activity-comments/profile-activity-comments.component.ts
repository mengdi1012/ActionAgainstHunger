import { Component, OnInit, OnDestroy } from '@angular/core';
import { Comment } from '../../../../model/comment.model';
import { ActivatedRoute } from '@angular/router';
import { CommentsService } from "../../../../service/comments.service";
import { Subscription } from 'rxjs';
import { AuthService } from '../../../../service/auth.service';

@Component({
  selector: 'app-profile-activity-comments',
  templateUrl: './profile-activity-comments.component.html',
  styleUrls: ['./profile-activity-comments.component.css']
})
export class ProfileActivityCommentsComponent implements OnInit, OnDestroy{
  comments: Comment[] = [];
  private commentsSub: Subscription;

  constructor(public commentService: CommentsService, private activatedRoute: ActivatedRoute, private authService: AuthService){}

  ngOnInit(){
    var userID = this.authService.getUserID();
    // this.commentService.getUserComments(userID.toString());
    // this.commentsSub = this.commentService.getCommentUpdateListener()
    //   .subscribe((comments: Comment[]) => {
    //     console.log(comments);
    //     this.comments = comments;
    //   });
  }

  ngOnDestroy() {
    this.commentsSub.unsubscribe();
  }
}
