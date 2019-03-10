import { Component, OnInit, OnDestroy } from '@angular/core';
import { Comment } from '../../../../model/comment.model';
import { ActivatedRoute } from '@angular/router';
import { CommentsService } from "../../../../service/comments.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile-activity-comments',
  templateUrl: './profile-activity-comments.component.html',
  styleUrls: ['./profile-activity-comments.component.css']
})
export class ProfileActivityCommentsComponent implements OnInit, OnDestroy{
  comments: Comment[] = [];
  private commentsSub: Subscription;

  constructor(public commentService: CommentsService, private activatedRoute: ActivatedRoute){}

  ngOnInit(){
    this.commentService.getUserComments("1");
    this.commentsSub = this.commentService.getCommentUpdateListener()
      .subscribe((comments: Comment[]) => {
        this.comments = comments;
      });
  }

  ngOnDestroy() {
    this.commentsSub.unsubscribe();
  }
}
