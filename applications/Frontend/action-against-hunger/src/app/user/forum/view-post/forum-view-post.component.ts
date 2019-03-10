import { Component, ElementRef, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../../../model/post.model';
import { Comment  } from '../../../model/comment.model';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from "../../../service/posts.service";
import { CommentsService } from "../../../service/comments.service";
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-forum-view-post',
  templateUrl: './forum-view-post.component.html',
  styleUrls: ['./forum-view-post.component.css']
})
export class ForumViewPostComponent implements OnInit, OnDestroy{
  post: Post;
  private postSub: Subscription;
  comments: Comment[] = [];
  private commentsSub: Subscription;

  @ViewChild('contentInput') contentRef: ElementRef;
  
  createComment(){
    const content = this.contentRef.nativeElement.value;
    console.log("Content: " + content);
  }

  constructor(public commentService: CommentsService, public postService: PostsService, private activatedRoute: ActivatedRoute){}

  ngOnInit(){
    this.commentService.getCommentsFromPost("1");
    this.postService.getPostById("1")
    this.commentsSub = this.commentService.getCommentUpdateListener()
      .subscribe((comments: Comment[]) => {
        this.comments = comments;
      });
      this.postSub = this.postService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        posts.forEach(eachPost=>
          this.post = eachPost
        );});
  }

  ngOnDestroy() {
    this.commentsSub.unsubscribe();
  }

}
