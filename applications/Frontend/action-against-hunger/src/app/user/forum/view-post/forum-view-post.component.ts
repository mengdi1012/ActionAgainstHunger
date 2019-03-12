import { Component, ElementRef, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../../../model/post.model';
import { Comment  } from '../../../model/comment.model';
import { ActivatedRoute, Router } from '@angular/router';
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
  private classroomId: string;
  private postId: string;

  @ViewChild('contentInput') contentRef: ElementRef;
  
  createComment(){
    const content = this.contentRef.nativeElement.value;
    var postTitle = this.post.postTitle;
    this.commentService.createComment(null, this.postId, "Admin", content, Date.now().toString(), postTitle);
    
  }

  constructor(public commentService: CommentsService, public postService: PostsService, private activatedRoute: ActivatedRoute, private router: Router){
    this.activatedRoute.params.subscribe( params => {
      this.classroomId = params["classId"];
      this.postId = params["topicId"];
    });
  }

  ngOnInit(){
    
    this.postService.getPostById(this.postId);
      this.postSub = this.postService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        posts.forEach(eachPost=>{
          this.post = eachPost;
        });
      });
      this.commentService.getCommentsFromPost(this.postId);
      this.commentsSub = this.commentService.getCommentUpdateListener()
      .subscribe((comments: Comment[]) => {
        console.log(comments);
        this.comments = comments;
      });
  }

  ngOnDestroy() {
    this.postSub.unsubscribe();
    this.commentsSub.unsubscribe();
  }

}
